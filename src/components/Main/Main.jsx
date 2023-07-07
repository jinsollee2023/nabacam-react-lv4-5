import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.MainContainer>
        <S.MainTitle>내돈내산</S.MainTitle>
        <S.SubTitle>오늘의 잘산템은? 오늘의 못산템은?</S.SubTitle>
        <div>
          <S.MainBtn onClick={() => navigate("/post-write")}>
            작성하러 가기
          </S.MainBtn>
          <S.MainBtn>구경하러 가기</S.MainBtn>
        </div>
      </S.MainContainer>
    </>
  );
};

export default Main;

const S = {
  MainContainer: styled.div`
    height: 70vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  MainTitle: styled.h1`
    font-size: 100px;
    font-weight: 1000;
  `,
  SubTitle: styled.p`
    font-size: 30px;
    margin: 50px;
  `,
  MainBtn: styled.button`
    width: 250px;
    height: 50px;
    margin: 0 10px;
    border-radius: 30px;
    background-color: transparent;
  `,
};