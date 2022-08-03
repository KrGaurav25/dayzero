import React from "react";
class Defaultt extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        console.log("render")
        return(
            <>
            <Defaultt></Defaultt>
            </>
        )
    }
}
export default Defaultt