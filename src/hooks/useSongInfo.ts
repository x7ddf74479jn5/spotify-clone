import { useEffect, useState } from "react";
import { useCurrentTrackIdState } from "src/atoms/songAtom";
import { useSpotify } from "src/hooks/useSpotify";

export const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const currentTrackId = useCurrentTrackIdState();
  const [songInfo, setSongInfo] = useState<SpotifyApi.TrackObjectFull | null>(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        const trackInfo = await fetch(`https://api.spotify.com/v1/tracks/${currentTrackId}`, {
          headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
          },
        }).then((res) => res.json());

        setSongInfo(trackInfo);
      }
    };

    fetchSongInfo();
  }, [currentTrackId, spotifyApi]);

  return songInfo;
};
