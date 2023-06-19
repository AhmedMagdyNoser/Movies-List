import { Link } from "react-router-dom"
import { FadeIn } from "./Utils/Fade"

export default function Card({ movie }) {

  function removeLoadingAnimation() {
    document.getElementById(movie.id).classList.remove('skeleton');
  }

  return (
    <FadeIn time='1s'>
      <Link to={`/movie/${movie.id}`}>
        <div className='rounded overflow-hidden' style={{ position: 'relative', aspectRatio: '2 / 3' }}>
          <div id={movie.id} className="skeleton h-100">
            <img
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              style={{ width: '100%' }}
              alt={movie.title}
              loading="lazy"
              onLoad={removeLoadingAnimation}
            />
          </div>
          <div className="text-white p-3 overlay">
            <p className="text-center trancate"><b>{movie.title}</b></p>
            <p>تاريخ الاصدار : {movie.release_date}</p>
            <p>التقييم : {movie.vote_average}</p>
            <p>عدد المقيمين : {movie.vote_count}</p>
          </div>
        </div>
        <style>
          {`
            .trancate {
              display: -webkit-box;
              -webkit-line-clamp: 1; /* number of lines to display */
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          `}
        </style>
      </Link>
    </FadeIn>
  )
}