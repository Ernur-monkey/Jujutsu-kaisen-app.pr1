import React from 'react';
import "./assets/css/style.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import MenuPage from "./pages/MenuPage";
import CategoryPage from "./pages/CategoryPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <main class="back">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<InfoPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/category/posts" element={<CategoryPage />} />
      </Routes>
    </main>
    </>
  )
}

export default App;
