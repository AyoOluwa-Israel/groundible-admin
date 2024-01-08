import toast from "react-hot-toast";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";

class ToastClass {
  success(message: string) {
    toast.success(message, {
      icon: <IoMdCheckmarkCircleOutline size={22} />,
      style: {
        padding: "5px 8px",
        color: "#007A44",
        background: "#EBFFF6",
        borderRadius: "4px",
        fontWeight: "500",
        width: "300px",
        height: "40px",
        textAlign: "left",
        fontSize: "14px",
        // minWidth: '300px'
      },
    });
  }

  error(message: string) {
    toast.error(message, {
      icon: <GiCrossMark size={22} />,
      style: {
        padding: "5px 12px",
        color: "#fff",
        background: "#da072b",
        borderRadius: "4px",
        fontWeight: "500",
        minWidth: "200px",
        height: "40px",
        textAlign: "left",
        fontSize: "14px",
      },
    });
  }
}

export const Toast = new ToastClass();
