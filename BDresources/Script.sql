-- CRUD_Libros

CREATE TABLE libros (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    autor TEXT NOT NULL,
    genero TEXT,
    año_publicacion INTEGER,
    editorial TEXT
);

INSERT INTO libros (titulo, autor, genero, año_publicacion, editorial) VALUES
    ('1984', 'George Orwell', 'Ficcion', 1949, 'Secker & Warburg'),
    ('To Kill a Mockingbird', 'Harper Lee', 'Ficcion', 1960, 'J.B. Lippincott & Co.'),
    ('The Great Gatsby', 'F. Scott Fitzgerald', 'Ficcion', 1925, 'Charles Scribner''s Sons'),
    ('One Hundred Years of Solitude', 'Gabriel Garcia Márquez', 'Ficcion', 1967, 'Harper & Row'),
    ('Brave New World', 'Aldous Huxley', 'Ficcion', 1932, 'Chatto & Windus'),
    ('The Catcher in the Rye', 'J.D. Salinger', 'Ficcion', 1951, 'Little, Brown and Company'),
    ('Crime and Punishment', 'Fyodor Dostoevsky', 'Ficcion', 1866, 'The Russian Messenger'),
    ('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasia', 1954, 'Allen & Unwin'),
    ('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 'Fantasia', 1997, 'Bloomsbury'),
    ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 'Ciencia Ficcion', 1979, 'Pan Books'),
    ('The Shining', 'Stephen King', 'Terror', 1977, 'Doubleday'),
    ('The Hobbit', 'J.R.R. Tolkien', 'Fantasia', 1937, 'Allen & Unwin'),
    ('The Chronicles of Narnia', 'C.S. Lewis', 'Fantasia', 1950, 'Geoffrey Bles'),
    ('Pride and Prejudice', 'Jane Austen', 'Clasico', 1813, 'T. Egerton, Whitehall'),
    ('Moby-Dick', 'Herman Melville', 'Aventura', 1851, 'Harper & Brothers');
