import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';

const isItemLiked = (itemId: string) => {
  if (!localStorage.likes) {
    localStorage.likes = JSON.stringify([]);
  }
  return JSON.parse(localStorage.likes).includes(itemId);
}

const LikeToggle = (props: {itemId: string}) => {
  const [isLiked, setIsLiked] = useState(isItemLiked(props.itemId));

  useEffect(() => {
    if (!localStorage.likes) {
      localStorage.likes = JSON.stringify([]);
    }
    const likes = JSON.parse(localStorage.likes);
    if (!isLiked) {
      const filteredLikes = likes.filter((like: string) => like !== props.itemId);
      localStorage.likes = JSON.stringify(filteredLikes);
    } else {
      const filteredLikes = likes.filter((like: string) => like !== props.itemId);
      filteredLikes.push(props.itemId);
      localStorage.likes = JSON.stringify(filteredLikes);
    }
  }, [props.itemId, isLiked]);

  const handleBtnClick = (e: any) => {
    setIsLiked(!isLiked);
  }

  return (
    <>
      <button type="button" onClick={handleBtnClick}>
        <FontAwesomeIcon className="heart" icon={isLiked ? fullHeart : outlineHeart} />
      </button>
    </>
  );
};

export default LikeToggle;
