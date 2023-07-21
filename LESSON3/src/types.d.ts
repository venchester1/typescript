interface Guitarist {
    name?: string;
    active: boolean;
    albums: (string | number)[];
  };


  enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
