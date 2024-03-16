import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "./ui/progress";

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

  return (
    <div className="space-y-6">
      {checkboxes.map((checkbox, index) => (
        <div className="flex gap-2" key={index}>
          <input
            className="border-[1px] border-black w-8 h-8 bg-white flex-shrink-0 rounded-sm accent-[#6EFF00] checked:bg-white"
            checked={checkbox.checked}
            type="checkbox"
            onChange={() => handleCheckboxChange(index)}
          />
          <p>{checkbox.label}</p>
        </div>
      ))}
      <Progress value={progress} className="bg-white"/>
    </div>
  );
};

export default CheckList;
