import React from "react"

export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgUrl: "https://i.imgflip.com/2wifvo.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const changeMeme = function (){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prev => ({
            ...prev,
            imgUrl: url
        }))
    }

    const handleChange = function(event){
        const {name, value} = event.target
        setMeme(prev => (
           { ...prev,
            [name]: value}
        ))
    }

    return (
        <main>
            <div className="form">
                 <input
                    type="text"
                    className="form--input"
                    onChange = {handleChange}
                    name = "topText"
                    value = {meme.topText}
                    placeholder = "Enter Top text"
                 />
                 <input
                    type="text"
                    className="form--input"
                    onChange = {handleChange}
                    name = "bottomText"
                    value = {meme.bottomText}
                    placeholder = "Enter Bottom text"
                 />
                 <button
                    className="form--button"
                    onClick={changeMeme}
                 >
                    Change Meme
                 </button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} className="meme--image" alt="image of a meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}