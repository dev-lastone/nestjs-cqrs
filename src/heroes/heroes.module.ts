import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameController } from './heroes.controller';
import { HeroRepository } from './hero.repository';
import { KillDragonHandler } from './commands/kill-dragon.handler';
import { GetHeroesHandler } from './queries/get-heroes.handler';
import { HeroKilledDragonHandler } from './events/hero-killed-dragon.handler';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { DropAncientItemHandler } from './commands/drop-ancient-item.handler';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesGameController],
  providers: [
    HeroRepository,
    KillDragonHandler,
    HeroKilledDragonHandler,
    GetHeroesHandler,
    DropAncientItemHandler,
    HeroesGameSagas,
  ],
})
export class HeroesGameModule {}
