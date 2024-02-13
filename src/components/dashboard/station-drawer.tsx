import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { toast } from "sonner";

import React from "react";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StationDrawer({
  drawerTrigger,
}: {
  drawerTrigger: React.ReactNode;
}) {
  const [chargerCounter, setChargerCounter] = React.useState(10);
  const unitCost = 2.5;
  const [totalCost, setTotalCost] = React.useState(0);
  React.useEffect(() => {
    setTotalCost(chargerCounter * unitCost);
  }, [chargerCounter]);
  const [duration, setDuration] = React.useState(0);
  React.useEffect(() => {
    setDuration((chargerCounter * unitCost) / 26);
  }, [chargerCounter]);
  return (
    <Drawer>
      <DrawerTrigger asChild>{drawerTrigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Station Info</DrawerTitle>
            <DrawerDescription>
              This particular station is located in the middle of{" "}
              <Badge className="bg-[#30FFFF] text-black hover:bg-[#30FFFF]">
                nowhere
              </Badge>
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <DrawerTitle className="pb-10">Charging Calculator</DrawerTitle>
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => {
                  setChargerCounter(chargerCounter - 5);
                }}
              >
                <MinusIcon className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {chargerCounter}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  WH/hour
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => {
                  setChargerCounter(chargerCounter + 5);
                }}
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 flex h-[120px] justify-between">
              <div>
                <span className="text-[0.70rem] uppercase text-muted-foreground">
                  Total Cost
                </span>
                <div className="text-2xl font-bold tracking-tighter">
                  ${totalCost}
                </div>
              </div>
              <div>
                <span className="text-[0.70rem] uppercase text-muted-foreground">
                  Duration/Average
                </span>
                <div className="text-2xl font-bold tracking-tighter">
                  {duration.toFixed(1)} hours
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button
              onClick={() =>
                toast("Charging Book created", {
                  description: "For, December 03, 2023 at 9:00 AM",
                  position: "top-right",
                  duration: 2000,
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Book Charger
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
