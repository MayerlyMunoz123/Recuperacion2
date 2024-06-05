import { Injectable } from '@nestjs/common';
import { Usuarios } from './usuarios/usuarios.interface';
@Injectable()
export class UsuarioService {
  private usuarios: Usuarios[] = [
    {
      id: 1,
      name: 'Mayerly',
      cedula: 1725796898,
    },
    {
      id: 2,
      name: 'Cris',
      cedula: 1725803959,
    },
  ];

  getAll(): Usuarios[] {
    return this.usuarios;
  }

  getName(name: string): Usuarios {
    return this.usuarios.find((item: Usuarios) => item.name === name);
  }

  insert(body: any) {
    this.usuarios = [
      ...this.usuarios,
      {
        id: this.lastId() + 1,
        name: body.name,
        cedula: body.cedula,
      },
    ];
  }

  updateByName(name: string, body: any) {
    this.usuarios = this.usuarios.map((item: Usuarios) => {
      if (item.name === name) {
        return {
          ...item,
          name: body.name || item.name,
          cedula: body.cedula || item.cedula,
        };
      }
      return item;
    });
  }

  delete(id: number) {
    this.usuarios = this.usuarios.filter((item: Usuarios) => item.id != id);
  }

  private lastId(): number {
    return this.usuarios[this.usuarios.length - 1].id;
  }
}
