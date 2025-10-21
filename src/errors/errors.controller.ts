import {
  Controller,
  Get,
  Param,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CustomException } from './custom-exception';

@Controller('errors')
export class ErrorsController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id !== '1') {
      throw new NotFoundException('Recurso não encontrado');
    }
    return { id, message: 'Recurso encontrado' };
  }

  @Get('bad-request')
  badRequest() {
    throw new BadRequestException('Requisição inválida');
  }

  @Get('forbidden')
  forbidden() {
    throw new ForbiddenException('Acesso proibido');
  }

  @Get('http-exception-simple')
  throwHttpExceptionSimple() {
    throw new HttpException('Acesso proibido', HttpStatus.FORBIDDEN);
  }

  @Get('custom-error')
  throwCustomError() {
    throw new CustomException();
  }
}
