import { PartialType } from '@nestjs/swagger';
import { CreateSubmenu3Dto } from './create-submenu3.dto';

export class UpdateSubmenu3Dto extends PartialType(CreateSubmenu3Dto) {}
