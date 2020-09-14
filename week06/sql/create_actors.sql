DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    age INT,
    oscars INT
);


INSERT INTO actors (name, age, oscars) VALUES ('Leonard DiCaprio', 41, 1), 
('Jennifer Lawrence', 25, 1), ('Samuel L. Jackson', 67, 0), 
('Meryl Streep', 66, 3),
('John Cho', 43, 0);


-- SELECT * FROM actors WHERE oscars > 0;

-- SELECT * FROM actors WHERE age > 30;

