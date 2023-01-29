import Container from 'components/Container'

export default function Blogs() {
	return (
		<Container
			title="Blog – Petch Kittichan"
			description="Thoughts on the software industry, programming, tech, music, and my personal life.">
			<div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
				<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
					Blogs
				</h1>
			</div>
		</Container>
	)
}
