type WindowProp = keyof Window;

const myValue: WindowProp = "ontoggle";

interface PC {
  brand: string;
  year: string;
}

type Typ1 = keyof PC; // brand | year
const type: Typ1 = "brand";

type Tup1 = keyof [string, number, number];
const val1: Tup1 = "0";
const val2: Tup1 = "1";