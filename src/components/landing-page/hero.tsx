import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="w-full pt-48 pb-64 flex items-center justify-center ">
      <div className=" mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center ">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl">
            Build Your AI SaaS in Record Time
          </h1>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-200">
            Wordware Boilerplate: The fastest way to launch your AI-powered
            SaaS. From idea to production in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button>Get Started</Button>
            <Button variant="outline">
              View on GitHub
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
