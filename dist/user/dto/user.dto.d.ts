declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export declare class UserDto {
    readonly first_name: string;
    readonly email: string;
    readonly last_name: string;
    readonly password: string;
    readonly phone: string;
    readonly gender: Gender;
}
export {};
