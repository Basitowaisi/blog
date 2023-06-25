import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"
import PreviewSuspense from "@/components/PreviewSuspense"
import PreviewBlogList from "@/components/PreviewBlogList"
import BlogList from "@/components/BlogList"

export const revalidate = 3600

const query = groq`
  *[_type == "post"] {
    ..., //get all the fields
    author->, //arrow means get the data of this reference
    categories[]-> //arrow means get the data of this reference
  } | order(_createdAt desc)
`

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <>
            <div role="status">
              <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
                Loading Preview Data...
              </p>
            </div>
          </>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)

  return <BlogList posts={posts} />
}
