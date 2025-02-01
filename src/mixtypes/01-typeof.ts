function average(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Array cannot be empty");
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

const str = "Hello World";
type X = typeof str;

type FN = typeof average;

const max: FN = (numbers) => Math.max(...numbers); // Fix: Ensure `numbers` is a single array argument
max([1, 2, 3]); // Fix: Pass an array, as `FN` expects `number[]`

type ReturnFN = ReturnType<typeof average>;
// `ReturnType<typeof average>` correctly resolves to `number`

export { };
