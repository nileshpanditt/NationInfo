import { Outlet } from "react-router";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
