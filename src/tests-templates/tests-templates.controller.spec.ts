import { Test, TestingModule } from '@nestjs/testing';
import { TestsTemplatesController } from './tests-templates.controller';

describe('TestsTemplatesController', () => {
  let controller: TestsTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestsTemplatesController],
    }).compile();

    controller = module.get<TestsTemplatesController>(TestsTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
