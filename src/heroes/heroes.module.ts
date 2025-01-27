import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameController } from './heroes.controller';
import { HeroRepository } from './hero.repository';
import { KillDragonHandler } from './commands/kill-dragon.handler';
import { GetHeroesHandler } from './queries/get-heroes.handler';
import { HeroKilledDragonHandler } from './events/hero-killed-dragon.handler';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesGameController],
  providers: [
    HeroRepository,
    KillDragonHandler,
    HeroKilledDragonHandler,
    GetHeroesHandler,
  ],
})
export class HeroesGameModule {}
