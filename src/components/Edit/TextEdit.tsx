import React, { useState } from 'react';
import { useGetProductQuery, useUpdateProductMutation } from '../../redux/apicalls';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiLocationOn } from "react-icons/ci";
import { TextDisplayProps } from '../../constriants/Interface';
import { useSelector } from 'react-redux';

function TextDisplay({ data }: TextDisplayProps) {
  const config = useSelector((state: any) => state.config);

  const [formData, setFormData] = useState({
    name: data?.name || '',
    description: data?.description || ''
  });
  const [image, setImage] = useState(data?.picture || '');

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (event: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  // Call the useUpdateProductMutation hook at the top level
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const updatedProduct = {
      ...data,
      name: formData.name,
      description: formData.description,
      picture: image
    };
    // Call the updateProduct function that the hook returned
    const result = await updateProduct(updatedProduct).unwrap();
  };

  const { company, user } = data;

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox= ${company?.address?.longitude}%2C${company?.address?.latitude}%2C${company?.address?.longitude}%2C${company?.address?.latitude}&amp;layer=mapnik`

  return (
    <form onSubmit={handleSubmit} className="w-full h-full bg-white flex flex-col md:flex-row rounded-lg shadow-sm px-2 border border-gray-200">
      <div className={`${config.hasUserSection ? "basis-2/3 w-full" : "basis-3/3 w-full"}  `}>
        <div className="border-r border-gray-200 px-4 my-4">
          <img src={image} className="h-64 w-full mb-2 " alt="" />
          <input
            className="text-sm px-4 font-semibold text-gray-700 border border-gray-300 w-full py-2 mb-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <ReactQuill
            value={formData.description}
            onChange={(value: any) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                description: value,
              }))
            }
          />
          <button className='bg-blue-600 px-2 py-1 text-sm text-white rounded-lg mt-4 ' type="submit">Save</button>

        </div>
      </div>


      <div className={`${config.hasUserSection ? "basis-1/3 w-full" : "hidden"}  `}>
        <h1 className="text-sm font-semibold text-gray-700 mt-4 ml-3">Offered by</h1>
        <div className='py-2' >
          <img src={company?.logo} className="h-12 w-72 lg:w-56 mx-4 mt-4" alt="" />
        </div>
        <div className="flex text-xs text-gray-500 mx-4 mt-4">
          <div>
            <img src={user?.profilePicture} className="h-10 w-10 rounded-full" alt="" />
          </div>
          <div className="ml-3 mt-1">
            <h1>
              {user?.firstName} {user?.lastName}
            </h1>
            <h1>{company?.name}</h1>
          </div>
        </div>
        {company?.address && (
          <div className="mt-4 mx-4">
            <div className='flex flex-col text-xs text-gray-400 my-3' >
              <div className='flex' >
                <CiLocationOn /> <p>{company?.address?.street} {company?.address?.house}</p>
              </div>
              <p className='ml-2' >{company?.address?.zipCode} {company?.address?.city?.name} {company?.address?.country?.name}</p>


            </div>
            <iframe className='' title="Google Maps" width="100%" height="200" frameBorder="0" style={{ border: 0 }} src={mapUrl} allowFullScreen />
          </div>
        )}
   
      </div>
    </form>
  );
}

export default TextDisplay;
