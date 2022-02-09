import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import ReviewModel from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>): Promise<Omit<ReviewModel, '_id'>> {
		return dto;
	}
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
		return;
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string): Promise<void> {
		return;
	}
}
