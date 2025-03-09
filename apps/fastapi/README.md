# FastAPI Scheduler Optimization Service

A lightweight FastAPI service that optimizes course schedules based on given constraints.

## Overview

This service provides an optimization endpoint that takes scheduling data and returns an optimized schedule using the OR-Tools library. The service is designed to work with a NestJS backend that supplies the necessary data and consumes the optimization results.

## Setup

### Prerequisites

- Python 3.8+
- Docker and Docker Compose (optional)

### Installation

1. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

### Running the Service

#### Without Docker

```bash
uvicorn main:app --reload --port 8000
```

#### With Docker

```bash
docker-compose up
```

## API Endpoints

### Optimize Schedule

```
POST /api/optimize-schedule
```

Takes scheduling data and returns an optimized schedule.

**Request Body:**
```json
{
  "scheduler_data": {
    "J": 2,
    "G": 2,
    "I": 2,
    "K": 25,
    "S": 1,
    "STP": 1,
    "courses": ["Mathematics", "Physics"],
    "groups": ["G1", "G2"],
    "professors": ["Dr. Smith", "Prof. Johnson"],
    "Pcm": [[2, 0], [0, 2]],
    "Ptp": [[1, 0], [0, 0]],
    "Ptd": [[0, 0], [0, 1]],
    "Ccm": [[[0, 0]], [[1, 1]]],
    "Ctp": [[[0, 0]], []],
    "Ctd": [[], [[1, 1]]],
    "Dik": [
      [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "A": [[0, 1]]
  }
}
```

**Response:**
```json
{
  "status": "Optimal",
  "schedule": [
    {
      "time_slot": "Monday 8:00-9:30",
      "sessions": [
        {
          "group": "G1",
          "course": "Mathematics",
          "type": "CM",
          "professor": "Dr. Smith"
        }
      ]
    }
  ],
  "statistics": {
    "objective_value": 0.0,
    "wall_time": 0.123,
    "iterations": 42,
    "nodes": 7,
    "status": "Optimal"
  }
}
```

### Health Check

```
GET /health
```

Returns a simple health status for monitoring.

**Response:**
```json
{
  "status": "healthy"
}
```

## Integration with NestJS

To integrate this service with your NestJS backend:

1. Create a service in your NestJS app that:
   - Formats data for the scheduler
   - Makes HTTP requests to this FastAPI service
   - Processes and saves the results

2. Sample NestJS code for integration:

```typescript
// In your NestJS scheduler.service.ts
import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SchedulerService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async optimizeSchedule(weekId: number): Promise<any> {
    // 1. Gather all necessary data
    const schedulerData = await this.prepareSchedulerData(weekId);
    
    // 2. Send to FastAPI service
    const fastApiUrl = this.configService.get('FASTAPI_URL');
    const response = await this.httpService.post(
      `${fastApiUrl}/api/optimize-schedule`,
      { scheduler_data: schedulerData }
    ).toPromise();
    
    // 3. Save the optimized schedule
    await this.saveSchedule(weekId, response.data);
    
    return response.data;
  }

  private async prepareSchedulerData(weekId: number): Promise<any> {
    // Fetch and format data from your database
    // Return in the format expected by the scheduler
  }

  private async saveSchedule(weekId: number, schedule: any): Promise<void> {
    // Save the optimized schedule to your database
  }
}
```

## License

[Your license information]