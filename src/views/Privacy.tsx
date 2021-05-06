import React, { useEffect } from 'react';
import Upload from '../components/Upload';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Upload />
    </>
  );
};

export default Privacy;
