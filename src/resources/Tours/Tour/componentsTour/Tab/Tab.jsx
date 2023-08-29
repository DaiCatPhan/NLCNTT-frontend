import className from "classnames/bind";
import styles from "./Tab.module.scss";
import { Tabs } from "antd";

const cx = className.bind(styles);

function Tab({ items }) {
  return (
    <Tabs
      size="large"
      defaultActiveKey="1"
      style={{
        height: 220,
        textAlign: "center",
      }}
      items={new Array(4).fill(items).map((item, i) => {
        const id = String(i);
        return {
          label: item[i]?.label,
          key: id,
          disabled: i === 5,
          children: item[i]?.children,
        };
      })}
    />
  );
}

export default Tab;
