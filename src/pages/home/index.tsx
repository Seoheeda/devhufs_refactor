import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Posts } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Filter from '../../components/filter';
import BasicProfile from '../../images/BasicProfile.png';
import HomeBox from '../../components/homebox';



const Main = () => {

    // const navigate = useNavigate();

    // const Tofeed = (postId) => {
    //     navigate(`/feed`, { state: { id: postId } });
    // };

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

    // const [allfeed, setAllfeed] = useState([])

    // const getAllfeed = async () => {
    //     try {
    //         const response = await axios.get('http://13.209.7.109/home/', {
    //             withCredentials:'include',
    //         });

    //         setAllfeed(response.data);
    //         console.log("전체 글", response.data);
    //     } catch (error) {
    //         console.log("홈 불러오기");
    //         console.error(error);
    //     }
    // };


    useEffect(() => {
        // getAllfeed();
    }, [])


    return (
        <div>
            <Filter />
            <HomeBox />
        </div>
    );

}

export default Main;