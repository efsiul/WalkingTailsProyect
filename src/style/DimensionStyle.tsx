import { Dimensions } from "react-native";

let {height}            = Dimensions.get('window');
let box_count           = 2;
export const box_height = height / box_count;

