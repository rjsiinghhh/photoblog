import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Card, Jumbotron} from 'react-bootstrap';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Carousel from 'react-bootstrap/Carousel'


function App() {




  return (
    <div className="logo">

  <img src="https://i.imgur.com/BPZ7RAe.png" />

  <div className="container">

  <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/dvKaBqN.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/CKYs3aX.jpeg"
        alt="Third slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/P80thrH.jpeg"
        alt="Third slide"
      />

    </Carousel.Item>

    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/G3PkgLo.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/9CrEpe7.jpeg"
        alt="Third slide"
      />

    </Carousel.Item>
  




    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/eFUfSHm.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/rzgi0bN.jpeg"
        alt="Third slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/7Sr3W37.jpeg"
        alt="Third slide"
      />

    </Carousel.Item>




    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/YvLLpYo.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/ua7buJf.jpeg"
        alt="Third slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/QSnQ2F5.jpeg"
        alt="Third slide"
      />

    </Carousel.Item>










        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/JSFCb7s.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/PL8gCmh.jpeg"
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/iDYsPJ7.jpeg"
            alt="Third slide"
          />

        </Carousel.Item>




  </Carousel>



</div>
< Footer />
</div>


  );
}


export default App;
