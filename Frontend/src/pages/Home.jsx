import Banner from "../components/banner/Banner"
import NavBar from "../components/navbar/NavBar"
import BooksContainer from "../components/books/BooksContainer"

const Home = () => {
    return (
        <>
            <div className="App w-75 mx-auto">
                <Banner />
                <NavBar />
                <BooksContainer />
            </div>
        </>
    )
}

export default Home