import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import TelephoneIcons from "../TelephoneIcons/TelephoneIcons";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css["app-bar"]}>
        <Navigation />
        <TelephoneIcons
          iconsNumber={3}
          iconsListClass="row"
          iconClass="medium"
        />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
