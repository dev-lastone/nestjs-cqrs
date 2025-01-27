import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [CqrsModule.forRoot(), HeroesGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
