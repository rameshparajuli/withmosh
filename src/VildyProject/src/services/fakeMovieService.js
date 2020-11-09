import * as genresAPI from "./fakeGenreService";

export const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    title: "Airplane",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Wedding Crashers",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "The Avengers",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Action",
    },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
];

export const getMovies = () => movies;
export const getMovie = (id) => movies.find((m) => m._id === id);
