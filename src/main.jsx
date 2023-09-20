import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./components/GlobalStyles";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store/index.js";
import FetchProfleProtected from "./components/FetchProfleProtected";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStyles>
    <ConfigProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          
            <App />
          
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </GlobalStyles>
);
