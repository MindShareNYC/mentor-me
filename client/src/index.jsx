import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import { Redirect } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/* Import Components */

// import Login from './components/Login.jsx';
// import Classroom from './components/Classroom.jsx';
// import Sessions from './components/Sessions.jsx';
// import Settings from './components/Settings.jsx';
// import TestList from './components/TestList.jsx';
// import TutorRegistration from './components/TutorRegistration.jsx';
// import TutorReview from './components/TutorReview.jsx';
// import SecretRoute from './SecretRoute.jsx';
// import Home from './components/Home.jsx';
// import StudentView from './components/StudentView.jsx';
// import TestProfile from './components/TestProfile.jsx';
// import TutorProfile from './components/TutorProfile.jsx';
// import Chat from './components/Chat.jsx';
// import Review from './components/Review.jsx';

/* Import Services */
import AuthService from './Auth/AuthService.js';
import AuthStatus from './Auth/AuthStatus.js';

/* Lazy Loaders */
import Async from 'react-code-splitting';

const Login = props => <Async load={import('./components/Login.jsx')} componentProps={props} />
const TutorProfile = props => <Async load={import('./components/TutorProfile.jsx')} componentProps={props} />
const Sessions = props => <Async load={import('./components/Sessions.jsx')} componentProps={props} />
const TestProfile = props => <Async load={import('./components/TestProfile.jsx')} componentProps={props} />
const Review = props => <Async load={import('./components/Review.jsx')} componentProps={props} />
const Settings = props => <Async load={import('./components/Settings.jsx')} componentProps={props} />
const TestList = props => <Async load={import('./components/TestList.jsx')} componentProps={props} />
const Classroom = props => <Async load={import('./components/Classroom.jsx')} componentProps={props} />
const TutorRegistration = props => <Async load={import('./components/TutorRegistration.jsx')} componentProps={props} />
const TutorReview = props => <Async load={import('./components/TutorReview.jsx')} componentProps={props} />
const Home = props => <Async load={import('./components/Home.jsx')} componentProps={props} />
const StudentView = props => <Async load={import('./components/StudentView.jsx')} componentProps={props} />
const SecretRoute = props => <Async load={import('./SecretRoute.jsx')} componentProps={props} />


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      tests: [],
      tutors: [],
      isTutor: -1
    };
    this.getid = this.getid.bind(this);
    this.getAllTests = this.getAllTests.bind(this);
    this.getTutors = this.getTutors.bind(this);
    this.getSelectTutors = this.getSelectTutors.bind(this);
    this.checkTutorStatus = this.checkTutorStatus.bind(this);
  }
  

  getid(id) {
    this.setState({
      id: id
    });
  }

  checkTutorStatus(id,tutors){
    console.log('checking tutor status')
    if(tutors.indexOf(id)>-1){
      console.log('Tutor is here!')
      this.setState({
        isTutor: 1
      })
    }
  }

  getAllTests() {
    axios
      .get('/tests')
      .then(({ data }) => {
        this.setState({
          tests: data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getTutors() {
    axios
      .get('/tutors')
      .then(({ data }) => {
        this.setState({
          tutors: data,
          tutors_ids: data.map(a => a.id)
        });
      })
      .then(()=>{
        console.log('array? >> ',this.state.id)

      })
      .catch(err => {
        console.error('There was an error getting all the tutors: ', err);
      });
  }

  getSelectTutors() {
    axios
      .get('/tutors/selectTutors', {
        params: {
          test_id: id
        }
      })
      .then(({ data }) => {
        this.setState({
          tutors: data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getTutors();
    this.getAllTests();
  }

  render() {
    let conditionalTitle = this.state.isTutor > -1 ? 'Earnings' : 'Become a Tutor'
    return (
      <div>
        <Navbar style={{ fontSize: `130%` }}>
          <Nav>
            <LinkContainer to={'/'}>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to={'/findTutor'}>
              <NavItem>Find A Tutor</NavItem>
            </LinkContainer>
            <LinkContainer to={`/sessions/${this.state.id}`}>
              <NavItem>All Sessions</NavItem>
            </LinkContainer>
            {/* <LinkContainer to={'/chat'}>
              <NavItem>All Chats</NavItem>
            </LinkContainer> */}
            <LinkContainer to="/classroom">
              <NavItem>Classroom</NavItem>
            </LinkContainer>
            <LinkContainer to="/tutor">
              <NavItem>{conditionalTitle}</NavItem>
            </LinkContainer>
            <LinkContainer to="/settings">
              <NavItem>Settings</NavItem>
            </LinkContainer>
            <AuthStatus />
          </Nav>
        </Navbar>
  {/*TESTING FOR LIVE CHAT*/}
  {/* < Chat /> */}
  {/*TESTING FOR LIVE CHAT*/}
        <Route
          exact
          path="/"
          render={routerProps => <Home {...routerProps} id={this.state.id} />}
        />
        <Route
          path="/login"
          render={routerProps => (
            <Login
              className="login"
              tests={this.state.tests}
              testProps={this.state.tests}
              {...routerProps}
              id={this.state.id}
              tutors_ids = {this.state.tutors_ids}
              getid={this.getid}
              checkTutorStatus={this.checkTutorStatus}
            />
          )}
        />
        <Route
          path="/tutors/:id"
          render={routerProps => (
            <TutorProfile {...routerProps} id={this.state.id} />
          )}
        />
        <Route
          path="/tests/:id"
          render={routerProps => (
            <TestProfile {...routerProps} id={this.state.id} />
          )}
        />
        <Route
          path="/review"
          render={routerProps => <Review {...routerProps} />}
        />
        <SecretRoute
          path="/findTutor"
          render={routerProps => (
            <StudentView
              {...routerProps}
              tests={this.state.tests}
              id={this.state.id}
            />
          )}
        />
        <SecretRoute
          path="/sessions/:id"
          render={routerProps => (
            <Sessions {...routerProps} id={this.state.id} />
          )}
        />
        {/* <SecretRoute 
          path='/chat' 
          render={(routerProps) => (
            <Chat {...routerProps} 
            id={this.state.id} 
            />
          )}
        /> */}
        <SecretRoute
          path="/classroom"
          render={routerProps => (
            <Classroom
              {...routerProps}
              setTestid={this.setTestid}
              id={this.state.id}
            />
          )}
        />
        <SecretRoute
          path="/tutor"
          render={routerProps => (
            <TutorRegistration
              {...routerProps}
              setTestid={this.setTestid}
              id={this.state.id}
              tutors_ids={this.state.tutors_ids}
              isTutor={this.state.isTutor}
            />
          )}
        />
        <SecretRoute
          path="/settings"
          render={routerProps => (
            <Settings
              {...routerProps}
              setTestid={this.setTestid}
              id={this.state.id}
            />
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App location={location} />
  </HashRouter>,
  document.getElementById('app')
);
export default App;
