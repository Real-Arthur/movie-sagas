import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
    yield takeEvery('FETCH_MOVIES_ID', fetchMoviesIdSaga);
    yield takeEvery('FETCH_GENRES', fetchMoviesGenresSaga);
    yield takeEvery('CREATE_MOVIES', createMoviesIdSaga);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Saga used for fetching full movies list
function* fetchMoviesSaga(action) {
    console.log('fetchMoviesSaga action:', action.type);
    let response = yield axios({
        method: 'GET',
        url: '/api/movie'
    });
    console.log('Movies data:', response.data);
    yield put({
        type: 'SET_MOVIES',
        payload: response.data
    })
}

function* fetchMoviesIdSaga(action) {
    console.log('fetchMoviesIdSaga', action.type, action.payload)
    let response = yield axios({
        method: 'GET',
        url: `/api/movie/${action.payload}`,
        params: {
            id: action.payload
        }
    })
    console.log('Response params id:', response.data[0]);
    yield put({
        type: 'SET_MOVIES_ID',
        payload: response.data[0]
    })
}

function* createMoviesIdSaga(action) {
    console.log('createMoviesIdSaga', action.type, action.payload)
    yield axios({
        method: 'POST',
        url: '/api/movie/',
        data: action.payload
    })
    yield put({
        type: 'SET_MOVIES'
    })
}

function* fetchMoviesGenresSaga(action) {
    console.log('fetchMoviesGenresSaga', action.type, action.payload)
    let response = yield axios({
        method: 'GET',
        url: `/api/genre/${action.payload}`,
        payload: {
            id: action.payload
        }
    })
    console.log('GENRES GET response data', response.data);
    yield put({
        type: 'SET_GENRES',
        payload: response.data
    })
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        // case 'SET_MOVIES_ID':
        //     return action.payload;
        default:
            return state;
    }
}

const currentMovie = (state = [], action) => {
    switch(action.type) {
        case 'SET_MOVIES_ID':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        currentMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
