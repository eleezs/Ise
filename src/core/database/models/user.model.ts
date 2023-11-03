import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    phone: string;

    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;

    @Column({
        type: DataType.ENUM,
        values: ['active', 'suspended', 'deactivated', 'blocked'],
        allowNull: false,
        defaultValue: 'active'
    })
    user_status: string;

    @Column({
        type: DataType.ENUM,
        values: ['admin', 'student', 'tutor'],
        allowNull: false,
    })
    role: string;
}