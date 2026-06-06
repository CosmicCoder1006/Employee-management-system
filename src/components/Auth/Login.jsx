import react from 'react'
import { useState } from 'react'

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
    };

    return(
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20'>
                <form
                 onSubmit = {submitHandler}
                 className='flex flex-col h-screen w-screen items-center justify-center gap-4'>
                    <input
                     required
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     className='text-white outline-white bg-transparent text-xl text-border-2 px-4 py-2 border-2 border-emerald-600 rounded-full placeholder:text-white' type="email" placeholder="Email"/>
                    <input
                     required 
                     value ={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     className='text-white outline-white bg-transparent text-xl text-border-2 px-4 py-2 border-2 border-emerald-600 rounded-full placeholder:text-white mt-5' type="password" placeholder="Password"/>
                    <button className='bg-emerald-600 text-white px-4 py-2 border-2 border-emerald-600 rounded-full' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login