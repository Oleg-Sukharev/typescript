# Type Aliases vs. Interfaces

## Type Aliases (type)

The type keyword is used to define custom types. It is more flexible than interface and can be used for:

✅ Primitives, unions, intersections
✅ Tuples & function types
❌ Cannot be re-opened to add new properties
❌ Cannot be used to extend built-in types like Window

Example:

type Status = "success" | "error"; // Union Type
type User = { name: string; age: number }; // Object Type
type Point = [number, number]; // Tuple Type
type Log = (message: string) => void; // Function Type

## Interfaces (interface)

An interface is used to define the structure of an object. It enforces type safety and consistency across your code.

✅ Can be extended using extends
✅ Supports declaration merging (multiple declarations merge into one)
✅ Works well with classes (implements)
❌ Cannot define unions or intersections
❌ Cannot be used for tuples or function types

Example:

interface User {
name: string;
age: number;
}

interface Employee extends User {
jobTitle: string;
}

# Key Differences: Interface vs. Type

Feature interface type
Object Structure ✅ Yes ✅ Yes
Extendable ✅ extends ✅ & (intersection)
Declaration Merging ✅ Yes ❌ No
Union Types ❌ No ✅ Yes
Tuples & Functions ❌ No ✅ Yes

# Declaration Merging (Interface Only)

Declaration merging allows multiple interface declarations with the same name to be automatically combined.

interface User {
name: string;
}

interface User {
greet(): string;
}

const user: User = {
name: "Alice",
greet() {
return `Hello, my name is ${this.name}`;
},
};

✅ Result: The User interface now includes both name and greet().

# When to Use What?

✅ Use interface when defining objects, especially for public APIs, since they can be extended.
✅ Use type for more flexible definitions, such as unions, intersections, tuples, and function types.

💡 Tip: In React, prefer type for component props and state, as it is more constrained and avoids unintended merging.
