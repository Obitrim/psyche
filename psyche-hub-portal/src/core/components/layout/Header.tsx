import { Link } from "react-router-dom";
import { ModeToggle } from "@/core/components/theme/ModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-psyche-300 flex items-center justify-center">
              <span className="font-bold text-white">PH</span>
            </div>
            <span className="font-bold text-xl hidden md:inline-block">
              PsycheHub
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              to="/articles"
              className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            {/* <Link to="/psychologists" className="text-sm font-medium transition-colors hover:text-primary">
              Psychologists
            </Link>
            <Link to="/consultations" className="text-sm font-medium transition-colors hover:text-primary">
              Consultations
            </Link> */}
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            {/* <Link
              to="/resources"
              className="text-sm font-medium transition-colors hover:text-primary">
              Resources
            </Link> */}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {/* <Button variant="outline" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign up</Link>
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
