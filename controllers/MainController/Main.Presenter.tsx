import React, { useCallback, useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { AxiosResponse } from "axios";
import {
  MainStyled,
  Container,
  FillImage,
  PickerWrapper,
  Arrow,
  Picker,
} from "./Main.Style";
import axios from "@/utils/axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Custom = styled(Slider)`
  * {
    max-width: 100%;
  }
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ascending = (a, b) => {
  //오름차순
  return a.img_order < b.img_order ? -1 : a.img_order > b.img_order ? 1 : 0;
};

const MainPresenter = (): JSX.Element => {
  const [sliders, setSliderList] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi.kspark.link/main-slides")
      .then((response: AxiosResponse) => {
        const inOrder = response.data.sort(ascending);

        const update = inOrder
          .filter((value) => {
            if (value.is_show === true) {
              return true;
            }
          })
          .map((value) => {
            return value;
          });

        setSliderList(update);
      });
  }, []);
  // console.log("sliders", sliders);
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
      if (pickIndex !== idx) {
        setPickIndex(idx);
        return;
      }
    },
    [pickIndex],
  );

  useEffect(() => {
    setPickers(
      sliders.map((_: string, idx: number) => {
        return (
          <Picker
            onClick={() => onPickIndex(idx)}
            background={pickIndex === idx ? "orange" : "white"}
          ></Picker>
        );
      }),
    );
  }, [onPickIndex, pickIndex]);

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

  const sliderRef: any = useRef();

  return (
    <>
      <MainStyled>
        <Container>
          <Custom {...settings} ref={sliderRef}>
            {sliders.map((value) => {
              return (
                <>
                  <FillImage src={value?.img_url} alt={value?.img_title} />
                </>
              );
            })}
          </Custom>
          <div>
            <Arrow
              isLeft={true}
              onClick={() => {
                sliderRef.current.slickPrev();
              }}
            >
              <img src="left.png" width="50px" />
            </Arrow>
            <Arrow
              isLeft={false}
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            >
              <img src="right.png" width="50px" />
            </Arrow>
          </div>
        </Container>
      </MainStyled>
    </>
  );
};

export default MainPresenter;
