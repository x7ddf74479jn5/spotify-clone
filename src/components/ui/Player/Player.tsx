import { VolumeUpIcon as VolumeDownIcon } from "@heroicons/react/outline";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  RewindIcon,
  SwitchHorizontalIcon,
  VolumeUpIcon,
} from "@heroicons/react/solid";
import { memo } from "react";

import { usePlayer } from "./Player.hook";

export const Player = memo(() => {
  const { songInfo, isPlaying, handlePlayPause, volumeController } = usePlayer();
  const { volume, handleChangeVolume, handleDownVolume, handleUpVolume } = volumeController;

  return (
    <div className="grid grid-cols-3 px-2 h-24 text-xs text-white bg-gradient-to-b from-black to-gray-900 md:px-8 md:text-base">
      {/* Lef */}
      <div className="flex items-center space-x-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={songInfo?.album.images[0]?.url} alt="" className="hidden w-10 h-10 md:inline" />
        <div className="">
          <h1 className="">{songInfo?.name}</h1>
          <p className="">{songInfo?.artists[0]?.name}</p>
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-evenly items-center">
        <SwitchHorizontalIcon className="button" />
        <RewindIcon className="button" />

        {isPlaying ? (
          <PauseIcon onClick={handlePlayPause} className="w-10 h-10 button" />
        ) : (
          <PlayIcon onClick={handlePlayPause} className="w-10 h-10 button" />
        )}

        <FastForwardIcon className="button" />
        <ReplyIcon className="button" />
      </div>

      {/* Right */}
      <div className="flex justify-end items-center pr-5 space-x-3 md:space-x-4">
        <VolumeDownIcon onClick={handleDownVolume} className="button" />
        <input
          type="range"
          name=""
          id=""
          value={volume}
          onChange={handleChangeVolume}
          min={0}
          max={100}
          className="w-14 md:w-28"
        />
        <VolumeUpIcon onClick={handleUpVolume} className="button" />
      </div>
    </div>
  );
});

Player.displayName = "Player";
