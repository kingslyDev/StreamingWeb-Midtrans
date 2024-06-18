import Authenticated from "@/Layouts/Authenticated/index";
import Feature from "@/Components/featureMovie";
import MovieCard from "@/Components/movieCard";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";

export default function dashboard() {
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
        <Authenticated>
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
                    {[1, 2, 3, 4].map((i) => (
                        <Feature
                            key={i}
                            slug="the-batman-inlove"
                            name={`the batman in love ${i}`}
                            category="comedy"
                            thumbnail="/images/featured-1.png"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px] " options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <MovieCard key={i} />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
