import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import Admin from './assets/components/Admin.jsx';
import NoPage from './assets/components/NoPage.jsx';
import Edit from './assets/components/Edit.jsx';
import EditPage from './assets/components/EditPage.jsx';
import AddProduct from './assets/components/AddProduct.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/duzenleme/sayfasi/q/q/q/t/addProduct" element={<AddProduct/>}></Route>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/*" element={<NoPage />} />
      <Route path='/admin/duzenleme/sayfasi/q/q/q/t' element={<Edit/>}></Route>
      <Route path='/admin/duzenleme/sayfasi/q/q/q/t/editPage/' element={<EditPage/>}></Route>
    </Routes>
  </BrowserRouter>
);
