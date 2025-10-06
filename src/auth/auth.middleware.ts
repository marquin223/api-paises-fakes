import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    if (token !== 'meuTokenSecreto123') {
      return res.status(403).json({ message: 'Token inválido' });
    }

    next();
  }
}
