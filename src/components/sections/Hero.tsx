import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466200941661-7e1e3b017067?q=80&w=1920&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/20 via-background/60 to-background" />

      <main className="container py-24 md:py-36">
        <div className="max-w-3xl animate-enter">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Give Hope. Change a Life.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground">
            Your donation can give children in Florida the safe and loving home they deserve.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="/donate" aria-label="Donate now to support Florida orphanage homes">
                Donate Now
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#stories" className="story-link" aria-label="Read impact stories">Read Stories</a>
            </Button>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Hero;
