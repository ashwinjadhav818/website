import Link from "next/link"

export default function Home() {
    return (
        <main>
            <div className="flex flex-col justify-center gap-2">
                <h1 className="text-3xl font-bold">Ashwin Jadhav</h1>
                <h2 className="text-xl font-medium">Developer. Student</h2>

                <div className="flex flex-row gap-4">
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
            <div className="mt-4">
                <p>I am a full-stack web developer since 2020. I love to make websites and to keep learning and experimenting with new technologies</p>
            </div>
        </main>
    );
}
