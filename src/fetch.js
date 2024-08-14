const baseURL = 'http://localhost:5000/';

export const fetch_get = (url) => {
    const URL = baseURL + url;

    return fetch(URL, {
        method: "GET",
        headers: {
            'Authorization': JSON.parse(localStorage.getItem('user')).token,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }
            return response.json(); 
        })
        .catch(err => {
            console.error('Ошибка при выполнении запроса:', err);
            throw err; 
        });
};

export const fetch_post = (url, body) => {
    const URL = baseURL + url;
    return fetch(URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
      });
}
