export const API_PATH = "http://185.196.214.135:8888/api/";
export const TOKEN_NAME = "polymer-token";
export const tokenKey=localStorage.getItem(TOKEN_NAME);
export const tokenHeader= {headers: {authorization: tokenKey}}