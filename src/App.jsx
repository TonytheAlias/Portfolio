import { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import Header from "./components/header";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <ProjectCard />
    </>
  );
}

export default App;
