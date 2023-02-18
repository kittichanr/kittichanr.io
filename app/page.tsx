import { ArrowIcon } from 'components/icons'
import { about, avatar, bio, name, quote } from 'lib/info'
import Image from 'next/image'

export const metadata = {
	description: 'Front-end developer, JavaScript enthusiast, and passionate for coding',
	openGraph: {
		title: 'Petch Kittichan – Developer, writer, creator.',
		description: 'Front-end developer, JavaScript enthusiast, and passionate for coding',
		// url: 'https://leerob.io',
		siteName: 'Petch Kittichan',
		images: [
			{
				url: '../app/avatar.jpg',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
}

export default function HomePage() {
	return (
		<section className="">
			<h1 className="font-bold text-3xl font-serif">{name}</h1>
			<h2 className="text-gray-700 dark:text-gray-200 my-4">{about()}</h2>
			<div className="flex items-start md:items-center my-8 flex-col md:flex-row">
				<Image
					alt={name}
					className="rounded-xl"
					src={avatar}
					placeholder="blur"
					width={150}
					priority
				/>
				<div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
					{quote()}
				</div>
			</div>
			<h2 className="text-gray-700 dark:text-gray-200 mb-4">{bio()}</h2>
			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
				<li>
					<a
						className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/kittichanr">
						<ArrowIcon />
						<p className="h-7">follow me on github</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="">
						<ArrowIcon />
						<p className="h-7">contract me in email</p>
					</a>
				</li>
			</ul>
		</section>
	)
}
