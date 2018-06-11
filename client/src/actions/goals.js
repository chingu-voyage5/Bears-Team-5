import { createRequestTypes, createAction } from '../utils';


/** *************************************************
 * Goals
 */
export const DAILY_GOALS = createRequestTypes('DAILY_GOALS');

export const dailyGoals = {
  request: () => createAction(DAILY_GOALS.REQUEST),
  success: () => createAction(DAILY_GOALS.SUCCESS),
  failure: errors => createAction(DAILY_GOALS.FAILURE, { errors }),
};
