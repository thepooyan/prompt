"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock } from "lucide-react"
import Link from "next/link"
import ContinueWithGoogle from "../auth/Google"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">

        {/* Login Card */}
        <Card className="bg-zinc-900/80 border-zinc-800 backdrop-blur-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-zinc-100">ورود به حساب</CardTitle>
            <CardDescription className="text-zinc-400">برای دسترسی به حساب کاربری خود وارد شوید</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  ایمیل
                </Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="pr-10 bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-zinc-300">
                    رمز عبور
                  </Label>
                  <Link
                    href="#forgot-password"
                    className="text-xs text-primary hover:text-[#9a3bf2] transition-colors"
                  >
                    فراموشی رمز عبور؟
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pr-10 bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-l from-primary/70 to-secondary/70 hover:from-primary hover:to-secondary text-primary-foreground font-medium glow-purple-sm transition-all duration-200 h-10"
              >
                ورود
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-zinc-900 px-2 text-zinc-500">یا</span>
                </div>
              </div>

              <ContinueWithGoogle/>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-zinc-400">
                حساب کاربری ندارید؟{" "}
                <Link href="#signup" className="text-primary hover:text-[#9a3bf2] font-medium transition-colors">
                  ثبت نام کنید
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-600 mt-6">
          با ورود به سایت، شما{" "}
          <Link href="#terms" className="text-zinc-500 hover:text-primary transition-colors">
            شرایط و قوانین
          </Link>{" "}
          را می‌پذیرید
        </p>
      </div>
    </div>
  )
}

