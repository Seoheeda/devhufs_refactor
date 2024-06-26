import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Posts } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Filter from '../../components/filter';
import BasicProfile from '../../images/BasicProfile.png';



const Main = () => {



    const allfeed = [
        {
            "id": 13,
            "title": "login test",
            "date": "2024-01-15T14:27:19.639582Z",
            "user_profile": {
                "email": "202102760@hufs.ac.kr",
                "name": "이채영[재학 / 페르시아어·이란학과]",
                "pic": "/media/https%3A/lh3.googleusercontent.com/a/ACg8ocJ_6bLFQzvWdwl5klFdRifMfaXCo7pTiW96CMGOPVILmbE%3Ds96-c",
                "student_num": 0,
                "job": ""
            },
            "like_cnt": 0,
            "comment_cnt": 0,
            "scrap_cnt": 1
        }
        ,
        {
            "id": 13,
            "title": "login test",
            "date": "2024-01-15T14:27:19.639582Z",
            "user_profile": {
                "email": "202102760@hufs.ac.kr",
                "name": "이채영[재학 / 페르시아어·이란학과]",
                "pic": "/media/https%3A/lh3.googleusercontent.com/a/ACg8ocJ_6bLFQzvWdwl5klFdRifMfaXCo7pTiW96CMGOPVILmbE%3Ds96-c",
                "student_num": 0,
                "job": ""
            },
            "like_cnt": 0,
            "comment_cnt": 0,
            "scrap_cnt": 1
        }]


    return (
        <div>
            <Container>
                {allfeed.map((item) => (
                    // <Posts onClick={() => Tofeed(item.id)}>
                    <Posts>
                        <div className='boxes'>
                            <div className='post'>
                                <div className='profile'>
                                    <img className="profilepic" src={item.user_profile.pic.replace('/media/https%3A', 'https:/')} />
                                    <div className='name'>{item.user_profile.name.split('[')[0].trim()}</div>
                                </div>

                                <div className='up'>
                                    <div className='name'>{item.title}</div>
                                    <div className='date'>{new Date(item.date).toISOString().slice(0, 10)}</div>
                                </div>
                                <div className='infos'>
                                    <FontAwesomeIcon className='heart' icon={faHeart} />
                                    <div>{item.like_cnt}</div>
                                    <FontAwesomeIcon className='comment' icon={faComment} />
                                    <div>{item.comment_cnt}</div>
                                    <FontAwesomeIcon className='scrap' icon={faBookmark} />
                                    <div>{item.scrap_cnt}</div>
                                </div>
                            </div>
                        </div>
                    </Posts>
                ))}

            </Container>
        </div>
    );

}

export default Main;