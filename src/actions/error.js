const ACTION_ERROR = 'ACTION_ERROR';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
const CLEAR_SUCCESS = 'CLEAR_SUCCESS';

const newErrorSuccess = (error) => ({
  type: ACTION_ERROR,
  error: error,
});

export const newError = (data) => (dispatch) => {
  console.log(data);
  dispatch(newErrorSuccess(data.data.message));
};
