interface ErrorResponse {
  data: {
    errors: {};
    message: string;
  };
  status: number;
}

export default function catchError (response: ErrorResponse) {
  if (Object.prototype.hasOwnProperty.call(response, 'data')
      && Object.prototype.hasOwnProperty.call(response.data, 'errors')) {
    const { message } = response.data
    alert(message)
    //$message.error(message)
    return response.data.errors
  } else if (Object.prototype.hasOwnProperty.call(response, 'status')) {
    alert(`Status code ${response.status}`)
    //$message.error(`Status code ${response.status}`);
  } else {
    alert('Oops, sorry... Something went wrong')
    //$message.error('Oops, sorry... Something went wrong');
  }

  return {}
}