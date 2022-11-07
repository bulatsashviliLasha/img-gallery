import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Nav} from "react-bootstrap";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorPortfolioURL = image.user?.portfolio_url;
  const authorName = image.user?.name;
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        style={{ height: '220px', objectFit: 'cover' }}
        variant="top"
        src={image.urls.small}
      />
      <Card.Body>
        <Card.Title>{image?.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image?.description || image?.alt_description}</Card.Text>
        <Button onClick={() => deleteImage(image.id)} variant="danger">
          Delete
        </Button>{' '}
          {!image.saved && <Button onClick={() => saveImage(image.id)} variant="primary">Save</Button>}
      </Card.Body>
        <Card.Footer className="text-center text-muted">
            {authorPortfolioURL && <Nav.Link href={authorPortfolioURL} target="_blank">{authorName}</Nav.Link>}
        </Card.Footer>
    </Card>
  );
};

export default ImageCard;
