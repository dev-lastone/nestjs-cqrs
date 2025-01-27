import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../hero.repository';
import { GetHeroesQuery } from './get-heroes.query';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(query: GetHeroesQuery) {
    console.log('GetHeroesHandler');
    return this.repository.findAll();
  }
}
