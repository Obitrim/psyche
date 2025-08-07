import { Button } from "@/core/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-psyche-50 to-background  py-16 md:py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 bg-gradient-to-r from-psyche-400 to-psyche-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Mental wellness starts with understanding
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Connect with verified psychologists, access expert knowledge, and
            begin your journey toward mental wellness with personalized guidance
            and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button asChild size="lg" className="text-base">
              <Link to="/psychologists">Find a Psychologist</Link>
            </Button> */}
            <Button asChild size="lg" className="text-base">
              <Link to="/articles">Explore Articles</Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute -left-80 -top-80 -z-0 h-[50rem] w-[50rem] rounded-full bg-psyche-100/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 -z-0 h-[40rem] w-[40rem] rounded-full bg-psyche-100/30 blur-3xl"
        aria-hidden="true"
      />
    </div>
  );
};

export default Hero;
