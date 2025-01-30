const vAny: any = 10;
const vUnknown: unknown = 10;

const s1: string = vAny;
// const s2: string = vUnknown; => Type 'unknown' is not assignable to type 'string'.ts
const s2: string = vUnknown as string;

console.log(s1, s2);
