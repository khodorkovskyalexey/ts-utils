export const fillterMap = <T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U | null | undefined
) => {
  return array.reduce((acc, curr, index, array) => {
    const callbackResult = callbackfn(curr, index, array);

    return callbackResult ? acc.concat(callbackResult) : acc;
  }, [] as U[]);
};
