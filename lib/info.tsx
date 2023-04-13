import me from '../app/avatar.jpg'

export const name = 'Petch Kittichan'
export const avatar = me
export const about = () => {
	return (
		<>
			👋, I'm Petch. Software Engineer Experience at" <b>LMWN</b> I'm work in restaurant solution
			team contribute on wongnai merchant app (WMA)
		</>
	)
}
export const bio = () => {
	return (
		<>
			I'm passionate about frontend development.{'\n'}I like to learn about a new thing in
			javascript especially React framework.{'\n'}
			I'm currently learning React, Apollo Client, Golang.
		</>
	)
}
export const quote = () => {
	return (
		<>
			<p className="italic text-gray-600 dark:text-gray-400 mb-4">
				“Any fool can write code that a computer can understand. Good programmers write code that
				humans can understand.“ - <b>Martin Fowler</b>
			</p>
			<p className="italic text-gray-600 dark:text-gray-400">
				“First, solve the problem. Then, write the code.” - <b>John Johnson</b>
			</p>
		</>
	)
}
