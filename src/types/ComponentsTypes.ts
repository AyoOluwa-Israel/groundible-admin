export type TIconButton = {
  type: "button" | "reset" | "submit";
  text: string;
  position: "left" | "right";
  onClick?: () => void;
  icon: JSX.Element;
  css?: string
};


export type TPrimaryButton = {
  type: "button" | "reset" | "submit";
  text: string;
  onClick?: () => void;
  css: string
};

export type Option = {
  value: string | number;
  label: string | number;
}

export type TInputProps = {
  name: string;
  placeholder: string;
  label?: string;
  error?: string | undefined | false;
  value: string | undefined | number;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
}



export type TSelectInputProps = {
  options: Option[];
  name?: string;
  value?: string | undefined | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  css?: string;
  disabled?: boolean;
  defaultValue?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  error?: string | undefined | false;
  label: string
}