const sum = (a: number, b: number): number => a + b;

const log = (name: string): void => console.log("Hello", name);
// return nothing "undefined"

const crash = (): never => { throw new Error("crash") };
// will never finish

function print(user: { firstName: string; lastName?: string }): void {
  console.log(user.firstName.toUpperCase());

  // need to check out if user.lastName exists
  if (user.lastName) {
    console.log(user.lastName.toUpperCase());
  }
}
