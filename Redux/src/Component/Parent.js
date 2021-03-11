import ChildFirst from "./ChildFirst";
import ChildSecond from "./ChildSecond";
import "../styles.css";

function Parent() {
  return (
    <div className="App">
      <ChildFirst />
      <ChildSecond />
    </div>
  );
}

export default Parent;
