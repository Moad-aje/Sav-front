import React, {Component} from 'react';
import './Signin.css';
import './Gb.jpg'


class Signin extends Component {
		constructor(props){
    super(props);
    this.state = {
      signinBnumber : '',
      signinPassword : ''
    }
  }
onBnmberChange = (event) =>{
this.setState({signinBnumber : event.target.value})
// 
}
onPasswordChange = (event)=>{
this.setState({signinPassword : event.target.value})

}
onSubmitSignin =()=>{
		fetch('http://localhost:3001/signin',{
		method:'post',
		headers:{'Content-type':'application/json'},
		body : JSON.stringify({
			bnumber: this.state.signinBnumber,
			password : this.state.signinPassword	
		})
	})
		.then(response=>response.json())
		.then(user=>{
			if(user.id) {
				this.props.loadUser(user)
				this.props.onRoutechange('Application')
			}
		})

}
render() {
	return (
	<div className = 'bg'>
	<div className='ovelay'>
      <article className="br3 ba b--black mv7 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Badge Number</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onBnmberChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      onClick= {this.onSubmitSignin }
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Sign in"
				      />
				    </div>
			  </div>
	        </main>
	    </article>
	</div>
	</div>
	)
}
}
export default Signin;