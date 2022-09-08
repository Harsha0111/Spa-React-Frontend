import React from "react";
import AppBar from "../components/AppBar";
import Carousels from "../components/Carousels";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { products } from "../data/dummy";
import AppBody from "../components/AppBody";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <AppBar />
      <Carousels />
      <AppBody>
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="mt-5">
                <Title title="Recommended Products" />
                <Container>
                  <Row>
                    {products.map((product, index) => {
                      return (
                        <Col md={4}>
                          <ProductItem
                            image={product.image}
                            name={product.name}
                            price={product.price}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stack gap={3} className="my-5">
                <Title title="Recommended Services" />
                <Container>
                  <Row>
                    {products.map((product, index) => {
                      return (
                        <Col md={4}>
                          <ProductItem
                            image={product.image}
                            name={product.name}
                            price={product.price}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Stack>
            </Col>
          </Row>
        </Container>
      </AppBody>
      <Footer />
    </div>
  );
};

export default Homepage;
