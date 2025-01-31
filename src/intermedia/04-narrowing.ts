function example1(x: number | string | Date) {
  if (typeof x === "string") x.toLowerCase();
  if (typeof x === "number") x.toFixed();

  if (x instanceof Date) {
    return x.getMonth();
  }
}

function example2(strs: string | string[] | null) {
  // if (typeof strs === "object") {}
  // if (Array.isArray(strs)) {
  if (strs && typeof strs === "object") {
    strs.concat([]);
  } else if (typeof strs === "string") {
    strs.toLowerCase();
  }
}
