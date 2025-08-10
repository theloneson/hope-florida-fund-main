import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "I’ve seen firsthand how these donations create stability and joy for children who need it most.",
    author: "Sarah M., Volunteer",
  },
  {
    quote: "Every dollar matters. Together we’re building brighter futures in our own backyard.",
    author: "David R., Donor",
  },
  {
    quote: "The support helped us provide essential counseling and mentoring for teens.",
    author: "Ana L., Staff",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
          <p className="mt-2 text-muted-foreground">Stories from donors and staff across Florida.</p>
        </div>
        <div className="mt-8">
          <Carousel>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <blockquote className="h-full p-6 bg-card rounded-lg shadow-sm animate-enter">
                    <p className="text-lg">“{t.quote}”</p>
                    <footer className="mt-4 text-muted-foreground">— {t.author}</footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
