import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateSubmenu2Dto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    icon: string;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    ordering: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    active: boolean;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    subMenuId: number;
}
