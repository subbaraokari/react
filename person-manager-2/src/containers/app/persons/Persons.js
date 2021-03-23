import React, { Component } from 'react';
import Person from './person/Person';
class Persons extends Component {
    render() {
        let persons = null;
        if (this.props.showPersons) {
            persons = this.props.persons.map(person => {
                return <Person
                    deleted={this.props.delete}
                    key={person.pid}
                    pid={person.pid}
                    name={person.name}
                    address={person.address} />
            });
        }
        return (
            <div>
                {persons}
            </div>
        )
    }
}
export default Persons;