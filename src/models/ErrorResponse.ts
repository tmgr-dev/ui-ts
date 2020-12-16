export default interface ErrorResponse {
  data: {
    errors: {};
    message: string;
  };
  status: number;
}