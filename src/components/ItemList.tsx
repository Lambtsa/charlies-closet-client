import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

/*
  Components
*/
import SnackBar from '../components/SnackBar';
import Loader from './Loader';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/items')
    .then((response: any) => {
      console.log(response);
      return response.json();
    })
    .then((data: any) => {
      console.log(data)
      setItems(data);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
      setError(true);
    })
  }, []);

  return (
    <>
      <section className="itemlist">
        {isLoading && <Loader />}
        {!isLoading && items.length> 0 && (
          <div className="itemlist__container">
            {items.map((item: any) => (
              <Link to={`/boutique/${item._id}`} key={item._id} className="item">
                <img className="item__img" src={item.itemImages[0]} alt="" />
                <h4 className="item__title">{item.itemTitle}</h4>
                <p className="item__price">{item.itemPrice}</p>
                <FontAwesomeIcon className="item__heart" icon={faHeart} />
              </Link>
            ))}
          </div>
        )}
      </section>
      {error && <SnackBar setState={setError} state={error} type="error" message="Error fetching items" />}
    </>
  );
};

export default ItemList;
