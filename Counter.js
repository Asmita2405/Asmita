import React from'react'
export default class Counter extends React.Component 
 {

    constructor(){
        super()
        this.state={
            rec:0
        }

    }
    myfun(){
        //alert()
        //this.props.name="Asmita"
        this.setState({
            rec:this.state.rec + 1
        })
    }
    
    render(){
        console.log(this);
        return(
            <>
            <button onClick={()=>{this.myfun()}}>Enter</button>

            <p>
                {this.props.name}
            </p>
            <p>
                {this.props.age}
            </p>
            <p>
                {this.props.rec}
            </p>

            </>//fragmentataion
        )
        
    }
}