import Layout from "@/core/components/layout/Layout";
import { Button } from "@/core/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Resources</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Free resources to help with your mental wellness journey
        </p>

        <div className="grid gap-6">
          <div className="bg-white dark:bg-card shadow-sm rounded-lg border p-6">
            <h2 className="text-xl font-medium mb-4">Blog Articles</h2>
            <p className="text-muted-foreground mb-4">
              Explore our collection of expert-written articles on various
              mental health topics.
            </p>
            <Button asChild>
              <Link to="/articles">Browse Articles</Link>
            </Button>
          </div>

          <div className="bg-white dark:bg-card shadow-sm rounded-lg border p-6">
            <h2 className="text-xl font-medium mb-4">Create Content</h2>
            <p className="text-muted-foreground mb-4">
              Are you a mental health professional? Share your expertise by
              creating blog articles.
            </p>
            <Button asChild>
              <Link to="/articles/create">Create Article</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
