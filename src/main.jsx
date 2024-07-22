import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "./components/HelloWorld";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld
      user={{ name: "Rafael", lastName: "Ponte" }}
      id={1}
      title="Hola Mundo"
    />
  </React.StrictMode>
);
