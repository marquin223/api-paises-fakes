import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PaisesService } from './paises.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  create(@Body() data: any) {
    return this.paisesService.create(data);
  }

  @Get()
  findAll() {
    return this.paisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.paisesService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paisesService.remove(Number(id));
  }
}
