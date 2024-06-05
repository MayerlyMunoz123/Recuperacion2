import { Test, TestingModule } from '@nestjs/testing';
import { Usuario1Controller } from './usuario1.controller';

describe('Usuario1Controller', () => {
  let controller: Usuario1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Usuario1Controller],
    }).compile();

    controller = module.get<Usuario1Controller>(Usuario1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
