import { BaseError } from './BaseError';

export class HttpError extends BaseError {
  statusCode: number;
  detail: string;
  constructor(statusCode: number, detail: string, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.detail = detail;
  }
}

export class Unauthorized extends HttpError {
  constructor(detail: string) {
    super(401, detail, 'Unauthorized');
  }
}

export class Forbidden extends HttpError {
  constructor(detail: string) {
    super(403, detail, 'Forbidden');
  }
}
