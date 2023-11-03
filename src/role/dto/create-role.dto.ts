import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    inactive: boolean;
}
