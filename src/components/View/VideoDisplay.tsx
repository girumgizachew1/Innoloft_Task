import React from 'react';
import { videoDisplayProps } from '../../constriants/Interface';
import { useGetProductQuery } from '../../redux/apicalls';

function VideoDisplay({data}:videoDisplayProps) {
  const { video } = data;
  // Extract the YouTube video ID from the link
  const youtubeId = video.split('v=')[1];
  return (
    <div className="w-full h-full bg-white flex flex-col rounded-lg shadow-sm px-2 border border-gray-200">
      <div className="w-full">
        <h1 className="text-gray-700 text-base p-4">Video</h1>
        <div className="border-r border-gray-200 m-4">
          <iframe
            className='h-64 md:h-96'
            title="YouTube Video"
            width="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoDisplay;
