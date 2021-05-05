import React from 'react';

const UploadImage = () => {
  const handleImageChange = (e: any) => {
    const url = 'https://api.cloudinary.com/v1_1/charlies-closet/upload';
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('upload_preset', 'yn7z4c3k');
    formData.append('file', file);
    console.log(formData);
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        console.log(response);
        response.json();
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <input type="file" onChange={handleImageChange} />
    </>
  );
};

export default UploadImage;
