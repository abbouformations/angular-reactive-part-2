import { Propriete } from './propriete';

export class Article {
  constructor(
    public id: number,
    public description: string,
    public prix: number,
    public quantite: number,
    public propriete: Propriete
  ) {}
}
