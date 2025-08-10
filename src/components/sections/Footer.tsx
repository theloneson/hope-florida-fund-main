import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Hope Florida Fund</h3>
          <p className="mt-2 text-muted-foreground">Giving children a safe, loving home across Florida.</p>
          <div className="mt-4 flex items-center gap-3 text-muted-foreground">
            <Phone className="size-4" /> <span>(555) 123-4567</span>
          </div>
          <div className="mt-2 flex items-center gap-3 text-muted-foreground">
            <Mail className="size-4" /> <span>hello@hopefloridafund.org</span>
          </div>
        </div>
        <nav aria-label="Quick links" className="grid grid-cols-2 gap-3">
          <a href="#stories" className="story-link">Stories</a>
          <a href="/donate" className="story-link">Donate</a>
          <a href="#" className="story-link">About Us</a>
          <a href="#" className="story-link">Financial Reports</a>
        </nav>
        <div>
          <p className="font-semibold">Follow us</p>
          <div className="mt-3 flex gap-4 text-muted-foreground">
            <a aria-label="Twitter" href="#" className="hover:text-primary"><Twitter /></a>
            <a aria-label="Facebook" href="#" className="hover:text-primary"><Facebook /></a>
            <a aria-label="Instagram" href="#" className="hover:text-primary"><Instagram /></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hope Florida Fund. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
