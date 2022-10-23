const About = ({ onChangePage }) => {
	const handleClick = () => {
		onChangePage && onChangePage('home');
	}
	return (
		<>
			<div>
				<h1>This is About Page!!!</h1>
			</div>
			<button onClick={handleClick}>
				Back Home
			</button>
		</>
	)
}

export default About;