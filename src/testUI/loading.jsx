import { Alert, Space, Spin } from "antd";
import { useState } from "react";
function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  return <div>{isLoading && <Spin size="large" />}</div>;
}

export default Loading;
