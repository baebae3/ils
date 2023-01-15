import React from 'react'
import TableComponent from './components/table/TableComponent'
import MapComponent from './components/map/MapComponent'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <TableComponent />
      <MapComponent />
    </div>
  )
}

export default App