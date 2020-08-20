google-taxonomy-matcher
=======================
Matches unstructured product data to a category of Google's Taxonomy for use with Merchant Center Feeds.

## Install

```
npm install google-taxonomy-matcher --save
```

## Usage

```JavaScript
const taxonomyMatcher = require('google-taxonomy-matcher');

// new taxonomyMatcher(<taxonomy locale>, <match threshold>)
// <taxonomy locale> = the locale extension of the taxonomy file from Google 
// <match threshold> = how close the search term must be to the matched result
const matcher = new taxonomyMatcher('en-GB', 100)

// matcher.match(<search term>, <minisearch opts>)
// <search term> = Your unstructured search query, E.G. "product title + product category"
// <minisearch opts> see -> https://www.npmjs.com/package/minisearch
matcher.match('Roll Up Cotton Chino Shorts Womens > Shorts > Casual')
/*{ 
  id: 207, // Matched Google Category ID
  terms: [ 'shorts' ], // Searched Terms
  score: 457.7377034211667, // Matched Score (see <match threshold>)
  match: { shorts: [ 'category', 'full_path_scrubbed' ] }, // Matched Terms
  full_path: 'Clothing & Accessories > Clothing > Shorts'  // Matched Google Category
}*/
```

## Links
Google Merchant Center -> https://support.google.com/merchants/answer/6324436<br>
MiniSearch -> https://www.npmjs.com/package/minisearch<br>
Python Version -> https://github.com/BernhardWenzel/google-taxonomy-matcher<br>
Inspiration -> https://bernhardwenzel.com/articles/automatically-matching-category-google-shopping/

## Disclaimer
<b>D3VL Provides this software 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.</b>
<br>
<p align="center">Made with ❤️ By <a href="//d3vl.com">D3VL</a></p>
<p align="center" style="font-size: 8px">v1.0.0</p>

