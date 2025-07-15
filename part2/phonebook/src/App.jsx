import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleNameChange = (event) => setNewName(event.target.value)

    // exercise 2.8
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    // exercise 2.9
    const handleFilterChange = (event) => setFilter(event.target.value)


    const handleSubmit = (event) => {
        event.preventDefault() // Prevent the default form submission behavior
        // exercise 2.7
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(persons.concat({ name: newName, number: newNumber })) // Add the new name to the persons array
        setNewName('') // Clear the input field after submission
        setNewNumber('')
    }

    // exercise 2.9
    const personsToShow = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            <h2>Phonebook</h2>
            {/*<div>*/}
            {/*    filter shown with <input value={filter} onChange={handleFilterChange} />*/}
            {/*</div>*/}

            {/*exercise 2.10*/}
            <Filter value={filter} onChange={handleFilterChange} />
            <h2>Add a new</h2>
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <div>*/}
            {/*        name: <input value={newName} onChange={handleNameChange} />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        number: <input value={newNumber} onChange={handleNumberChange} />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button type="submit">add</button>*/}
            {/*    </div>*/}
            {/*</form>*/}

            {/* exercise 2.10 */}
            <PersonForm
                onSubmit={handleSubmit}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            {/*<div>*/}
            {/*    {personsToShow.map((person, index) => (*/}
            {/*        <div key={index}>{person.name} {person.number}</div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*exercise 2.10*/}
            <Persons persons={persons} handleNameChange={handleNameChange} />
            <div>debug: {newName} {newNumber}</div>
        </div>
    )
}

export default App