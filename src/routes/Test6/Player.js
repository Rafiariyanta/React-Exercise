import { useEffect, useRef, useState } from "react";
import { cssVideo, cssVideoContainer } from "./style";

const Player = () => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
    currentTime: 0,
    duration: 0
  })
  const videoElement = useRef(null);

  const handlePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying
    })
  }

  useEffect(() => {
    playerState.isPlaying ?
      videoElement.current.play()
      :
      videoElement.current.pause()
  }, [playerState.isPlaying])

  const handleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted
    })
  }

  useEffect(() => {
    playerState.isMuted ?
      videoElement.current.muted = true
      :
      videoElement.current.muted = false
  }, [playerState.isMuted])

  const handleUpdateRealTime = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
      currentTime: videoElement.current.currentTime
    })
  }

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange
    })
  }

  const handleClickVideo = (e) => {
    if (e.buttons === 1) {
      videoElement.current.currentTime -= 5;
    } else if (e.buttons === 2) {
      videoElement.current.currentTime += 5;
    }
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
      currentTime: videoElement.current.currentTime
    })
  }

  // useEffect(() => {
  //   setPlayerState({
  //     ...playerState,
  //     duration: videoElement.current.duration
  //   })
  // }, [videoElement])

  return (
    <div>
      <div className={cssVideoContainer}>
        <video
          ref={videoElement}
          className={cssVideo}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          onTimeUpdate={handleUpdateRealTime}
          onLoadedMetadata={() => setPlayerState({ ...playerState, duration: videoElement.current.duration })}
          onMouseDown={handleClickVideo}
        />
      </div>
      <button type="button" onClick={() => handlePlay()}>{playerState.isPlaying ? "PAUSE" : "PLAY"}</button>
      <button type="button" onClick={() => handleMute()}>{playerState.isMuted ? "UNMUTE" : "MUTE"}</button>
      <input type="range" min="0" max="100" value={playerState.progress} onChange={(e) => handleVideoProgress(e)} />
      <span>{new Date(Math.ceil(playerState.currentTime) * 1000).toISOString().substr(15, 4)}/{new Date(Math.ceil(playerState.duration) * 1000).toISOString().substr(15, 4)}</span>
    </div>
  )
}

export default Player;
