import Loader from '@/components/ui/loading'
import RegisterComponent from '@/module/auth/register'
import React, { Suspense } from 'react'

const RegisterAuth = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RegisterComponent />
    </Suspense>
  )
}

export default RegisterAuth
