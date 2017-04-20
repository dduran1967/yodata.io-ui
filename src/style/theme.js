import {compose} from 'recompose'
// @flow
import root from 'window-or-global'

export const blue = "#027cb1";
export const white = "#fff";
export const black = "#000";
export const lightRed = "#e17079";
export const red = "#FF695E";
export const lightOrange = "#f3b70b";
export const orange = "#FF851B";
export const yellow = "#FFDC00";
export const lightYellow = "#FFE21F";
export const green = "#58823a";
export const lightGreen = "#98c379";
export const lightBlue = "#37a0ce";
export const teal = "#39CCCC";
export const lightTeal = "#6DFFFF";
export const pink = "#D9499A";
export const lightPink = "#FF8EDF";
export const purple = "#B10DC9";
export const lightPurple = "#CDC6FF";
export const darkGray = "#282c34";
export const gray = "#464a4c";
export const lightGray = "#636c72";
export const veryLightGray = "#ebedee";

export const primary = blue;
export const secondary = lightGray;
export const info = blue;
export const success = green;
export const error = red;
export const warning = lightOrange;
export const danger = red;
export const bodyBackground = "#e2e5e9";
export const bodyText = "rgba(0, 0, 0, 0.8)";
export const subtleTransparentBlack = "rgba(0, 0, 0, 0.03)";
export const transparentBlack = "rgba(0, 0, 0, 0.05)";
export const strongTransparentBlack = "rgba(0, 0, 0, 0.10)";
export const subtleTransparentWhite = "rgba(255, 255, 255, 0.01)";
export const transparentWhite = "rgba(255, 255, 255, 0.05)";
export const strongTransparentWhite = "rgba(255, 255, 255, 0.01)";
export const subtleGradient =
  "linear-gradient(transparent, rgba(0, 0, 0, 0.05))";
export const shadow = "0px 1px 2px 0 rgba(0, 0, 0, 0.05)";

export const createStyle = compose

export function scale(value?: number): string {
  switch (typeof value) {
    case "number":
      return `${value * 0.5}em`;
    case "string":
      return value;
    default:
      return "";
  }
}

export function padding(a: number, b?: number, c?: number, d?: number) {
  let padding = [scale(a) , scale(b) , scale(c) , scale(d)].join(' ').trim();
  return function (src: JSON) {
    return {...src, padding};
  };
}

export function color(value:string) {
  return function(src:JSON) {
    return {...src, color: value}
  }
}

export function backgroundColor(value:string) {
  return function(src:JSON) {
    return {...src, backgroundColor: value}
  }
}

root.createStyle = createStyle;
root.scale = scale;
root.padding = padding;


