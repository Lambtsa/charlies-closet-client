import React from 'react';

interface BoxType {
  boxObj: any,
  selected: string,
  handleBtnClick: (id: string) => void,
}

const Box = (props: BoxType) => {
  const { boxObj, selected, handleBtnClick } = props;
  return (
    <>
      <button
        type="button"
        onClick={() => handleBtnClick(boxObj._id)}
        className={`box ${selected === boxObj._id ? 'selected' : ''}`}>
        <h2 className="box__title">{boxObj.boxTitle}</h2>
        <ul>
          {boxObj.boxServices.map((service: any, index: number) => (
            <li key={index} className="box__list">{service}</li>
          ))}
        </ul>
        <p className="box__price">{`${boxObj.boxPrice} €/mois`}</p>
        {boxObj.bestSeller && <p className="box__tag">Best seller</p>}
      </button>
    </>
  );
};

export default Box;
