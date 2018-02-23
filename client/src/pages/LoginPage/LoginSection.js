import React from "react";

import "./Login.css";

export default function LoginSection(props) {
  return (
    <section id="Login">
      <div className="container">
         <div className="row">
           <div className="login-col">
             <form className="form-signin" action="/login" method="post">
               <label for="username" className="">Username</label>
               <span className="fa fa-user"></span>
               <input type="text" name="username" id="username" className="form-control" placeholder="Username" required autofocus>

               <label for="password" className="">Password</label>
               <span className="fa fa-lock"></span>
               <input type="password" name="password" id="password" className="form-control" placeholder="Password">

               <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
             </form>


             <div className="row">
               <div className="">
                 Don't have an account? <a href="/signup">Create a Free Account</a>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>

    </section>
  );
}
