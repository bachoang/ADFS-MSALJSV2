function callApi(endpoint, token) {

    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    // accesstokenDiv.innerHTML = token;

    logMessage('web API Access Token: ' + token);

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => {

            if (response) {
                logMessage('Web API responded: Hello ' + response.toString()+ '!');
            }

            return response;
        }).catch(error => {
            console.error(error);
        });

}