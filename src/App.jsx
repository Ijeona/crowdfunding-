import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//pages//
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PledgePage from "./pages/PledgePage";
import LoginPage from "./pages/LoginPage";


//components//
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

//CSS//
import "./App.css";

import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("token") != null
  );

  return (
    <div>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project", element: <AllProjectPage /> },
      { path: "/create-project", element: <CreateProjectPage /> },
      { path: "/login", element: <LoginPage/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;