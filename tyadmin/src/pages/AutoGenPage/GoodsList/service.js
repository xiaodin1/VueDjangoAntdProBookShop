import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryGoods(params) {
  return request('/api/xadmin/v1/goods', {
    params,
  });
}
export async function removeGoods(params) {
  return request(`/api/xadmin/v1/goods/${params}`, {
    method: 'DELETE',
  });
}
export async function addGoods(params) {
  let fileFieldList = ["goods_front_image"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/goods', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateGoods(params, id) {
  let fileFieldList = ["goods_front_image"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/goods/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryGoodsVerboseName(params) {
  return request('/api/xadmin/v1/goods/verbose_name', {
    params,
  });
}
export async function queryGoodsListDisplay(params) {
  return request('/api/xadmin/v1/goods/list_display', {
    params,
  });
}
export async function queryGoodsDisplayOrder(params) {
  return request('/api/xadmin/v1/goods/display_order', {
    params,
  });
}


