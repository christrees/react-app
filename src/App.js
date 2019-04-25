import React, { Component } from 'react';
import { Route, Link /*, Redirect */ } from 'react-router-dom';
import { connect } from 'react-redux';
import TestList from './components/TestList';
import * as actions from './actions';

class App extends Component {
    renderHeader() {
        if (this.props.auth) {
            return (
                <div>
                    <ul>
                        <li><Link className="nav-list" to="/list">List</Link></li>
                        <li><button className="sign-out" onClick={() => this.props.changeAuth(false)}>Sign Out</button></li>
                    </ul>
                    <Route path="/list" exact component={TestList} />
                </div>
            );
        } else {
            return (
                <ul>
                    <li><button className="sign-in" onClick={() => this.props.changeAuth(true)}>Sign In</button></li>
                </ul>
            );
        }
    };
    render() {
        return (<div>{this.renderHeader()} </div>);
    }
};

function mapStateToProps(state) {
    return { auth: state.auth }
};

export default connect(mapStateToProps, actions)(App);