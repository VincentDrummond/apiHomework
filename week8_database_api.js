/************************************************
GETTING INFO FROM THE API
************************************************/
const apiKey = 'efbaa39f5d0bac6c07336e1a65dc1ff6'; // GNews.io
const apiEndpointBreaking = `https://gnews.io/api/v4/search?q=example&token=${apiKey}&language=en`;
const showNews = document.getElementById('breakingNews');


async function getBreakingNews() {
	
	try {
		const apiResponse = await fetch(apiEndpointBreaking);

		if (!apiResponse.ok) {
			throw apiResponse
		} else {
		console.log('Response is ok');
		};



	} catch (error) {
		console.log('There has been an error:', error);
	}
};

getBreakingNews();

/************************************************
RENDERING THE DATA
************************************************/
// function renderNews(news=[]) {
// 	const fragment = document.createDocumentFragment();

// 	for (const news of news)
// }

// const newsData = await apiResponse.json();
// renderNews(newsData);



/************************************************
SETTING THE TIME & DATE
************************************************/

const timestamp = document.getElementById('timestamp');
const datestamp = document.getElementById('datestamp');
const date = new Date();
const datestampContent = date.toLocaleString('default', {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
});


datestamp.textContent = datestampContent

function timeClock () {
	const timeNow = new Date()
	let hours = timeNow.getHours();
	let minutes = timeNow.getMinutes();
	let seconds = timeNow.getSeconds();

	if (seconds < 10) {
		seconds = "0" + seconds; 
	};

	if (minutes < 10) {
		minutes = "0" + minutes; 
	};

	if (hours < 10) {
		hours = "0" + hours; 
	};

	timestamp.textContent = hours + ":" + minutes + ":" + seconds;
	setTimeout(timeClock, 1000);
}

timeClock();






