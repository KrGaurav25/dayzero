import React from "react";
import "./Apps.css"
import OpenComponent from "./Open";// Open ticket child component
import ClosedComponent from "./Closed";//Closed ticket child component
class TicketApplication extends React.Component{
    constructor(props){
        super(props)
        this.state={
            AppInfo:this.props.data,
        }
    }
    //Function for opened tickets
    getOpenItems=()=>{
        const result= this.state.AppInfo.filter((item)=>item.tstatus===true)
        return result
    }
    //Function for Closed tickets
    getClosedItems=()=>{
       const result= this.state.AppInfo.filter((item)=>item.tstatus===false)
       return result
    }
    //Function to change the status of tickets from open to close or close to open.
    changeTicketStatus=(itemid)=>{
        const temp=[...this.state.AppInfo]
        const obj=temp.find((item)=>item.id===itemid)
        obj.tstatus=!obj.tstatus
        this.setState({appInfo:temp}) 
    }
    render(){
        return(
            <div className="Outer">
                <h1>TICKET</h1>
                <div className="Open">
                <h2>Open Tickets</h2>
                <OpenComponent openTicket={this.getOpenItems()} changeStatus={this.changeTicketStatus}></OpenComponent>
                </div>
                <div className="Closed">
                <h2>Closed Tickets</h2>
                <ClosedComponent closedTicket={this.getClosedItems()} changeStatus={this.changeTicketStatus}></ClosedComponent>
                </div>
            </div>
        )
    }
}
export default TicketApplication