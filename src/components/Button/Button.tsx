import React from "react";
import ButtonProps from "../../services/models/Button";

const Button = (props: ButtonProps) => {
  const {
    handleClick,
    actived,
    children,
    disabled,
    className,
    dataCy,
    dataTestId,
  } = props;

  return (
    <div>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`${
          !actived ? "bg-blue-500" : "bg-blue-700"
        } hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ${
          className || ""
        }`}
        data-cy={dataCy}
        data-testid={dataTestId}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
