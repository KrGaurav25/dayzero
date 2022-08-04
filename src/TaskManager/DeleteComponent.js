import React from "react";
import "./Complete.css"
class DeletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {deletedTask,changeCompletion}=this.props
        return(
            <div className="out">
                <h2>Deleted Tasks</h2>
                {
                    deletedTask.map((item)=>(
                        <div className="inn">
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>Restore</button> 
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default DeletedComponent