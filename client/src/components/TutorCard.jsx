import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const TutorCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="20%" src="https://cdn-images-1.medium.com/max/1200/1*MccriYX-ciBniUzRKAUsAw.png" alt="profile picture" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.rating}</CardSubtitle>
          <Button color="info" onClick={() => props.handleProfileClick()}>See Profile</Button>
        </CardBody>
      </Card>
    </div>
  )
};

export default TutorCard;