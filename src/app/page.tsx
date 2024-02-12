import Link from "next/link";

import { CreatePost } from "@/components/create-car";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const hello = await api.cars.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#8E2DE2] to-[#2B32B2] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
          Power<span className="text-[#30FFFF]">hub</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl border-2 border-white/10 bg-white/10 p-4 duration-300 hover:bg-white/20"
            href="/login"
          >
            <h3 className="text-2xl font-bold">Dashboard →</h3>
            <div className="text-lg">
              Capabilities and status of the actual production release of{" "}
              <Badge
                className={
                  " border-yellow-500 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
                }
              >
                Powerhub v1.2.12
              </Badge>
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl border-2 border-white/10 bg-white/10 p-4 duration-300 hover:bg-white/20"
            href="https://github.com/Dv-Joan/powerhub"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Repository →</h3>
            <div className="text-lg">
              Releases of Powerhub and its new features, contributions are
              welcome! on{" "}
              <Badge
                className={
                  " border-slate-500 bg-gradient-to-r from-slate-400 via-zinc-500 to-black text-white"
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
