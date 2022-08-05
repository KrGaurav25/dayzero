import React from "react"
import CompletedComponent from "./CompletedComponent"
import PendingComponent from "./PendingComponent"
import DeletedComponent from "./DeleteComponent"
import "./TaskManager.css"
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data
        }
    }
    getPendingItems=()=>{
        const result= this.state.tasks.filter((item)=>item.completion===false)
        return result
     }
    getCompletedItems=()=>{
       const result= this.state.tasks.filter((item)=>item.completion===true)
       return result
    }
    
    getDeletedItems=()=>{
        const result= this.state.tasks.filter((item)=>item.completion===true)
        return result
    }
    changeCompletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.completion=!obj.completion
        this.setState({tasks:temp}) 
    }
    changeDeletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
    }
    // deleteTask=(itemid)=>{
    //     const result=this.state.tasks.filter((item)=>item.id!==itemid)
    //     this.setState({tasks:result})
    // }
    getDeletedTask=()=>{
        const result= this.state.tasks.filter((item)=>item.deletion===true)
        return result
    }
    getRestoreTask=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
    }
    render(){
        return(
            <div>
                <h1>TASK MANAGER</h1>
                <div className="pend">
                <PendingComponent pendingTask={this.getPendingItems()} changeCompletion={this.changeCompletionStatus}></PendingComponent>
                </div>
                <div className="comp">
                <CompletedComponent completedTask={this.getCompletedItems()} changeCompletion={this.changeCompletionStatus} deleteTask={this.changeDeletionStatus}></CompletedComponent>
                </div>
                <div className="del">
                <DeletedComponent deletedTask={this.getDeletedTask()} restore={this.getRestoreTask}></DeletedComponent>
                </div>
            </div>
        )
    }
}
export default TaskManager