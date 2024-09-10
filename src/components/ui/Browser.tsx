"use client";

import { useState } from "react";
import {
  X,
  Plus,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Contact", url: "/contact" },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [nextId, setNextId] = useState(4);

  const handleNewTab = () => {
    const newTab = {
      id: nextId,
      title: `New Tab ${nextId}`,
      url: `/new-tab-${nextId}`,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
    setNextId(nextId + 1);
  };

  const handleCloseTab = (id: number) => {
    const newTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(newTabs);
    if (activeTab.id === id) {
      setActiveTab(
        newTabs[newTabs.length - 1] || { id: 0, title: "", url: "" }
      );
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-row gap-2 hidden md:flex justify-between">
        <div className="flex flex-row p-2 gap-2">
          <ScrollArea className="w-auto">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab.id === tab.id ? "secondary" : "ghost"}
                  className="px-3 py-1 h-8 text-sm"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.title}
                  <Separator orientation="vertical" className="mx-2 h-4" />
                  <X
                    className="h-4 w-4 opacity-50 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCloseTab(tab.id);
                    }}
                  />
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Separator orientation="vertical" className="h-8" />

          <Button
            variant="ghost"
            size="icon"
            className=""
            onClick={handleNewTab}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="bg-gradient-to-r from-white via-blue-400 to-blue-600 text-black flex flex-row justify-between items-center rounded-xl shadow-lg px-4 mx-4 my-auto hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h1 className="text-xl font-extrabold text-gray-800">
            Modern Browser
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-2 px-2 py-2 md:py-0  bg-muted/20">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <RotateCw className="h-4 w-4" />
        </Button>
        <Input
          className="flex-grow"
          placeholder="Enter URL or search..."
          value={activeTab.url}
          onChange={(e) => setActiveTab({ ...activeTab, url: e.target.value })}
        />
        <Button variant="ghost" size="icon" className="hidden md:block">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-grow md:px-3 md:py-2 p-1">
        <div className="rounded-lg border h-full">
          <iframe
            src={activeTab.url}
            className="w-full h-full rounded-lg"
            title={activeTab.title}
          />
        </div>
      </div>
    </div>
  );
}

