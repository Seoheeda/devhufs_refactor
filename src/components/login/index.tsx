import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Background } from './style';
import googleLogo from '../../assets/google.png'



const Main = () => {


    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [btn, setBtn] = useState(true)


    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
        setBtn((isChecked2===true) || (!isChecked1===true));

    }


const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    setBtn((isChecked2===true) || (!isChecked1===true));

};



    return (
        <Background>
            <Container>
                <div className='title'>로그인</div>
                <div className='agree'>
                    <input type="checkbox" id='1' className='checkbox' checked={isChecked1}  onChange={handleCheckboxChange1}/>
                    <div className='words'>devHUFS는 한국외대 재학생 / 졸업생을 위한 플랫폼으로, hufs.ac.kr 구글 이메일 계정으로만 로그인이 가능합니다.</div>
                </div>
                <div className='agree'>
                    <input type="checkbox" id='2' className='checkbox' checked={isChecked2} onChange={handleCheckboxChange2}/>
                    <div className='words'>devHUFS에 다음 정보를 제공하는 것에 동의합니다. (이메일, 이름, 프로필사진, 학과)</div>
                </div>
                <button className='googlebtn' 
                // onClick={onSuccess} 
                disabled={btn}>
                    <img className='googlelogo' src={googleLogo} />
                    구글로 시작하기
                </button>
            </Container>
        </Background>
    )
}

export default Main;