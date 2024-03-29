import axios, {AxiosError} from 'axios';
import {CustomError, ErrorCode} from './models';

export const handleErrors = (error: CustomError) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      switch (axiosError.response.status) {
        case 401:
          throw new Error(ErrorCode.Error401);
        case 404:
          throw new Error(ErrorCode.Error404);
        case 500:
        case 502:
        case 503:
        case 504:
          throw new Error(ErrorCode.Error500);
        default:
          throw new Error(ErrorCode.Unknown);
      }
    } else {
      throw new Error(ErrorCode.Unknown);
    }
  } else {
    throw new Error(ErrorCode.Unknown);
  }
};
