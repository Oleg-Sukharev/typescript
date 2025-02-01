type WellKnownBrands = "apple" | "lenovo";

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

type BrandNamesOptional = Partial<BrandNames>; //make all properties optional

const myBrands: BrandNamesOptional = {
  apple: "Air",
};

interface Todo {
  id: string;
  title: string;
  description: string;
}

type SimpleTodo = Pick<Todo, "id" | "title">;

const todo1: SimpleTodo = {
  id: "sad",
  title: "LEarn TS",
};

type SimpleTodoNew = Omit<Todo, "description" | "title">;
// Omit === skip === miss

const todo2: SimpleTodoNew = {
  id: "sad",
};

export { };