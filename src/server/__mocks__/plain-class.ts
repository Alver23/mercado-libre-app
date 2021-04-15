// Dependencies
import 'reflect-metadata';
import 'es6-shim';
import { plainToClass } from 'class-transformer';

const transformerPlainToClass = (model, data) => {
  return plainToClass(model, data, { excludeExtraneousValues: true });
};

export default transformerPlainToClass;
