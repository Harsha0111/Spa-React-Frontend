import React from "react";
import AppBar from "../components/AppBar";
import AppBody from "../components/AppBody";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import { products } from "../data/dummy";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <>
      <AppBody>
        <AppBar />
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="mt-5">
                <Title title="Products" />
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
    </>
  );
};

export default ProductPage;
