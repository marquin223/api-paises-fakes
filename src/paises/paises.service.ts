import { Injectable, NotFoundException } from '@nestjs/common';
import { Pais } from './interfaces/pais.interface';
import { CreatePaisDto } from 'src/core/paises/dto/create-pais.dto';
@Injectable()
export class PaisesService {
  private paises: Pais[] = [];

  create(createPaisDto: CreatePaisDto): Pais {
    const novoPais: Pais = { id: Date.now().toString(), ...createPaisDto };
    this.paises.push(novoPais);
    return novoPais;
  }

  findAll(filter?: string, page?: number): Pais[] {
    let resultado = this.paises;

    if (filter) {
      resultado = resultado.filter((p) =>
        p.nome.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    if (page && page > 0) {
      const pageSize = 10;
      resultado = resultado.slice((page - 1) * pageSize, page * pageSize);
    }

    return resultado;
  }

  findOne(id: string): Pais {
    const pais = this.paises.find((p) => p.id === id);
    if (!pais) throw new NotFoundException('País não encontrado');
    return pais;
  }

  update(id: string, data: Partial<Pais>): Pais {
    const pais = this.findOne(id);
    Object.assign(pais, data);
    return pais;
  }

  remove(id: string): void {
    const index = this.paises.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('País não encontrado');
    this.paises.splice(index, 1);
  }
}
