import ReactDOM from "react-dom/client";
import Router from "./routes/router";
import ColorProvider from "./ColorProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ColorProvider>
    <Router />
  </ColorProvider>
);
