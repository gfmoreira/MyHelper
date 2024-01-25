import { CSSProperties } from "react";

interface TextInputProps {
  title?: string;
  placeholder?: string;
  textInputName?: string;
  handleOnChange?: (value: string) => void;
  value?: string | undefined;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  maxLength?: number;
  dataCy?: string;
  dropdownDisabled?: boolean;
  type?: string;
  style?: CSSProperties | undefined;
}

export default TextInputProps;
