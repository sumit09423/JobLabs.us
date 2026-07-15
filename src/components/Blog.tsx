import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal direction="up">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-[#9ca3af] uppercase">
                ▪ Blog
              </p>
              <h2 className="mt-3 text-[32px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[40px]">
                Explore the <span className="text-[#6b7280]">Blog</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[14px] font-semibold text-[#1F6BFF] transition-opacity hover:opacity-80"
            >
              View all posts →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 120} direction="up">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f4f6]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[13px] text-[#9ca3af]">{post.date}</p>
                <h3 className="mt-2 text-[18px] font-bold leading-snug tracking-[-0.02em] text-[#111827] transition-colors group-hover:text-[#1F6BFF] sm:text-[20px]">
                  {post.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
