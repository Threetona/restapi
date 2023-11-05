import { Test, TestingModule } from '@nestjs/testing';
import { Submenu2Service } from './submenu2.service';

describe('Submenu2Service', () => {
  let service: Submenu2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Submenu2Service],
    }).compile();

    service = module.get<Submenu2Service>(Submenu2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
