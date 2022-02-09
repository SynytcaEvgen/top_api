import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import AuthDto from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	@Post('sign-up')
	async signUp(@Body() dto: AuthDto): Promise<void> {
		return;
	}

	@Post('login')
	@HttpCode(200)
	async login(@Body() dto: AuthDto): Promise<void> {
		return;
	}
}
