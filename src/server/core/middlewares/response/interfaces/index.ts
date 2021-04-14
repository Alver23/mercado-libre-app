// Dependencies
import { Response } from 'express';

export type ICustomResponse = Response & { responseJson: () => void };
