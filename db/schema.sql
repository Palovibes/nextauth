CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    roleID INT NOT NULL
);

INSERT INTO users (email, password, roleID) VALUES
('teacher@example.com', 'password', 1),
('student@example.com', 'password', 2),
('admin@example.com', 'password', 3);
