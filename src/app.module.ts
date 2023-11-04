import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { MenuModule } from './menu/menu.module';

@Module({
    imports: [PrismaModule, AuthModule, UsersModule, RoleModule, MenuModule],
    controllers: [],
    providers: [AppService],
})
export class AppModule {}
