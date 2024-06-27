import Content from "@/components/dashboard/content";
import Stats from "@/components/dashboard/stats";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Content />
      <Stats />
    </div>
  );
}
