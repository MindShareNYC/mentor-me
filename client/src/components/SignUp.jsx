import React from 'react'
import axios from 'axios';
import Home from './Home.jsx';
import $ from 'jquery';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: '',
      email: '',
      tests: [],
      isTutor: 0,
      bio: '',
      // availableTests: ['DAT','LSAT','SAT','GRE','GMAT','Hack Reactor T A']
      // ID, NAME, DESCRIPTION
      availableTests: [
        {id: 1, name: 'DAT', description: 'dental school test'},
        {id: 2, name: 'LSAT', description: 'law school test'},
        {id: 3, name: 'SAT', description: 'high school test'},
        {id: 4, name: 'GRE', description: 'grad school regular test'},
        {id: 5, name: 'GMAT', description: 'grad school business test'},
        {id: 6, name: 'Hack Reactor T A', description: 'smartest ppl alive test'}
      ]
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.handleIsTutorChange = this.handleIsTutorChange.bind(this);
    this.handleTestsChange = this.handleTestsChange.bind(this);
  }

  inputHandler (e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleIsTutorChange (e) {
    this.setState({
      isTutor : e.target.value
    })
  }

  handleTestsChange (e) {
    var options = e.target.options;
    // console.log('options', options)
    var selectedTests = [];
    for(var i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedTests.push(options[i].value);
      }
    }
    this.setState({
      tests : selectedTests
    }, () => {
      console.log('selected tests', selectedTests);
    });
  }

  handleSignup (e) {
    e.preventDefault();
    console.log('sending axios to add new user');
    // console.log('this.state.tests', this.state.tests);
    axios.post('/users/signup', {
      username : this.state.username,
      password: this.state.password,
      email: this.state.email,
      tests: this.state.tests,
      isTutor: this.state.isTutor,
      bio: this.state.bio
    })
    .then(({data}) => {
      // no need to set state, just redirect to login page (auto login?)
      // auto login
      this.clearInputs(); // just clears input
    })
    .catch((err) => {
      console.error(err);
    })
  }

  clearInputs () {
    $('.signup-input').val('');
  }

  render () {
    return (
      <div>
        <div className="homepage-btn">
          <button onClick={() => {this.props.returnToHomepage()}}>Home</button>
        </div>
        <br></br>
        <div>
          <span>Welcome! Please input your information below</span>
        </div>
        <br></br>
        <form className="" onSubmit={(e) => {this.handleSignup(e)}}>
          <label>Username: </label>
          <input className="signup-input" name="username" onChange={(e) => {this.inputHandler(e)}}></input>
          <br></br>
          <label>Password: </label>
          <input className="signup-input" name="password" onChange={(e) => {this.inputHandler(e)}}></input>
          <br></br>
          <label>Email: </label>
          <input className="signup-input" name="email" onChange={(e) => {this.inputHandler(e)}}></input>
          <br></br>
          <label>Tests (separate by space): </label>
          {/*can create a separate box where all selected tests are added to*/}
          <select onChange={(e) => {this.handleTestsChange(e)}} multiple>
            {this.state.availableTests.map((test, i) => {
              return <option key={i} value={test.id}>{test.name}</option>
            })}
          </select>
          <br></br>
          <label>Tutor Profile: </label>
          <select value={this.state.isTutor} onChange={(e) => {this.handleIsTutorChange(e)}}>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
          <br></br>
          <label>Bio: </label>
          <input className="signup-input" name="bio" onChange={(e) => {this.inputHandler(e)}}></input>
          <br></br>
          <button type="submit" value="Submit">Create New Profile</button>
        </form>
      </div>
    )
  }
}


export default SignUp;