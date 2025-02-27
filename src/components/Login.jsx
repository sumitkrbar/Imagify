import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {
    const [state, setState] = useState('Login')
    const {setShowLogin} = useContext(AppContext);


    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[])

  return (
    <div className='absolute top-0 left-0 right-0
    bottom-0 z-10 backdrop-blur-sm bg-black/30 flex
    justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl
        text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700
            font-medium'>{state}</h1>
            {state === 'Login' ? 
                <p className='text-sm text-center'>Welcome back! Please sign in to continue.</p>
                :
                <p className='text-sm text-center'>Create an account to continue.</p>}
            
            {/* {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2
            rounded-full mt-5'>
                <img src={assets.profile_icon} className='w-9 h-9 object-cover' alt="" />
                <input type="text" className='outline-none text-sm' 
                placeholder='Full Name' required/>
            </div>}

            <div className='border px-6 py-2 flex items-center gap-2
            rounded-full mt-4 '>
                <img src={assets.email_icon_svg} className='w-6 h-9' alt="" />
                <input type="email" className='outline-none text-sm' 
                placeholder='Email-Id' required/>
            </div>

            <div className='border px-6 py-2 flex items-center gap-2
            rounded-full mt-4'>
                <img src={assets.lock_icon_svg} className='w-6 h-6 ' alt="" />
                <input type="password" className='outline-none text-sm' 
                placeholder='Password' required/>
            </div> */}


            {state !== "Login" && (
                <div className="flex items-center w-full border px-6 py-2 gap-2 rounded-full mt-5 h-14">
                    <img src={assets.profile_icon} className="w-9 h-9 object-cover" alt="" />
                    <input type="text" className="outline-none text-sm flex-1 h-full" placeholder="Full Name" required />
                </div>
            )}

            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4 h-14">
                <img src={assets.email_icon_svg} className="w-6 h-6" alt="" />
                <input type="email" className="outline-none text-sm flex-1 h-full" placeholder="Email-Id" required />
            </div>

            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4 h-14">
                <img src={assets.lock_icon_svg} className="w-6 h-6" alt="" />
                <input type="password" className="outline-none text-sm flex-1 h-full" placeholder="Password" required />
            </div>


            {state === 'Login' && <p className='text-sm text-blue-600 my-4
            cursor-pointer mb-0'>Forgot password?</p>}

            <button className='bg-blue-600 w-full text-white py-2
            rounded-full mt-4'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

            {state=== 'Login' ? <p className='mt-5 text-center'>Don't have an account? 
                <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up!</span>
            </p>
                :
            <p className='mt-5 text-center'>Already have an account? 
                <span className='text-blue-600 cursor-pointer'
                onClick={()=>setState('Login')}>Login!</span>
            </p>}

            <img src={assets.cross_icon} alt="" className='absolute
            top-5 right-5 cursor-pointer' onClick={()=>setShowLogin(false)}/>

        </form>
    </div>
  )
}

export default Login