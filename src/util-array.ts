export class UtilArray<T> extends Array<T> {
  static from<T>(array: Array<T>): UtilArray<T> {
    const utilArray = new UtilArray<T>();

    Object.assign(utilArray, array);

    return utilArray;
  }

  fillterMap<U>(
    callbackfn: (value: T, index: number, array: T[]) => U | null | undefined
  ) {
    return this.reduce((acc, curr, index, array) => {
      const callbackResult = callbackfn(curr, index, array);

      return callbackResult ? acc.concat(callbackResult) : acc;
    }, [] as U[]);
  }
}
