"use client"

import Image from "next/image"
import React from "react";
import Avatar from "react-avatar"

function Header() {

  const authorName = "John Suarez";

  return (
    <header>
        <div className="flex flex-col md:flex-row items-center p-5 bg-white rounded-b-2xl">

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"/>

            <Image 
                src={"https://www.synaptiq.ai/hs-fs/hubfs/synaptiq%20logo-1.png?width=510&height=84&name=synaptiq%20logo-1.png"} 
                alt={"Synaptiq Logo"} 
                width={300} 
                height={100} 
                className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
            />

            <div className="flex items-center space-x-5 flex-1 justify-end sm:w-full">
                <Avatar name={authorName} round size="50" color="#0055D1"/>
            </div>
        </div>
    </header>
  )
}

export default Header