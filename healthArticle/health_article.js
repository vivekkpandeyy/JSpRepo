// Create XMLHttpRequest object
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// Set up the request
xhr.open('GET', url, true);
xhr.responseType = 'json';

// Handle the response
xhr.onload = function() {
  if (xhr.status === 200) {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    
    articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');
      
      var title = document.createElement('h2');
      title.textContent = article.title;
      
      var description = document.createElement('p');
      description.textContent = article.description;
      
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';
      
      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });
      
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';
      
      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });
      
      // Append all elements to articleDiv
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);
      
      // Append article to main container
      articlesDiv.appendChild(articleDiv);
    });
  } else {
    console.error('Error loading articles:', xhr.statusText);
    articlesDiv.innerHTML = '<p>Error loading articles. Please try again later.</p>';
  }
};

// Handle errors
xhr.onerror = function() {
  console.error('Request failed');
  document.getElementById('articles').innerHTML = '<p>Request failed. Please check your connection.</p>';
};

// Send the request
xhr.send();