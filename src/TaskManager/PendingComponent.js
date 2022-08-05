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
                <h2><img src="https://cdn-icons.flaticon.com/png/128/3842/premium/3842536.png?token=exp=1659680109~hmac=87eba9547b16596c0035b6200c9a7426"></img>PENDING TASK</h2>
                {
                    pendingTask.map((item)=>(
                        <div className="inn">
                            <div className="contentBlock">
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            </div>
                            <div>
                            <button className='btn btn-primary btns2' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default PendingComponent