"use client";

import { CopyText } from "@/components/landing-page/copy-text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -top-[280px] -z-30 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4.5rem_2rem] [transform:perspective(560px)_rotateX(-63deg)]" />
      <div className="pointer-events-none absolute top-0 -z-20 h-1/2 w-full bg-gradient-to-b from-transparent to-background" />

      <div className="bg-gradient-radial fixed -z-10 h-full w-full rounded-full from-primary/45 via-primary/15 to-transparent blur-3xl dark:from-primary/15 dark:via-primary/5" />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="relative z-10 text-center text-4xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
          AI SaaS Boilerplate
        </h1>

        <p className="relative z-10 mt-0 max-w-[80%] text-center md:mt-4">
          An open-source starter kit based on{" "}
          <Link href="https://www.wordware.ai/" className="underline">
            Wordware
          </Link>
          .
        </p>

        <div className="z-10 mb-8 mt-10">
          <CopyText value="pnpm dlx degit isaacdyor/wordware-boilerplate ww" />
        </div>

        <div className="flex gap-4">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex gap-2 border-background hover:border-border",
            )}
            href="/docs"
          >
            Docs
            <BookOpen className="h-4 w-4" />
          </Link>
          <Link
            className={cn(buttonVariants(), "flex gap-2")}
            href="https://github.com/isaacdyor/wordware-boilerplate"
            target="_blank"
          >
            GitHub
            <GitHubLogoIcon />
          </Link>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -bottom-[280px] -z-30 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4.5rem_2rem] [transform:perspective(560px)_rotateX(63deg)]" />
      <div className="pointer-events-none absolute bottom-0 -z-20 h-1/2 w-full bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
