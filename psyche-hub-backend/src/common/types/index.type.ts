export type Merge<T> = {
  [K in keyof T]: K extends string ? T[K] : never;
};
