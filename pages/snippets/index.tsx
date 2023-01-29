import Container from 'components/Container'

export default function Snippets() {
	return (
		<Container
			title="Code Snippets – Petch Kittichan"
			description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.">
			<div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
				<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
					Code Snippets
				</h1>
			</div>
		</Container>
	)
}
