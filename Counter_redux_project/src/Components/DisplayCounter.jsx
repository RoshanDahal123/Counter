import { useSelector } from "react-redux";
//using useSelector hook suscription is set up and when the counter is changes then the DisplayCounter()only  is repainted
const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Counter Current Value:{counter}</p>
    </>
  );
};
export default DisplayCounter;
