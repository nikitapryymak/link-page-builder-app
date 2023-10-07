import { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

const usePortal = (el) => {
  const [portal, setPortal] = useState({
    render: () => null,
  });

  const createPortal = useCallback((el) => {
    // render a portal at the given DOM node:
    const Portal = ({ children }) => ReactDOM.createPortal(children, el);
    return { render: Portal };
  }, []);

  useEffect(() => {
    setPortal(createPortal(el));
  }, [el]);

  return portal.render;
};

export default usePortal;
