"use client";
import { useRouter } from "next/navigation";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <div>
            <button onClick={() => router.back()} className="text-primary hover:text-primary-highlight no-underline hover:underline">Go back</button>
            {children}
        </div>
    );
}
