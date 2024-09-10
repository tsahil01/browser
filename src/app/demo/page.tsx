"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkle } from "lucide-react";
import { useSetRecoilState } from "recoil";
import { activeTabAtom } from "../atom/activeTabAtom";

export default function Home() {
  const setActiveTab = useSetRecoilState(activeTabAtom);
  return (
    <>
      <div className="h-screen flex flex-col gap-5 w-full items-center justify-center bg-gradient-to-l from-purple-600 to-blue-900">
        <div className="text-center flex flex-col gap-3">
          <Sparkle className="m-auto text-yellow-400 w-16 h-16" />
          <h1 className="md:text-5xl text-3xl font-bold text-white">
            This is a Demo Page
          </h1>
          <p className="text-gray-200">
            You can open a new tab and open any another page..
          </p>
        </div>
        <div className="max-w-2xl px-4 mt-5">
          <h1 className="text-xl font-bold text-white border-b w-auto text-center">Availabe Pages</h1>
          <div className="flex rounded p-5 justify-center">
            <div className="flex flex-row gap-3">
                <Button variant="ghost" onClick={()=>{
                    setActiveTab({
                        title: "Home",
                        url: "/home",
                        id: 1,
                    })
                }}>
                    Home
                    <ExternalLink className="h-5 w-5 ml-1" />
                </Button>

                <Button variant="ghost" onClick={()=>{
                        setActiveTab({
                            title: "About",
                            url: "/about",
                            id: 2,
                        })

                    }} >
                    About
                    <ExternalLink className="h-5 w-5 ml-1" />
                </Button>
                <Button variant="ghost" onClick={()=>{
                    setActiveTab({
                        title: "Contact",
                        url: "/contact",
                        id: 3,
                    })
                }}>
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
