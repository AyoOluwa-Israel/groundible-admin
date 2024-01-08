import { IconProps } from "@/types/IconTypes";

export const DashboardIcon = ({ fillColor }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className={fillColor}>
    <path d="M22 7.74995H9.75V1.94995H16.19C19.83 1.94995 22 4.11995 22 7.74995Z" />
    <path d="M22 16.25C21.95 19.82 19.79 21.95 16.19 21.95H9.75V16.25H22Z" />
    <path d="M8.25 1.94995V21.95H7.81C4.17 21.95 2 19.78 2 16.14V7.75995C2 4.11995 4.17 1.94995 7.81 1.94995H8.25Z" />
    <path d="M22 9.25H9.75V14.75H22V9.25Z" />
  </svg>
);
