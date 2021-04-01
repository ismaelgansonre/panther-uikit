import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image
        href="data:image/png;base64,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"
        width="32"
      ></image>
    </Svg>
  );
};

export default Icon;
