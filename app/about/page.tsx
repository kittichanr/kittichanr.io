import { careerPath } from 'lib/careerPath'

export const metadata = {
	title: 'About',
	description: 'About – Petch Kittichan',
}

export default function AboutPage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif">About Me</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				👋🏻 Hey, I'm Petch. I'm frontend developer from Thailand 🇹🇭.
			</p>
			<div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
				<p>
					I'm currently the <b>Software Engineer at LMWN</b>, Restaurant Solution Team. mostly, I
					contributed and maintained on the Wongnai merchant app (WMA) using React Native Framework.
					sometime I have a chance to contribute website project such as Wongnai merchant portal
					(WMP) using React.
				</p>
				<p>
					<b>In free time</b> I usually play a guitar for relax. play sports such as basketball or
					football with my friends and my younger brother for health and communication, reading a
					book for gain knowledge, care of cactus for my personal preference and the last is coding
					and this one make me feel like can't live without it if you don't do it.
				</p>
				<p>
					I'm <b>passionate</b> about something make me feel like happy, including music, sports,
					reading a book, cactus lover, and of course, coding. This combination of interests is make
					me who I am today.
				</p>
				<hr />
				<h1 className="font-bold text-3xl font-serif">Career Path</h1>
				<ul className="relative border-l border-gray-200 dark:border-gray-700 list-none">
					{careerPath.reverse().map((item, index) => {
						return (
							<li key={index} className="mb-10 ml-4">
								<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
								<div className="pt-1.5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
									{item.year}
								</div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									{item.title}
								</h3>
								<div
									className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
									dangerouslySetInnerHTML={{ __html: item.description }}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
