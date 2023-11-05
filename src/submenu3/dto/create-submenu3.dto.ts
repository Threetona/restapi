import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateSubmenu3Dto {
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
    // @IsNumber()
    @IsInt()
    ordering: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    active: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    subMenu2Id: number;
}
