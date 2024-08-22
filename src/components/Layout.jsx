import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loader from "./common/Loader/Loader";

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
