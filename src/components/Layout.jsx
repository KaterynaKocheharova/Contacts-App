import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loader from "./common/Loader/Loader";

// render loader here, account for the type loading page

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader/>}>{children}</Suspense>
      <Loader/>
    </div>
  );
};

export default Layout;
