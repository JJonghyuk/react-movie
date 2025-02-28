import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Router>
      <Header isActive={isActive} />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/:id`} element={<Detail />} />
        <Route
          path={`${process.env.PUBLIC_URL}`}
          element={<Home headerState={setIsActive} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
