export const metadata = {
	title: 'Book',
	description: "Here's everything I have been to read",
}

export default function BookPage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif">Book</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				📚 This is my list of books that I have read.
			</p>
			{/*TODO: Currently book to read Section*/}
			{/*TODO: the book already read Section */}
		</section>
	)
}
