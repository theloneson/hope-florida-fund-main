import { Button } from "@/components/ui/button";

interface StoryCardProps {
  name: string;
  img: string;
  text: string;
}

const StoryCard = ({ name, img, text }: StoryCardProps) => (
  <article className="bg-accent text-accent-foreground rounded-lg shadow-md overflow-hidden animate-enter">
    <img src={img} alt={`${name}'s story`} loading="lazy" className="w-full h-56 object-cover" />
    <div className="p-6 space-y-3">
      <h3 className="text-xl font-semibold">Meet {name}</h3>
      <p className="text-muted-foreground">{text}</p>
      <Button asChild variant="cta">
        <a href="/donate" aria-label={`Help ${name} with a donation`}>Help {name}</a>
      </Button>
    </div>
  </article>
);

const Stories = () => {
  const stories = [
    {
      name: "John",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
      text:
        "John is a bright 8-year-old who loves drawing and stories. Your support helps provide stable care and nurturing guidance.",
    },
    {
      name: "Maya",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop",
      text:
        "Maya dreams of becoming a teacher. Donations help fund after-school tutoring, supplies, and safe housing.",
    },
    {
      name: "Leo",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
      text:
        "Leo loves science and soccer. Your help ensures he has the resources and mentorship he needs to thrive.",
    },
  ];

  return (
    <section id="stories" className="container py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">Stories of Hope</h2>
        <p className="mt-2 text-muted-foreground">
          Every child deserves a chance. These are just a few of the many lives you can impact.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s) => (
          <StoryCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Stories;
