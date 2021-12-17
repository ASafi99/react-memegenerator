import React from "react"
import Header from "./components/Header.js"
import Meme from "./components/Meme.js"


/**
 * Challenge: Build the Header component
 */
export default function App() {
    return (
        <section className="container mx-auto lg:max-w-screen-lg bg-white rounded-lg mt-10">
           <Header />
           <Meme /> 
        </section>
        
    )
}
