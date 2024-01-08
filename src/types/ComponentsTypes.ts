export type TIconButton ={
  type: "button" | "reset" | "submit"
  text: string
  position: "left" | "right"
  onClick?: () => void;
  icon: JSX.Element
}