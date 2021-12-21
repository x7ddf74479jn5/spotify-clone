import { atom, useRecoilState, useRecoilValue } from "recoil";

const playlistState = atom<SpotifyApi.SinglePlaylistResponse | null>({
  key: "playlistState",
  default: null,
});

export const usePlaylistState = () => useRecoilState(playlistState);
export const usePlaylistValue = () => useRecoilValue(playlistState);

const playlistIdState = atom({
  key: "playlistIdState",
  default: "6xti27ro95CtB8rzO1f1fQ",
});

export const usePlaylistIdState = () => useRecoilState(playlistIdState);
export const usePlaylistIdValue = () => useRecoilValue(playlistIdState);
