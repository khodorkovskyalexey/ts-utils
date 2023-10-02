import { UtilArray } from "./util-array";
import { fillterMap } from "./utils";

const array = UtilArray.from([1, 2, null]);

const incrementedFilterArray = array.fillterMap((value) =>
  value ? value + 1 : value
);

console.log(incrementedFilterArray); // [2, 3]

const incrementedFilterArrayWithUtilFunction = fillterMap(
  [1, 2, null],
  (value) => (value ? value + 1 : value)
);

console.log(incrementedFilterArrayWithUtilFunction); // [2, 3]
