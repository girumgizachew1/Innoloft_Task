import React, { useState } from 'react';
import { videoDisplayProps } from '../../constriants/Interface';
import { useGetProductQuery, useUpdateProductMutation } from '../../redux/apicalls';

function VideoDisplay({ data }: videoDisplayProps) {
  const [video, setVideo] = useState('');
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const { video: initialVideo } = data;
  if (!video) {
    setVideo(initialVideo);
  }
  const handleVideoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setVideo(event.target.value);
  }
  const handleSubmit = async () => {
    const { id, ...restProduct } = data;
    const updatedProduct = { ...restProduct, video };
    const result = await updateProduct({ updatedProduct }).unwrap();
  }

  return (
    <div className="w-full h-full bg-white flex flex-col rounded-lg shadow-sm px-2 border border-gray-200">
      <div className="w-full">
        <h1 className="text-gray-700 text-base p-4">Video</h1>
        <div className="m-4">
          <input
            className="text-sm px-4 font-semibold text-gray-700 border border-gray-300 w-full py-2 mb-2"
            type="text"
            name="name"
            value={video}
            onChange={handleVideoChange}
          />
          <button className='bg-blue-600 px-2 py-1 text-sm text-white rounded-lg' onClick={handleSubmit} disabled={isLoading}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default VideoDisplay;
