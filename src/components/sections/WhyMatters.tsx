import { HeartHandshake, Home, Users } from "lucide-react";

const Stat = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm animate-enter">
    <div className="p-3 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
      <Icon />
    </div>
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  </div>
);

const WhyMatters = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">Why Your Help Matters</h2>
        <p className="mt-2 text-muted-foreground">
          Your generosity fuels safe homes, education, counseling, and a sense of belonging for children across Florida.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat icon={Users} value=">15,000" label="children in Florida live without permanent families" />
        <Stat icon={Home} value="1 in 5" label="teens age out without support—mentorship changes outcomes" />
        <Stat icon={HeartHandshake} value="85%" label="of funds go directly to child programs and care" />
      </div>
    </section>
  );
};

export default WhyMatters;
