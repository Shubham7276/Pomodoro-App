import React from 'react'
import { signInWithGoogle } from '../Firebase/Firebase'
const Login = () => {
  return (
    <div>
        <button className='login' onClick={signInWithGoogle}>Sign In With Google</button>
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  
</div>


  )
}

export default Login