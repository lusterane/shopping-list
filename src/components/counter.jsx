import React, { Component } from 'react';

export default class Counter extends Component {
    state = { 
        count: 0,
        tags: []
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)  }
            </ul>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && <p>Please create a new tag.</p>}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}
