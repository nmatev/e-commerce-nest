import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UserControler {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(
        @Body('username') username: string,
        @Body('password') password: string,
        @Body('email') email: string,
    ): Promise<User> {
        return this.userService.createUser(username, password, email);
    }
}