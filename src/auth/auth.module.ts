import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProductController } from './product/product.controller';

@Module({
  controllers: [AuthController, ProductController]
})
export class AuthModule {}
