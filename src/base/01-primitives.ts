// Number Types
const x: number = 10.5;
const z: number = NaN;

// Boolean Type
const isActive: boolean = true;

// String Types
const str1: string = "Hello";

// Symbol Type
const symb: symbol = Symbol("it is symbol");

// Null & Undefined Types
const h: undefined = undefined;
const n: null = null;

// Literal Types
const num: 100 = 100;

// Any Type (Allows any value)
let anyType: any = 1;
anyType = "str";
anyType = {};
anyType.toUpperCase(); // No type safety

// Unknown Type (Safer alternative to any)
const xx: unknown = 2;
if (typeof xx === "string") xx.toUpperCase();

// BigInt Type (Requires ES2020+)
const bigIntValue: bigint = 11111n;