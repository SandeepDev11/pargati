import { Outlet, useLocation } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/login", "/register"];
  const shouldHideNavbarAndFooter = hideNavbarAndFooter.includes(
    location.pathname
  );
  return (
    <>
      {!shouldHideNavbarAndFooter && <Header />}
      <Outlet />
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
