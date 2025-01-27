import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../events/hero-killed-dragon.event';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    console.log('Hero:killEnemy - Start');
    // logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    console.log('Hero:killEnemy - End');
  }
}
