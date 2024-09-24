/* eslint-disable */

import { HiX } from "react-icons/hi";
// import Links from "./components/Links";
// import { routes } from "routes";

export const Sidebar = (props: {
  open?: boolean;
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
  style?: React.CSSProperties;
}) => {
  const { open, onClose, style } = props;
  return (
    <div style={style}>
      <div style={{height: '20%', backgroundColor: 'blue'}}>
        <img src={require("../images/logo.png")} alt=""/>
      </div>
      <div style={{height: '60%',flex: 1}}>Hang</div>
      <div style={{height: '20%',flex: 1, backgroundColor: 'white'}}>Hang</div>
    </div>
  );
};
