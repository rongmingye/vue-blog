export function success (data=null, message='') {
  return {
    code: 200,
    data,
    message,
  }
}

export function fail(data=null, message='') {
  return {
    code: 9999,
    data,
    message,
  }
}