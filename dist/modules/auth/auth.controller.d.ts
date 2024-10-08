import { AuthService } from './auth.service';
import { LoginResponse, RefreshResponse, RegisterResponse } from './interfaces';
import { LoginDto, RefreshDto, RegisterDto } from './dtos';
export declare class AuthController {
    #private;
    constructor(service: AuthService);
    signIn(payload: LoginDto): Promise<LoginResponse>;
    signUp(payload: RegisterDto): Promise<RegisterResponse>;
    refresh(payload: RefreshDto): Promise<RefreshResponse>;
}
