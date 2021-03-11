import { useDispatch, useSelector } from "react-redux";

function ChildSecond() {
  const noOfCakes = useSelector((state) => {
    console.log("inside selector");
    return state.noOfCakes;
  });

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        This is Child Second Component I need to show Value of First Child Click
      </div>
      <div style={{ fontSize: "30px" }}>{noOfCakes}</div>
    </div>
  );
}

export default ChildSecond;
