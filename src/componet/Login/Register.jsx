import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='mt-20 container mx-auto p-40'>
            
            <form onSubmit={handleRegister} className='bg-bgShade p-5 shadow-xl'>
                       <h2 className='text-3xl font-bold text-center py-4'>Register Your Account</h2>
                   <div className='w-1/2 mx-auto'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your Name</span>
                            </label>
                            <label className="input-group mt-2">
                                
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered w-full " />
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Your Email</span>
                            </label>
                            <label className="input-group mt-2">
                                
                                <input type="email" placeholder="Your Email" name='email' className="input input-bordered w-full " />
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>
                            </label>
                            <label className="input-group mt-2">
                                
                                <input type="password" placeholder="Your password" name='password' className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className='py-5'>
                          <button className='bg-primary px-4 py-3 hover:bg-body transition-all duration-300  text-white text-xl rounded-md w-full '>Register</button>
                        </div>
                        <div className='pb-5'>
                        Already Have an account? Please <Link className='text-primary' to='/login'>Login</Link>
                        </div>
                   </div>
            </form>
        </div>
    );
};

export default Register;