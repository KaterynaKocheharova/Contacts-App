import { buildTextClassName } from "./TextHelpers.js";

const Text = ({ children, isCentered, accented, isLoaderText, isAnimated }) => {
  return (
    isAnimated ? 
    <div className={buildTextClassName(isCentered, accented, isLoaderText)}>
      {children}
    </div> 
    : 
    <p className={buildTextClassName(isCentered, accented, isLoaderText)}>
      {children}
    </p>
  );
};

export default Text;
