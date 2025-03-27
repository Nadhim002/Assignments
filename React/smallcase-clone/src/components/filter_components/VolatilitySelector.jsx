import React from 'react'

export default function VolatilitySelector() {

  const volatalityOptions = [ "Low" , "Medium" , "High"]

  return (

      < div >
  
        <h3 className="font-semibold text-gray-900 dark:text-white">
        {"Volatility"}
        </h3>
  
        <div className="items-center w-full text-sm font-medium text-gray-900 bg-white border flex justify-between gap-2">

          {volatalityOptions.map(volatality => (

                < div  key={volatality} className='grow'>
                    <input type="checkbox" id ={volatality} name='volatality' className='sr-only peer' />  
                    <label htmlFor= {volatality} className=' border border-gray-400 peer-checked:border-2 peer-checked:border-indigo-500 flex flex-col justify-center items-center' >
                      <img src="src/assets/risk.png" alt="" className='w-4 h-4' />
                    {volatality}  
                    </label>                
                 </ div >


          ))}

        </div>

        </ div >
    )
  
}
