"use client";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import LoginGradient from "@/assets/login-gradient.png";
import AppleSvg from "@/assets/svg/apple.svg";
import GoogleSvg from "@/assets/svg/google.svg";
import TwitterSvg from "@/assets/svg/twitter.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/auth";
import type { TLogInForm } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, LockIcon, MailIcon, Loader, Check } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInForm>({
    resolver: zodResolver(loginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit = async (data: TLogInForm) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (result?.error) {
      setIsLoading(false);
      toast("Invalid Credentials", {
        description: "Please check your email and password and try again",
        position: "top-center",
        duration: 3000,
      });
    } else {
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/powerhub");
      }, 1000);
    }
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
      <div className="space-y-8 rounded-lg bg-gradient-to-b from-white/60   to-white/80 p-8 text-left  shadow-xl shadow-indigo-800 duration-200 animate-in fade-in fill-mode-both ">
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
            Welcome back
          </span>
          <div className="text-sm text-zinc-600">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up">
              <Button
                variant="link"
                className="px-1 text-black underline duration-200 hover:opacity-50"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" flex-col gap-4">
          <div className="mb-4">
            <div className="relative mb-2 w-96 ">
              <MailIcon
                size={16}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform text-gray-400"
              />
              <Input
                {...register("email")}
                type="email"
                className="border-2 border-none  border-zinc-200 bg-transparent bg-zinc-100 pl-10 text-zinc-500"
                placeholder="Email"
              />
            </div>

            {errors.email && (
              <div className="mb-4 flex items-center gap-1  text-xs text-rose-500 duration-300 animate-in fade-in-10">
                <AlertCircle size={15} />
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <div className="relative mb-2 w-full  ">
              <LockIcon
                size={16}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform text-gray-400"
              />
              <Input
                {...register("password")}
                type="email"
                className="border-2 border-none border-zinc-200 bg-transparent bg-zinc-100 pl-10 text-zinc-500"
                placeholder="Password"
              />
            </div>

            {errors.password && (
              <div className="mb-4 flex items-center gap-1 text-xs text-rose-500 duration-300 animate-in fade-in-10">
                <AlertCircle size={15} />
                {errors.password.message}
              </div>
            )}
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
            disabled={isLoading}
            className="mt-10 w-96 rounded-md border-2 border-zinc-100  p-3 font-semibold  "
          >
            {isSuccess ? (
              <Check className="text-green-500 duration-100 animate-in zoom-in-50" />
            ) : isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              "Log In"
            )}
          </Button>
        </form>
      </div>
      <div className="mt-4 text-xs text-zinc-300">
        <span>
          Email: <strong>albert@gmail.com</strong>
        </span>
        <span> | </span>{" "}
        <span>
          Password: <strong>123456</strong>
        </span>
      </div>
    </div>
  );
}
