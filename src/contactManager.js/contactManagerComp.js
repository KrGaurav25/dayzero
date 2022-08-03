import React from "react"
import './contactManager.css'
class ContactManagerComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            ipAddress:"",
            update:false,
            uid:-1
        }
    }
   handleChange=(e,key)=>{
    if(key==='uname')
    this.setState({ipUser:e.target.value})
    if(key==='phone')
    this.setState({ipPhone:e.target.value})
    if(key==='email')
    this.setState({ipEmail:e.target.value})
    if(key==='addr')
    this.setState({ipAddress:e.target.value})    
   }
    
    handleContact=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            address:this.state.ipAddress
        }
        let newData=[...this.state.contactinfo,obj]
        this.setState({contactinfo:newData})   
    }
    handleDelete=(e,itemid)=>{
      const result=this.state.contactinfo.filter((item)=>item.id!==itemid)
      this.setState({contactinfo:result})
    }
    toggleUpdate=()=>{
        this.setState({update:!this.state.update})
    }
    setUpdateMsg=(e,itemid)=>{
        e.preventDefault()
        this.toggleUpdate()   
        this.setState({uid:itemid})
    }
    handleUpdate=(e)=>{
        e.preventDefault()
        let temp=[...this.state.contactinfo]
        let obj=temp.find((item)=>item.id===this.state.uid)
        obj.fname=this.state.ipUser
        this.setState({contactinfo:temp})
        this.setState({uid:-1})
        this.toggleUpdate()
    }
    render(){
        return(
            <div className="fbg">
                <div className="heads">
                {
                this.state.update?<h1>Update your new values</h1>:<h1>Enter the contact details</h1>
                }
                <form>
                <b>Username:</b><br/><input type='text' onChange={(e)=>this.handleChange(e,'uname')}></input><br/>
                <b>Phone:</b><br/><input type='text' onChange={(e)=>this.handleChange(e,'phone')}></input><br/>
                <b>Email:</b><br/><input type='text' onChange={(e)=>this.handleChange(e,'email')}></input><br/>
                <b>Address:</b><br/><input type='text' onChange={(e)=>this.handleChange(e,'addr')}></input><br/>
                {
                    this.state.update?<button className="btn" onClick={(e)=>this.handleUpdate(e)}>UPDATE</button>:<button className="btn" onClick={(e)=>this.handleContact(e)}>ADD CONTACT</button>
                }
                
                </form>
                </div>
            
            {
                this.state.contactinfo.map((item)=>(
                    <div className="row">
                        <div className="col mg bg">
                            <h2>{item.fname}</h2>
                            <h3>{item.phone}</h3> 
                            <h3>{item.email}</h3>
                            <p>{item.address}</p>
                            <button className="btn" onClick={(e)=>this.handleDelete(e,item.id)}>DELETE</button><br/>
                            <button className="btn" onClick={(e)=>this.setUpdateMsg(e,item.id)}>UPDATE</button>
                        </div>
                    </div>
                ))
            }
            </div>
        )
    }
}
export default ContactManagerComp