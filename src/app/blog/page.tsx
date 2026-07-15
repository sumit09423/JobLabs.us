import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts, featuredPost } from "@/data/blog";

export default function BlogPage() {
  return (
    <main className="w-full flex-1 bg-white">
      <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-10">
        <Reveal direction="up">
          <div className="mx-auto max-w-[720px] text-center">
            <span className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-4 py-1.5 text-[13px] font-medium text-[#4b5563] shadow-sm">
              Blog
            </span>
            <h1 className="mt-6 text-[36px] font-bold leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[48px] md:text-[56px]">
              Practical reads to help you move{" "}
              <em className="font-semibold italic text-[#1F6BFF]">faster.</em>
            </h1>
          </div>
        </Reveal>

        <Reveal direction="up" delay={120} className="mt-10 block sm:mt-12">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group flex flex-col overflow-hidden rounded-[28px] border border-[#eee] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:rounded-[32px] lg:min-h-[420px] lg:flex-row"
          >
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#e5e7eb] lg:aspect-auto lg:w-1/2 lg:min-h-[420px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex w-full flex-1 flex-col justify-between p-6 sm:p-8 lg:w-1/2 lg:p-10">
              <div>
                <span className="inline-flex rounded-full bg-[#111827] px-3 py-1 text-[12px] font-medium text-white">
                  {featuredPost.category}
                </span>
                <h2 className="mt-5 text-[26px] font-bold leading-[1.2] tracking-[-0.03em] text-[#111827] transition-colors group-hover:text-[#1F6BFF] sm:text-[32px] lg:text-[36px]">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.65] text-[#6b7280] sm:text-[16px]">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between text-[13px] text-[#6b7280]">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#111827]" />
                  {featuredPost.readTime}
                </span>
                <span>
                  by <em className="italic text-[#111827]">{featuredPost.author}</em>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 100} direction="up">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-[12px] font-medium text-[#111827] shadow-sm backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[18px] font-bold leading-snug tracking-[-0.02em] text-[#111827] transition-colors group-hover:text-[#1F6BFF] sm:text-[20px]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#6b7280]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
