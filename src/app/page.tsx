import Link from "next/link";

import { CreatePost } from "@/components/create-car";
import { Badge } from "@/components/ui/badge";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { MoveRight } from "lucide-react";

export default async function Home() {
  const hello = await api.cars.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#8E2DE2] to-[#2B32B2] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
            Power<span className="text-[#30FFFF]">hub</span>
          </h1>
          <span className="w-2/3 text-center text-gray-300 ">
            Simplify EV management with our all-in-one solution, including
            battery tracking and real-time GPS integration, perfect tool to
            manage your EV Car.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="group flex max-w-xs flex-col gap-4 rounded-xl border-2 border-white/10 bg-white/10 p-4 duration-300 hover:bg-white/20"
            href="/login"
          >
            <div className="flex items-center gap-2 text-2xl font-bold">
              Dashboard
              <MoveRight
                size={20}
                className="duration-300 group-hover:translate-x-3"
              />
            </div>
            <div className="text-lg">
              Capabilities, versioning and status of the actual production
              release of{" "}
              <Badge
                className={
                  " border-yellow-500 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
                }
              >
                Release v 0.2.12
              </Badge>
            </div>
          </Link>
          <Link
            className="group flex max-w-xs flex-col gap-4 rounded-xl border-2 border-white/10 bg-white/10 p-4 duration-300 hover:bg-white/20"
            href="https://github.com/kralion/powerhub"
            target="_blank"
          >
            <div className="flex items-center gap-2 text-2xl font-bold">
              Repository
              <MoveRight
                size={20}
                className="duration-300 group-hover:translate-x-3"
              />
            </div>
            <div className="text-lg">
              Releases of Powerhub and its new features, contributions are
              welcome! on{" "}
              <Badge
                className={
                  " border-zinc-800 bg-gradient-to-r from-zinc-700 to-zinc-800 text-white"
                }
              >
                Github
              </Badge>
            </div>
          </Link>
        </div>
        {/* <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div> */}
        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.cars.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
