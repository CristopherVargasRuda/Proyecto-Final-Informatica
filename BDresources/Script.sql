-- CRUD_Libros

CREATE TABLE libros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    año_publicacion INTEGER,
    editorial VARCHAR(50)
);

INSERT INTO libros (titulo, autor, genero, año_publicacion, editorial) VALUES
    ('1984', 'George Orwell', 'Ficción', 1949, 'Secker & Warburg'),
    ('To Kill a Mockingbird', 'Harper Lee', 'Ficción', 1960, 'J.B. Lippincott & Co.'),
    ('The Great Gatsby', 'F. Scott Fitzgerald', 'Ficción', 1925, 'Charles Scribner''s Sons'),
    ('One Hundred Years of Solitude', 'Gabriel García Márquez', 'Ficción', 1967, 'Harper & Row'),
    ('Brave New World', 'Aldous Huxley', 'Ficción', 1932, 'Chatto & Windus'),
    ('The Catcher in the Rye', 'J.D. Salinger', 'Ficción', 1951, 'Little, Brown and Company'),
    ('Crime and Punishment', 'Fyodor Dostoevsky', 'Ficción', 1866, 'The Russian Messenger'),
    ('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasía', 1954, 'Allen & Unwin'),
    ('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 'Fantasía', 1997, 'Bloomsbury'),
    ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 'Ciencia Ficción', 1979, 'Pan Books'),
    ('The Shining', 'Stephen King', 'Terror', 1977, 'Doubleday'),
    ('The Hobbit', 'J.R.R. Tolkien', 'Fantasía', 1937, 'Allen & Unwin'),
    ('The Chronicles of Narnia', 'C.S. Lewis', 'Fantasía', 1950, 'Geoffrey Bles'),
    ('Pride and Prejudice', 'Jane Austen', 'Clásico', 1813, 'T. Egerton, Whitehall'),
    ('Moby-Dick', 'Herman Melville', 'Aventura', 1851, 'Harper & Brothers');
