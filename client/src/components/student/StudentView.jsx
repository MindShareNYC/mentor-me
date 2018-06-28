import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sessions from './Sessions.jsx';
import Classroom from '../communication/Classroom.jsx';
import Settings from '../Settings.jsx';
import TutorRegistration from './TutorRegistration.jsx';
import TestList from './TestList.jsx';


class StudentView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          routes:[
                {
                    path: "/student",
                    main: TestList
                },
                {
                  path: "/sessions",
                  main: Sessions
                },
                {
                  path: "/classroom",
                  main: Classroom
                },
                {
                  path: "/settings",
                  main: Settings
                },
                {
                  path: "/becometutor",
                  main: TutorRegistration
                }
            ]};
      }
    render() {
      
        return (
          <Router>
          <div> 
              <ul>
                <li>
                  <Link to="/sessions">Sessions</Link>
                </li>
                <li>
                  <Link to="/classroom">Classroom</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/becometutor">Become a Tutor</Link>
                </li>
              </ul>
              {this.state.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
          </div>
        </Router>
        )
    }
}


export default StudentView;