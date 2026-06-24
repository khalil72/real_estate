'use client'
import { FormField } from '@/components/form/form-field'
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LoadingButton } from '@/components/ui/loading-button'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginFormData, loginSchema } from '@/lib/schemas';

const LoginComponent = () => {
  const [kickedMessage, setKickedMessage] = useState<string | null>(null);
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data:any) =>{

  }
  return (
     <main className="flex-1 flex items-center justify-center bg-background-light px-4 py-6 md:py-12">
        <Card className="w-full max-w-sm shadow-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Sign In
            </CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {kickedMessage && (
              <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                {kickedMessage}
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                label="Email"
                type="email"
                error={errors.email?.message}
                {...register("email")}
                required
              />

              <FormField
                label="Password"
                type="password"
                error={errors.password?.message}
                {...register("password")}
                required
              />

              <div className="flex items-center justify-between">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="flex justify-center">
                <LoadingButton
                  type="submit"
                //   loading={isPending}
                  loadingText="Signing in..."
                  className="min-w-[140px]"
                >
                  Sign In
                </LoadingButton>
              </div>

              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-2 text-sm text-muted-foreground">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/*
              <button
                type="button"
                onClick={() => googleLogin()}
                disabled={isGoogleLoading}
                className="w-full flex items-center justify-center gap-3 border rounded-lg py-2 hover:bg-gray-50 transition"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="google"
                  className="w-5 h-5"
                />
                <span>
                  {isGoogleLoading
                    ? "Signing in with Google..."
                    : "Continue with Google"}
                </span>
              </button>
              <FacebookLogin
                appId="1539708961058789"
                // fields="name,email,picture"
                callback={responseFacebook}
                render={renderFacebookButton}
              />
              */}
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="text-primary hover:underline font-medium"
              >
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
  )
}

export default LoginComponent
