import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleSolutionController } from './schedule-solution.controller';

describe('ScheduleSolutionController', () => {
  let controller: ScheduleSolutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleSolutionController],
    }).compile();

    controller = module.get<ScheduleSolutionController>(ScheduleSolutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
