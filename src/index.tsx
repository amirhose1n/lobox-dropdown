import ReactDOM from "react-dom/client";
import "./index.css";
import DropDown from "./components/dropdown";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DropDown
    options={["potato", "bannana", "watermelon", "avacado", "apple"]}
    onSelect={(value) => {
      console.log({ value });
    }}
  />
);
