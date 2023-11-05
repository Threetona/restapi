import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateSubmenuDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    icon: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    ordering: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    active: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    menuId: number;
}
