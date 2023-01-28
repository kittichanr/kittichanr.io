import Image from 'next/image'
import { Suspense } from 'react'

import Container from '../components/Container'

export default function Home() {
	return (
		<Suspense fallback={null}>
			<Container>
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
								src="/avatar.jpeg"
								sizes="30vw"
								priority
								className="rounded-full filter grayscale"
							/>
						</div>
					</div>
				</div>
			</Container>
		</Suspense>
	)
}
