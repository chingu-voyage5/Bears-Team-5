import { createRequestTypes, createAction } from '../utils';


/** *************************************************
 * Goals
 */
export const DAILY_GOALS = createRequestTypes('DAILY_GOALS');

export const dailyGoals = {
  request: () => createAction(DAILY_GOALS.REQUEST),
  success: data => createAction(DAILY_GOALS.SUCCESS, { data }),
  failure: errors => createAction(DAILY_GOALS.FAILURE, { errors }),
};

/**
 * SAVE GOAL
 */
export const SAVE_GOAL = createRequestTypes('SAVE_GOAL');

export const save = {
  request: goalData => createAction(SAVE_GOAL.REQUEST, { goalData }),
  success: () => createAction(SAVE_GOAL),
  failure: errors => createAction(SAVE_GOAL, { errors }),
};

