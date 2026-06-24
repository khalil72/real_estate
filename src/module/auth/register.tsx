'use client';

import { FormField } from '@/components/form/form-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoadingButton } from '@/components/ui/loading-button';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { RegisterFormData, registerSchema } from '@/lib/schemas';

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <main className="flex-1 flex items-center justify-center bg-background-light px-4 py-6 md:py-12">
      <Card className="w-full max-w-md shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Create Account
          </CardTitle>
          <CardDescription className="text-center">
            Register to buy, sell, or rent properties
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="First Name"
                error={errors.firstName?.message}
                {...register('firstName')}
                required
              />

              <FormField
                label="Last Name"
                error={errors.lastName?.message}
                {...register('lastName')}
                required
              />
            </div>

            <FormField
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register('email')}
              required
            />

            <FormField
              label="Phone Number"
              type="tel"
              error={errors.phone?.message}
              {...register('phone')}
              required
            />

            <FormField
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register('password')}
              required
            />

            <FormField
              label="Confirm Password"
              type="password"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
              required
            />

            <LoadingButton
              type="submit"
              className="w-full"
              loadingText="Creating Account..."
            >
              Create Account
            </LoadingButton>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="font-medium text-primary hover:underline"
            >
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default RegisterComponent;