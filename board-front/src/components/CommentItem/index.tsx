import React from 'react'
import './style.css';
import { CommentListItem  } from 'types/interface';
import defaultProfileImag from 'assets/image/default-profile-image.png';

interface Props {
    commentListItem: CommentListItem;
}

//             component: Comment List Item 컴포넌트          //
export default function CommentItem({ commentListItem }: Props) {

//                      properties                          //
const {nickname, profileImage, writeDateTime, content} = commentListItem;

//            render: Comment List Item 컴포넌트 런더링          //
  return (
    <div className='comment-list-item'>
        <div className='comment-list-item-top'>
            <div className='comment-list-item-profile-box'>
                <div className='comment-list-item-profile-image' style={ { backgroundImage: `url(${profileImage ? profileImage : defaultProfileImag})` } }></div>
            </div>
            <div className='comment-list-item-nickname'>{nickname}</div>
            <div className='comment-list-item-divider'>{'\|'}</div>
            <div className='comment-list-item-time'>{writeDateTime}</div>
        </div>
        <div className='comment-list-item-main'>
            <div className='comment-list-item-content'>{content}</div>
        </div>
    </div>
  )
}