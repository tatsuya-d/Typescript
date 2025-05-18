export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile; //in key ofでオブジェクトの中身のプロパティが文字列のユニオン型ででとられinで一つずつ取れる

type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>;
