import Layout from "@/components/layout/Layout";
import { articles, categories } from "@/data/mockData";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { format } from "date-fns";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import CategoryList from "../components/CategoryList";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  // Get related articles from the same category
  const relatedArticles = articles
    .filter(
      (a) => a.category.id === article?.category.id && a.id !== article?.id
    )
    .slice(0, 3);

  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/articles">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-gradient-to-b from-psyche-50 to-background py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/articles"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex gap-2 items-center text-sm text-muted-foreground mb-3">
              <Link
                to={`/categories/${article.category.slug}`}
                className="hover:text-foreground transition-colors">
                {article.category.name}
              </Link>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <Link
                to={`/authors/${article.author.id}`}
                className="flex items-center gap-3 group">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium group-hover:text-psyche-300 transition-colors">
                    {article.author.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(article.createdAt), "MMMM d, yyyy")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 rounded-lg overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-3">
              <div className="article-content prose prose-lg max-w-none">
                {article.content.split("\n").map((line, i) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
                        {line.replace("# ", "")}
                      </h1>
                    );
                  } else if (line.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">
                        {line.replace("## ", "")}
                      </h2>
                    );
                  } else if (line.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-xl font-semibold mt-6 mb-3">
                        {line.replace("### ", "")}
                      </h3>
                    );
                  } else if (line.startsWith("- ")) {
                    return (
                      <li key={i} className="ml-6">
                        {line.replace("- ", "")}
                      </li>
                    );
                  } else if (line === "") {
                    return <br key={i} />;
                  } else {
                    return (
                      <p key={i} className="my-4">
                        {line}
                      </p>
                    );
                  }
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link key={tag.id} to={`/tags/${tag.slug}`}>
                    <Badge
                      variant="outline"
                      className="hover:bg-psyche-100 transition-colors">
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>

              <Separator className="my-8" />

              <div className="flex items-center gap-4">
                <Link
                  to={`/authors/${article.author.id}`}
                  className="flex items-center gap-4 group">
                  <div className="h-14 w-14 rounded-full overflow-hidden">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium group-hover:text-psyche-300 transition-colors">
                      {article.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {article.author.bio.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CategoryList categories={categories} />

                {relatedArticles.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-6">
                      {relatedArticles.map((related) => (
                        <div key={related.id} className="group">
                          <Link
                            to={`/articles/${related.slug}`}
                            className="flex gap-3">
                            <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                              <img
                                src={related.coverImage}
                                alt={related.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm group-hover:text-psyche-300 transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {related.readTime} min read
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
