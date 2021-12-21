import { shuffle } from "lodash";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePlaylistIdValue, usePlaylistState } from "src/atoms/playlistAtoms";
import { useSpotify } from "src/hooks/useSpotify";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

export const useHome = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState<string | undefined>(undefined);
  const playlistId = usePlaylistIdValue();
  const [playlist, setPlaylist] = usePlaylistState();

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((e) => console.error("Something went wrong...", e));
  }, [spotifyApi, playlistId, setPlaylist]);

  return { session, color, playlist } as const;
};
