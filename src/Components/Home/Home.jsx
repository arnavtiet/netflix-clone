import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../footer/footer";

const apiKey = "e7f7ef3c04a65d5ebfdaa8544694d838";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ title }) => {
  return <img src={title} alt="" className="card" />;
};

const Row = ({ rowtitle, key, arr = [] }) => {
  return (
    <div className="container">
      <h2>{rowtitle}</h2>
      <div className="row">
        {arr.map((item, index) => (
          <Card key={index} title={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      console.log(genres);
    };

    getAllGenre();

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);
  return (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[3]
            ? `url(${`${imgUrl}/${popularMovies[3].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {popularMovies[3] && <h1>{popularMovies[3].original_title}</h1>}
        {popularMovies[3] && <p>{popularMovies[3].overview}</p>}

        <div>
          <button>
            <BiPlay /> Play{" "}
          </button>
          <button>
            My List <AiOutlinePlus />{" "}
          </button>
        </div>
      </div>
      <Row rowtitle="POPULAR" arr={popularMovies} />
      <Row rowtitle="UPCOMING" arr={upcomingMovies} />
      <Row rowtitle="NOW PLAYING" arr={nowPlayingMovies} />
      <Row rowtitle="TOP RATED" arr={topRatedMovies} />
    </section>
  );
}

export default Home;
