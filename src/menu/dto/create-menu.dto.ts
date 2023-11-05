import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateMenuDto {
    @IsString()
    @IsNotEmpty()
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
}
