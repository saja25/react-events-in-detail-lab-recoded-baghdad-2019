// Code CoordinatesButton Component Here
import React from "react"
class CoordinatesButton extends React.Component{
   
        
    handleClick=(event)=>{
      let  x=event.clientX;
      let  y=event.clientY;
      return this.props.onReceiveCoordinates([x,y])
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}/>
            </div>
        )
    }
}
export default CoordinatesButton 