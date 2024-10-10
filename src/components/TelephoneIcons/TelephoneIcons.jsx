import { BsTelephoneFill } from "react-icons/bs";
import clsx from "clsx";
import css from "./TelephoneIcons.module.css";

const TelephoneIcons = ({ iconListClass, iconClass, iconsNumber }) => {
  return (
    <ul className={clsx(css.list, css[iconListClass])}>
      {Array.from({ length: iconsNumber + 1 }).map((_, index) => (
        <li key={index} className={clsx(css.icon, css[iconClass])}>
          <BsTelephoneFill />
        </li>
      ))}
    </ul>
  );
};

export default TelephoneIcons;
