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
