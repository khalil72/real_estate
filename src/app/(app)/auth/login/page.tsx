import Loader from '@/components/ui/loading'
import LoginComponent from '@/module/auth/login'
import React, { Suspense } from 'react'

const LoginAuth = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LoginComponent />
    </Suspense>
  )
}

export default LoginAuth
