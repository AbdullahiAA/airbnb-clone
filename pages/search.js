import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();

  // This is a way of getting data from the URL... (useRouter Hook form NextJS)
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{location} - Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} guest${
          noOfGuests > 1 && "s"
        }`}
      />

      <main className="flex flex-grow">
        {/* Left Section - Search Page Content */}
        <section className="px-6 my-14 flex-grow">
          {/* Top Section */}
          <div>
            <p className="text-xs">
              300+ Stays - {range} - for {noOfGuests} guest
              {noOfGuests > 1 && "s"}
            </p>

            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>

            <div className="hidden lg:inline-flex text-gray-800 flex-wrap gap-3">
              {/* The button class was a custom tailwind utility classes  */}
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters roll</p>
            </div>
          </div>

          {/* Search Results */}
          <div className="mt-7">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        {/* Right Section - Map */}
        <section className="hidden xl:inline-flex min-w-[500px] flex-grow">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  // This will pass the data to the functional component at the top i.e Home
  // It can now be accessed as a prop
  return {
    props: {
      searchResults: searchResults,
    },
  };
}
