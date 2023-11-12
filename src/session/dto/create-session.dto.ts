import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateSessionDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    roleId: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    online: boolean;
}
