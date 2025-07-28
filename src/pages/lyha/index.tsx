import CuteCalendar from "@/components/commons/CuteCalendar";
import KakaoMap from "@/components/commons/Map";
import PhotoGallery from "@/components/commons/photoGallery";
import { Media } from "@/enums/common";
import { rotateAnimation } from "@/styles/animations";
import { media } from "@/styles/mediaQuery";
import { centerColumnBoxStyles, columnBoxStyles } from "@/styles/modules";
import styled from "@emotion/styled";

export default function Lyha() {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledSection1>
          <h1>
            <p>임리하</p> <p>첫돌</p>
          </h1>
          <StyledImageBlur />
          <img src={"/icon/flower.png"} />
          <img src={"/icon/flower.png"} />
          <img src={"/icon/flower.png"} />
          <img src={"/icon/flower.png"} />
          <img src={"/icon/flower.png"} />
          <StyledMainImage>
            <img src={"/lyha/1.webp"} />
          </StyledMainImage>
          <p>
            소중한 우리 아이 임리하가 <br />
            어느덧 첫 번째 생일을 맞이했습니다.
            <br /> 예쁜 웃음으로 무럭무럭 자란 <br />
            리하의 첫 생일을 함께 축하해 주세요
          </p>
        </StyledSection1>
        <StyledSection2>
          <div>
            <h2>일정</h2>
            <p>2025년 8월 31 일 (일요일) 오후 12시</p>
            <CuteCalendar />
          </div>
          <div>
            <h2>오시는길</h2>
            <StyledMap>
              <KakaoMap />
            </StyledMap>
            <p>
              경기 의정부시 배꽃길 7 <br />
              센텀스퀘어 2동 7층 717호 (CU편의점 건물)
            </p>
          </div>
        </StyledSection2>
        <StyledSection3>
          <h1>갤러리</h1>
          <PhotoGallery />
        </StyledSection3>
        <StyledSection4>
          <p>작업자 : 문헤민</p>
          <p>문의 : 01063363861</p>
        </StyledSection4>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}
const StyledSection4 = styled.div`
  width: 100%;
  text-align: right;
  ${centerColumnBoxStyles};
  background-color: #d7c1d7;
  padding: 20px 0 50px;
  > p {
    width: 350px;
    text-align: right;
    font-family: "Gamja Flower", sans-serif;
    line-height: 20px;
  }
`;
const StyledSection3 = styled.div`
  ${centerColumnBoxStyles};
  padding: 100px 0 100px 0;
  position: relative;
  font-family: "Gamja Flower", sans-serif;
  > h1 {
    font-size: 30px;
    margin: 20px 0;
    color: #761a45;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 160px;
    z-index: 1;
    pointer-events: none;
  }
  &::before {
    top: -0px;
    background: linear-gradient(to bottom, #ffffff, transparent);
  }
`;
const StyledMap = styled.div`
  ${centerColumnBoxStyles};
  border: 2px solid #ffd7f6;
  border-radius: 20px;
  padding: 5px;
  margin: 20px 0 0;
  > div {
    border-radius: 20px;
    overflow: hidden;
  }
`;
const StyledSection2 = styled.div`
  position: relative;
  background-color: white;
  font-family: "Gamja Flower", sans-serif;
  padding: 0px 30px 40px;
  ${centerColumnBoxStyles}
  > div {
    margin: 20px 0 0;
    > h2 {
      font-size: 20px;
    }
    > p {
      margin: 20px 0 0;
      font-size: 18px;
      line-height: 25px;
    }
    > button {
      display: inline-block;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 160px;
    z-index: 1;
    pointer-events: none;
  }
  &::before {
    top: -160px;
    background: linear-gradient(to top, #ffffff, transparent);
  }
`;
const StyledSection1 = styled.div`
  position: relative;
  padding: 80px 0 300px 0;
  > p {
    width: 100%;
    margin: 20px 0 0 0;
    position: absolute;
    font-size: 20px;
    z-index: 4;
    text-align: center;
    font-family: "Gamja Flower", sans-serif;
    color: #761a45;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: #ffffff;
    line-height: 26px;
  }
  > img {
    position: absolute;
    z-index: 3;

    ${rotateAnimation}
    &:first-of-type {
      width: 50px;
      height: 50px;
    }
    &:nth-of-type(2) {
      width: 60px;
      height: 60px;
      right: 20px;
      top: 20px;
    }
    &:nth-of-type(3) {
      width: 35px;
      height: 35px;
      top: 10px;
      left: 38px;
    }
    &:nth-of-type(4) {
      width: 50px;
      height: 50px;
      top: 200px;
      right: 50px;
    }
    &:nth-of-type(5) {
      width: 40px;
      height: 40px;
      top: 280px;
      left: 30px;
    }
  }

  > h1 {
    font-size: 55px;
    font-weight: 900;
    color: black;
    position: absolute;
    z-index: 3;
    top: 20px;
    text-align: center;
    width: 100%;
    > p {
      font-family: "Gaegu", sans-serif;
      font-weight: 700;
      -webkit-text-stroke-width: 2px;
      &:first-of-type {
        color: #ff9ed0;
        -webkit-text-stroke-color: #c46d96;
      }
      &:last-of-type {
        -webkit-text-stroke-color: #f79ead;
        color: #ffffff;
      }
    }
  }
`;
const StyledImageBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 160px;
    z-index: 1;
    pointer-events: none;
  }
  &::before {
    top: -100px;
    background: linear-gradient(to bottom, #ffe8fd, transparent);
  }

  &::after {
    bottom: -100px;
    background: linear-gradient(to top, #ffe8fd, transparent);
  }
`;
const StyledMainImage = styled.div`
  overflow: hidden;
  border-radius: 20px;
  > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transform: translate(-2px, -13px);
    scale: 1.3;
  }
`;
const StyledInnerWrapper = styled.div`
  width: 100%;
  background-color: #ffe8fd;
  padding: 20px 0 0px 0;
  z-index: 100;
  ${media(Media.SM)} {
    max-width: 700px;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  background-color: #f6f2ff;
  align-items: center;
  ${columnBoxStyles};
  justify-content: flex-start;
`;
