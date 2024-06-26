import { Progress } from "./ui/progress";
import Header from "./Header";
import React from 'react';

const CheckList = () => {

  const [checkboxes, setCheckboxes] = React.useState([
    {
      label:
        "This product add cultural, aesthetic, practical, or personal value.",
      checked: false,
    },
    {
      label:
        "This product is made from eco-friendly materials or from renewable sources",
      checked: false,
    },
    {
      label:
        "This product was manufactured in a way that respects workers' rights and adheres to ethical standards?",
      checked: false,
    },
    {
      label:
        "The company producing this product engages in sustainable development actions and cares for the natural environment.",
      checked: false,
    },
    {
      label:
        "This product is packaged in a way that minimizes waste, e.g., using biodegradable or reusable materials.",
      checked: false,
    },
    {
      label:
        "This product is local or delivered with minimal environmental impact(e.g., through eco-friendly delivery or public transport).",
      checked: false,
    },
  ]);

  const handleCheckboxChange = (index: number) => {
    setCheckboxes(
      checkboxes.map((checkbox, i) =>
        i === index ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  console.log(checkboxes);

  const progress =
    (checkboxes.filter((checkbox) => checkbox.checked).length /
      checkboxes.length) *
    100;
  console.log(progress);

  return (
    <div className="space-y-6">
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <Header text='Make your online shopping sustainable!' />
      <p className="text-darkGray">Check out the key criterias and see if you are a Green Shopper Hero</p>
      {checkboxes.map((checkbox, index) => (
        <div key={index}>
          <label className="flex gap-2 items-center text-black dark:text-white">
            <input
              className="border-[1px] border-black w-8 h-8 bg-white flex-shrink-0 rounded-sm checkbox  "
              checked={checkbox.checked}
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
            />
            {checkbox.label}</label>
        </div>
      ))}
      <Progress value={progress} className="bg-white  [&>*]:bg-gradient-to-r [&>*]:from-[#DBFF00] [&>*]:to-[#6EFF00] " />
      {progress === 100 ? (
        <div className="flex justify-center items-center w-full py-5 px-11 ">
          <span className="font-bold">Green Shopper Hero!</span>
        </div>
      ) : null}
    </div>
  );
};

export default CheckList;
