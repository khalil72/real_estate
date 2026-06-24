import Loader from '@/components/ui/loading'
import ForgotPasswordComponent from '@/module/auth/forgot-password'
import React, { Suspense } from 'react'

const ForgotPassword = () => {
  return (
    <Suspense fallback={<Loader />}>
        <ForgotPasswordComponent />
      
    </Suspense>
  )
}

export default ForgotPassword
