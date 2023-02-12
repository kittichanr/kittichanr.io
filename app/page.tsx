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
				url: '../public/avatar.jpg',
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
		<div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
			<div className="flex flex-col-reverse sm:flex-row items-start">
				<div className="flex flex-col pr-8">
					<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
						Petch Kittichan
					</h1>
					<h2 className="text-gray-700 dark:text-gray-200 mb-4">
						Software Engineer Experience at <span className="font-semibold">LMWN</span>
					</h2>
					<p className="italic text-gray-600 dark:text-gray-400 mb-4">
						“Any fool can write code that a computer can understand. Good programmers write code
						that humans can understand.“ - Martin Fowler
					</p>
					<p className="italic text-gray-600 dark:text-gray-400 mb-16">
						“First, solve the problem. Then, write the code.” - John Johnson
					</p>
				</div>
				<div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
					<Image
						alt="Petch Kittichan"
						height={176}
						width={176}
						src="/avatar.jpg"
						sizes="30vw"
						priority
						className="rounded-xl filter"
					/>
				</div>
			</div>
		</div>
	)
}
