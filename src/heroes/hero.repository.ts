import { Injectable } from '@nestjs/common';
import { Hero } from './models/hero.model';

@Injectable()
export class HeroRepository {
  heroRepo = new Map<number, Hero>();

  findOneById(id: number) {
    const hero = new Hero('1234');
    this.heroRepo.set(id, hero);
    return hero;
  }

  async findAll(): Promise<Hero[]> {
    return Array.from(this.heroRepo.values());
  }
}
