import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          screenXSMax: 694,
          screenSMMin: 695,
          screenSM: 696,
          screenSMMax: 1035,
          screenMDMin: 1036,
          screenMD: 1036,
          screenMDMax: 1080,
          screenLGMin: 1160,
          screenLG: 1160,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
