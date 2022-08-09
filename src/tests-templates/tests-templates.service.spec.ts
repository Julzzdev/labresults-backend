import { Test, TestingModule } from '@nestjs/testing';
import { TestsTemplatesService } from './tests-templates.service';

describe('TestsTemplatesService', () => {
  let service: TestsTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestsTemplatesService],
    }).compile();

    service = module.get<TestsTemplatesService>(TestsTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
