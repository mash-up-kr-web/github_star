import { isNull, isUndefined } from 'lodash'
export const isFalsy = (value: any) => isNull(value) || isUndefined(value);

export const STATUS_CODE = {
  SUCCESS: 200,
  FAIL: 404
}