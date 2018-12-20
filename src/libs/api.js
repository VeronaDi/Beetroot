import qs from "qs";

const baseUrl = process.env.REACT_APP_API_URL;

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    throw new Error("server error");
  }
}

function fetchJSON(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(readJson);
}

function readJson(response) {
  return response.json();
}

export function loadProducts(queryParams = {}) {
  return fetchJSON(`${baseUrl}/products?${qs.stringify(queryParams)}`);
}

export function loadProduct(id) {
  return fetchJSON(`${baseUrl}/products/${id}`);
}

export function loadCategories() {
  return fetchJSON(`${baseUrl}/categories`);
}

export function loadCategory(id) {
  return fetchJSON(`${baseUrl}/categories/${id}`);
}
