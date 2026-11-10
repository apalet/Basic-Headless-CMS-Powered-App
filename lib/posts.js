//In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. 
// It's usually convention to use lib or utils.

// import fs from 'fs';
// import path from 'path';

// BEFORE USING got MUST DO: npm install got@9.6.0
import got from 'got';
 
// define URL for rest API endpoint
const dataURL = 
'https://dev-srjc-fall-2026-cs-55-13.pantheonsite.io/wp-json/twentytwentyfive-child/v1/latest-posts/1';

//

export async function getAllPostIds() {

  let jsonString;
  try {
    // next line uses got synchronously to retrieve via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
    } catch (error) {
      jsonString.body = [];
      console.log(error);
    }

  const jsonObj = JSON.parse(jsonString.body);
  
  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString(),
      },
    };
  });
}

export async function getSortedPostsData() {

  let jsonString;
  try {
    // next line uses got synchronously to retrieve via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
    } catch (error) {
      jsonString.body = [];
      console.log(error);
    }
  
  const jsonObj = JSON.parse(jsonString.body);
  
  // sort json array by post_title
  jsonObj.sort(function(a, b) {
    return a.post_title.localeCompare(b.post_title);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

// getPostData function: return the post data based on id.
export async function getPostData(idRequested) {

  let jsonString;
  try {
    // next line uses got synchronously to retrieve via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);
 
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  let objReturned;
  if (objMatch.length > 0) {
    const post = objMatch[0];
    // Keep the wp post, and add the field names the Post page already uses.
    // `title` here is the same value as `name` on the home list (post_title).
    objReturned = {
      ...post,
      title: post.post_title,
      date: post.post_date,
      contentHtml: post.post_content,
    };
  } else {
    objReturned = {};
  }

  return objReturned;
}
