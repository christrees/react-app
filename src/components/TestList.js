import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions'; 


class TestList extends Component {
    renderRepos() {
        return this.props.repos.map(repo => {
            return <li key={repo}>{repo}</li>;
        });
    }

    render() {
        return (
            <div>
                <button className="fetch-repos" onClick={this.props.fetchRepos}>Fetch christrees github repos</button>
                <h4>Github Repo List - christrees</h4>
                <ul>
                    {this.renderRepos()}
                </ul>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { repos: state.repos };
}

export default connect(mapStateToProps, actions)(TestList);
