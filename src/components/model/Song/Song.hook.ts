import { useCurrentTrackIdState, useIsPlayingState } from "src/atoms/songAtom";
import { useSpotify } from "src/hooks/useSpotify";

export const useSong = (track: SpotifyApi.PlaylistTrackObject) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useCurrentTrackIdState();
  const [isPlaying, setIsPlaying] = useIsPlayingState();

  const handlePlaySong = () => {
    setCurrentTrackId(track.track.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [track.track.uri],
    });
  };

  return { currentTrackId, isPlaying, handlePlaySong } as const;
};
