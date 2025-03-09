import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { WeeklyTeachingLoadController } from "../weeklyTeachingLoad.controller";
import { WeeklyTeachingLoadService } from "../weeklyTeachingLoad.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  hoursRequired: 42,
  id: 42,
  teachingType: "exampleTeachingType",
};
const CREATE_RESULT = {
  hoursRequired: 42,
  id: 42,
  teachingType: "exampleTeachingType",
};
const FIND_MANY_RESULT = [
  {
    hoursRequired: 42,
    id: 42,
    teachingType: "exampleTeachingType",
  },
];
const FIND_ONE_RESULT = {
  hoursRequired: 42,
  id: 42,
  teachingType: "exampleTeachingType",
};

const service = {
  createWeeklyTeachingLoad() {
    return CREATE_RESULT;
  },
  weeklyTeachingLoads: () => FIND_MANY_RESULT,
  weeklyTeachingLoad: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("WeeklyTeachingLoad", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WeeklyTeachingLoadService,
          useValue: service,
        },
      ],
      controllers: [WeeklyTeachingLoadController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /weeklyTeachingLoads", async () => {
    await request(app.getHttpServer())
      .post("/weeklyTeachingLoads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /weeklyTeachingLoads", async () => {
    await request(app.getHttpServer())
      .get("/weeklyTeachingLoads")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /weeklyTeachingLoads/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/weeklyTeachingLoads"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /weeklyTeachingLoads/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/weeklyTeachingLoads"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /weeklyTeachingLoads existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/weeklyTeachingLoads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/weeklyTeachingLoads")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
