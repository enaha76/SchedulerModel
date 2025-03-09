import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleSolutionService } from './schedule-solution.service';

describe('ScheduleSolutionService', () => {
  let service: ScheduleSolutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleSolutionService],
    }).compile();

    service = module.get<ScheduleSolutionService>(ScheduleSolutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
