import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { colors } from "./colors";

const customLightTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: colors.light
}
const customDarkTheme = {
    ...MD3DarkTheme,
    roundness: 2,
    colors: colors.dark
}

export {
    customDarkTheme,
    customLightTheme
}