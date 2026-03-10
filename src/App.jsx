import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InviteLanding from "./pages/invite";

const RedirectToDategain = () => {
  React.useEffect(() => {
    window.location.replace("https://dategain.com");
  }, []);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/invite" element={<InviteLanding />} />
        <Route path="*" element={<RedirectToDategain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
