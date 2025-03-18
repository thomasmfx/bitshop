import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import PropTypes from 'prop-types';
import * as S from './Carousel.styles';

const ARROW_SIZE = 32;
const ARROW_COLOR = '#6c757d';

export default function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  function next() {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }

  function prev() {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }

  function jumpImage(index) {
    setCurrentIndex(index);
  }

  return (
    <S.CarouselContainer>
      <S.CarouselWrapper>
        {currentIndex > 0 && (
          <S.LeftArrow onClick={prev}>
            <ChevronLeft size={ARROW_SIZE} color={ARROW_COLOR} />
          </S.LeftArrow>
        )}
        <S.CarouselContentWrapper>
          <S.CarouselContent
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </S.CarouselContent>
        </S.CarouselContentWrapper>
        {currentIndex < length - 1 && (
          <S.RightArrow onClick={next}>
            <ChevronRight size={ARROW_SIZE} color={ARROW_COLOR} />
          </S.RightArrow>
        )}
        <S.DotsWrapper>
          {children.map((child, index) => (
            <S.Dot
              key={index}
              currentIndex={currentIndex === index}
              onClick={() => jumpImage(index)}
            />
          ))}
        </S.DotsWrapper>
      </S.CarouselWrapper>
    </S.CarouselContainer>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};
