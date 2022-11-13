import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPauseTop = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={28} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={28} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPauseTop;
