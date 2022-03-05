export function getErrorMessageOnDeleteOrInvite(response) {
  let errorMessage = `Cannot invite/delete the user: ${response.error}`;
  if (response.needed) errorMessage += `, missing scopes '${response.needed}'`;

  return errorMessage;
}
