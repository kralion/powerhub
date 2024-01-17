import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image, { type StaticImageData } from "next/image";

import React from "react";

type DetailsAlertProps = {
  trigger: React.ReactNode;
  title: string;
  description: React.ReactNode;
  image?: StaticImageData | string;
  successText?: string;
};
export function DetailsAlert({
  trigger,
  title,
  description,
  image,
  successText = "Okay",
}: DetailsAlertProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {image && (
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt="ev car"
                  title="Details"
                  width={300}
                  height={300}
                />
              </div>
            )}
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>{successText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
