import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { IoIosLogOut } from "react-icons/io";
import { activateSuccessToast } from "../../utils/toast";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const username = useSelector(selectUser).name;
  const dispatch = useDispatch();
  const handlelogOutClick = () => {
    dispatch(logOut()).then(() => {
      activateSuccessToast("Your're logged out successfully");
    });
  };

  return (
    <div className={css["user-menu-container"]}>
      <p className={css["user-menu-text"]}>Welcome, {username}!</p>
      <button className={css["logout-button"]} onClick={handlelogOutClick}>
        <IoIosLogOut className={css["logout-icon"]} />
      </button>
    </div>
  );
};

export default UserMenu;
