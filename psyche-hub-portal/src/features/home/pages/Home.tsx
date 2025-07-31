import Layout from "@/components/layout/Layout";
import Hero from "@/features/home/components/Hero";

import PsychologistGrid from "@/features/psychologists/components/PsychologistGrid";
import { articles, psychologists } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FeaturedArticle from "@/features/articless/components/FeaturedArticle";
import ArticleGrid from "@/features/articless/components/ArticleGrid";

const Home = () => {
  const featuredArticle =
    articles.find((article) => article.featured) || articles[0];
  const recentArticles = articles
    .filter((article) => article.id !== featuredArticle.id)
    .slice(0, 3);
  const featuredPsychologists = psychologists.slice(0, 3);

  return (
    <Layout>
      <Hero />

      <section className="container py-12">
        <FeaturedArticle article={featuredArticle} />

        <ArticleGrid articles={recentArticles} title="Recent Articles" />

        <div className="text-center mt-6">
          <Button asChild variant="outline">
            <Link to="/articles">View All Articles</Link>
          </Button>
        </div>
      </section>

      <section className="bg-psyche-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Verified Psychologists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with experienced, verified mental health professionals for
              virtual consultations tailored to your needs.
            </p>
          </div>

          <PsychologistGrid psychologists={featuredPsychologists} />

          {/* <div className="text-center mt-6">
            <Button asChild>
              <Link to="/psychologists">View All Psychologists</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* <section className="container py-16">
        <div className="bg-gradient-to-r from-psyche-300/10 to-psyche-400/10 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Are You a Licensed Psychologist?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our community of mental health professionals. Create a profile, share your expertise through articles, and connect with clients through virtual consultations.
              </p>
              <Button asChild>
                <Link to="/for-psychologists">Join as a Psychologist</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-medium text-lg mb-4">Benefits of Joining</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-psyche-300/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyche-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Expand your practice with virtual consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-psyche-300/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyche-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Share your expertise through our publishing platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-psyche-300/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyche-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Join a community of mental health professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-psyche-300/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyche-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Flexible scheduling and secure payment processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Home;
