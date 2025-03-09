// src/auth/graphql/auth.resolver.ts (updated with debug logs)
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { LoginInput } from './dto/login.input';
import { LoginResponse, UserType } from './dto/login-result.type';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { CurrentUser } from '../decorators/current-user.decorator';
import { Public } from '../decorators/public.decorator';

@Resolver()
export class AuthResolver {
  private readonly logger = new Logger(AuthResolver.name);
  
  constructor(private readonly authService: AuthService) {
    this.logger.log('AuthResolver initialized');
  }

  @Public()
  @Mutation(() => LoginResponse)
  async login(@Args('credentials') loginInput: LoginInput): Promise<LoginResponse> {
    this.logger.log(`Login attempt for username: ${loginInput.username}`);
    
    try {
      const result = await this.authService.signIn({
        email: loginInput.username,
        password: loginInput.password,
      });
  
      this.logger.log('Login successful');
      
      return {
        accessToken: result.accessToken,  // Changed from access_token to accessToken
        user: {
          username: result.user.email,
          roles: [result.user.role],
        }
      };
    } catch (error: any) {
      this.logger.error(`Login error: ${error.message}`);
      throw new Error('Invalid username or password');
    }
  }

  @Query(() => UserType)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: any): UserType {
    this.logger.log(`Me query for user: ${user?.email}`);
    return {
      username: user.email,
      roles: [user.role],
    };
  }
}