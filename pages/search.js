import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
    const router = useRouter()

    const {location, startDate, endDate, noOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`


    return (
        <div className="min-h-screen flex flex-col">
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guest${noOfGuests > 1 && "s"}`} />

            <main className="flex flex-grow mx-6 my-14">
                <section>
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guest{noOfGuests > 1 && "s"}</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
                        {/* The button class was a custom tailwind utility classes  */}
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                </section>

                {/* Result Cards */}
                <section>

                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search
