import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import Headers from './components/Headers'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffes] = useState(loadedCoffees)
  console.log(coffees);
  return (
    <>
    {/* <Headers></Headers> */}
     <div className='container mx-auto'>
      
     <h1 className='text-center text-5xl text-purple-600 py-8 mb-12'>Our Popular products: {coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {coffees.map(coffee => <CoffeeCard setCoffes={setCoffes} coffees={coffees} key={coffee._id} coffee={coffee}></CoffeeCard>)}
     </div>
     </div>
    </>
  )
}

export default App
