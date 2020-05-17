# README

![](https://github.com/frostyblok/nu-binary/workflows/CI/badge.svg)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/frostyblok/nu-binary.git

# Install Ruby on Rails dependencies
$ bundle install

# To run the backend app
$ rails s -p 8000

# To run the React app
$ cd client
$ npm install (To install React dependencies)
$ npm start
```

## Tests

* To run tests, navigate to the project's root directory
* After installation, run `rspec spec`


## API endpoints
```
POST Request -> localhost:8000/auth/signup
POST Request -> localhost:8000/auth/sigin
POST Request -> localhost:8000/calculations
GET Request ->  localhost:8000/calculations
