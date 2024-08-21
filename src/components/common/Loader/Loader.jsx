import { useSelector } from "react-redux";
import { selectIsLoading } from "../../../redux/contacts/selectors";
import { selectIsAuthLoading } from "../../../redux/auth/selectors";
import Text from "../Text/Text";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ type }) => {
  const isLoading = useSelector(selectIsLoading);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  return (
    (isLoading || isAuthLoading) && (
      <div className={css.backdrop}>
        <div className={css["loader-group"]}>
          <Text isLoaderText isCentered>loading</Text>
          <Circles color="var(--first-color)" />
        </div>
      </div>
    )
  );
}

  // export const buildLoaderMessage = (isLoading) => {
  //   switch (isLoading) {
  //     case "adding-contact":
  //       return "Adding a new contact. Please, wait.";
  //     case "deleting-contact":
  //       return "Deleting the contact. Please, wait.";
  //     case "updating-contact":
  //       return "Updating the contact. Please, wait.";
  //       case "fetching-contacts":
  //         return "Refreshing contacts. Please, wait.";
  //     default:
  //       return "Please, wait";
  //   }
  
  
 


    

export default Loader;
