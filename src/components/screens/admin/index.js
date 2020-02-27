import React, { Component } from 'react';
import {
  Switch,
  Link,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../../assets/styles/admin.scss';
import { appContants } from '../../../config';
import Dashboard from './dashboard';
import RoleManagement from './roleManagement';

const { routes } = appContants;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Dashboard',
      activeRoute: routes[0].title,
    };
  }

  componentDidMount() {
    const { history } = this.props;

    history.listen((location) => {
      const activeRoute = routes.find((item) => (item.route === location.pathname));
      this.setState({
        heading: activeRoute.title || '',
        activeRoute: activeRoute.title || routes[0].title,
      });
    });
  }

  render() {
    const { heading, activeRoute } = this.state;
    const { match } = this.props;
    const { path } = match;

    return (
      <div className="admin-container">
        <header className="header">
          <div className="app-name">
            <span className="part-1">React</span>
            <span>Boilerplate</span>
          </div>
        </header>
        <aside className="sidebar">
          <h4 className="heading">Navigation</h4>
          <ul>
            {
              routes.map((item) => (
                <li className={activeRoute === item.title ? 'active' : ''}>
                  <i className="material-icons">{item.icon}</i>
                  <Link to={`${item.route}`}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </aside>
        <div className="app-content">
          <h2>{heading}</h2>
          <Switch>
            <Route exact path={`${path}/`}>
              <Dashboard />
            </Route>
            <Route path={`${path}/role-management`}>
              <RoleManagement />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default withRouter(Admin);
