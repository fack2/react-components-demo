import React from 'react'


export class LemonComponent extends React.Component{

    state = {
        word: "lemon", 
        clicked: false
    }

    toggleClickedVal = () => {
        const { clicked} = this.state
        this.setState({clicked: !clicked})
    }

    render (){
        const {word, clicked} = this.state
        const {colour} = this.props
        return(
            <div className="lemon-component" style={{background: colour}}>
                < button onClick={()=> this.setState({word: `${word}n`})}> ADD NNNN </button>
                <p > {word}</p>
                <button onClick={this.toggleClickedVal }>change clicked val</button>
                {clicked && (<p> CLICKED IS TRUE</p>)}
            </div>  
        )
    }

}
