/************************************************
GETTING INFO FROM THE API (GNews.io)
************************************************/
const apiKey = 'efbaa39f5d0bac6c07336e1a65dc1ff6';
const apiEndpoint = `https://gnews.io/api/v4/search?q=example&token=${apiKey}&language=en`;
const showNews = document.getElementById('theNews');


/************************************************
A FUNCTION FOR BUILDING PAGE ELEMENTS
************************************************/
function renderArticle(article) {
	const mainDiv = document.createElement("div")
	
	const image = document.createElement("img");
		image.classList.add('newsImage');
		image.src = article.image;

	const h1 = document.createElement("h1");
		h1.classList.add('h1Text');
		h1.textContent = article.title;

	const divContent = document.createElement("div");
		divContent.classList.add('articleText');
		divContent.textContent = article.content;

	const articleURL = document.createElement("a");
	articleURL.classList.add('url');
	articleURL.textContent = article.url;

	mainDiv.appendChild(image);
	mainDiv.appendChild(h1);
	mainDiv.appendChild(divContent);
	mainDiv.appendChild(articleURL);
	showNews.appendChild(mainDiv);
};

/************************************************
WHAT'S THIS?
************************************************/

async function getNews() {
	try {
		const apiResponse = await fetch(apiEndpoint);

		if(!apiResponse.ok) {
			throw apiResponse;
		}

		const result = await apiResponse.json();
		result.articles.forEach(article => renderArticle(article))

		console.log("Response is OK", result);
	} catch (err) {
		console.log("There has been an error of", err);
	}
}
getNews();


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






