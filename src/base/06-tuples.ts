// Tuple of key-value pairs
const pairs: [string, string][] = [
  ["key", "value"],
  ["key2", "value2"],
];

const data: [number, boolean, string] = [1, true, "key"];

// Tuple with a fixed structure and an optional string array (spread operator)
type SomeTuple = [number, string, boolean, ...string[]];
