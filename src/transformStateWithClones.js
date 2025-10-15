/* eslint-disable no-const-assign */
'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let resultState = { ...state };
  const historyState = [];

  for (const action of actions) {
    let newState = { ...resultState };

    if (action.type === 'clear') {
      newState = {};
    }

    if (action.type === 'addProperties') {
      newState = { ...newState, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    }
    historyState.push(newState);
    resultState = newState;
  }

  return historyState;
}

module.exports = transformStateWithClones;
