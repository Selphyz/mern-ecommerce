import React from "react";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import HomePage from "./pages/HomePage";
import ProductScreen from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
