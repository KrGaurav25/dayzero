import React from "react";
import "./Open.css"
class ClosedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {closedTicket,changeStatus}=this.props //Destructuring the props
        return(
            <div>
                {
                    //Mapping to Display Output
                    closedTicket.map((item)=>(
                            <div className="cBgcolor">
                            <h4>{item.tDesc}</h4>
                            <button className='btn2 btn-primary' onClick={()=>changeStatus(item.id)}>Open</button>
                            </div>
                    ))
                }
            </div>

        )
    }
}
export default ClosedComponent