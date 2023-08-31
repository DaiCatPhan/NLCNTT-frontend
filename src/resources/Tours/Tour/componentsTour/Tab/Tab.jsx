import className from "classnames/bind";
import styles from "./Tab.module.scss";
import { Tabs } from "antd";

const cx = className.bind(styles);

function Tab({ items }) {
  return (
    <div className={cx("wrapper")}>
      <Tabs
        centered
        tabBarGutter={150}
        tabBarStyle={{ fontWeight: "700" }}
        size="large"
        defaultActiveKey="1"
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
    </div>
  );
}

export default Tab;
