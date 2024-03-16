/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import React from "react";

import "./input.css";
import OverlayIcon from "./components/OverlayIcon";
import Overlay from "./components/Overlay";
import { useSwitchesStore } from "./store/store";
import { handleHideSales, handleHideShipping } from "./helpers/hide";
import { handleShowSales, handleShowShipping } from "./helpers/show";

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = React.useState<boolean>(true);

  const { switches } = useSwitchesStore();

  React.useEffect(() => {
    let salesInterval: NodeJS.Timeout | null = null;
    let shippingInterval: NodeJS.Timeout | null = null;

    if (switches.sales) {
      salesInterval = setInterval(handleHideSales, 1000);
    } else {
      handleShowSales();
    }

    if(switches.hideInfo) {
      shippingInterval = setInterval(handleHideShipping, 1000);
    }else{
      handleShowShipping()
    }


    return () => {
      if (salesInterval) {
        clearInterval(salesInterval);
      }
      if (shippingInterval) {
        clearInterval(shippingInterval);
      }
    };
  }, [switches]);

  return (
    <>
      {isOverlayVisible ? <Overlay /> : null}
      <OverlayIcon
        isOverlayVisible={isOverlayVisible}
        setIsOverlayVisible={setIsOverlayVisible}
      />
    </>
  );
}

export default App;
