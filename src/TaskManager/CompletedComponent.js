import React from "react";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {completedTask,deleteTask}=this.props
        return(
            <div className="out">
                <h2>Completed Tasks</h2>
                {
                    completedTask.map((item)=>(
                        <div className="inn">
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary'onClick={()=>deleteTask(item.id)}>move to trash</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default CompletedComponent