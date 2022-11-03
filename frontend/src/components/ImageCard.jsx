import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        style={{ height: '220px', objectFit: 'cover' }}
        variant="top"
        src={image.urls.small}
      />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image?.description || image?.alt_description}</Card.Text>
        <Button onClick={() => deleteImage(image.id)} variant="primary">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
