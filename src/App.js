import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import PropTypes from 'prop-types';
import {navItems} from './utils/MenuItems';
import NavItemLink from './components/common/NavItemLink';
import {toTitle} from './utils/Utils';
import Home from './components/home/HomePage';
import Members from './components/members/MembersPage';
import './App.css';

const styles = {
  content: { minHeight: 'auto' },
};

class App extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super();
    this.state = { toolbarTitle: this.getCurrentTitle(props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (lastSection === 'navigation-drawers') {
      return 'Inbox';
    }

    return toTitle(lastSection);
  };
  render() {
    const { toolbarTitle } = this.state;
    const { location } = this.props;
    return (
      <NavigationDrawer
      toolbarTitle={toolbarTitle}
      mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
      tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
      desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
      navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
      contentId="main-demo-content"
      contentStyle={styles.content}
      contentClassName="md-grid"
    >
      <Switch key={location.pathname}>
        <Route path={navItems[0].to} exact component={Members} />
        <Route path={navItems[1].to} component={Home} />
      </Switch>
    </NavigationDrawer>
    );
  }
}

export default withRouter(App);
