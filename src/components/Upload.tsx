import React, { useEffect, useState } from 'react';

const Upload = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    console.log(url);
  }, [url]);

  const handleInputChange = (e: any) => {
    const url = 'https://api.cloudinary.com/v1_1/charlies-closet/upload';
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('upload_preset', 'charlies-images');
    formData.append('file', file);
    console.log(formData);
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((data: any) => {
        setUrl(data.secure_url);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <input type="file" value={url} onChange={handleInputChange} />
    </>
  );
};

export default Upload;
