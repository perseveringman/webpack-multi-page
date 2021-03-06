import { stringify } from 'qs';
import request from './base';

export async function getFeeds(params) {
  return request.get(`/api/feeds/getFeedDetail?${stringify(params)}`);
}

export async function getFeedByTopic(params) {
  return request.get(`/api/feeds/getFeedListRecommendByTopicId?${stringify(params)}`);
}
