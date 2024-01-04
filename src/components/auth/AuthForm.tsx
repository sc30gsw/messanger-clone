'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { z } from 'zod'

import AuthSocialButton from '@/components/auth/AuthSocialButton'
import Button from '@/components/Button'
import Input from '@/components/input/Input'
import type { AuthFormInput } from '@/types/formInput/AuthFormInput'
import { authFormSchema } from '@/types/formInput/AuthFormInput'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  const variantSchema =
    variant === 'LOGIN'
      ? z.object({
          email: authFormSchema.shape.email,
          password: authFormSchema.shape.password,
        })
      : authFormSchema

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormInput>({
    resolver: zodResolver(variantSchema),
    defaultValues: { name: '', email: '', password: '' },
  })

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
    reset()
  }, [variant, reset])

  const onSubmit: SubmitHandler<AuthFormInput> = async (data) => {
    try {
      if (variant === 'REGISTER') {
        // Register
      }

      if (variant === 'LOGIN') {
        // NextAuth SignIn
      }
    } catch (err) {}
  }

  const socialAction = (action: string) => {
    setIsLoading(true)
    // NextAuth Social SignIn
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id="name"
              label="Name"
              name="name"
              type="text"
              control={control}
              error={errors.name?.message}
              disabled={isSubmitting}
            />
          )}
          <Input
            id="email"
            label="Email address"
            name="email"
            type="email"
            control={control}
            error={errors.email?.message}
            disabled={isSubmitting}
          />
          <Input
            id="password"
            label="Password"
            name="password"
            type="password"
            control={control}
            error={errors.password?.message}
            disabled={isSubmitting}
          />
          <div>
            <Button type="submit" disabled={isSubmitting} fullWidth>
              {variant === 'LOGIN' ? 'SIgn in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500">
          <div>
            {variant === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </div>
          <div onClick={toggleVariant} className="cursor-pointer underline">
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
