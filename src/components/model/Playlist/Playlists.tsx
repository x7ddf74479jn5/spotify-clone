import { memo } from "react";

import { usePlaylists } from "./Playlists.hook";

export const Playlists = memo(() => {
  const { playlists, handleSetPlaylist } = usePlaylists();

  return (
    <>
      {playlists.map((playlist) => (
        <button key={playlist.id} onClick={() => handleSetPlaylist(playlist)} className="block">
          <p className="hover:text-white cursor-pointer">{playlist.name}</p>
        </button>
      ))}
    </>
  );
});

Playlists.displayName = "Playlists";
