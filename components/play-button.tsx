
const PlayButton = ({ audio }: { audio: string }) => {
  const handleClick = () => {
    const audioElement = new Audio(audio);
    audioElement.play();
  };

  return (
    <button onClick={handleClick}>
      <img src="/assets/images/icon-play.svg" alt="icon play" width={50} height={50} />
    </button>
  );
};

export default PlayButton;
