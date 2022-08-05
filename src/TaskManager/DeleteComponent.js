import React from "react";
import "./Complete.css"
class DeletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {deletedTask,restore}=this.props
        return(
            <div className="out">
                <h2><img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/2x/external-delete-email-phatplus-lineal-color-phatplus.png"></img>Deleted Tasks</h2>
                {
                    deletedTask.map((item)=>(
                        <div className="inn">
                            <div className="contentBlock">
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            </div>
                            <div>
                            <button className='btn btn-primary btns3' onClick={()=>restore(item.id)}>Restore</button> 
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default DeletedComponent