import { Card } from "react-bootstrap";
import { Article } from "../interface/Article";

interface SingleArticleProps {
  art: Article;
  chooseArt: (artTitle: string) => void;
}

const SingleArticle = ({ art, chooseArt }: SingleArticleProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={art.imageUrl} />
      <Card.Body>
        <Card.Title>{art.title}</Card.Title>
        <Card.Text>{art.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleArticle;
