export interface IPokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    name: string;
  }[];
  url: string;
}