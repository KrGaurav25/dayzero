import React from "react";
import "./Pending.css"
class PendingComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {pendingTask,changeCompletion}=this.props
        return(
            <div className="out">
                <h2>Pending Tasks</h2>
                {
                    pendingTask.map((item)=>(
                        <div className="inn">
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default PendingComponent