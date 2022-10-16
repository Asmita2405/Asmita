import React from "react"
export default class Add extends React.Component
{
  constructor(){
    super()
    this.x1=React.createRef()
    this.x2=React.createRef()
  }
  myfun(){
    //alert()
    console.log(this.x1);
    console.log(this.x2);
    console.log(this.x1.current.value);
    console.log(this.x2.current.value);
  }
  render(){
        return(
            <div>
             <input type="text "ref={this.x1}/>
             <br/>
             <input type="text" ref={this.x2}/>
             <br/>
             <button onClick={()=>{this.myfun()}}>Add</button>
            </div>

        )

    }
}