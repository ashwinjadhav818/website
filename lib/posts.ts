import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = "data/posts";

export async function getPostData(id: string) {
    const fullPath = join(postsDirectory, `${id}.md`);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
        data: {
            title: matterResult.data.title,
            description: matterResult.data.description,
            publishedDate: new Date(
                matterResult.data.publishedDate,
            ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }),
            coverImage: matterResult.data.coverImage,
            tags: matterResult.data.tags,
        },
        content: matterResult.content,
    };

}

export function getPostsMetadata() {
    const files = fs.readdirSync("data/posts");
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`data/posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            publishedDate: new Date(
                matterResult.data.publishedDate,
            ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }),
            coverImage: matterResult.data.coverImage,
            tags: matterResult.data.tags,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
}
