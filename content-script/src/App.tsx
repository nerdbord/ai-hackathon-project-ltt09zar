/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import React from "react";

import "./input.css";
import OverlayIcon from "./components/OverlayIcon";
import Overlay from "./components/Overlay";
import { useSwitchesStore } from "./store/store";
import { handleHideSales, handleHideShipping } from "./helpers/hide";
import { handleShowSales, handleShowShipping } from "./helpers/show";
import { useOpenAI } from "./api/main";

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = React.useState<boolean>(false);

  const { switches } = useSwitchesStore();

<<<<<<< HEAD
  main();
  //tutaj sobie odpalać będziemy to co chcemy wyłączać na stronie, w switches są pola które mają state switchy i je trzeba wrzucić do locala
  //Sprawdzamy czy jest na true i odpalamy interwal z funkcja ktora czyta z contentu i wyłącza to co chcemy
  //w taki sam sposob mozecie ustawić więcej opcji w switches i odpalać interwale z różnymi funkcjami


  //reszta w sumie bardzo intuicyjna jest, Overlay ma w sobie Tabs i Content, w Content mamy switchy, chat i checklist
=======

  console.log("Calling API");
  // callOpenAPI();
  const res = useOpenAI({
    message: `Smart ring
      Introducing the revolutionary Smart Ring - a breakthrough in wearable technology, offering seamless health monitoring at your fingertips. Thanks to its artistic design, you can effortlessly track your heart rate, blood oxygen and stress levels - all without lifting a finger. Your health data is automatically recorded, so you always know about your body condition. 
      Wear it every day with confidence, the titanium steel shell combined with advanced low-temperature potting technology gives the ring 3ATM and IP68 water resistance. The R02 smart ring is not only light as a feather, but extremely durable and wear-resistant. Its durability is matched by monitoring accuracy, with 20 different exercise modes that monitor real-time heart rate data as you exercise.   
      Embrace the future of smart wearables with the Smart Ring - the perfect combination of innovation, style and health consciousness.`,
    option: 'irrelevant and impactful'
})
  .then(res => {console.log(res)});

>>>>>>> 393f99e649d766a2ccb6f38811ed1798597dee3e

  React.useEffect(() => {
    
    let salesInterval: NodeJS.Timeout | null = null;
    let shippingInterval: NodeJS.Timeout | null = null;

    if (switches.sales) {
      salesInterval = setInterval(handleHideSales, 1000);
    } else {
      handleShowSales();
    }

    if (switches.hideInfo) {
      shippingInterval = setInterval(handleHideShipping, 1000);
    } else {
<<<<<<< HEAD
      handleShowShipping()
=======
      handleShowShipping();
>>>>>>> 393f99e649d766a2ccb6f38811ed1798597dee3e
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
