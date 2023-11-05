import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { MenuModule } from './menu/menu.module';
import { SubmenuModule } from './submenu/submenu.module';
import { Submenu3Module } from './submenu3/submenu3.module';
import { Submenu2Module } from './submenu2/submenu2.module';

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        UsersModule,
        RoleModule,
        MenuModule,
        SubmenuModule,
        Submenu2Module,
        Submenu3Module,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
