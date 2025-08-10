import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Donate = () => {
  useEffect(() => {
    document.title = "Donate – Hope Florida Fund";
  }, []);

  return (
    <main className="min-h-[60vh] flex items-center">
      <section className="container py-16 text-center">
        <h1 className="text-4xl font-bold">Donate</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          This is a placeholder donation page. Integrate your preferred payment provider here. Your support brings safety and love to children across Florida.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#">Proceed to Secure Donation</a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Donate;
