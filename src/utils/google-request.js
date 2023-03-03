/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  const form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  const params = {
    client_id:
      "1000575426539-46q4dr57cr4hq4v2s648rfqie23ddjs9.apps.googleusercontent.com",
    /* redirect_uri: "http://localhost:3000/auth/google/code/", */
    redirect_uri: "https://dev.githance.com/auth/google/code/",
    response_type: "code",
    scope: "email profile",
    prompt: "consent",
  };

  // Add form parameters as hidden input values.
  for (const p in params) {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

export default oauthSignIn;
