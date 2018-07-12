import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const SessionCard = props => {
  return (
    <div className="card-border">
      <Card>
        <CardBody>
          <CardTitle><p>{props.tests[props.session.test_id]}</p></CardTitle>
          <CardSubtitle>
            Tutor: {props.session.Name}<br/>
            Date: {props.session.date.slice(0, 10)}<br/>
            Time: {Number(props.session.time.slice(0, 2)) < 12
            ? props.session.time.slice(0, 5) + ' a.m.' : 
            String(24 - Number(props.session.time.slice(0, 2))) + props.session.time.slice(2, 5) + ' p.m.'}
          </CardSubtitle>
          <Button color="info" size="sm" onClick={() => { props.deleteSession(props.session.id); }}>
            Cancel Session
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};



export default SessionCard;