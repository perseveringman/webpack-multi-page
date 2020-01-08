import request from './base'
import { stringify } from 'qs';
export function fetchDailyRecommendList (params) {
  return request.get(`/api/feed/activity/list?${stringify(params)}`)
}