"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const TechCard = ({
  name,
  description,
  icon: Icon,
}: {
  name: string;
  description: string;
  icon: React.ComponentType;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full overflow-hidden group">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="w-12 h-12 mb-4 text-primary group-hover:text-primary/80 transition-colors">
          <Icon />
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const techStack = [
  {
    name: "Next.js",
    description: "The React Framework for Production",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 01.174-.143c.096-.047.134-.052.54-.052.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.01-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    description: "Open Source Firebase Alternative",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M21.362 9.354H12V.396a.396.396 0 00-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 00.836 1.659H12v8.959a.396.396 0 00.716.233l9.081-12.261.401-.562a1.04 1.04 0 00-.836-1.66z" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    description: "Next-generation Node.js and TypeScript ORM",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M21.807 18.285L13.553.756a1.324 1.324 0 00-1.129-.754 1.31 1.31 0 00-1.206.626l-8.952 14.5a1.356 1.356 0 00.016 1.455l4.376 6.778a1.408 1.408 0 001.58.581l12.703-3.757c.513-.151.912-.54 1.076-1.046s.1-1.068-.21-1.854zm-1.657.902l-10.292 3.044a.358.358 0 01-.432-.205l-3.18-5.716a.399.399 0 01-.016-.356.386.386 0 01.283-.238l11.59-3.258a.407.407 0 01.355.106.399.399 0 01.106.353l-.947 5.473a.13.13 0 000 .054l-.098.559a1.321 1.321 0 00.179 1.002 1.376 1.376 0 002.452-.184z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    description: "Payment Infrastructure for the Internet",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    description: "A Utility-First CSS Framework",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
];

export default function TechStackSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
          Cutting-Edge Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
