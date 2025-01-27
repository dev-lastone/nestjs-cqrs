import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameController } from './heroes.controller';
import { HeroRepository } from './hero.repository';
import { KillDragonHandler } from './commands/kill-dragon.handler';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesGameController],
  providers: [HeroRepository, KillDragonHandler],
})
export class HeroesGameModule {}
