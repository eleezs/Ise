import { ForbiddenException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/users.service';

dotenv.config();
@Injectable()
export class AuthService {

  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.userService.findOneByEmail(username);
    if (!user) return null;

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) return null;

    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user) {
    const user_details = await this.userService.findOneByEmail(user.email);
    if(!user_details) throw new ForbiddenException('Credential incorrect')
  
    const valid_password = this.comparePassword(user.password, user_details.password);
    if(!valid_password) throw new ForbiddenException('Credential incorrect')
    if(user_details.user_status !== 'active') throw new ForbiddenException('User is not active')
  
    const { password, ...result } = user_details['dataValues'];
    const token = await this.generateToken({ user_id: result.id, role: result.role, email: result.email });
    return { result, token };
  }

  public async signup(user) {
    // hash the password
    const pass = await this.hashPassword(user.password);

    // create the user
    const newUser = await this.userService.create({ ...user, password: pass });

    const { password, ...result } = newUser['dataValues'];

    // generate token
    const token = await this.generateToken(result);

    // return the user and the token
    return { user: result, token };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user, {
      expiresIn: process.env.TOKEN_EXPIRATION,
      secret: process.env.JWTKEY
    });
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }

}