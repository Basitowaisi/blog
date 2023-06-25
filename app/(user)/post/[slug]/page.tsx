import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { groq } from "next-sanity"
import Image from "next/image"
import React from "react"
import { PortableText } from "@portabletext/react"
import { RightTextComponents } from "@/components/RichTextComponents"

export const revalidate = 3600

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const query = groq`
    *[_type == "post"] {
      slug
    } 
  `
  const slugs: Post[] = await client.fetch(query)

  return slugs.map((slug) => ({ slug: slug.slug.current }))
}

const SinglePostPage = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->
    }
  `

  const post: Post = await client.fetch(query, { slug })

  return (
    <article className="px-10 pb-28 ">
      <section className="space-y-2 border border-[#f7ab0a] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute w-full h-full top-0 opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
              fill={true}
            />
          </div>
          <section className="p-5 bg-[#f7ab0a] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p className="">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                {post.author.image && (
                  <Image
                    className="rounded-full"
                    src={urlForImage(post.author.image).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                  />
                )}
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italice pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <div
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                    key={category._id}
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RightTextComponents} />
    </article>
  )
}

export default SinglePostPage
