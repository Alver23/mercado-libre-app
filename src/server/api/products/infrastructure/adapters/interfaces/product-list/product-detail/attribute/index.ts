/* eslint-disable camelcase */
// Enums
import { ATTRIBUTE_GROUP_NAME_TYPES, ATTRIBUTE_GROUP_TYPES } from '../../../enums';
import { ATTRIBUTE_TYPES, NAME_TYPES } from '../../emuns';

export interface IAttributeValue {
  struct: null;
  source: number;
  id: null | string;
  name: null | string;
}

export interface IAttribute {
  value_id: null | string;
  value_struct: null;
  attribute_group_name: ATTRIBUTE_GROUP_NAME_TYPES;
  source: number;
  id: ATTRIBUTE_TYPES;
  name: NAME_TYPES;
  value_name: null | string;
  values: IAttributeValue[];
  attribute_group_id: ATTRIBUTE_GROUP_TYPES;
}
