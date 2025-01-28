import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../events/hero-killed-dragon.event';
import { HeroFoundItemEvent } from '../events/hero-found-item.event';

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

  addItem(itemId: string) {
    console.log('Hero:addItem - Start');
    // logic
    this.apply(new HeroFoundItemEvent(this.id, itemId));
    console.log('Hero:addItem - End');
  }
}
