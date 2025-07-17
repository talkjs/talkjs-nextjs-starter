import './globals.css'
import type { Metadata } from "next";
import Nav from '@/components/Nav';
 
export const metadata: Metadata = {
  title: "TalkJS and Next.js Starter",
  description: "Next.js starter with fully-featured chat, real-time messaging and notifications, built by TalkJS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">

        <Nav/>
          <main className="">
            {children}
          </main>
      </body>
    </html>
  )
}