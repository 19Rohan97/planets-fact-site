import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import PlanetLayout from "./components/PlanetLayout";
import Content from "./components/Content";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Navigate replace to="mercury" />} />
        <Route path=":planet" element={<PlanetLayout />}>
          <Route index element={<Navigate replace to="overview" />} />
          <Route path=":section" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
