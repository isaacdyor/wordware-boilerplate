import { Hero } from "@/components/landing-page/hero";
import TechStack from "@/components/landing-page/tech-stack";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Code, Shield, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
      >
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Why Choose Wordware?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast Setup",
                description:
                  "Get your AI SaaS up and running in minutes with our pre-configured boilerplate.",
              },
              {
                icon: Code,
                title: "Production-Ready Code",
                description:
                  "Built with best practices and optimized for performance right out of the box.",
              },
              {
                icon: Shield,
                title: "Built-in Security",
                description:
                  "Robust authentication and authorization systems to keep your app and users safe.",
              },
              {
                icon: Sparkles,
                title: "AI-Ready Components",
                description:
                  "Pre-built components designed for AI interactions and data visualization.",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <feature.icon className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1. Clone the Repo",
                description:
                  "Start with our pre-configured boilerplate and save weeks of setup time.",
              },
              {
                step: "2. Customize Your App",
                description:
                  "Easily modify components and add your own AI-powered features.",
              },
              {
                step: "3. Deploy and Scale",
                description:
                  "Launch your SaaS with one-click deployment and scale effortlessly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Build Your AI SaaS?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get started with Wordware Boilerplate today and launch your
              AI-powered SaaS in record time.
            </p>
            <div className="space-x-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                View Documentation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
