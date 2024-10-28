
import SearchForm from "@/components/SearchForm";
import { auth } from "@/auth";
// import StartupCard, { StartupTypeCard } from "@/components/StartupCard.tsx";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;
  // const params = { search: query || null };

  const session = await auth();

   console.log(session?.user);
  return (
    <>
     <section className=" py-16 px-4">
     <div className="container mx-auto text-center">
   
      <h1 className="text-5xl my-8">
        Pitch Your Startup, <br />
        Connect With Entrepreneurs
      </h1>

     

      <SearchForm 
       query={query}
       />
        </div>
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Startups"}
      </p>

      {/* <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupTypeCard) => (
            <StartupCard key={post?._id} post={post} />
          ))
        ) : (
          <p className="no-results">No startups found</p>
        )}
      </ul> */}
     
    </section>

    
  </>
  );
}

