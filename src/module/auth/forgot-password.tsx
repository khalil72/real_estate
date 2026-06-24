'use client';

import { useState } from 'react';
import { FormField } from '@/components/form/form-field';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LoadingButton } from '@/components/ui/loading-button';

const ForgotPasswordComponent = () => {
  const [step, setStep] = useState(1);

  const handleEmailSubmit = () => {
    setStep(2);
  };

  const handlePasswordReset = () => {

    console.log('Password Updated');
  };

  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            {step === 1 ? 'Forgot Password' : 'Reset Password'}
          </CardTitle>

          <CardDescription>
            {step === 1
              ? 'Enter your email address'
              : 'Create a new password'}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step === 1 ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEmailSubmit();
              }}
              className="space-y-4"
            >
              <FormField
                label="Email"
                type="email"
                required
              />

              <LoadingButton type="submit" className="w-full">
                Send Reset Link
              </LoadingButton>
            </form>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePasswordReset();
              }}
              className="space-y-4"
            >
              <FormField
                label="New Password"
                type="password"
                required
              />

              <FormField
                label="Confirm Password"
                type="password"
                required
              />

              <LoadingButton type="submit" className="w-full">
                Update Password
              </LoadingButton>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default ForgotPasswordComponent;