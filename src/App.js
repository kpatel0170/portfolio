import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
const Project = React.lazy(() => import("./pages/Project/Project"));
const Education = React.lazy(() => import("./pages/Education/Education"));
const Experience = React.lazy(() => import("./pages/Experience/Experience"));
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const Resume = React.lazy(() => import("./components/Resume/Resume"));


const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <Project /> },
  { path: "/education", element: <Education /> },
  { path: "/experience", element: <Experience /> },
  { path: "/resume", element: <Resume /> },
  { path: "*", element: <HomePage /> }, 
];


const Spinner = () => (
<div class="flex items-center justify-center h-screen">
    <div class="relative">
        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
);


const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

function App() {
  const routeElements = routes.map(({ path, element }, index) => (
    <Route key={index} path={path} element={element} />
  ));

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Layout>
          <Routes>{routeElements}</Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}


export default App;
