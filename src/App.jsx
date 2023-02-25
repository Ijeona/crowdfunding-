import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//pages//
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PledgePage from "./pages/PledgePage";

//components//
import Nav from "./components/Nav/Nav";

//CSS//
import "./App.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";


const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/login", element: <LoginPage/>},
      { path: "/pledge", element: <PledgePage/>}
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;