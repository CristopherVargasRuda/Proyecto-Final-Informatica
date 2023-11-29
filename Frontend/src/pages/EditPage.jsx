import Banner from "../components/banner/Banner"
import EditForm from "../components/form/EditForm"

const EditPage = () => {
    return (
        <>
            <div className="App w-75 mx-auto">
                <Banner />
                <div className="w-75 p-3 mx-auto">
                    <EditForm />
                </div>

            </div>
        </>
    )
}

export default EditPage