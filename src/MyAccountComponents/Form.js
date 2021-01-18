import React, { Component } from 'react'

 class Form extends Component {
    render() {
        return (
            <section id="aa-myaccount">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="aa-myaccount-area">         
                    <div className="row">
                        <div className="col-md-6">
                        <div className="aa-myaccount-login">
                            <h4>Login</h4>
                            <form action className="aa-login-form">
                            <label htmlFor>Username or Email address<span>*</span></label>
                            <input type="text" placeholder="Username or email" />
                            <label htmlFor>Password<span>*</span></label>
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="aa-browse-btn">Login</button>
                            <label className="rememberme" htmlFor="rememberme"><input type="checkbox" id="rememberme" /> Remember me </label>
                            <p className="aa-lost-password"><a href="#">Lost your password?</a></p>
                            </form>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="aa-myaccount-register">                 
                            <h4>Register</h4>
                            <form action className="aa-login-form">
                            <label htmlFor>Username or Email address<span>*</span></label>
                            <input type="text" placeholder="Username or email" />
                            <label htmlFor>Password<span>*</span></label>
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="aa-browse-btn">Register</button>                    
                            </form>
                        </div>
                        </div>
                    </div>          
                    </div>
                </div>
                </div>
            </div>
            </section>

        )
    }
}
export default Form;