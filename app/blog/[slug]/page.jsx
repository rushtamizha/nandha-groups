import { blogs } from "../../data/blogs";
import BlogDetailsClient from "./BlogDetailsClient";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  if (!blog)
    return { title: "Blog not found", description: "Blog not found" };

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogDetails({ params }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  return <BlogDetailsClient blog={blog} />;
}

