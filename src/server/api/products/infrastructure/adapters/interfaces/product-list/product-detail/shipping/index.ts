/* eslint-disable camelcase */
// Enums
import { SHIPPING_TAG_TYPES } from '@alversoft/server/api/products/infrastructure/adapters/interfaces/enums';
import {
  LOGISTIC_TYPES,
  MODE_TYPES,
} from '@alversoft/server/api/products/infrastructure/adapters/interfaces/product-list/emuns';

interface IShipping {
  free_shipping: boolean;
  mode: MODE_TYPES;
  tags: SHIPPING_TAG_TYPES[];
  logistic_type: LOGISTIC_TYPES;
  store_pick_up: boolean;
}

export default IShipping;
