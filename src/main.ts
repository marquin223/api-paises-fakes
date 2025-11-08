import 'class-transformer';
import 'class-validator';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './errors/http-exception/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Países - Documentação Swagger')
    .setDescription('Documentação automática da API (Auth, Países, etc.)')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // ✅ Aplica o filtro global de exceções personalizadas
  app.useGlobalFilters(new HttpExceptionFilter());

  // ✅ Aplica validação automática dos DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não esperadas
      forbidNonWhitelisted: true, // Lança erro se vier algo fora do DTO
      transform: true, // Converte tipos automaticamente
    }),
  );

  await app.listen(3000);
  console.log('🚀 Servidor rodando em http://localhost:3000');
}

bootstrap();
