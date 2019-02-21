const middleware = store => next => action => {
  if (!action.actions) {
    return next(action);
  }

  const [startAction, successAction, failureAction] = action.actions;

  store.dispatch({ type: startAction });
  action.promise
    .then(data => store.dispatch({
      type: successAction,
      payload: data
    }), error => store.dispatch({
      type: failureAction,
      error
    }));
};

export default middleware;