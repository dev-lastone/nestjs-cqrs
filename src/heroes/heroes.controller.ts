import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonDto } from './kill-dragon.dto';
import { KillDragonCommand } from './commands/kill-dragon.command';

@Controller('hero')
export class HeroesGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }
}
