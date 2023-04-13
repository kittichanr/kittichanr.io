import ResourcesCard from 'components/resourceCard'

export const metadata = {
	title: 'Resource',
	description: "A collection of source – including everything that I'm learned.",
}

export default function resourcePage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif">Resource</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				Helpful websites that I've been using for years that have helped me in developing
				applications and much more. 🔥
			</p>
			<h2 className="w-fit font-bold text-xl font-serif  mt-8 text-black dark:text-white border-b-4 border-black-300">
				Blog
			</h2>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
				<ResourcesCard
					title="CallStack Blog"
					link="https://www.callstack.com/blog"
					websiteLink="callstack.com/blog"
					description="Great React Native blog"
				/>
				<ResourcesCard
					title="Shopify Blog"
					link="https://shopify.engineering/"
					websiteLink="shopify.engineering"
					description="The One Tech Company blog that interesting"
				/>
			</div>
			<h2 className="w-fit font-bold text-xl font-serif  mt-8 text-black dark:text-white border-b-4 border-black-300">
				Utilities
			</h2>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
				<ResourcesCard
					title="React SVG Converter"
					link="https://react-svgr.com/playground/"
					websiteLink="react-svgr.com/playground"
					description="covert svg code to react svg code"
				/>
				<ResourcesCard
					title="Resize image"
					link="https://www.iloveimg.com/resize-image"
					websiteLink="iloveimg.com/resize-image"
					description="resize image file"
				/>
				<ResourcesCard
					title="Roadmap.Sh"
					link="https://roadmap.sh/"
					websiteLink="roadmap.sh"
					description="the guideline roadmap for developer"
				/>
			</div>
			<h2 className="w-fit font-bold text-xl font-serif  mt-8 text-black dark:text-white border-b-4 border-black-300">
				Coding Exercises
			</h2>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
				<ResourcesCard
					title="Exercism"
					link="https://exercism.org/"
					websiteLink="exercism.org"
					description="coding exercise any programming language that you want to exercise"
				/>
				<ResourcesCard
					title="Leet Code"
					link="https://leetcode.com/"
					websiteLink="leetcode.com"
					description="popular coding exercise website"
				/>
			</div>
		</section>
	)
}
