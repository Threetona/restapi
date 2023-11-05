import { PartialType } from '@nestjs/swagger';
import { CreateSubmenu2Dto } from './create-submenu2.dto';

export class UpdateSubmenu2Dto extends PartialType(CreateSubmenu2Dto) {}
