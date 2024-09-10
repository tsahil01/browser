import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkle } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col gap-5 w-full items-center justify-center bg-gradient-to-r from-purple-600 to-blue-900">
        <div className="text-center flex flex-col gap-3">
          <Sparkle className="m-auto text-yellow-400 w-16 h-16" />
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Contact Page
          </h1>
          <p className="text-gray-200">
            You can open a new tab and open any another page..
          </p>
        </div>
        <div className="max-w-2xl px-4 mt-5">
          <h1 className="text-xl font-bold text-white border-b w-auto text-center">Availabe Pages</h1>
          <div className="flex rounded p-5 justify-center">
            <div className="flex flex-row gap-3">
                <Button variant="ghost">
                    Home
                    <ExternalLink className="h-5 w-5 ml-1" />
                </Button>
                <Button variant="ghost">
                    About
                    <ExternalLink className="h-5 w-5 ml-1" />
                </Button>
                <Button variant="ghost">
                    Contact
                    <ExternalLink className="h-5 w-5 ml-1" />
                </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
