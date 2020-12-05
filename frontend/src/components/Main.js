import React from 'react';

const Main = () => {
	return (
		<main>
			<div className='container'>
				<h1>Url Shortener</h1>
				<h2>Shorten & Share your links</h2>
				<div className='url'>
					<input
						type='text'
						name='url'
						placeholder='Enter Your Link...'
					></input>
					<button className='btn'>Shorten</button>
					<button className='btn'>Copy</button>
				</div>
			</div>
		</main>
	);
};

export default Main;
