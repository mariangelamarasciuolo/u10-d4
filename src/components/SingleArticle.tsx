import { Card } from "react-bootstrap";
import { Result } from "../interface/Article";

interface SingleArticleProps {
  art: Result;
}

const SingleArticle = ({ art }: SingleArticleProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={art.image_url} />
      <Card.Body>
        <Card.Title>{art.title}</Card.Title>
        <Card.Text>{art.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleArticle;
