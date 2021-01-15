// Define all queries for article collection.
/**
 * @name AllArticles
 * @description Get all data of all articles.
 */
const AllArticles = () => `query {
  AllArticles {
    id
    resume
    subject
    createdAt
    excerpt {
      html
    }
  }
}`;

/**
 * @name OneArticle
 * @description Get all data of one article.
 * @param {string} id Article Id 
 */
const OneArticle = (id) => `query {
  Article(id: "${id}") {
    id
    resume
    subject
    createdAt
    excerpt {
      html
    }
  }
}`

export {
  AllArticles,
  OneArticle,
};