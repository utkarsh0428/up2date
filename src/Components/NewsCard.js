import React from 'react';
import { Card, Button } from 'react-bootstrap'

function NewsCard(props) {
  
    return (
        <div id="card">
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image?props.image:"https://t4.ftcdn.net/jpg/02/58/29/09/360_F_258290955_48MCm6IcnSN3sodcIoOMXnucbTpsFiI9.jpg"} alt="NA" />
            <Card.Body>
                <Card.Title>{`${props.title.slice(0,90)}...`}</Card.Title>
                <Card.Text>
                    {props.desc?props.desc:"Click Read More..."}
                </Card.Text>
                <Button variant="primary"><a href={props.url}>Read More..</a></Button>
            </Card.Body>
            <Card.Footer className="text-muted">{new Date(props.time).toLocaleString()}</Card.Footer>
        </Card>
        </div>
    );
}

export default NewsCard;
