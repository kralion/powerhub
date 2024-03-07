/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import LoginGradient from "@/assets/login-gradient.png";
import AppleSvg from "@/assets/svg/apple.svg";
import GoogleSvg from "@/assets/svg/google.svg";
import TwitterSvg from "@/assets/svg/twitter.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/schemas/auth";
import type { TSignUpForm } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Check, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: TSignUpForm) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => {
      // router.push("/login");
    }, 1000);
  };
  return (
    <div
      className="flex min-h-screen  w-screen flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${LoginGradient.src})`,
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="space-y-8 rounded-lg bg-gradient-to-b from-white/60 to-white/80 p-8  shadow-xl shadow-indigo-800  duration-200 animate-in fade-in fill-mode-both">
        <div className=" flex flex-col items-center justify-center gap-2">
          <Link
            href="/"
            className="duration-200 hover:scale-105 active:opacity-70"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/128/11965/11965121.png"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <span className="text-2xl font-semibold text-black">
            Create an account
          </span>
          <div className="text-sm text-zinc-600">
            <span>Already have an account?</span>
            <Link href="/login">
              <Button
                variant="link"
                className="px-1 text-black underline duration-200 hover:opacity-50"
              >
                Log In
              </Button>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex justify-between gap-3">
            <div className="flex w-1/2 flex-col gap-2">
              <Input
                {...register("firstName")}
                type="text"
                className="rounded-md border-2 border-zinc-200 bg-transparent bg-zinc-100 text-zinc-500"
                placeholder="First Name"
              />
              {errors.firstName && (
                <div className="flex items-center gap-1 text-xs text-rose-500 duration-300 animate-in fade-in-10">
                  <AlertCircle size={15} />
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div className="flex w-1/2 flex-col gap-1">
              <Input
                {...register("lastName")}
                type="text"
                className="rounded-md border-2 border-zinc-200 bg-transparent bg-zinc-100  text-zinc-500"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <div className="flex items-center gap-1 text-xs text-rose-500 duration-300 animate-in fade-in-10">
                  <AlertCircle size={15} />
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>

          <Input
            {...register("email")}
            type="email"
            className=" border-2 border-zinc-200 bg-slate-100   text-zinc-500"
            placeholder="Email"
          />

          {errors.email && (
            <div className="flex items-center gap-1 text-xs text-rose-500 duration-300 animate-in fade-in-10">
              <AlertCircle size={15} />
              {errors.email.message}
            </div>
          )}

          <Input
            {...register("password")}
            type="password"
            className=" border-2 border-zinc-200 bg-slate-100   text-zinc-500"
            placeholder="Password"
          />
          {errors.password && (
            <div className="flex items-center gap-1 text-xs text-rose-500 duration-300 animate-in fade-in-10">
              <AlertCircle size={15} />
              {errors.password.message}
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            <Button className="w-full rounded-sm">
              <Image src={AppleSvg} width={20} height={20} alt="apple" />
            </Button>
            <Button className="w-full rounded-sm ">
              <Image src={GoogleSvg} width={20} height={20} alt="apple" />
            </Button>
            <Button className="w-full rounded-sm">
              <Image src={TwitterSvg} width={20} height={20} alt="apple" />
            </Button>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="mt-10 rounded-md border-2 border-zinc-100  p-3 font-semibold  "
          >
            {isSuccess ? (
              <Check className="text-green-500 duration-100 animate-in zoom-in-50" />
            ) : isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
