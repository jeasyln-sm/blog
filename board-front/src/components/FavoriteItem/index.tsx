import React from 'react'
import './style.css';
import { FavoriteListItem  } from 'types/interface';
import defaultProfileImag from 'assets/image/default-profile-image.png';

interface Props {
    favoriteListItem : FavoriteListItem;
}

//             component: favorite List Item 컴포넌트          //
export default function FavoriteItem({ favoriteListItem }: Props) {

//                      properties                          //
const {nickname, profileImage} = favoriteListItem;

//            render: favorite List Item 컴포넌트 런더링          //
  return (
    <div className='favorite-list-item'>
        <div className='favorite-list-item-profile-box'>
            <div className='favorite-list-item-profile-image' style={ { backgroundImage: `url(${profileImage ? profileImage : defaultProfileImag})` } }></div>
        </div>
        <div className='favorite-list-item-nickname'>{nickname}</div>
    </div>
  )
}
