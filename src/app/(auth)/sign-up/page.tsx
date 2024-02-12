/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import LoginGradient from "@/assets/login-gradient.png";
import { LockIcon, MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AppleSvg from "@/assets/svg/apple.svg";
import GoogleSvg from "@/assets/svg/google.svg";
import TwitterSvg from "@/assets/svg/twitter.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/auth";
import type { TSignUpForm } from "@/types/auth";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: TSignUpForm) => {
    console.log(data);
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
      <div className="space-y-8 rounded-lg  bg-gradient-to-b from-white/60  to-white/80 p-8 text-center">
        <div className=" flex flex-col items-center justify-center gap-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/11965/11965121.png"
            width={100}
            height={100}
            alt="logo"
          />
          <span className="text-2xl font-semibold text-black">
            Create an account
          </span>
          <div className="text-sm text-zinc-600">
            <span>Already have an account?</span>
            <Link href="/login">
              <Button variant="link" className="px-1 text-black">
                Log In
              </Button>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex justify-between gap-3">
            <Input
              {...register("firstName")}
              type="text"
              className="rounded-md border-2 border-zinc-200 bg-transparent bg-zinc-100 text-zinc-500"
              placeholder="First Name"
            />
            <Input
              {...register("lastName")}
              type="text"
              className="rounded-md border-2 border-zinc-200 bg-transparent bg-zinc-100  text-zinc-500"
              placeholder="Last Name"
            />
          </div>
          <div className="relative  flex items-center gap-2 rounded-md  border-2 border-zinc-200 bg-zinc-100 py-0 pl-4">
            <MailIcon size={20} className="text-zinc-600" />
            <Input
              {...register("email")}
              type="email"
              className=" border-none text-zinc-500"
              placeholder="Email"
            />
          </div>
          <div className="relative flex items-center gap-2 rounded-md  border-2 border-zinc-200 bg-slate-100 py-0 pl-4">
            <LockIcon size={20} className="text-zinc-600" />
            <Input
              {...register("password")}
              type="password"
              className="w-96 border-none bg-transparent text-zinc-500"
              placeholder="Password"
            />
          </div>
          <div className="my-2 flex items-center gap-1">
            <hr className="w-1/2 rounded border-[1px] border-zinc-200" /> or
            <hr className="w-1/2 rounded border-[1px] border-zinc-200" />
          </div>
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
            className="mt-10 rounded-md border-2 border-zinc-100  p-3 font-semibold  "
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
