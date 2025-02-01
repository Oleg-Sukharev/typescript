const sum = (a: number, b: number): number => a + b;

const log = (name: string): void => console.log("Hello", name);
// return nothing "undefined"

const crash = (): never => { throw new Error("crash") };
// will never finish

function print(user: { firstName: string }): void {
  console.log(user.firstName.toUpperCase());
}
