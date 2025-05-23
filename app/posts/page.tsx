import PostsList from "@/components/Posts";
import Link from "next/link";

export default function Posts() {
    return (
        <div>
            <Link href="/" className="text-3xl font-bold">Ashwin Jadhav</Link>
            <main className="pb-10">
                <p>These are my posts on the topics I am excited about.</p>
                <PostsList />
            </main>
        </div>
    )
}
