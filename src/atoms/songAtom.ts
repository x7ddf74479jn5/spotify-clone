import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const currentTrackIdState = atom({
  key: "currentTrackIdState",
  default: "",
});

export const useCurrentTrackIdState = () => useRecoilValue(currentTrackIdState);

export const useSetCurrentTrackId = () => {
  const setState = useSetRecoilState(currentTrackIdState);

  return useCallback(
    (trackId: string) => {
      setState(trackId);
    },
    [setState]
  );
};

const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

export const useIsPlayingState = () => useRecoilValue(isPlayingState);

export const useSetIsPlayingMutators = () => {
  const setIsPlaying = useSetRecoilState(isPlayingState);

  const start = useCallback(() => {
    setIsPlaying(true);
  }, [setIsPlaying]);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, [setIsPlaying]);

  return { setIsPlaying, start, pause };
};
