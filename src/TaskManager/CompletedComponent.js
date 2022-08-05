import React from "react";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {completedTask,changeCompletion,deleteTask}=this.props
        return(
            <div className="out">
                <h2><img className="p1" src="https://cdn-icons-png.flaticon.com/128/190/190411.png"></img>Completed Tasks</h2>
                {
                    completedTask.map((item)=>(
                        <div className="inn">
                            <div className="contentBlock">
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            </div>
                            <div>
                            <button className='btn btn-primary btns3'onClick={()=>deleteTask(item.id)}>move to trash</button>
                            <button className='btn btn-primary btns4'onClick={()=>changeCompletion(item.id)}>Not Completed</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default CompletedComponent