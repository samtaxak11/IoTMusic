import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer'
import { Card } from 'flowbite-react';

const initialAudioFiles = JSON.parse(localStorage.getItem('audioList')) ||
  [
    { name: 'Default Audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    // Add more initial audio files as needed
  ];
const Player = () => {
  const [audioUpload, setAudioUpload] = useState('');
  const [audioFiles] = useState(initialAudioFiles);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(
    parseInt(localStorage.getItem('currentAudioIndex')) || 0
  );

  // Post request for uploading audio in cloudinary
  const uploadAudioHandler = () => {
    if (audioUpload === '') return;
    const data = new FormData();
    data.append("file", audioUpload);
    data.append("upload_preset", "IoTMusic");
    data.append("cloud_name", "dqp09mi5u");
    data.append("resource_type", "audio");

    // cloudinary setup
    fetch("https://api.cloudinary.com/v1_1/dqp09mi5u/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        initialAudioFiles.push({ name: data.original_filename, url: data.url });
        localStorage.setItem('audioList', JSON.stringify(initialAudioFiles));
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='flex'>
    <div className='main w-[38vw] h-[84vh] bg-zinc-900 pt-2'>
      <div className='upload pt-[10vw] pl-[7vw] flex flex-row'>
        <input className='rounded-md' type='file' onChange={(e) => setAudioUpload(e.target.files[0])} />
        <button className='bg-slate-400 rounded-md w-[10vw] font-bold text-black' onClick={uploadAudioHandler}>Upload</button>
      </div>
      <AudioPlayer
        audioFiles={audioFiles}
        currentAudioIndex={currentAudioIndex}
        setCurrentAudioIndex={setCurrentAudioIndex}
      />
    </div>
      <div className='ml-[22vw] mt-[18vw]'>
        <Card className='text-black w-[33vw] h-[30vh] bg-slate-400'>
        <h3 className='font-bold ml-[13vw]'>Playlist</h3>
        <ul className='audio-list'>
          {audioFiles.map((audio, index) => (
            <li key={index}>
              {audio.name}{' '}
              <button className='rounded-md ml-[15vw] w-[5vw] h-[5vh] bg-black text-white' onClick={() => setCurrentAudioIndex(index)}>Play</button>
            </li>
          ))}
        </ul>
        </Card>
      </div>
    </div>
  );
};

export default Player;