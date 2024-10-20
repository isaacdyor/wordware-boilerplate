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
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Card className="h-full overflow-hidden group bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors">
      <CardContent className="p-6 flex flex-col items-center text-center h-full justify-between">
        <div className="w-12 h-12 mb-4 text-primary ">
          <Icon />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const techStack = [
  {
    name: "Wordware",
    description: "The most popular AI Operating System",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494 444" {...props}>
        <path
          fill="currentColor"
          d="M136.048 382.606c-28.377.435-56.707.444-85.036.562-2.958.012-4.425-.83-4.058-3.96.116-.986.017-1.998.017-2.998.001-98.16 0-196.32.001-294.481 0-6.847.002-6.853 6.601-6.851 27.165.007 54.33.018 81.961.074.508 49.378.549 98.709.588 148.04.006 7.5-.043 15 .037 22.499.018 1.705.466 3.406.865 6.129 2.753-2.101 4.882-3.364 6.564-5.069 10.705-10.854 21.295-21.822 31.96-32.715 3.592-3.668 7.313-7.211 10.944-10.843 2.478-2.478 3.852-.189 5.3 1.254 12.87 12.82 25.706 25.675 38.549 38.522 5.538 5.539 11.22 10.945 16.55 16.679 3.085 3.319 5.207 4.057 8.79.305 10.409-10.898 21.226-21.405 31.897-31.052 8.324-8.304 16.618-16.64 25.105-24.774.646-.62 3.264-.277 4.063.521 12.928 12.919 25.658 26.037 38.564 38.979 3.166 3.175 6.8 5.883 11.407 9.82.388-5.484.88-9.222.883-12.96.05-52.833.101-105.665-.076-158.497-.016-4.907 1.447-6.061 6.171-6.019 25.498.227 50.998.108 76.498.108h5.658V382.688H369.288c-2.785-3.054-4.986-5.662-7.388-8.07-16.542-16.59-33.085-33.18-49.709-49.688-14.975-14.871-30.063-29.628-45.079-44.458-4.37-4.316-8.899-8.506-12.899-13.146-2.195-2.547-3.55-2.28-5.597-.23-12.124 12.137-24.303 24.22-36.44 36.345-19.913 19.894-39.785 39.83-59.73 59.693-4.942 4.921-10.194 9.533-15.071 14.514-.97.99-.881 3.015-1.328 4.958z"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    description: "The React Framework for Production",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 01.174-.143c.096-.047.134-.052.54-.052.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.01-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    description: "Open Source Firebase Alternative",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.362 9.354H12V.396a.396.396 0 00-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 00.836 1.659H12v8.959a.396.396 0 00.716.233l9.081-12.261.401-.562a1.04 1.04 0 00-.836-1.66z" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    description: "Next-generation Node.js and TypeScript ORM",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 159 194"
        fill="currentColor"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.39749 122.867C0.476293 126 0.506027 129.955 2.47414 133.059L38.0964 189.252C40.4083 192.899 44.8647 194.562 49.0006 193.321L151.798 162.482C157.408 160.799 160.23 154.541 157.778 149.222L91.6953 5.87265C88.4726 -1.11816 78.7573 -1.69199 74.734 4.87082L2.39749 122.867ZM89.9395 38.6438C88.535 35.3938 83.7788 35.8944 83.0817 39.3656L57.64 166.044C57.1035 168.715 59.6044 170.996 62.215 170.217L133.24 149.015C135.313 148.397 136.381 146.107 135.522 144.121L89.9395 38.6438Z"
        />
      </svg>
    ),
  },
  {
    name: "Stripe",
    description: "Payment Infrastructure for the Internet",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    description: "A Utility-First CSS Framework",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
];

export default function TechStackSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Cutting-Edge Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
