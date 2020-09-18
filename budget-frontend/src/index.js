const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const EXPENSES_URL = `${BASE_URL}/expenses`
const main = document.querySelector("main");
const addUserForm = document.querySelector(".container-1");

document.addEventListener("DOMContentLoaded", () => loadUsers());
