CREATE DATABASE IF NOT EXISTS dbChallenge;

USE dbChallenge;

CREATE TABLE IF NOT EXISTS Restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rating INT,
    name VARCHAR(255),
    site VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    lat FLOAT,
    lng FLOAT
);
