import { Test, TestingModule } from '@nestjs/testing';
import { Submenu3Service } from './submenu3.service';

describe('Submenu3Service', () => {
  let service: Submenu3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Submenu3Service],
    }).compile();

    service = module.get<Submenu3Service>(Submenu3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
