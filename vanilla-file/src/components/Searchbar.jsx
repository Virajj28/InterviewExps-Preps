import { useState,useEffect } from "react";

const DropDown = () => {
  return (
    <div>
      DropDown
    </div>
  )
}

const TextArea = () => {
  return(
    <>
      <input className="w-96 h-8 focus:border-2 focus:border-yellow-800" placeholder="Enter to search"></input>
    </>
  )
}

function SearchIcon() {
  return (
    <div className='bg-yellow-500 w-9'>
      SearchIcon
    </div>
  )
}


export default function Searchbar() {
  return (
    <div className="flex align-center justify-center">
      <DropDown />
      <TextArea />
      <SearchIcon />
    </div>
  )
}
