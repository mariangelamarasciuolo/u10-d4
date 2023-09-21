import { useEffect, useState } from "react";
import { ArtContain, Result } from "../interface/Article";
import { Col, Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

const FetchArticles = () => {
  const [articles, setArtcles] = useState<Result[]>([]);
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const artContainFromAPI: ArtContain = await resp.json();
        setArtcles(artContainFromAPI.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {articles.map((art: Result) => (
          <Col key={`id-${art.id}`}>
            <SingleArticle art={art} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default FetchArticles;
