import className from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import MenuItemHeader from "../MenuItemHeader";

const cx = className.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => (
      <MenuItemHeader key={index} data={item} /> 
    ));
  };

  return (
    <Tippy
      // visible
      interactive
      delay={[0, 200]}
      render={(attrs) => (
        <div className={cx("menu")} tabIndex="-1" {...attrs}>
          {renderItems()}
        </div>
      )}>
      {children}
    </Tippy>
  );
}

export default Menu;
