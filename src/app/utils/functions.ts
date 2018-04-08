export function tryParseJsonString(data) {
  let response;
  let hasError = false;

  try {
    response = JSON.parse(data);
  } catch (ex) {
    response = data;
    hasError = true;
  }

  let responseData = {
    data: response,
    hasError: hasError
  }
  return responseData;
}
