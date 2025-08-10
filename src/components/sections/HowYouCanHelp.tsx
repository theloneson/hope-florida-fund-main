import { Button } from "@/components/ui/button";
import { Heart, School, Shirt, Handshake } from "lucide-react";

const Option = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="bg-card rounded-lg shadow-sm p-6 flex flex-col justify-between animate-enter">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-md bg-primary/10 text-primary"><Icon /></div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-muted-foreground">{text}</p>
    <Button asChild variant="outline" className="mt-5">
      <a href="/donate" aria-label={`${title} donation`}>Get Started</a>
    </Button>
  </div>
);

const HowYouCanHelp = () => {
  const options = [
    { icon: Heart, title: "Money", text: "Fund safe housing, healthcare, and enrichment programs." },
    { icon: School, title: "School Supplies", text: "Backpacks, notebooks, and learning materials for success." },
    { icon: Shirt, title: "Clothes", text: "Seasonal clothing and essentials for comfort and dignity." },
    { icon: Handshake, title: "Volunteering", text: "Mentor, tutor, or lend skills to support daily needs." },
  ];

  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">How You Can Help</h2>
        <p className="mt-2 text-muted-foreground">Choose the way you want to make a difference today.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((o) => (
          <Option key={o.title} {...o} />
        ))}
      </div>
    </section>
  );
};

export default HowYouCanHelp;
