import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const AudioPlayer = ({ audioFiles, currentAudioIndex, setCurrentAudioIndex }) => {
    const [audio, setAudio] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newAudio = new Audio(audioFiles[currentAudioIndex].url);
        setAudio(newAudio);
        setIsPlaying(true);
        newAudio.play();

        // Save the current playing audio index to localStorage
        localStorage.setItem('currentAudioIndex', currentAudioIndex);

        // Listen for audio end to play the next track
        newAudio.addEventListener('ended', () => {
            if (currentAudioIndex < audioFiles.length - 1) {
                setCurrentAudioIndex(currentAudioIndex + 1);
            } else {
                setCurrentAudioIndex(0);
            }
        });

        // cleanup on unmounted phase
        return () => {
            newAudio.pause();
            newAudio.removeEventListener('ended', () => { });
        };
    }, [currentAudioIndex, audioFiles, setCurrentAudioIndex]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className=' bg-zinc-900 pt-10'>
        <Card className="w-[33vw] text-black ml-20 bg-slate-400">
            <div className='flex flex-col items-center'>
            <h2 className='font-bold'>Now Playing: {audioFiles[currentAudioIndex].name}</h2>
            <div className="audio-instance mt-4">
                <audio controls autoPlay onEnded={() => setIsPlaying(false)}>
                    <source src={audioFiles[currentAudioIndex].url} type="audio/mp3" />
                    Your browser does not support the audio tag.
                </audio>
                <div className='m-5'>
                <button className='rounded-md bg-black text-white w-[20vw] h-10 font-medium' onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                </div>
            </div>
            </div>
        </Card>
        </div>
    );
};

export default AudioPlayer;