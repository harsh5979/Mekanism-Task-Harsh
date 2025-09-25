import React from 'react'

const Card = ({ allData }) => {
    return (
        <div className=" w-auto md:flex-row flex-col my-5 flex gap-8 overflow-hidden p-6 mx-10 text-white">
            {allData?.map((e) => (

                <div key={e.id} className={`flex flex-wrap cursor-pointer  hover:scale-110   `}>
                    <div
                        style={{ backgroundColor: e.card_color }}
                        className={`border border-yellow-300  w-[300px] rounded-2xl items-center  p-4 text-white h-[350px] `}>

                        <div className=" w-[150px] h-fit items-center content-center m-auto  mx-auto flex justify-center ">

                            <img src={e.image} alt="" />

                        </div>
                        <div className=" flex flex-col items-center my-2">

                            <h1 className="text-gray-300 font-bold">
                                {e.name}
                            </h1>
                            <p className="text-black text-xl font-bold">{e.species}</p>
                        </div>
                        <p style={{ backgroundColor: e.species_color }}
                            className={` rounded-2xl   w-fit p-2 border flex items-center justify-center  m-auto`}>{e.type}</p>
                        {/* <p>{e.species_color}</p> */}

                        <div className="  w-full my-3">
                            <h1 className='text-xl text-gray-400 mb-2'>Super Powers :</h1>
                            <div className=' w-full flex gap-3 flex-wrap '>


                                {e?.super_powers?.map((p) => (

                                    <div key={p} className="flex  text-sm  p-1 px-2   shadow-inner  text-gray-200 rounded-2xl bg-white font-mono ">
                                        {p}
                                    </div>


                                ))}
                            </div>

                        </div>

                    </div>


                </div>



            ))}


        </div>
    )
}

export default Card
