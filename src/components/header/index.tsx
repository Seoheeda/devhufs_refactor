import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Container, Itsmodal, ModalContainer } from './style';
import Logo from '../../assets/logo.svg'
import { Button } from '@mui/base/Button';



const Main = () => {

    
    return (
        <Container>
            <Link to="/">
                <img className="logoimg" src={Logo} />
            </Link>
            <div className="left">
                    <Button className="btn">로그인</Button>
            </div>
            {/* {modal &&
                <Itsmodal onClick={closeModal}>
                    <ModalContainer onClick={stopPropagation}>
                        <Login />
                    </ModalContainer>
                </Itsmodal>
            } */}

        </Container>
    );

}

export default Main;