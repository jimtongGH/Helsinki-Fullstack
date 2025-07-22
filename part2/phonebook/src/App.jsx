import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notification, setNotification] = useState(null)
    const [notificationType, setNotificationType] = useState('success')

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const showNotification = (message, type = 'success') => {
        setNotification(message)
        setNotificationType(type)
        setTimeout(() => {
            setNotification(null)
        }, 5000)
    }

    const addPerson = (event) => {
        event.preventDefault()

        const existingPerson = persons.find(person => person.name === newName)

        if (existingPerson) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const changedPerson = { ...existingPerson, number: newNumber }
                personService
                    .update(existingPerson.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person =>
                            person.id !== existingPerson.id ? person : returnedPerson
                        ))
                        setNewName('')
                        setNewNumber('')
                        showNotification(`Updated ${returnedPerson.name}`)
                    })
                    .catch(error => {
                        showNotification(
                            `Information of ${existingPerson.name} has already been removed from server`,
                            'error'
                        )
                        setPersons(persons.filter(p => p.id !== existingPerson.id))
                    })
            }
        } else {
            const personObject = { name: newName, number: newNumber }
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    showNotification(`Added ${returnedPerson.name}`)
                })
                .catch(error => {
                    showNotification(`Failed to add ${newName}`, 'error')
                })
        }
    }

    const deletePerson = (id, name) => {
        console.log('deleting', id, name)
        if (window.confirm(`Delete ${name} ?`)) {
            personService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                    showNotification(`Deleted ${name}`, 'error')
                })
                .catch(error => {
                    showNotification(
                        `Information of ${name} has already been removed from server`,
                        'error'
                    )
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    const handleNameChange = (event) => setNewName(event.target.value)

    // exercise 2.8
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    // exercise 2.9
    const handleFilterChange = (event) => setFilter(event.target.value)


    // const handleSubmit = (event) => {
    //     event.preventDefault() // Prevent the default form submission behavior
    //     // exercise 2.7
    //     if (persons.some(person => person.name === newName)) {
    //         alert(`${newName} is already added to phonebook`)
    //         return
    //     }
    //     setPersons(persons.concat({ name: newName, number: newNumber })) // Add the new name to the persons array
    //     setNewName('') // Clear the input field after submission
    //     setNewNumber('')
    // }

    // exercise 2.9
    const personsToShow = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notification} type={notificationType} />
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
                onSubmit={addPerson}
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
            {/*<Persons persons={persons} handleNameChange={handleNameChange} />*/}
            <Persons persons={personsToShow} deletePerson={deletePerson} />
            <div>debug: {newName} {newNumber}</div>
        </div>
    )
}

export default App