import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StreamCreate from "./Component/StreamCreate";
import StreamDelete from "./Component/StreamDelete";
import StreamList from "./Component/StreamList";
import StreamShow from "./Component/StreamShow";
import StreamEdit from "./Component/StreamEdit";
import NavBar from "./NavBar";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/streams/new" element={<StreamCreate />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
        <Route path="/streams/create" element={<StreamShow />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
