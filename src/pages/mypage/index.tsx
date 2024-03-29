import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BasicProfile from '../../assets/BasicProfile.png';
import BasicImage from '../../assets/testback.png';
import {
    Container, Left, Right, Info, Scrap, Posts, Stacks, Stackinput, Stack,
    DropDownBox, DropDownItem, Origin
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Upload from '../../assets/Upload.png'
import { wholeJobsArray, wholeStacksArray } from '../../components/filter/arrays';




const Main = () => {

    const navigate = useNavigate();

    const Tofeed = () => {
        navigate(`/feed`);
    };

    const ToEdit = () => {
        navigate(`/edit`);
    };

    const Towrite = () => {
        navigate('/write')
    };


    return (
        <Container>
            <Left>
                <div className='pictures'>
                    <img className="bigpic" src={BasicImage} />
                    <img className='profileimg' src={BasicProfile} />
                </div>
                <div className='name'>윤서희</div>
                <div className='major'>학과: ELLT</div>
                <div className='major'>학적: 재학</div>
                {/* {openjob ? (
                    <Stacks>
                        <div className='top'>
                            <div className='title'>직무</div>
                            <div className='edit' onClick={Openjob}>취소</div>
                        </div>
                        <Stackinput
                            placeholder='직무를 입력하세요.'
                            value={job}
                            onChange={onChangeJob}
                        />
                        {isHaveInputJob && (
                            <DropDownBox>
                                {dropDownJobs.length === 0 && (
                                    <DropDownItem>찾을 수 없음</DropDownItem>
                                )}
                                {dropDownJobs.map((dropDownItem, dropDownIndex) => {
                                    return (
                                        <DropDownItem
                                            key={dropDownIndex}
                                            onClick={() => clickDropDownJob(dropDownItem)}
                                            className={
                                                dropDownJobIndex === dropDownIndex ? 'selected' : ''
                                            }
                                        >
                                            {dropDownItem}
                                        </DropDownItem>
                                    )
                                })}
                            </DropDownBox>
                        )}
                        <button className='button' onClick={postfeed}>등록</button>
                    </Stacks>
                ) : (
                    <Origin>
                        <div className='title'>
                            <div className='origin-stack'>직무</div>
                            <div className='edit' onClick={Openjob}>수정</div>
                        </div>
                        <div className='job'>{user.job}</div>

                    </Origin>
                )}
                {openstack ? (
                    <Stacks>
                        <div className='top'>
                            <div className='title'>기술스택</div>
                            <div className='edit' onClick={Openstack}>취소</div>
                        </div>
                        <Stackinput
                            placeholder='기술스택을 입력하세요.'
                            value={stack}
                            onChange={onChangeStack}
                        />
                        {isHaveInputStack && (
                            <DropDownBox>
                                {dropDownStacks.length === 0 && (
                                    <DropDownItem>찾을 수 없음</DropDownItem>
                                )}
                                {dropDownStacks.map((dropDownItem, dropDownIndex) => {
                                    return (
                                        <DropDownItem
                                            key={dropDownIndex}
                                            onClick={() => clickDropDownStack(dropDownItem)}
                                            className={
                                                dropDownStackIndex === dropDownIndex ? 'selected' : ''
                                            }
                                        >
                                            {dropDownItem}
                                        </DropDownItem>
                                    )
                                })}
                            </DropDownBox>
                        )}
                        <button className='button' onClick={postfeed}>등록</button>

                        <Stack>
                            {chosenStack.map((chosenStack) => {
                                return (
                                    <div>
                                        <div className='bubble'>
                                            <div className='chosenstack'>{chosenStack}</div>
                                            <div className='delete'>x</div>
                                        </div>
                                    </div>

                                )
                            })}
                        </Stack>
                    </Stacks>) : (
                    <Origin>
                        <div className='title'>
                            <div className='origin-stack'>기술스택</div>
                            <div className='edit' onClick={Openstack}>수정</div>
                        </div>
                        {userstack.map((item) => (
                            <div className='job'>{item}</div>
                        ))}

                    </Origin>)} */}
            </Left>
            <Right>
                <Posts>
                    <div className='title'>내 이력서</div>
                    <div className='boxes'>
                        <div className='post' onClick={Towrite}>
                            <div className='up'>
                                <img className='upload' src={Upload} />
                                <div className='more'>이력서 작성하기</div>
                            </div>
                        </div>
                        {/* {myfeed.map((item) => ( */}
                            <div className='post'>
                                <div className='up' onClick={() => Tofeed()}>
                                    <div className='name'>test</div>
                                    <div className='date'>2023-12-12</div>
                                </div>
                                <div className='infos'>
                                    <FontAwesomeIcon className='heart' icon={faHeart} />
                                    <div>2</div>
                                    <FontAwesomeIcon className='comment' icon={faComment} />
                                    <div>3</div>
                                    <FontAwesomeIcon className='scrap' icon={faBookmark} />
                                    <div>3</div>
                                    {/* <div className='edit' onClick={() => ToEdit(item.id)}>수정</div> */}
                                    <div className='delete'>삭제</div>
                                </div>
                            </div>
                        {/* ))} */}
                    </div>
                </Posts>
                <Scrap>
                    <div className='title'>스크랩 글</div>
                    <div className='container'>
                        {/* {myscrap.map((item) => ( */}
                            <div className='post' onClick={() => Tofeed()}>
                                <div className='up'>
                                    <div className='user'>
                                        {/* <img className='img' src={item.user_profile.pic.replace('/media/https%3A', 'https:/')} /> */}
                                        {/* <div className='username'>{item.user_profile.name.split('[')[0].trim()}</div> */}
                                    </div>
                                    <div className='name'>title</div>
                                    <div className='date'>2024-1-1</div>
                                </div>
                                <div className='infos'>
                                    <FontAwesomeIcon className='heart' icon={faHeart} />
                                    <div>1</div>
                                    <FontAwesomeIcon className='comment' icon={faComment} />
                                    <div>2</div>
                                    <FontAwesomeIcon className='scrap' icon={faBookmark} />
                                    <div>3</div>
                                </div>
                            </div>
                        {/* ))} */}
                    </div>
                </Scrap>
                <Info>
                    <div className='title'>좋아요 한 글</div>
                    <div className='container'>
                        {/* {mylike.map((item) => ( */}

                            <div className='post' onClick={() => Tofeed()}>
                                <div className='up'>
                                    <div className='user'>
                                        {/* <img className='img' src={item.user_profile.pic.replace('/media/https%3A', 'https:/')} /> */}
                                        {/* <div className='username'>{item.user_profile.name.split('[')[0].trim()}</div> */}
                                    </div>
                                    <div className='name'>title</div>
                                    <div className='date'>2023-12-14</div>
                                </div>
                                <div className='infos'>
                                    <FontAwesomeIcon className='heart' icon={faHeart} />
                                    <div>2</div>
                                    <FontAwesomeIcon className='comment' icon={faComment} />
                                    <div>0</div>
                                    <FontAwesomeIcon className='scrap' icon={faBookmark} />
                                    <div>1</div>
                                </div>
                            </div>
                            {/* ))} */}
                    </div>
                </Info>
            </Right>
        </Container>
    );

}

export default Main;