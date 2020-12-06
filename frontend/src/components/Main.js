import React, { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Main = () => {
	const [url, setUrl] = useState('');
	const [shortUrl, setShortUrl] = useState({ value: '', copied: false });

	const shortenHandler = async () => {
		const { data } = await axios.post(
			'/api/urls',
			{ url },
			{ 'Contenet-Type': 'application/json' }
		);

		setShortUrl((state) => ({ ...state, value: data.shortUrl }));
		setUrl(data.shortUrl);
	};

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
						value={url}
						onChange={(e) => setUrl(e.target.value)}
					></input>
					{shortUrl.value ? (
						<CopyToClipboard
							text={shortUrl.value}
							onCopy={() =>
								setShortUrl((state) => ({ ...state, copied: true }))
							}
						>
							<button className='btn'>
								{shortUrl.copied ? 'Copied' : 'Copy'}
							</button>
						</CopyToClipboard>
					) : (
						<button className='btn' onClick={shortenHandler}>
							Shorten
						</button>
					)}
				</div>
			</div>
		</main>
	);
};

export default Main;
