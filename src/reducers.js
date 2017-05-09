import REQUEST_POINTS from './actions'
const initialState = {
  points: []
}

function tripApp(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POINTS:
      return axios.get('https://jsonplaceholder.typicode.com/posts/1')
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    default:
      return state
  }
}

export default tripApp
