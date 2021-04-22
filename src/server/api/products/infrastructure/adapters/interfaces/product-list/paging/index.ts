/* eslint-disable camelcase */
// Enums
import { AVAILABLE_FILTER_TYPES } from './enums';

export interface IAvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface IPaging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface IAvailableFilter {
  id: string;
  name: string;
  type: AVAILABLE_FILTER_TYPES;
  values: IAvailableFilterValue[];
}

export interface ISort {
  id: null | string;
  name: string;
}

export interface FilterValue {
  id: string;
  name: string;
  path_from_root?: ISort[];
}

export interface IFilter {
  id: string;
  name: string;
  type: AVAILABLE_FILTER_TYPES;
  values: FilterValue[];
}
