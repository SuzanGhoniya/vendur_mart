import React, { Component } from 'react'
import '../../component/layout.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'gatsby';

export default class Caro extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={3000}>
          <Link to="/grocery" alt="Grocery logo">
            <img
              className="d-block w-100 mx-auto zoom1"
              src={"https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/c1.webp?alt=media&token=e41275ef-c5fa-4ae9-8cee-a4f77c906825"}
              alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>Grocery</h3>
            <b>Condiments, Grains and Bread, Oil & Fat, Dairy Product, etc</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Link to="" alt="Grocery logo">
            <img
              className="d-block w-100 mx-auto zoom1"
              src={"https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/c2.webp?alt=media&token=59877ed9-4660-4e2e-bbea-e89fb08676b5"}
              alt="Second slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>Electronics</h3>
            <b>Computer accessories, Office products, Mobile accessories, etc</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Link to="" alt="Grocery logo">
            <img
              className="d-block w-100 mx-auto zoom1"
              src={"https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/c3.webp?alt=media&token=8739873e-839b-414f-8cf4-e174f3d1cd50"}
              alt="Third slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>Pharmaceuticals</h3>
            <b></b>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
