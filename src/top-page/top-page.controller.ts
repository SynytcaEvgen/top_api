import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import FindTopPage from './dto/find-top-page.dto';
import TopPageModel from './top-page.model';

@Controller('top-page')
export class TopPageController {
	@Post('create')
	async create(@Body() dto: Omit<TopPageModel, '_id'>): Promise<Omit<TopPageModel, '_id'>> {
		return dto;
	}

	@Get(':id')
	async get(@Param('id') id: string): Promise<Omit<TopPageModel, '_id'>> {
		return;
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
		return;
	}

	@Patch(':id')
	async update(@Param('id') id: string, @Body() dto: TopPageModel): Promise<void> {
		return;
	}
	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindTopPage): Promise<TopPageModel> {
		return;
	}
}
