import React, { useCallback, useEffect, useState } from "react";
//import { images } from "public/Images";
import axios, { AxiosResponse } from "axios";
import {
  BodySS,
  Container,
  FillImage,
  PickerWrapper,
  Arrow,
  Picker,
} from "./Body.style";
import { images } from "public/Images";

const ascending = (a, b) => {
  //오름차순
  return a.img_order < b.img_order ? -1 : a.img_order > b.img_order ? 1 : 0;
};

const BodyPresenter = (): JSX.Element => {
  const [sliders, setSliderList] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi.kspark.link/main-slides")
      .then((response: AxiosResponse) => {
        console.log("response", response); // response에는 config,data,headers,request 등 ... 이 있음

        const inOrder = response.data.sort(ascending); // 선택정렬
        console.log("inorder", inOrder);

        const update = inOrder
          .filter((value) => {
            if (value.is_show === true) {
              return true;
            }
          })
          .map((value) => {
            return value;
          });
        console.log("update", update);

        setSliderList(update);

        /*
        const img_url = response.data.map((value) => {
          //내가 쓸 건 그중애서 data 의 img url
          return value.img_url;
        });
        setSliderList(img_url); // setSliderList에 이미지 url 정보 넣어주기
        */
      });
  }, []);
  console.log("sliders", sliders);
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  // 이미지 순서를 클릭하여 이동하는 pickers 배열

  const [pickIndex, setPickIndex] = useState<number>(0);
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링

  // 왼쪽 화살표 클릭
  const clickLeft = useCallback((): void => {
    if (pickIndex <= 0) {
      setPickIndex(sliders.length - 1);
      return;
    } else setPickIndex(pickIndex - 1);
  }, [pickIndex]);

  // 오른쪽 화살표 클릭
  const clickRight = useCallback((): void => {
    if (pickIndex + 1 === sliders.length) {
      setPickIndex(0);
      return;
    } else setPickIndex(pickIndex + 1);
  }, [pickIndex]);

  const onPickIndex = useCallback(
    (idx: number): void => {
      if (pickIndex === idx) {
        // 선택되어 있는 인덱스를 클릭시에는 아무것도 실행하지 않는다.
        return;
      }

      setPickIndex(idx);
    },
    [pickIndex],
  );

  useEffect(() => {
    // 이미지의 갯수만큼 pickers JSX.Element[] 배열 state에 생성하여 넣어준다.
    setPickers(
      sliders.map((_: string, idx: number) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Picker
            onClick={() => onPickIndex(idx)}
            background={pickIndex === idx ? "orange" : "white"}
          ></Picker>
        );
      }),
    );
  }, [onPickIndex, pickIndex]);

  /* setInterval 함수를 이용해서 슬라이드 넘기기 
  useEffect(() => {
    const imageInterval = setInterval(() => {
      clickRight();
    }, 3000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [pickIndex]);
  */

  // setTimeout 함수를 이용해서 슬라이드 넘기기
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pickIndex + 1 === sliders.length) {
        setPickIndex(0);
        return;
      } else {
        setPickIndex(pickIndex + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [pickIndex]);

  return (
    <>
      <BodySS>
        <Container>
          {/*
          <FillImage
            src={sliders[pickIndex]?.img_url}
            alt={sliders[pickIndex]?.img_title}
          />
          */}
          {sliders.map((value, index) => {
            return (
              <>
                <FillImage
                  key={index}
                  style={{ display: index === pickIndex ? "inline" : "none" }}
                  src={sliders[pickIndex]?.img_url}
                  alt={sliders[pickIndex]?.img_title}
                />
              </>
            );
          })}

          <Arrow isLeft={true} onClick={clickLeft}>
            <img src="left.png" width="50px" />
          </Arrow>
          <Arrow isLeft={false} onClick={clickRight}>
            <img src="right.png" width="50px" />
          </Arrow>
          <PickerWrapper>{pickers}</PickerWrapper>
        </Container>

        <div className="aboutUs1">
          {/* map으로 반복문 돌리는 걸로 수정하기  */}
          <div className="box">
            <hr />
            <span className="title">Love Horse</span>
            <span className="content">애애</span>
          </div>
          <div className="box">
            <hr />
            <span className="title">Love Horse</span>
          </div>
          <div className="box">
            <hr />
            <span className="title">Love Horse</span>
          </div>
          <div className="box">
            <hr />
            <span className="title">Love Horse</span>
          </div>
        </div>
        <div className="aboutUs1">
          <div className="box">
            <span className="content">
              Love horse는 체계적인 승마 예약 시스템입니다.
              <br />
              예약을 쉽고 간편하게 빠르게 파악할 수 있습니다
            </span>
          </div>

          <div className="box">
            <span className="content">애애</span>
          </div>

          <div className="box">
            <span className="content">Love Horse</span>
          </div>

          <div className="box">
            <span className="content">Love Horse</span>
          </div>
        </div>
      </BodySS>
    </>
  );
};

export default BodyPresenter;
