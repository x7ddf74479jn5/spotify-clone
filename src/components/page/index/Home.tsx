import Head from "next/head";
import { Songs } from "src/components/model/Song";

import { useHome } from "./Home.hook";

export const Home: React.VFC = () => {
  const { color, playlist } = useHome();
  return (
    <>
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`flex items-end p-8 space-x-7 h-80 text-white bg-gradient-to-b ${color} to-black`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={playlist?.images[0]?.url} alt="" className="w-44 h-44 shadow-2xl" />
        <div>
          <p>Playlist</p>
          <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">{playlist?.name}</h1>
        </div>
      </section>

      <div>
        <Songs />
      </div>
    </>
  );
};
