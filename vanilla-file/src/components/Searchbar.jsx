import { useState,useEffect } from "react";
import { SearchIcon } from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'

const DropDown = () => {
  const [data, setData]=useState([]);

  useEffect (() => {
    if(data.length === 0){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => setData(response))
    }
  })

  return (
    <div>
      {
        data.map((item,i) => (
          <div key={i}>
            {item.title}
          </div>
        ))
      }
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

function Searchicon() {
  return (
    <div className='bg-yellow-500 w-9'>
      <SearchIcon className="h-7 w-7 mx-1 text-black-500"/>
    </div>
  )
}


export default function Searchbar() {
  return (
    <div className="flex align-center justify-center">
      <DropDown />
      <TextArea />
      <Searchicon />
    </div>
  )
}
