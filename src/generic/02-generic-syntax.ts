type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<boolean>;

interface ModelData<T> {
  title: string;
  value: T;
}

const obj1: ModelData<number> = {
  title: "title",
  value: 1,
};

const obj2: ModelData<Array<number>> = {
  title: "title",
  value: [1],
};
