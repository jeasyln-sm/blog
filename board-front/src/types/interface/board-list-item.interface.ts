export default interface BoardListItem {

    boardNumber: number;

    title: String;

    content: String;

    boardTitleImage: String | null;

    favoriteCount: number;

    commentCount: number;

    viewCount: number;

    writeDateTime: String;

    writerNickname: String;

    writerProfileImage: String | null;

}