// import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

import clsx from "clsx";
import css from "./TelephoneIcons.module.css";

const TelephoneIcons = ({ iconListClass, iconClass, iconsNumber }) => {
  return (
    <ul className={clsx(css.list, css[iconListClass])}>
      {Array.from({ length: iconsNumber }).map((_, index) => (
        <li key={index} >
          <BsTelephone className={clsx(css.icon, css[iconClass])} />
        </li>
      ))}
    </ul>
  );
};

export default TelephoneIcons;
