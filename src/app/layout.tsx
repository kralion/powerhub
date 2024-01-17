import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

import { cookies } from "next/headers";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Powerhub",
  description: "Simplify EV management with our all-in-one solution",
  icons: [
    {
      rel: "icon",
      url: "https://cdn-icons-png.flaticon.com/128/11965/11965121.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased ")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
            <Toaster />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
