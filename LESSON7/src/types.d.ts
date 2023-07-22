interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//    readonly [index: string]: number   //index signature
// }

interface Student {
  //   [key: string]: string | number | number[] | undefined; // use for types that does'nt exist
  name: string;
  GPA: number;
  classes?: number[];
}

// interface Incomes {
//     [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;
