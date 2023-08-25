import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./components/GlobalStyles";
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStyles>
    <ConfigProvider>

    <App />
       </ConfigProvider> 
  </GlobalStyles> 
);
