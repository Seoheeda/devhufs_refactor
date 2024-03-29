import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Top, Content, Comment, Preview } from './style';
import EmptyHeart from '../../assets/EmptyHeart.svg';
import FullHeart from '../../assets/FullHeart.svg';
import EmptyScrap from '../../assets/EmptyHeart.svg';
import FullScrap from '../../assets/FullScrap.svg';
import CommentImg from '../../assets/Comment.png';



const Main = () => {

    interface Feed {
        title: string;
        body: string;
        date: string;
        attached: File | null; // 파일 형식 사용 시, File 타입으로 지정
        link: string | null;
        stack: string[] | null; // 스택이 배열로 이루어진다고 가정
        job: string;
        like_cnt: number;
        comment_cnt: number;
        scrap_cnt: number;
        user: number;
        like_users: number[];
        scrap_users: number[];
    }

    const feed: Feed = {
        title: "test",
        body: "test",
        date: "2024-01-16T13:58:57.729009Z",
        attached: null,
        link: null,
        stack: ["django"],
        job: "",
        like_cnt: 1,
        comment_cnt: 3,
        scrap_cnt: 2,
        user: 1,
        like_users: [1],
        scrap_users: [1, 2]
    };


    return (
        <Container>
            <Top>
                <div className='left'>
                    <div className='title'>
                        {feed.title}
                    </div>
                    <div className='info'>
                        {/* <img className='profile' src={feed.attached} /> */}
                        <div className='names'>
                            <div className='name'>윤서희</div>
                            <div className='job'>{feed.job}</div>
                        </div>
                        {feed.stack?.map((stack, index) => (
                            <div className='stacks' key={index}>
                                <div className='stack'>{stack}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        <div className='heart'>
                            <img className='heartimg' src={FullHeart} />
                            <div className='heartnum'>{feed.like_cnt}</div>
                        </div>
                        <div className='scrap'>
                            <img className='scrapimg' src={FullScrap} />
                            <div className='scrapnum'>{feed.scrap_cnt}</div>
                        </div>
                    </div>
                    <div className='down'>
                        <div className='date'>
                            {feed.date}
                        </div>
                    </div>
                </div>
            </Top>
            <Content>
                <div className='files'>
                    <a href={feed.link || '#'} className='link'>
                        포트폴리오 링크: {feed.link}
                    </a>
                    <div className='file'>
                        <div className='filelink'>
                            포트폴리오 PDF
                        </div>
                        <button className='gotofile'>파일 미리보기</button>
                    </div>
                </div>
                <div className='content'>
                    {feed.body}
                </div>
            </Content>
            <Comment>
                <div className='number'>
                    <img className='commentimg' src={CommentImg} />
                    <div className='commentnum'>댓글 {feed.comment_cnt}개</div>
                </div>
                <div className='input'>
                    <input
                        // onChange={onChangeText}
                        className='inputbox'
                        placeholder='댓글을 입력하세요.'
                    // value={text}
                    />
                    <button className='inputbtn'>작성</button>
                </div>
                {/* {comment.map((item) => (
                    <div className='comments'>
                        <div className='top'>
                            <div className='name'>{item.user_profile.name}</div>
                            <div className='date'>{formatDate(item.date)}</div>
                            <div className='delete' onClick={() => deleteComment(item.id)}>삭제</div>
                        </div>
                        <div className='bottom'>
                            {item.body}
                        </div>
                    </div>
                ))} */}
            </Comment>
        </Container>
    )
};

export default Main;