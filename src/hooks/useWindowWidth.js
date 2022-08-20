import { useCallback, useEffect, useState } from "react";
export default function useWindowWidth(props) {
  const { sessionStorage } = window;
  if (!sessionStorage.getItem("sidebarCtrl"))
    sessionStorage.setItem("sidebarCtrl", false);
  const [onSmallScreen, setOnSmallScreen] = useState(
    sessionStorage.getItem("sidebarCtrl") === "true" ? true : false
  );

  const checkScreenSize = useCallback(() => {
    setOnSmallScreen(window.innerWidth < props);
  }, [props]);

  useEffect(() => {
    if (onSmallScreen === false) {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
    }
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);
  return { onSmallScreen, setOnSmallScreen };
}
