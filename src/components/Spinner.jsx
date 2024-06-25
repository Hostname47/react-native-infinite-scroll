import * as React from "react";
import Svg, { Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    {...props}
  >
    <Circle cx={4} cy={12} r={3} className="spinner_nOfF" />
    <Circle
      cx={4}
      cy={12}
      r={3}
      className="spinner_nOfF"
      style={{
        animationDelay: "-.5s",
      }}
    />
    <Circle
      cx={4}
      cy={12}
      r={3}
      className="spinner_nOfF"
      style={{
        animationDelay: "-1s",
      }}
    />
    <Circle
      cx={4}
      cy={12}
      r={3}
      className="spinner_nOfF"
      style={{
        animationDelay: "-1.5s",
      }}
    />
  </Svg>
);
export default SvgComponent;
