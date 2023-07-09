import React, { Fragment } from "react";

interface Props {
  height: string;
  width: string;
  children: any;
  onClick?: () => void | undefined;
}

const CustomButton = (props: Props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <Fragment>
      <button
        className={`${props.width} ${props.height} border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider
        rounded-md hover:bg-hoverColor duration-300'`}
        onClick={handleClick}
      >
        {props.children}
      </button>
    </Fragment>
  );
};

export default CustomButton;
