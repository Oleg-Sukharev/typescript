//overloads
function head(value: string): string;
function head(value: number[]): number;
function head(value: string[]): string;
function head(value: boolean[]): boolean;
function head(value: Date[]): Date;
function head(value: any): any {
  return value[0];
}

// => overloads vs generic
function headCommon<T>(arg: T): T {
  return arg;
}

const headCommon1 = <T>(arg: T): T => arg;
