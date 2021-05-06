import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

/*
  Components
*/
import SnackBar from '../components/SnackBar';
import Loader from './Loader';
import LikeToggle from './LikeToggle';

const ItemList = () => {
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isGender, setIsGender] = useState(false);
  const [isSize, setIsSize] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/items')
    .then((response: any) => response.json())
    .then((data: any) => {
      setItems(data);
      setIsLoading(false);
    })
    .catch(() => setError(true))
  }, []);

  const handleFilterByPrice = () => {
    const filteredItems = items.sort((a: any, b: any) => a.itemPrice.localeCompare(b.itemPrice));
    setItems(filteredItems);
    setIsPrice(true);
    setIsGender(false);
    setIsSize(false);
  };

  const handleFilterByGender = () => {
    const filteredItems = items.sort((a: any, b: any) => a.itemGender.localeCompare(b.itemGender));
    setItems(filteredItems);
    setIsPrice(false);
    setIsGender(true);
    setIsSize(false);
  };

  const handleFilterBySize = () => {
    const filteredItems = items.sort((a: any, b: any) => a.itemSize.localeCompare(b.itemSize));
    setItems(filteredItems);
    setIsPrice(false);
    setIsGender(false);
    setIsSize(true);
  };

  const handleBtnClick = (e: any, id: string) => {
    if (e.target.getAttribute('id') === 'itemBtn') {
      history.push(`/boutique/${id}`)
    };
  }

  return (
    <>
      <section className="itemlist">
        <div className="filters__container">
          <h2 className="filters__title">Filtres</h2>
          <div className="filters">
            <button className={`filters__btn ${isPrice ? 'active' : ''}`} type="button" onClick={handleFilterByPrice}>Par prix</button>
            <button className={`filters__btn ${isGender ? 'active' : ''}`} type="button" onClick={handleFilterByGender}>Par genre</button>
            <button className={`filters__btn ${isSize ? 'active' : ''}`} type="button" onClick={handleFilterBySize}>Par taille</button>
          </div>
        </div>
        {isLoading && <Loader />}
        {!isLoading && items.length> 0 && (
          <div className="itemlist__container">
            {items.map((item: any) => (
              <div className="item" key={item._id}>
                <button type="button" onClick={(e: any) => handleBtnClick(e, item._id)} >
                  <img className="item__img" id="itemBtn" src={item.itemImages[0]} alt="" />
                  <h4 className="item__title">{item.itemTitle}</h4>
                  <p className="item__price">{item.itemPrice}</p>
                </button>
                <div className="item__heart">
                  <LikeToggle itemId={item._id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {error && <SnackBar setState={setError} state={error} type="error" message="Error fetching items" />}
    </>
  );
};

export default ItemList;
