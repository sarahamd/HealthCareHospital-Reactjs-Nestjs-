import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './role.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,
    private jwtService: JwtService,

  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
   let Header =context.switchToHttp().getRequest().header('x')
   let data = this.jwtService.verify(Header);
   for (const role of requiredRoles) {
    if (
      (role === 'admin' && data.user.isAdmin) ||
      (role === 'user' && data.user.isUser)
    ) {
      return true;
    }
  }
  return false;
}

  }
