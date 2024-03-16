import React from "react";
import { ReactComponent as Icon } from "../assets/Sygnet(64x64).svg";
import { X } from "lucide-react";
type OverlayIconProps = {
  isOverlayVisible: boolean;
  setIsOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const OverlayIcon = ({
  setIsOverlayVisible,
  isOverlayVisible,
}: OverlayIconProps) => {
  const className = " w-12 h-12 Overlay cursor-pointer bottom-5";

  return !isOverlayVisible ? (
    <Icon
      className={`right-5 ${className}`}
      onClick={() => setIsOverlayVisible((prev) => !prev)}
    />
  ) : (
    <div className={`right-[400px] ${className} rounded-full text-[#F2F2F2] bg-black flex justify-center items-center`}>
      <X
        className="w-8 h-8"
        onClick={() => setIsOverlayVisible((prev) => !prev)}
      />
    </div>
  );
};

export default OverlayIcon;
