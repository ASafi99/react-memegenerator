import React from "react"
import memesData from "../memesData.js"
import sparkle from "../images/sparkle-emoji.png"

export default function Meme(){
    
    const [meme, setMeme] = React.useState({topText: "", bottomText: "", randomImage: "https://i.imgflip.com/1h7in3.jpg"})
    
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(memesData => setAllMemeImages(memesData.data.memes.map(p => p.url)))
    // }, [])
    
    const [allMemeImages, setAllMemeImages] = React.useState()
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    
    function handleChange(event){
        const {name, type, value} = event.target
        
        setMeme(p => {return (
            {...p, [name] : value}
            )})
    }
    
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="meme-input">
                <input type="text" placeholder="Top text here" id="top-text" name="topText" onChange={handleChange} value={meme.topText}/>
                <input type="text" placeholder="Bottom text here" id="bottom-text" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
            </div>
            <div className="meme-button bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <button type="button" onClick={getMemeImage}><img src={sparkle}  />Get a new meme image<img src={sparkle} /></button>
            </div>
            <div className="meme">
                <div className="meme-image" style={{ backgroundImage: `url(${meme.randomImage})` }}></div>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div className="meme-button download-button bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-10">
                <button type="button" onClick={getMemeImage}><img src={sparkle}  />DOWNLOAD<img src={sparkle} /></button>
            </div>
        </section>
    )
}