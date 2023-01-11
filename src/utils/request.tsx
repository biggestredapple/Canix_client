import fetch from 'isomorphic-fetch';

const options = { method: 'GET', headers: { accept: 'application/json', Authorization: 'fsq3MmBm7eRvLh7H9UgRJdv53QL70SsPtZUm8pc7UDWjbW8=' } };
export const Fetch = (urlString: string) => new Promise((resolve, reject) => {
    fetch(urlString, options)
        .then(response => response.json())
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err)
        })
})