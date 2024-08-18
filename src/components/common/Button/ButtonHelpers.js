import css from "./Button.module.css";

export const buildButtonClass = (type) => {
  switch (type) {
    case "modal-window":
      return css["modal-btn"];
    default:
      return "";
    // can be continued later as the project expands
  }
};
