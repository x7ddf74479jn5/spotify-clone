import { atom, useRecoilState, useRecoilValue } from "recoil";

const currentTrackIdState = atom({
  key: "currentTrackIdState",
  default: "",
});

export const useCurrentTrackIdState = () => useRecoilState(currentTrackIdState);
export const useCurrentTrackIdValue = () => useRecoilValue(currentTrackIdState);

const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

export const useIsPlayingState = () => useRecoilState(isPlayingState);
export const useIsPlayingValue = () => useRecoilValue(isPlayingState);
