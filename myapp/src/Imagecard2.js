import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Imagecard2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.2bGkf8kw-03I4W39k55LKwHaEo&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Imagecard2;