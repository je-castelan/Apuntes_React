import React from "react"


class MemeGenerator extends React.Component {

    constructor(){
        super()
        this.state = {
            top : "",
            bottom: "",
            image: "http://i.imgflip.com/1bij.jpg",
            allMemes: [] ,  
        }
        this.putText = this.putText.bind(this)
        this.changeImg = this.changeImg.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>  {
                const {memes} = response.data
                this.setState({allMemes : memes}) 
            })
    }

    putText(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    changeImg(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemes.length)
        const randMemeImg = this.state.allMemes[randNum].url
        this.setState({ image: randMemeImg })
    }

    render(){
        return (
            <div>
                <form className="meme-form" onSubmit={this.changeImg}>
                <input 
                    type="text" 
                    value={this.state.top} 
                    name="top" 
                    placeholder="Top Image" 
                    onChange={this.putText} 
                />
                <br/>
                <input 
                    type="text" 
                    value={this.state.bottom} 
                    name="bottom" 
                    placeholder="Bottom Image" 
                    onChange={this.putText} 
                />
             
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.image} alt="" />
                    <h2 className="top">{this.state.top}</h2>
                    <h2 className="bottom">{this.state.bottom}</h2>
                </div>  
            </div>
        )
    }
    
}

export default MemeGenerator