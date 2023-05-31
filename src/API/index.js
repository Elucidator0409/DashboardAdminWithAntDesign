export const getOrders= () => {
    return fetch('https://dummyjson.com/carts/1')
    .then(res => res.json())
    .catch(error => {console.log('Error with fetching API',               error)});
};