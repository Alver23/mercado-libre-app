/* eslint-disable camelcase */
export interface IRule {
  default: boolean;
  free_mode: string;
  free_shipping_flag: boolean;
  value: null;
}

export interface IFreeMethod {
  id: number;
  rule: IRule;
}

export interface IShipping {
  mode: string;
  free_methods: IFreeMethod[];
  tags: string[];
  dimensions: null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}
