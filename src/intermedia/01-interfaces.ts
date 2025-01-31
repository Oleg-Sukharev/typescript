export interface User {
  readonly login: string;
}

export interface User {
  isOnline?: boolean;
}

// interfaces can be re-opened
// now user contain 2 fields
const user: User = {
  login: "Jhon",
  isOnline: false,
};

// to add an entity globally
interface Window {
  isAuth?: boolean;
}

interface Person {
  firstName: string;
}

interface Employee extends User, Person {
  contractStart: Date;
}

interface Developer extends Employee {
  skills: string[];
}
