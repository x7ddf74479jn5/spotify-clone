import { usePlaylistValue } from "src/atoms/playlistAtoms";

import { Song } from "./Song";

export const Songs = () => {
  const playlists = usePlaylistValue();
  return (
    <div className="flex flex-col px-8 pb-28 space-y-1 text-white">
      {playlists?.tracks.items.map((track, i) => (
        <Song key={track.track.id} order={i} track={track} />
      ))}
    </div>
  );
};
