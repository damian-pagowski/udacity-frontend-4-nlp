# Project: News article with Natural Language Processing

Example app built with Express and Webpack.


## Installation

to install all dependencies use:

```bash
npm i
```

## Usage
App provides UI which allows user to submit an article URL.
The server calls an external API which returns article classification data and displays it to the user.

## Production bundle

To create production bundle run:

```bash
npm run build-prod
```

## Development bundle 

To create dev bundle run:

```bash
npm run build-dev
```
## Running app

After creating an app bundle with webpack run app server:
```bash
npm start
```
App will be served on port **8080**



## API

### GET /
serving app UI

### POST /test
submit an article URL.
Example request body:
```bash
{"url":"HTTP://[AN_ARTICLE_URL]"}
```
### GET /test
an endpoint for checking server state

## Testing

Unit tests are implemented with Jest. To run test type:

```bash
npm test
```




## License
[MIT](https://choosealicense.com/licenses/mit/)