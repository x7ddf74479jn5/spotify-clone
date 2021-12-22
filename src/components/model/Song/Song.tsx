import { millisToMinutesAndSeconds } from "src/lib/time";

import { useSong } from "./Song.hook";

type SongProps = {
  order: number;
  track: SpotifyApi.PlaylistTrackObject;
};

export const Song: React.VFC<SongProps> = ({ order, track }) => {
  const { handlePlaySong } = useSong(track);

  return (
    <button onClick={handlePlaySong}>
      <div className="grid grid-cols-2 py-4 px-5 text-gray-500 hover:bg-gray-900 rounded-lg cursor-pointer">
        <div className="flex items-center space-x-4">
          <p className="">{order + 1}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={track.track.album.images[0]?.url} alt="" className="w-10 h-10" />
          <div className="">
            <p className="w-36 text-white truncate lg:w-64">{track.track.name}</p>
            <p className="w-40">{track.track.artists[0]?.name}</p>
          </div>
        </div>

        <div className="flex justify-between items-center ml-auto md:ml-0">
          <p className="hidden w-40 md:inline">{track.track.album.name}</p>
          <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
        </div>
      </div>
    </button>
  );
};
