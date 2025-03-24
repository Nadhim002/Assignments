import React from "react";

export default function Filter() {
  return (
    <div className="flex items-center gap-4">
      <span>Filter By :</span>

      <div className="flex items-center gap-4">
        
        {/* All */}
        <div className="relative">
          <input type="radio" id="All" name="filter" className="peer hidden" />
          <label htmlFor="All" className="cursor-pointer px-3 py-1 rounded-md block peer-checked:bg-green-200">
            All
          </label>
        </div>

        {/* Unread */}
        <div className="relative">
          <input type="radio" id="Unread" name="filter" className="peer hidden" />
          <label htmlFor="Unread" className="cursor-pointer px-3 py-1 rounded-md block peer-checked:bg-green-200" >
            Unread
          </label>
        </div>

        {/* Read */}
        <div className="relative">
          <input type="radio" id="Read" name="filter" className="peer hidden" />
          <label htmlFor="Read" className="cursor-pointer px-3 py-1 rounded-md block peer-checked:bg-green-200">
            Read
          </label>
        </div>

        {/* Favorites */}
        <div className="relative">
          <input type="radio" id="Favorites" name="filter" className="peer hidden" />
          <label htmlFor="Favorites" className="cursor-pointer px-3 py-1 rounded-md block peer-checked:bg-green-200 ">
            Favorites
          </label>
        </div>
      </div>
    </div>
  );
}