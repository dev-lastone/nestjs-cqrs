import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DropAncientItemCommand } from '../commands/drop-ancient-item.command';
import { HeroKilledDragonEvent } from '../events/hero-killed-dragon.event';

const itemId = '0';

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      delay(1000),
      map((event) => {
        console.log('Inside [HeroesGameSagas] Saga - [dragonKilled] Saga');
        return new DropAncientItemCommand(event.heroId, itemId);
      }),
    );
  };
}
