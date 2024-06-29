import Authenticated from "@/Layouts/Authenticated/index";
import Feature from "@/Components/featureMovie";
import MovieCard from "@/Components/movieCard";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, featureMovie, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Home">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px] " options={flickityOptions}>
                    {featureMovie.map((featureMovie) => (
                        <Feature
                            key={featureMovie.id}
                            slug={featureMovie.slug}
                            name={featureMovie.name}
                            category={featureMovie.category}
                            thumbnail={featureMovie.thumbnail}
                            rating={featureMovie.rating}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px] " options={flickityOptions}>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
