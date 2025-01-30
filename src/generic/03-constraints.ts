const len = <T extends { length: number }>(arg: T): number => arg.length;
// extends - detecting restrictions here
// saying that T have to have { length: number }

len("abc");
len(["abc"]);
len({ length: 12 });
len({ a: 1, length: 1 });

// len(123) Error
// len(true) Argument of type 'boolean' is not assignable to parameter of type '{ length: number; }'.ts(2345)

