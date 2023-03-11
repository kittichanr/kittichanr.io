import type { Metadata } from 'next'
import Link from 'next/link'
import { allSnippets } from 'contentlayer/generated'

export const metadata: Metadata = {
	title: 'Code Snippet',
	description:
		'A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.',
}

export default function SnippetPage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif mb-5">Snippet</h1>
			{allSnippets
				.sort((a, b) => {
					if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
						return -1
					}
					return 1
				})
				.map((post) => (
					<Link
						key={post.slug}
						className="flex flex-col space-y-1 mb-4"
						href={`/snippet/${post.slug}`}>
						<div className="w-full flex flex-col">
							<p>{post.title}</p>
							<p>{post.publishedAt}</p>
						</div>
					</Link>
				))}
		</section>
	)
}
