import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../actions/cakeAction";

function ChildFirst() {
  const dispatch = useDispatch();

  const incrementCakes = () => {
    dispatch(buyCake());
  };

  return (
    <div>
      <button onClick={incrementCakes}>Buy Cakes Please!!!</button> &nbsp;
      <button>Please in List!!!</button>
      <div> This is Child First Child</div>
    </div>
  );
}

export default ChildFirst;
