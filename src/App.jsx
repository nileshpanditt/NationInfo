import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import "./App.css";
import CountryDetails from "./pages/CountryDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
