export {};

type DetaileProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetaileProfile, "name" | "weight">;

type Small = Omit<DetaileProfile, "height">;
type MyOmit = Pick<SimpleProfile,"name" | "weight">;
type MySmallProfile = MyOmit;
