import { useEffect, useState } from "react";
import { Article } from "../interface/Article";
import { Col, Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

const FetchArticles = () => {
  const [articles, setArtcles] = useState<Article[]>([]);
  const fetchArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const artFromAPI = await resp.json();
        setArtcles(artFromAPI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const chooseArt = (artTitle: string) => {
    console.log("hai scelto" + artTitle);
  };
  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {articles.results.map((art) => (
          <Col key={`id-${art.id}`}>
            <SingleArticle art={art} chooseArt={chooseArt} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default FetchArticles;
