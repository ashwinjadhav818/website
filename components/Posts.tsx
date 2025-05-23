import { getPostsMetadata } from "@/lib/posts";
import Link from "next/link";

export default function PostsList() {
    const posts = getPostsMetadata();

    return (
        <div className="py-2">
            {posts.map((post) => (
                <Link href={`posts/${post.slug}`} key={post.slug} className="mb-2 hover:bg-violet-600">
                    <div className="border border-primary p-4">
                        <h1 className="text-lg text-primary">{post.title}</h1>
                        <p className="text-sm text-neutral-400">{post.publishedDate}</p>
                        <p>{post.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
