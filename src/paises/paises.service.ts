import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PaisesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PaisCreateInput) {
    return this.prisma.pais.create({ data });
  }

  findAll() {
    return this.prisma.pais.findMany();
  }

  findOne(id: number) {
    return this.prisma.pais.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.PaisUpdateInput) {
    return this.prisma.pais.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.pais.delete({ where: { id } });
  }
}
