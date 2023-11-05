import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class CreatePermissionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    roleId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    menuId: number;
}
