import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // pega roles definidas em rota/classe
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) return true; // nada exigido → libera

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) return false;

    // user.role é string (ex: 'ADMIN') — verifica inclusão
    return requiredRoles.some((role) => user.role === role);
  }
}
