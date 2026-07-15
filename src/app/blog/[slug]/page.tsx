import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import {
  allPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog | JobLabs" };

  return {
    title: `${post.title} | JobLabs`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <main className="w-full flex-1 bg-white">
      <article className="mx-auto max-w-[980px] px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:px-10">
        <Reveal direction="up">
          <Link
            href="/blog"
            className="text-[13px] font-medium text-[#6b7280] transition-colors hover:text-[#1F6BFF]"
          >
            ← Back to Blog
          </Link>
          <h1 className="mt-6 max-w-[820px] text-[34px] font-bold leading-[1.15] tracking-[-0.035em] text-[#111827] sm:text-[44px] md:text-[52px]">
            {post.title}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_0.7fr] lg:gap-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[#f3f4f6] sm:rounded-[28px]">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            </div>

            <aside className="flex flex-col justify-center gap-8 rounded-[24px] border border-[#eee] bg-white p-5 sm:p-6 lg:rounded-[28px]">
              <div>
                <p className="text-[13px] font-semibold text-[#111827]">
                  Category
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e5e7eb] bg-[#f9fafb] px-3 py-1 text-[12px] font-medium text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[13px] font-semibold text-[#111827]">
                  Written by
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[14px] font-bold text-[#111827]">
                      {post.author}
                    </p>
                    <p className="text-[12px] text-[#6b7280]">
                      {post.authorRole}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[12px] text-[#9ca3af]">
                {post.date} · {post.readTime}
              </p>
            </aside>
          </div>
        </Reveal>

        <Reveal direction="up" delay={160}>
          <div className="mx-auto mt-10 max-w-[720px] sm:mt-12">
            <p className="text-[16px] leading-[1.75] text-[#4b5563] sm:text-[17px]">
              {post.intro}
            </p>

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#111827] sm:text-[26px]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-[16px] leading-[1.75] text-[#4b5563] sm:text-[17px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </Reveal>
      </article>

      <section className="mt-8 w-full bg-[#F5F5F5] px-4 py-14 sm:mt-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal direction="up">
            <p className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111827]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#111827]" />
              Blog and articles
            </p>
            <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[36px]">
              Latest insights and trends
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 100} direction="up">
                <Link
                  href={`/blog/${item.slug}`}
                  className="group block overflow-hidden rounded-[22px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] font-medium text-[#9ca3af]">
                      {item.category} · {item.readTime}
                    </p>
                    <h3 className="mt-2 text-[17px] font-bold leading-snug tracking-[-0.02em] text-[#111827] transition-colors group-hover:text-[#1F6BFF]">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[14px] leading-[1.55] text-[#6b7280]">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
