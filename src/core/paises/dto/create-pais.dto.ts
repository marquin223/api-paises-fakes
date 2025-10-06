import { IsString, IsInt } from 'class-validator';

export class CreatePaisDto {
  @IsString({ message: 'nome deve ser uma string válida.' })
  nome: string;

  @IsString({ message: 'continente deve ser uma string válida.' })
  continente: string;

  @IsInt({ message: 'populacao deve ser um número.' })
  populacao: number;

  @IsString({ message: 'idioma deve ser uma string válida.' })
  idioma: string;

  @IsString({ message: 'curiosidade deve ser uma string válida.' })
  curiosidade: string;
}
