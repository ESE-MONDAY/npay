
import React from 'react'
import AuthForm from '@/components/Form/AuthForm'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="signin" />
    </section>
  )
}

export default SignIn