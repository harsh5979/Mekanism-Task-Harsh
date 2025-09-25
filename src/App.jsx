import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Card from './components/card'

function App() {
  const [serach, setSearch] = useState("")
  const itemPerpage = 4;
  const [Currentpage, setCurrentPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)




  const fetchData = async () => {

    const response = await axios.get("https://685d3183769de2bf085fb3e1.mockapi.io/api/v1/pokemons")
    return response.data;

  }


  const { data, isLoading } = useQuery({ queryKey: ['data'], queryFn: fetchData })




  if (isLoading) {
    return (
      <div className=" items-center flex text-3xl text-white justify-center h-screen w-full ">
        loading........
      </div>
    )

  }

  const allData = serach ? data?.filter((e) => (e.name.toLowerCase().includes(serach.toLowerCase()))).slice(0, itemPerpage) : data.slice(startIndex, Currentpage * itemPerpage)


  const handlePage = (e) => {
    setStartIndex((e - 1) * itemPerpage)
    setCurrentPage(e)
  }
  const totalPages = Math.ceil(data.length / itemPerpage)


  return (
    <div className='bg-black w-full h-screen'>
      <div className="    flex flex-col items-center    justify-center  ">
        <div className="  flex flex-col item-center h-fit w-full mx-auto items-center mt-7 mb-3">

          <h1 className='text-blue-800 font-bold items-center  text-4xl  '>Pokédex</h1>

          <p className='text-gray-600'>Discover amazing Pokémon and their incredible super powers

          </p>
        </div>

        <div className=" flex items-center text-white   my-5 w-1/3 content-center ">
          <input
            name='serach'
            onChange={(e) => setSearch(e.target.value)}
            type="text" placeholder='Search by name species or type ' className=' p-2 bg-white w-full text-black rounded-2xl' />
        </div>
      </div>

      <Card allData={allData} />
      <div className=" w-full text-2xl text-white items-center  flex justify-center mx-auto m-auto ">


        {Array.from({ length: totalPages })?.map((_, i) =>
        (
          <div className="flex  gap-3" key={i}>

            <button
              onClick={() => handlePage(i + 1)} className={` flex mx-2 border px-3 mb-8 rounded-xl py-1  ${Currentpage=== i+1 ? 'bg-blue-400':'bg-blue-800'}`} disabled={Currentpage === i+1}  >{i + 1}</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
