import React from 'react'


//  "ratios" "riskLabel"
// High Volatility , "Medium Volatility" , "Low Volatility"

export default function VolatilitySelector({ desiredVolatilities , setDesiredVolatilities}) {

  const volatalityOptionsMapping =  {
     "Low" : "Low Volatility" , 
     "Medium" : "Medium Volatility" , 
     "High" : "High Volatility"
  }

  function onChangeHandler( volatality ){

    const newDesiredVolatilities = new Set( desiredVolatilities )
    const mappedVolatalityOption = volatalityOptionsMapping[volatality]
    
    if( newDesiredVolatilities.has( mappedVolatalityOption ) ){
      newDesiredVolatilities.delete( mappedVolatalityOption )
    } else {
      newDesiredVolatilities.add( mappedVolatalityOption )
    }

    setDesiredVolatilities( newDesiredVolatilities )

  }

  return (

      < div >
  
        <h3 className="font-semibold text-gray-900 my-2 ">
        {"Volatility"}
        </h3>
  
        <div className="flex gap-1 mr-2">

          { Object.keys( volatalityOptionsMapping ).map(volatality => (

                < div  key={volatality} className='grow w-1'>
                    <input type="checkbox" id ={volatality} name='volatality' className='sr-only peer' 
                    onChange = { () => onChangeHandler( volatality ) }
                    checked = {  desiredVolatilities.has( volatalityOptionsMapping[volatality] )   }
                    />  
                    <label htmlFor= {volatality} className=' flex flex-col pt-2 pb-1 rounded-sm gap-2 border border-gray-200 peer-checked:border-2 peer-checked:border-indigo-500 hover:bg-gray-100  justify-center items-center' >
                      <img src="src/assets/risk.png" alt="" className='w-4 h-4' />
                    {volatality}  
                    </label>                
                 </ div >


          ))}

        </div>

        </ div >
    )
  
}
