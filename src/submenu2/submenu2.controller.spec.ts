import { Test, TestingModule } from '@nestjs/testing';
import { Submenu2Controller } from './submenu2.controller';
import { Submenu2Service } from './submenu2.service';

describe('Submenu2Controller', () => {
  let controller: Submenu2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Submenu2Controller],
      providers: [Submenu2Service],
    }).compile();

    controller = module.get<Submenu2Controller>(Submenu2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
