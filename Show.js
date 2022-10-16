import React from 'react'
import axios from 'axios'

export default class Show extends React.Component {

  constructor(){
    super()
    this.state={
      apivalue:[]}
    }

    

    componentWillUnmount(){
     console.log("will unmount working");
     document.body.removeEventListener("click",this.myfun2)
     this.setState({
      apivalue:[]
     })
    }
    myfun2(){
      console.log("Document click is working",Math.random())
     }
   
   
   componentDidMount(){
    document.body.addEventListener("click",this.myfun2)

    axios.get("https://fakestoreapi.com/products").then((res)=>{
      console.log(res);
      console.log(res.data);
      this.setState({
        apivalue:res.data
      })
    })
   }
    
  render() {
    var api=this.state.apivalue
    return (
    <div class="container">
      <div class="row">
       {
        api.length>0 && api.map((xyz)=>
        <div class="col-xl-3">
        <img class="img-fluid"alt="Mens wear"src={xyz.image}/>
        <h2>{xyz.price}</h2>
        <p>{xyz.title}</p>
        </div>
        )
       }
      </div>
    </div>
      
  )

   

      }
  }
