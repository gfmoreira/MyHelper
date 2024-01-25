interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  actived?: boolean;
  handleClick?: () => void;
  className?: string;
  dataCy?: string; // for cypress tests
  dataTestId?: string; // for jest tests
}

export default ButtonProps;
