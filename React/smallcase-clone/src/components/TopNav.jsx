import React from "react"
import SortBy from "./SortBy"
import smallCaseLogo from "../assets/smallCaseLogo.svg";


export default function TopNav( { setSortBy , sortBy  , setFilterByName , filterByName  }) {

  return (

    <div className="w-full flex items-center justify-between p-4 border-b border-gray-100">
      
      <div className="text-xl font-bold">
        <img src= {smallCaseLogo} alt="small-case-logo" />
      </div>

      <div className="flex items-center gap-4">

        <details className="relative">

          <summary className="cursor-pointer border px-3 py-2 rounded">Sort By</summary>
          
          <div
            className="absolute left-0 mt-2 bg-white border rounded shadow-md w-[300px] p-2"
          >
            <SortBy setSortBy = { setSortBy } sortBy  = { sortBy } />
          </div>

        </details>

        <input
          type="text"
          placeholder="Hello World"
          className="border px-3 py-2 rounded"
          value={filterByName}
          onChange={ ( e ) => {  setFilterByName( e.target.value )   } }
        />

      </div>

    </div>
  )
}
