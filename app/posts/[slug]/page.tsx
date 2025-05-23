import { getPostData } from "@/lib/posts";
import { MarkdownAsync } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default async function Post({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const postData = await getPostData(params.slug);

    return (
        <main>
            <div className="pt-4">
                <h1 className="font-bold text-2xl tracking-tighter">{postData.data.title}</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{postData.data.publishedDate}</p>
            </div>

            <div className="container mx-auto px-3 py-4 md:px-0">
                <article className="prose dark:prose-invert">
                    <MarkdownAsync
                        components={{
                            code({ node, inline, className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || "");
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={oneDark}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, "")}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code>{children}</code>
                                );
                            },
                        }}
                    >
                        {postData.content}
                    </MarkdownAsync>
                </article>
            </div>
        </main>
    );
}
