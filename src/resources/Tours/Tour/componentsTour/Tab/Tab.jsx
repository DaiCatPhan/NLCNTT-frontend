import className from "classnames/bind";
import styles from "./Tab.module.scss";
import { Tabs } from "antd";

const cx = className.bind(styles);

function Tab({ items }) {
  console.log("items", items);
  return (
    <Tabs
      defaultActiveKey="1"
      // tabPosition={mode}
      style={{
        height: 220,
      }}
      items={new Array(4).fill(items).map((item, i) => {
        const id = String(i);
        return {
          label: `${item[i]?.label}`,
          key: id,
          disabled: i === 5,
          children: `Content of tab ${id}`,
        };
      })}
    />
  );
}

export default Tab;
