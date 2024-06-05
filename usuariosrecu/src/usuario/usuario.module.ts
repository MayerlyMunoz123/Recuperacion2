import { Module } from '@nestjs/common';
import { Usuario1Controller } from './usuario1.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [Usuario1Controller],
  providers: [UsuarioService]
})
export class UsuarioModule {}
