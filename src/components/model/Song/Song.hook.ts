import {
  useCurrentTrackIdState,
  useIsPlayingState,
  useSetCurrentTrackId,
  useSetIsPlayingMutators,
} from "src/atoms/songAtom";
import { useSpotify } from "src/hooks/useSpotify";

export const useSong = (track: SpotifyApi.PlaylistTrackObject) => {
  const spotifyApi = useSpotify();
  const currentTrackId = useCurrentTrackIdState();
  const setCurrentTrackId = useSetCurrentTrackId();
  const isPlaying = useIsPlayingState();
  const { start } = useSetIsPlayingMutators();

  const handlePlaySong = () => {
    setCurrentTrackId(track.track.id);
    start();
    spotifyApi.play({
      uris: [track.track.uri],
    });
  };

  return { currentTrackId, isPlaying, handlePlaySong } as const;
};
