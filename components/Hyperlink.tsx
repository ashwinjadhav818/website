import Link from "next/link";

interface hyperlinkTypes {
    to: string,
    data: any
}

export default function Hyperlink({ to, data }: hyperlinkTypes) {
    return (
        <Link href={to} className="text-primary hover:text-primary-highlight no-underline hover:underline">{data}</Link>
    )
}
