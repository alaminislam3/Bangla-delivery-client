import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../Contexts/Authcontext';
import { Link } from 'react-router';
import SocialLogin from './Social Login/SocialLogin';

const Register = () => {
    const {registration}= use(Authcontext)
    // console.log(user);
    const {register,handleSubmit,
        formState: {errors},
    }= useForm()
    const onsubmit = data => {
        // console.log(data.email,data.password);
         registration(data.email, data.password).then(result=> {
            console.log(result.user);
         }).catch(error=> {
            console.log(error)})
    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-primary'> Create an account</h2>
        <form onSubmit={handleSubmit(onsubmit)}>    
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email' , {required: true})}
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            {...register('password' ,{required:true , minLength: 6})}
            className="input"
            placeholder="Password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          {errors.password?.type === 'required' && <p className='text-red-600'> 
            password dicchen na keno?
            </p>}
          {errors.password?.type === 'minLength' && <p className='text-red-600'> 
            Password should be minimum six cheracter or more . use commonsence
            </p>}
            <p>Already have an account ?<Link to={'/login'}><button className='bg-primary'>Login</button> </Link></p>
          <button className="btn btn-primary text-black mt-4">Register</button>
        </fieldset>
        <SocialLogin></SocialLogin>
      </form>
        </div>
    );
};

export default Register;