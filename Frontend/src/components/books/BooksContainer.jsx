import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import books from "../../data/books";
import BookItem from "./BookItem";

const BooksContainer = () => {
  const { id: routeId } = useParams(); // Obtén el ID de la ruta
  const [filteredBook, setFilteredBook] = useState(null);

  useEffect(() => {
    // Filtro del libro, aquí iría el llamado al endpoint
    const book = books.find(book => String(book.id) === routeId);
    setFilteredBook(book);
  }, [routeId]);

  return (
    <>
      <div className="mx-auto border rounded table-responsive p-0">
        <table className="table table-striped m-0">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Título</th>
              <th scope="col">Autor</th>
              <th scope="col">Género</th>
              <th scope="col">Año</th>
              <th scope="col">Editorial</th>
              <th scope="col" className="col-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredBook ? (
              <BookItem infoBook={filteredBook} />
            ) : (
              books.map((book, index) => (
                <BookItem key={index} infoBook={book} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksContainer;
