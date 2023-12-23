import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  actived?: boolean;
  handleClick?: () => void;
  className?: string;
  dataCy?: string; // for cypress tests
  dataTestId?: string; // for jest tests
}

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
        className={`bg-blue-500 ${
          !actived && "hover:bg-blue-700"
        } text-white font-bold py-2 px-4 border border-blue-700 rounded ${className}`}
        data-cy={dataCy}
        data-testid={dataTestId}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
