import { useState, useEffect } from 'react'
import axios from 'axios'
import Inputs from './components/Inputs'
import Persons from './components/Persons' 

const App = () => {
  const [persons, setPersons] = useState([])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNombre, setFilterNombre] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilterNombre(event.target.value)


  useEffect(() => {
    console.log('effect')
    axios
      .get(' http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })

  },[])
  console.log('render', persons.length, 'notes')

  const addName = (event) => {
    event.preventDefault()
    const nameExists = persons.some(
      person => person.name.toLowerCase() === newName.trim().toLowerCase()
    )

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim(),
      id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = filterNombre.trim().length > 0
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filterNombre.trim().toLowerCase())
      )
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <Inputs value={filterNombre} onChange={handleFilterChange}/>
      </div>
      <form onSubmit={addName}>
        <div>
          name: <Inputs
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <Inputs 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
