import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { usePlaylistIdState } from "src/atoms/playlistAtoms";
import { useSpotify } from "src/hooks/useSpotify";

export const usePlaylists = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [playlistId, setPlaylistId] = usePlaylistIdState();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  const handleSetPlaylist = useCallback(
    (playlist: SpotifyApi.PlaylistObjectSimplified) => setPlaylistId(playlist.id),
    [setPlaylistId]
  );

  return { playlists, playlistId, handleSetPlaylist } as const;
};
