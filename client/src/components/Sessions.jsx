import React, {Component} from 'react';
import axios from 'axios';

class Sessions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessions: []
    }
    this.getUpcomingSessions = this.getUpcomingSessions.bind(this)
    this.deleteSession = this.deleteSession.bind(this)
  }

  getUpcomingSessions() {
   const id = this.props.id
    axios.get(`/sessions/${id}`)
    .then(({data}) => {
      this.setState({
          sessions: data
      });
    })
  }

  deleteSession(id){
    axios.delete(`/sessions/${id}`)
    .then(() => {
        this.getUpcomingSessions()
    })
  }

  componentDidMount(){
    this.getUpcomingSessions()
  }

  render() {
    // import Link from react-router-dom and wrap around info.date or whatever we decide to put in there
    // also wrap whatever we put in there with a button that also has access to the id of the session 
    // put onClick => this.deleteSession
    console.log(this.state.sessions, this.props, 'asdf')
    return (
        <div>
            <h1>Session Component!</h1> 
            <ul className="all-sessions">
            {/* {this.state.sessions.map((info, index) => {
                return (<li key={index} >{info.date}</li>)
            })} */}
            {this.state.sessions.map((session, i) => {
              return (
                <div className="indv-session" key={i}>
                  <span>Date: {session.date.slice(0,10)}</span>
                  <br>
                  </br>
                  <span>Time : {session.time.slice(0,5)}</span>
                  <br>
                  </br>
                  <span>Tutor : {session.Name}</span>
                </div>
              )
            })}
            </ul>
        </div>
    )
  }
}

export default Sessions 