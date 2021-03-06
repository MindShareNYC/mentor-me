import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class VideoChat extends Component {
  state = {
    room_id: 100 + this.props.room_id,
    active: false,
    upcomingSession: this.props.upcomingSessions,
    upcomingCaller: '',
    countdown: null
  };
  render() {
    
    var callerType = this.props.isTutor ? 'Student' : 'Tutor';
    return (
      <div>
        <iframe
          src={`https://tokbox.com/embed/embed/ot-embed.js?embedId=8544449c-6e81-4eed-a738-3ae823ba780e&room=${
            this.state.room_id
          }&iframe=true`}
          width="800px"
          height="640px"
          allowFullScreen="true"
          allow="microphone; camera"
        />
        <br />
        <Button
          bsStyle="success"
          type="submit"
          onClick={this.props.handleSubmit}
        >
          End and Review
        </Button>
      </div>
    );
  }
}

export default VideoChat;
