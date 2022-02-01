import { debounce } from "lodash";
import type { ChangeEventHandler, MouseEventHandler } from "react";
import { useCallback, useEffect, useState } from "react";
import type SpotifyWebApi from "spotify-web-api-node";
import {
  useCurrentTrackIdState,
  useIsPlayingState,
  useSetCurrentTrackId,
  useSetIsPlayingMutators,
} from "src/atoms/songAtom";
import { useSongInfo } from "src/hooks/useSongInfo";
import { useSpotify } from "src/hooks/useSpotify";

const useVolume = (spotifyApi: SpotifyWebApi) => {
  const [volume, setVolume] = useState(50);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceAdjustVolume = useCallback(
    debounce((volume) => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      spotifyApi.setVolume(volume).catch(() => {});
    }, 500),
    []
  );

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debounceAdjustVolume(volume);
    }
  }, [debounceAdjustVolume, volume]);

  const handleChangeVolume: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setVolume(Number(e.target.value));
  }, []);

  const handleDownVolume: MouseEventHandler = useCallback(() => {
    volume > 0 && setVolume((prev) => prev - 10);
  }, [volume]);

  const handleUpVolume: MouseEventHandler = useCallback(() => {
    volume < 100 && setVolume((prev) => prev + 10);
  }, [volume]);

  return { volume, setVolume, handleChangeVolume, handleDownVolume, handleUpVolume } as const;
};

export const usePlayer = () => {
  const spotifyApi = useSpotify();
  const currentTrackId = useCurrentTrackIdState();
  const setCurrentTrackId = useSetCurrentTrackId();
  const isPlaying = useIsPlayingState();
  const { setIsPlaying, pause, start } = useSetIsPlayingMutators();
  const volumeController = useVolume(spotifyApi);
  const { setVolume } = volumeController;

  const songInfo = useSongInfo();

  const fetchCurrentSong = useCallback(() => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        if (data.body?.item?.id) {
          setCurrentTrackId(data.body.item.id);

          spotifyApi.getMyCurrentPlaybackState().then((data) => {
            setIsPlaying(data.body?.is_playing);
          });
        }
      });
    }
  }, [setCurrentTrackId, setIsPlaying, songInfo, spotifyApi]);

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackId, spotifyApi, fetchCurrentSong, setVolume]);

  const handlePlayPause = useCallback(() => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause();
        pause();
      } else {
        spotifyApi.play();
        start();
      }
    });
  }, [pause, spotifyApi, start]);

  return {
    songInfo,
    isPlaying,
    handlePlayPause,
    volumeController,
  } as const;
};
