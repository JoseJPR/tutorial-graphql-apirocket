// Import main Dependencies.
import dotenv from 'dotenv';

// Import all Tools.
import Https from './tools/https.js';

// Import all Queries.
import { AllArticles, OneArticle } from './queries/article.js';

// Get environment content file.
dotenv.config();
(async () => {
  try {
    // Example to get all articles. 
    const resultAllArticles = await Https.request({
      hostname: process.env.APIROCKET_HOSTNAME,
      token: process.env.APIROCKET_API_TOKEN,
      query: AllArticles(),
    });
    console.log(resultAllArticles);

    // Example to get one article by id. 
    // FYI: For this example you will have to assign an id.
    const id = '6001ecca90d3c70008679124';
    const resultOneArticle = await Https.request({
      hostname: process.env.APIROCKET_HOSTNAME,
      token: process.env.APIROCKET_API_TOKEN,
      query: OneArticle(id),
    });
    console.log(resultOneArticle);
  } catch(err) {
    console.error(err);
  }
})();
