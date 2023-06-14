import { useEffect } from "react";
import { SimpleSpinner } from "../Components/Utils/Loaders"
import Pagination from "../Components/Utils/Pagination"
import Card from "../Components/MovieCard"

export default function AllMovies({ state, getMovies, homePageNum }) {

  // eslint-disable-next-line
  useEffect(() => { getMovies(1) }, []);

  let results = <>
    {state.data.results && state.data.results.length > 0 ?
      <>
        <div className="list mb-4">
          {state.data.results.map(film => <Card key={film.id} film={film} />)}
        </div>
        <Pagination
          getPage={getMovies}
          currentPage={homePageNum}
          totalPages={500}
        />
      </>
      : <h2 className="text-center">لا يوجد أفلام</h2>}
  </>

  return (
    <div className="container py-4">
      {state.status === 'loading' ? <SimpleSpinner title='جارى تحميل الافلام' /> : results}
    </div>
  )
}