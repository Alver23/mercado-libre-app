/* eslint-disable camelcase */
// Enums
import { STATE_TYPES, STATE_NAME_TYPES } from './enums';

export interface IAddress {
  state_id: STATE_TYPES;
  state_name: STATE_NAME_TYPES;
  city_id: null | string;
  city_name: string;
}
