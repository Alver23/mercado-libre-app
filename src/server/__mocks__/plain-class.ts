// Dependencies
import 'reflect-metadata';
import 'es6-shim';
import { plainToClass } from 'class-transformer';

const transformerPlainToClass = (model: any, data: any): unknown => {
  return plainToClass(model, data, { excludeExtraneousValues: true });
};

export default transformerPlainToClass;
