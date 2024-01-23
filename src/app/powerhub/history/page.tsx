import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="animate__animated animate__fadeIn flex h-screen  w-screen items-center justify-center gap-4 ">
      <h1 className="text-6xl font-bold tracking-tight text-white">History</h1>
      <Badge
        className={
          "border-white-200 border bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        }
      >
        Comming Soon
      </Badge>
    </div>
  );
}
