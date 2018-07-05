import React, { Component } from "react";
import io from 'socket.io-client'; 
const socket = io();

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : '',
      messages : ['bingo'],
      sessionId : '781918272828' // hard-coded, delete this and jsut pass in sessionId below
    };
    this.messageHandler = this.messageHandler.bind(this);
    this.postMessage = this.postMessage.bind(this);
    this.clearInput = this.clearInput.bind(this);

    // SOCKET.IO : Client-Side Listeners --> put all here in constructor
    socket.on('sending-back', (msg) => {
      console.log('what does this msg look like on client side :', msg);
      this.setState({
        messages : [msg.message, ...this.state.messages]
      })
    })
  }

  clearInput () {
    this.setState({
      message : ''
    })
  }

  messageHandler (e) {
    console.log('e.target.value', e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  postMessage(e) {
    e.preventDefault();
    if (this.state.message.length > 0) {
      this.setState({
        messages : [this.state.message, ...this.state.messages]
      }, () => {
        socket.emit('new-message', {
          message : this.state.message
        });
        this.clearInput();
      });
    }
  }

  componentDidMount() {
    socket.on('connect', () => {
      console.log('making it into the chat');
      socket.emit('create', {room : this.state.sessionId})
    })
  }

  render() {
    return (
      <div className="chat-container">
        <h1 className="header">Chat Channel</h1>
        <div className="all-messages">
            {this.state.messages.map((msg, i) => {
              return (
                <div key={i} className="msg">
                  <strong>you:</strong> {msg} {/*can inlucde this.props.username at some point down the line*/}
                </div>
              )
            })}
        </div>
        <form className="add-new-message" onSubmit={(e) => {this.postMessage(e)}}>
          <label>New Message:</label>
          <input type="text" name="message" className="input-msg" value={this.state.message} onChange={this.messageHandler}/>
          <button type="submit" value="Submit">Send</button>
        </form>
      </div>
    )
  }
}

export default Chat;