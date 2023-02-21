import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//pages//
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

//components//
import Nav from "./components/Nav/Nav";

//CSS//
import "./App.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectsPage from "./pages/ProjectsPage";

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
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;