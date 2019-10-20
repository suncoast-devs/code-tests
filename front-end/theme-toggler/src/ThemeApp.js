import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import { ThemeContext } from './ThemeContext';
import './ThemeApp.css';


export default class ThemeApp extends Component {
  static contextType = ThemeContext;

  render() {
    const {isLightTheme} = this.context;
    const theme = isLightTheme ? '' : 'dark';

    return(
        <main>
          <Nav/>
          <section className={"App" + " " + theme}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About}/>
                </Switch>
          </section>
        </main>
    );
  };
}
