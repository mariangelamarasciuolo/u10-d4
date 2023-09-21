import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Title from "./components/Title";
import FetchArticles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Title />
        </Container>
        <Routes>
          <Route path="/" element={<FetchArticles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
