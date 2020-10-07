import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import 'index.css';

ReactDOM.render(
  <>
    <Navbar />
    <Sidebar />
  </>
  ,
  document.getElementById('root')
);


