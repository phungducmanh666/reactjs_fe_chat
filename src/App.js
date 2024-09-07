import logo from "./logo.svg";
import "./App.css";
import Button from "~components/button/Button";
import Typography from "~components/typography/Typography";
import Avatar from "./components/avatar/Avatar";
import Collapse from "./components/collapse/Collapse";
import { useState } from "react";
import Popup from "./components/popup/Popup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main/layout/MainLayout";
import PageSignup from "./pages/signup/PageSignup";
import PageSignin from "./pages/signin/PageSignin";
import PageHome from "./pages/home/PageHome";
import PageFriend from "./pages/friend/PageFriend";
import PageChat from "./pages/chat/PageChat";

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<PageSignup />}></Route>
        <Route path="/signin" element={<PageSignin />}></Route>
        <Route element={<MainLayout />}>
          <Route index element={<PageHome />} />
          <Route path="/friend" element={<PageFriend />} />
          <Route path="/chat" element={<PageChat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
