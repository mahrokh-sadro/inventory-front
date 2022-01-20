// import './App.css';
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DeletePage from "../pages/DeletePage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";
import ByCategoryPage from "../pages/ByCategoryPage";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/by/category" element={<ByCategoryPage />} />
          <Route exact path="/delete" element={<DeletePage />} />
          <Route exact path="/create" element={<CreatePage />} />
          <Route exact path="/update" element={<UpdatePage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
