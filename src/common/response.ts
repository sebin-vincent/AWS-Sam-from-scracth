export class ResponseDto<T> {
  statusCode: number;
  body: string;
  constructor(status = 200, data: T = null) {
    this.statusCode = status;
    this.body = JSON.stringify(data);
  }
}

export class ErrorResponse {
  statusCode: number;
  body: string;

  constructor(
    status = 500,
    message = "Something went wrong. We are wokring on it"
  ) {
    this.statusCode = status;
    this.body = JSON.stringify({ message: message });
  }
}
