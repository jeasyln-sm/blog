import React from 'react'
import './style.css';
import defaultProfileImag from 'assets/image/default-profile-image.png';
import { BoardListItem } from 'types/interface';

interface Props {
    top3ListItem: BoardListItem
}

//             component: Top 3 List Item 컴포넌트          //
export default function Top3Item({ top3ListItem }: Props) {

//                      properties                          //
    const { boardNumber, title, content, boardTitleImage } = top3ListItem;
    const { favoriteCount, commentCount, viewCount } = top3ListItem;
    const { writeDateTime, writerNickname, writerProfileImage } = top3ListItem;

//                  function: 내비게이트 함수                  //
    // const navigator = useNavigate();

//      event handler : 게시물 아이템 클릭 이벤트 처리 함수      //
    const onClickHandler = () => {
        navigator(boardNumber);
    }

//            render: Top 3 List Item 컴포넌트 런더링          //
  return (
    <div className='top-3-list-item' style={{backgroundImage: `url(${boardTitleImage})`}} onClick={onClickHandler}>
        <div className='top-3-list-item-main-box'>
            <div className='top-3-list-item-top'>
                <div className='top-3-list-item-profile-box'>
                    <div className='top-3-list-item-profile-image' style={ { backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImag})` } }></div>
                </div>
                <div className='top-3-list-item-wirte-box'>
                    <div className='top-3-list-item-nickname'>{writerNickname}</div>
                    <div className='top-3-list-item-wirte-datetime'>{writeDateTime}</div>
                </div>
            </div>
            <div className='top-3-list-item-middle'>
                <div className='top-3-list-item-title'>{title}</div>
                <div className='top-3-list-item-content'>{content}</div>
            </div>
            <div className='top-3-list-item-bottom'>
            <div className='top-3-list-item-counts'>
                {`댓글 ${commentCount} · 좋아요 ${favoriteCount} · 조회수 ${viewCount}`}
            </div>
            </div>
        </div>
        <div className='top-3-list-item-image-box'></div>
    </div>
  )
}
