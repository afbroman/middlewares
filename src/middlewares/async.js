export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
  };

  action.payload
  .then(response => {
    const newAction = { ...action, payload: response };

    // dispatch sends the action through all the middlewares again
    dispatch(newAction);
  });
}
