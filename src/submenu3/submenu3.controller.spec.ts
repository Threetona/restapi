import { Test, TestingModule } from '@nestjs/testing';
import { Submenu3Controller } from './submenu3.controller';
import { Submenu3Service } from './submenu3.service';

describe('Submenu3Controller', () => {
  let controller: Submenu3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Submenu3Controller],
      providers: [Submenu3Service],
    }).compile();

    controller = module.get<Submenu3Controller>(Submenu3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
