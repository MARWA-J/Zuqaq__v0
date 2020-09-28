import "../Styles/style.less";
import SlideNav from "../components/SlideNav";
import NavBar from "../components/NavBar";
import { useState } from "react";

const index = () => {
  const [show, setshow] = useState(false);
  const showProgrss = () => {
    setInterval(() => {
      setshow(true);
    }, 100);

    return setshow(false);
  };

  return (
    <div>
      {show ? <div className="progres_bar"></div> : null}
      <NavBar fun={showProgrss} />
      <SlideNav fun={showProgrss} />
    </div>
  );
};
export default index;
