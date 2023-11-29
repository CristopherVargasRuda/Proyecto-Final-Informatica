import Banner from "../components/banner/Banner"
import CreateForm from "../components/form/CreateForm"

const CreatePage = () => {
    return (
        <>
            <div className="App w-75 mx-auto">
                <Banner />
                <div className="w-75 p-3 mx-auto">
                    <CreateForm />
                </div>

            </div>
        </>
    )
}

export default CreatePage