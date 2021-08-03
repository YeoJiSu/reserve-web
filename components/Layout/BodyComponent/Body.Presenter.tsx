import React, { useCallback, useEffect, useState } from "react";
import { images } from "public/Images";
import {
  BodySS,
  Container,
  FillImage,
  PickerWrapper,
  Arrow,
  Picker,
} from "./Body.style";

const BodyPresenter = (): JSX.Element => {
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  // 이미지 순서를 클릭하여 이동하는 pickers 배열

  const [pickIndex, setPickIndex] = useState<number>(0);
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링
  // 왼쪽 화살표 클릭
  const handlePrevClick = useCallback((): void => {
    if (pickIndex <= 0) {
      // state 업데이트 전, 해당 변수의 값이 0이라면

      setPickIndex(images.length - 1);

      // length의 -1로 지정하여 가장 마지막으로 이동한다.

      return;
    }

    setPickIndex(pickIndex - 1);
    // 인덱스 감소
  }, [pickIndex]);

  // 오른쪽 화살표 클릭
  const handleNextClick = useCallback((): void => {
    if (pickIndex + 1 === images.length) {
      // +1 했을 때, 배열의 인덱스를 벗어난다면

      setPickIndex(0);
      // 0으로 설정하여 가장 첫번째로 이동

      return;
    }

    setPickIndex(pickIndex + 1);
    // 인덱스 증가
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
      images.map((_: string, idx: number) => {
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

  return (
    <>
      <BodySS>
        <Container>
          <FillImage src={images[pickIndex]} />
          {/* pickIndex라는 state 변수를 이용하여 그에 맞는 이미지 렌더링 */}

          <Arrow isLeft={true} onClick={handlePrevClick}>
            <img src="left.png" width="50px" />
          </Arrow>

          <Arrow isLeft={false} onClick={handleNextClick}>
            <img src="right.png" width="50px" />
          </Arrow>

          <PickerWrapper>{pickers}</PickerWrapper>
        </Container>
      </BodySS>
    </>
  );
};

export default BodyPresenter;
