import toast from "react-hot-toast";

const globalParams = {
  duration: 5000,
  position: "top-right",
};

let toastId;

const removeToast = (id) => {
  toast.dismiss(id);
};

const removeToastClickHandler = () => {
  removeToast(toastId);
  document.removeEventListener("click", removeToastClickHandler);
};

export const activateSuccessToast = (message) => {
  toastId = toast.success(message, globalParams);
  document.addEventListener("click", removeToastClickHandler);
};


export const activateErrorToast = (message) => {
  toastId = toast.error(message, globalParams);
  document.addEventListener("click", removeToastClickHandler);
};