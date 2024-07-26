import React from 'react'
import "./Navbar.css"
function Navbar({onChangeInput,...props}) {
  return (
    <div>
        <nav class="bg-black border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center  mx-28 mb-4 ">
            <a href="https://flowbite.com/" class="flex items-center mr-20">
                <span class="self-center text-white anomine">Anomine</span>
            </a>
        
            <div class="bg-black navbar hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="list font-medium flex flex-col   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="#" class="block " aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" class="anime-list block ">List Anime</a>
                </li>
                <input onChange={(e)=> {onChangeInput(e)}} class="anime-search" placeholder="Search anime or movie"/>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
