import React from "react"

const HocComponent=(InputComponent)=>{
return class NewComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:'',
            storename:'',
            productDetails:[],
            result:[]

        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data,storename:props.storename}
    }
    handleChange=(event)=>{
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        let data=this.state.productDetails.filter((item)=>item.pName===this.state.search)
        this.setState({result:data}) 
    }
    render(){
        return(
            <InputComponent result={this.state.result} handleChange={this.handleChange} handleSearch={this.handleSearch} storename={this.state.storename}></InputComponent>
        )
    }

}
}
export default HocComponent