'use client'
import React, { useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {set, z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'
import {
  Form,
} from "@/components/ui/form"
import { useRouter } from 'next/navigation'

import CustomInput from './CustomInput'
import { formSchema } from '@/lib/utils';
import { sign } from 'crypto'

const AuthForm = ({type}: {type: string}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const schema = formSchema(type)
    const router = useRouter()
 
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        email: '',
        password: ''
      },
    })

    const signUp = async (values: z.infer<typeof schema>) => {
      console.log(values)
    }
    const signIn = async (values: z.infer<typeof schema>) => {
      console.log(values)
    }
    const onSubmit = async(values: z.infer<typeof schema>) =>{
      try{
        if(type=== "signin"){
        //  const response = await signIn({
        //     email: values.email,
        //     password: values.password
        //  })
        //  if(response) router.push('/')
         
           
        //  setUser(newuser)
        }
        if(type === "signup"){
          const newUser = await signUp(values)
          // setUser(newUser)
        }

      }catch(error){
        console.log(error)

      }finally{

      }
      setLoading(true)
      console.log(values)
      setLoading(false)
    }
  


  return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
        <Link href='/' className=' gap-1 cursor-pointer flex items-center '>
                <Image src="/icons/logo.svg" alt="Npay" width={24} height={24}  /> 
                <h1 className='text-20 text-black-1 font-ibm-plex-serif font-bold'>Npay</h1>
            </Link>
            <div className="flex flex-col gap-1 md:gap-3">
              <h1 className='text-20 lg:text-32 font-semibold text-gray-900'>{user ? 'Link Account' : type === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
              <p className="text-16 font-normal text-gray-600">
                {user 
                  ? 'Link your account to get started'
                  : 'Please enter your details'
                }
              </p>
            </div>
        </header>
        {
          user ? (
            <div className="flex flex-col">hello</div>
          ) : (
            <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {
                    type === 'signup' && (
                      <>
                       <div className="flex gap-4">
                            <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                            <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
                          </div>
                          <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
                          <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
                          <div className="flex gap-4">
                            <CustomInput control={form.control} name='state' label="State" placeholder='Example: NY' />
                            <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                          </div>
                          <div className="flex gap-4">
                            <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                            <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                          </div>
                      </>
                    )
                  }
                  <CustomInput control={form.control} label="Email" name="email"  placeholder="Enter your email" />
                  <CustomInput control={form.control} label="Password" name="password"  placeholder="Enter your password" />
                  
                  <div className="flex flex-col gap-4">
                      <Button type="submit" disabled={loading} className="form-btn">
                        {loading ? (
                          <>
                            <Loader2 size={20} className="animate-spin" /> &nbsp;
                            Loading...
                          </>
                        ) : type === 'signin' 
                          ? 'Sign In' : 'Sign Up'}
                      </Button>
                    </div>
                </form>
              </Form>
              <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'signin'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === 'signin' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'signin' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
            </>
          )
        }
    </section>
  )
}

export default AuthForm