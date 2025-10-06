import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  Query,
} from '@nestjs/common';
import { PaisesService } from './paises.service';
import { CreatePaisDto } from 'src/core/paises/dto/create-pais.dto';
import { QueryFilterDto } from 'src/core/paises/dto/query-filter.dto';
import { Pais } from './interfaces/pais.interface';
import { UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '../response/response.interceptor';
import { UseFilters } from '@nestjs/common';
import { CustomExceptionFilter } from '../custom-exception/custom-exception.filter';

@Controller('paises')
@UseFilters(CustomExceptionFilter)
@UseInterceptors(ResponseInterceptor)
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() body: CreatePaisDto) {
    const pais: Pais = { id: Date.now().toString(), ...body };
    return this.paisesService.create(body);
  }

  @Get()
  findAll(@Query() query: QueryFilterDto) {
    return this.paisesService.findAll(query.filter, query.page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paisesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Pais>) {
    return this.paisesService.update(id, body);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() body: Partial<Pais>) {
    return this.paisesService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.paisesService.remove(id);
  }
}
