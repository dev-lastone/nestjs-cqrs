import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { HeroRepository } from '../hero.repository';
import { KillDragonCommand } from './kill-dragon.command';

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: KillDragonCommand) {
    console.log('KillDragonHandler:execute - Start');

    const { heroId, dragonId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+heroId),
    );
    hero.killEnemy(dragonId);
    hero.commit();

    console.log('KillDragonHandler:execute - End');
  }
}
