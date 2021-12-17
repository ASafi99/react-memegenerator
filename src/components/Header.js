import React from "react"
import memeimg from "../images/funny-meme-emoji.png"
import troll from "../images/troll-face.png"

export default function Header(){
    return (
        <section className="flex flex-row justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-4 px-6">
            <div className="flex items-center">
                <img className = "h-20" src = {memeimg} />
                <p className= "text-white karla text-2xl">Random Meme Generator</p>
                <img className= "ml-3 h-20" src = {troll} />
            </div>
        </section>
    )
}