import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/*
  Components
*/
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Jumbotron from '../../components/Jumbotron';
import SnackBar from '../../components/validation/SnackBar';
import Loader from '../../components/validation/Loader';
import LikeToggle from '../../components/LikeToggle';

const ItemDetails = () => {
  const { id } = useParams<any>();
  const [item, setItem] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [image, setImage] = useState('');

  const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://charlies-closet-dev.herokuapp.com/api/items'
    : 'http://localhost:8080/api/items'

  useEffect(() => {
    window.scrollTo(0,0);
    fetch(`${apiUrl}/${id}`)
    .then((response: any) => response.json())
    .then((data: any) => {
      setItem(data);
      setImage(data.itemImages[0]);
      setIsLoading(false);
    })
    .catch(() => setError(true))
  }, [apiUrl, id])

  return (
    <>
      <Header type="light" fixed />
      <Jumbotron height={70} />
      <main className="main">
        <section className="itemdetails">
          {isLoading && <Loader />}
          {!isLoading && item && (
            <div className="itemdetails__container">
              <div className="itemdetails__preview">
                {item.itemImages.map((url: string, index: number) => (
                  <img key={index} className="itemdetails__img thumbnail" src={url} alt="" />
                ))}
              </div>
              <img className="itemdetails__img" src={image} alt="" />
              <div className="itemdetails__content">
                <div className="itemdetails__header">
                  <h1 className="itemdetails__title">{item.itemTitle}</h1>
                  <div className="itemdeatails__heart">
                    <LikeToggle itemId={id} />
                  </div>
                </div>
                <p className="itemdetails__price">{item.itemPrice}</p>
                <p className="itemdetails__description">{item.itemDescription}</p>
              </div>
            </div>
          )}
          {error && <SnackBar type="error" message="Could not fetch item" state={error} setState={setError} />}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ItemDetails;
