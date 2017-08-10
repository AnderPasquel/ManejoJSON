import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            items: [
                {
                    id: 1,
                    label: '1'
                },
                {
                    id: 2,
                    label: '2'
                },
                {
                    id: 3,
                    label: '3'
                },
                {
                    id: 4,
                    label: '4'
                }
            ],
            hasErrored: false,
            isLoading: false
        };
    }

    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <table>
              <tr>
                {this.state.items.map((item) => (
                    <td key={item.id}>
                        {item.label}
                    </td>
                ))}
                </tr>
            </table>
        );
    }
}

export default App;
