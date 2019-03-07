// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // STRETCH 3: Button to remove article marked as read
    this.readButton = this.domElement.querySelector('.readButton');
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // STRETCH 3: Click handler to remove article marked as read
    this.readButton.addEventListener('click', this.readArticle.bind(this));
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if(this.expandButton.textContent === 'Click to Expand') {
      this.expandButton.textContent = 'Click to Close';
    } else {
      this.expandButton.textContent = 'Click to Expand';
    }
  }
  readArticle() {
    // STRETCH 3: remove article marked as read
    this.domElement.classList.toggle('article-read');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(function(article) { return new Article(article); });


// STRETCH 4: Article constructor
const artWrapper = document.querySelector('.articles');
const addArticle = function(header, date, content) {
  let newArticle = document.createElement('div');
  newArticle.classList.add('article');

  const artH2 = document.createElement('h2');
  artH2.textContent = header;
  newArticle.append(artH2);

  const artRead = document.createElement('span');
  artRead.classList.add('readButton');
  artRead.textContent = 'Mark as Read';
  newArticle.append(artRead);

  const artDate = document.createElement('p');
  artDate.classList.add('date');
  artDate.textContent = date;
  newArticle.append(artDate);

  const artContent = document.createElement('p');
  artContent.textContent = content;
  newArticle.append(artContent);

  const artExpand = document.createElement('span');
  artExpand.classList.add('expandButton');
  newArticle.append(artExpand);

  artWrapper.append(newArticle);
  articles = document.querySelectorAll('.article');
  return new Article(newArticle);
}