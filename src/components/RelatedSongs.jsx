import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}-${i}`}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          artistId={artistId}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
