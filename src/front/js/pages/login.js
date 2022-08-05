import React from react;
import { Link } from "react-router-dom";


class Login extends React.Component{
    state={
        email:'',
        pwd:'',
    }
    handleChange = (e) =>{
        const{name,value} = e.target
        this.setState({[name]:value})

    }
    handleSubmit = (e) =>{
        e.preventDefault()
}
    render(){
        return(

<div>
<form onSubmit={this.handleSubmit}>
<input type='' name='' placeholder='' required onChange={this.handleChange}/>
<input type='' name='' placeholder='' required onChange={this.handleChange}/>
<button onSubmit={this.handleSubmit}> Log in </button>
</form>
</div >


)

}


}
export default Login;

// just reffrence to see for login 