import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from './hero-found-item.event';

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
  handle(event: HeroFoundItemEvent) {
    console.log('HeroFoundItemHandler');
  }
}
