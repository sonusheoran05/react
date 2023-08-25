import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageCard3 = ({title,imgsrc,desc}) => {
  return (
    <div>
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgsrc}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    
    </div>
  )
}

export default ImageCard3
