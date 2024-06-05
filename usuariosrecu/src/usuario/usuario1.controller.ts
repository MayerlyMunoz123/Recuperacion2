import { Body, Controller, Post,Get, Param, Put, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuarios } from './usuarios/usuarios.interface';

@Controller('/usuario')
export class Usuario1Controller {
    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    getAllProducts(): any {
      const usuarios: Usuarios[] = this.usuarioService.getAll();
      const usuariosData = usuarios.map(usuario => ({
        id: usuario.id,
        name: usuario.name,
        cedula: usuario.cedula,
      }));
      return {
        message: 'Estos son los usuarios:',
        usuarios: usuariosData,
      };
    }
@Post()//insertar información
@HttpCode(HttpStatus.CREATED)
createProduct(@Body() usuarios) {
  this.usuarioService.insert(usuarios);
  const newId = this.usuarioService.getAll().length;{
    return `Se creó el producto con ID ${newId}`}
}

@Get(':name')
getProductById(@Param('name') name: string) {
  const usuario = this.usuarioService.getName(name);
  return {
    message: `Usuario con ID ${name} encontrado`,
    usuario,
  };
}
@Put(':name')
updateProduct(@Param('name') name: string, @Body() body: any) {
  this.usuarioService.updateByName(name, body);
  return {
    message: `Usuario actualizado con nombre ${name}`,
  };
}
@Patch(":id")//actualizacion parcial 
ActualizacionParcial(@Param("id")id:number,@Body()body):any{
    return `Se ha actualizado parcialmente el ${id}`
}
@Delete(':id')//Eliminar y traer la lista actualizada 
@HttpCode(HttpStatus.OK)
deleteProduct(@Param('id') id: number) {
  this.usuarioService.delete(id);
  const usuarios = this.usuarioService.getAll();
  return {
    message: `Usuario eliminado con ID ${id}`,
    usuarios: usuarios
  };
}

}



