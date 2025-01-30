interface User {
  name: string;
  lastUpdated?: Date;

  // unknown fields
  [key: string]: unknown;
}

const user: User = {
  name: "John Doe",
  lastUpdated: new Date(),
};

