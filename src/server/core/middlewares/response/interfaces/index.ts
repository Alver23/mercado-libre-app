// Dependencies
import { Response } from 'express';

type ICustomResponse = Response & { responseJson: () => void };

export default ICustomResponse;
