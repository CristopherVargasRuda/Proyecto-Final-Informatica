import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import books from "../../data/books";
import BookItem from "./BookItem";
import getBooks from "../../api/Read";

const BooksContainer = () => {
  const { id: routeId } = useParams(); // Obtén el ID de la ruta
  const [filteredBook, setFilteredBook] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Filtro del libro, aquí iría el llamado al endpoint
    fetchData();
  }, [routeId]);

  const fetchData = async () => {
    try {
      if (routeId && routeId !== null) {
        const book = await getBooks.getById(routeId);
        setFilteredBook(book);
      }
      const books = await getBooks.getAll();
      setBooks(books);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

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
              <th scope="col" className="col-2">
                Acciones
              </th>
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
