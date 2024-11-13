import { Platform } from "react-native";

import colors from "./colors";

export default {
  flex: 1,
  backgroundColor: colors.background,
  paddingTop: Platform.OS === "android" ? 25 : 0,
};
