import { useState } from 'react'
import TollItem from './TollItem'

function App() {
  const [items] = useState([
    {
      id: 1,
      toll_image: './src/assets/single_light.svg',
      toll_vehicle: 'Single person, light load',
      price_1: 1,
      denomination_1: 'As',
      cost: 0.1,
    },

    {
      id: 2,
      toll_image: './src/assets/single_heavy.svg',
      toll_vehicle: 'Single person, heavy load',
      price_1: 2,
      denomination_1: 'As',
      cost: 0.2,
    },

    {
      id: 3,
      toll_image: './src/assets/single_cart.svg',
      toll_vehicle: 'Single person, hand-drawn cart',
      price_1: 1,
      denomination_1: 'Dupondius',
      price_2: 1,
      denomination_2: 'As',
      cost: 0.3,
    },

    {
      id: 4,
      toll_image: './src/assets/horse_rider.svg',
      toll_vehicle: '1 horse + rider',
      price_1: 2,
      denomination_1: 'Dupondius',
      cost: 0.4,
    },

    {
      id: 5,
      toll_image: './src/assets/horse_cart.svg',
      toll_vehicle: 'Horse-drawn cart, 1 horse',
      price_1: 3,
      denomination_1: 'Dupondius',
      cost: 0.6,
    },
    {
      id: 6,
      toll_image: './src/assets/horse_cart.svg',
      toll_vehicle: 'Horse-drawn cart, 2-3 horses',
      price_1: 4,
      denomination_1: 'Dupondius',
      cost: 0.8
    },
    {
      id: 7,
      toll_image: './src/assets/horse_cart.svg',
      toll_vehicle: 'Horse-drawn cart, 4-5 horses',
      price_1: 1,
      denomination_1: 'Denarius',
      cost: 1
    },
    {
      id: 8,
      toll_image: './src/assets/horse_cart.svg',
      toll_vehicle: 'Horse-drawn cart, 6 horses',
      price_1: 1,
      denomination_1: 'Denarius',
      price_2: 2,
      denomination_2: 'Sestertius',
      cost: 1.5,
    },

  ] as Toll[]);

  const [count, setCount] = useState(0);

  const [vehicle, setVehicle] = useState("");

  return (
    <div className="max-w-full min-h-screen bg-old-lace font-sans">
      <main className="">
        <header className="">
          <h1 className="bg-gradient-to-r from-antique-ruby/80 via-antique-ruby/100 to-antique-ruby/80 text-4xl font-bold p-4 text-center text-dutch-white">City of Virunum Council</h1>
          <p className="bg-gradient-to-r from-dark-vanilla/80 via-dark-vanilla/100 to-dark-vanilla/80 text-black font-bold p-2 text-2xl text-center">Toll Collection Services</p>
        </header>
        <body className="flex flex-col items-center min-w-full ">
          <p className="text-antique-ruby text-center text-xl p-3">All travellers and goods transports passing through Virunum are required to pay a toll to enter our fine city</p>
          <p className="text-amaranth-red font-bold text-center text-xl p-3">Before entering, please ensure that you have paid the correct toll in advance, as entry may be refused</p>
          <div className="p-3 m-2">
            <p className=" text-center bg-gradient-to-r from-antique-ruby/80 via-antique-ruby/100 to-antique-ruby/80 text-dutch-white rounded-t-xl font-bold text-3xl p-4">Toll Prices</p>
            <p className="text-center text-lg mt-3">Please select the appropriate toll for your entry below </p>
            <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-items-center rounded-b-xl bg-gradient-to-t from-dark-vanilla/50 to-old-lace/75">
              {items.map((toll) => {return <TollItem key={toll.id} toll={toll} onCountUpdate={(updatedCount) => setCount(updatedCount)} onVehicleUpdate={(updatedVehicle) => setVehicle(updatedVehicle)}/>})}
            </div>
            <div>
              <p>Current {vehicle} Toll Count: {count}</p>
            </div>
          </div>

        </body>
      </main>
    </div>
  )
}

export default App