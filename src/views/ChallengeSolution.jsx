import React, { useEffect, useRef } from 'react'
import Html from '../assets/stack/html-1.svg'
import Css from '../assets/stack/css-3.svg'
import Js from '../assets/stack/javascript-1.svg'
import LogoReact from '../assets/stack/react-2.svg'
import Vite from '../assets/stack/vitejs.svg'
import Tailwind from '../assets/stack/tailwind-css-2.svg'
import Wordpress from '../assets/stack/wordpress-blue.svg'
import Php from '../assets/stack/php-1.svg';
import {useForm} from "react-hook-form";
import UserService from '../services/UserService';
import Swal from 'sweetalert2'
export const ChallengeSolution = ({loading}) => {
  

  const solution=useRef();
  useEffect(() => {
    solution.current?.scrollIntoView({behavior:'smooth'})
  }, [])
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    loading(true)
    UserService.sendForm(data).then(response=>{
      loading(false);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Success',
        text:'Check your mail or spam',
        showConfirmButton: false,
        timer: 2500
      })
    }).catch((error)=>{
      loading(false);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text:'Try again later',
        showConfirmButton: false,
        timer: 2500
      })
    })
  };

  return (
    
    <div className='px-4 xs:px-10 sm:px-24 md:px-32 lg:px-52 xl:px-80 2xl:px-[30rem] relative z-50' >
     

<form onSubmit={handleSubmit(onSubmit)}>
  <label className="block space-y-3 my-8">
   <div>
   <span className="block text-sm lg:text-base font-medium text-slate-700">Name</span>
    <input {...register("name",{required:true,pattern:"[a-zA-Z]*"})} type="text" placeholder='Name...'  className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none ${errors.name?` focus:border-pink-500 focus:text-pink-600
       focus:ring-pink-500`:` focus:border-teal-400 focus:ring-1 focus:ring-teal-400`}
      `}/>
   </div>
   <div>
   <span className="block text-sm font-medium lg:text-base  text-slate-700">Email</span>
  <input {...register("email",{required:true})} type="email" placeholder='Email...' className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none   ${errors.email?` focus:border-pink-500 focus:text-pink-600
      focus:ring-pink-500`:` focus:border-teal-400 focus:ring-1 focus:ring-teal-400`}`  } />
   </div>
   <div>
   <span className="block text-sm font-medium lg:text-base  text-slate-700">English Level</span>
    <select {...register("english_level",{required:true})} className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none  ${errors.english_level?` focus:border-pink-500 focus:text-pink-600
      focus:ring-pink-500`:` focus:border-teal-400 focus:ring-1 focus:ring-teal-400`}`}>
        <option value="" selected>Select...</option>
        <option value="basic">Basic</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
    </select>
   </div>
   <button type='submit' className='bg-teal-400 text-white py-2 px-8 shadow rounded-md ml-auto block'>Submit</button>
  </label>
</form>
<div className='mt-4' ref={solution}>
  <h3 className='text-xl font-bold xs:text-2xl lg:3xl' >Stack Technology</h3>
  <h4 className='text-lg font-semibold mt-4 sm:text-xl lg:2xl' >Frontend</h4>
  <div className="grid grid-cols-3 items-center justify-center gap-2 my-4">
    <div className='flex flex-col justify-end'>
    <img src={Html} className="w-12 xs:w-16 lg:w-20 mx-auto" alt="" />
    <span className='mx-auto font-semibold '>HTML</span>
    </div>
    <div className='flex flex-col justify-center'>
    <img src={Css} className="w-12 xs:w-16 lg:w-20   mx-auto" alt="" />
    <span className='mx-auto font-semibold '>CSS</span>
    </div>
    <div className='flex flex-col justify-center'>
    <img src={Js} className="w-12 xs:w-16 lg:w-20   mx-auto"  alt="" />
    <span className='mx-auto font-semibold '>Javascript</span>
    </div>
    <div className='flex flex-col justify-center'>
    <img src={LogoReact} className="w-12 xs:w-16  lg:w-20  mx-auto"  alt="" />
    <span className='mx-auto font-semibold '>React</span>
    </div>
    <div className='flex flex-col justify-center'>
    <img src={Vite} className="w-12 xs:w-16 lg:w-20   mx-auto"  alt="" />
    <span className='mx-auto font-semibold '>Vite</span>
    </div>
    <div className='flex flex-col justify-center'>
    <img src={Tailwind} className="w-12 xs:w-16 lg:w-20  mx-auto"  alt="" />
    <span className='mx-auto font-semibold '>Tailwind</span>
    </div>
  
 
    


  </div>
  <h4 className='text-lg font-semibold sm:text-xl lg:2xl'>Backend</h4>
  <div className="grid grid-cols-2 items-center gap-2 mt-4">
  <div className='flex flex-col justify-center'>
  <img src={Wordpress} className="w-12 xs:w-16 lg:w-20  mx-auto" alt="" />
    <span className='mx-auto font-semibold '>Wordpress</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
    <img src={Php} className="w-12 xs:w-16 lg:w-20  mx-auto" alt="" />
    <span className='mx-auto font-semibold '>PHP</span>
    </div>
 

   
  </div>
</div>
    </div>
  )
}
