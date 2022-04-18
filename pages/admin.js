import React from 'react'

export default function admin() {

  function authenticateAdmin(e){
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if(username === 'admin' && password === 'admin'){
      localStorage.setItem('admin', true);
      window.location.href = '/admin/dashboard';
    }
  }

  return (
    <div className='admin_page page'>
      <div className='container'>
        <form className='admin_login_form default sl_form' onSubmit={authenticateAdmin}>
          <div className='form_header'>
            <h2 className='title'>Login to Admin</h2>
            <p>This is an admin place. Don't try to enter if you aren't an admin.</p>
          </div>
  
          <div className='inputs'>
            <div className='input_container'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' id='username' placeholder='Username' required />
            </div>
            <div className='input_container'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' placeholder='Password' required />
            </div>
          </div>
  
          <div className='actions'>
            <button className='submit_btn'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
