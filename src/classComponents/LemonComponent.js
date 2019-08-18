import React from 'react'


export class LemonComponent extends React.Component{

    state = {
        word: "lemon"
    }

    render (){
        const {word} = this.state
        const {colour} = this.props
        return(
            <div className="lemon-component" style={{background: colour}}>
                < button onClick={()=> this.setState({word: `${word}n`})}> click me </button>
                <p> {word}</p>
            </div>  


        )
    }

}
