import React from "react";
import "./Open.css";
class OpenComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {openTicket,changeStatus}=this.props //Destructuring the props
        return(
            <div>
                {
                    //Mapping to Display Output
                    openTicket.map((item)=>(
                            <div className="bgcolor">
                            <h3>{item.priority}</h3>
                            <h4>{item.tDesc}</h4>
                            <button className='btn1 btn-primary' onClick={()=>changeStatus(item.id)}>CLOSE</button>
                            </div>
                    ))
                }
            </div>

        )
    }
}
export default OpenComponent