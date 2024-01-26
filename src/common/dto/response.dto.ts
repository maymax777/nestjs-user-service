class Response<T> {
  data: T;
  message: string;
  success: boolean;
  error: string | null;
}

export default Response;
