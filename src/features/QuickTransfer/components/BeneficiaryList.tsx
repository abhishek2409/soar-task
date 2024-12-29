import { FC, useRef } from 'react';
import { BeneficiaryData } from '../types';
import Slider from 'react-slick';
import BeneficiaryItem from './BeneficiaryItem';
import ArrowIcon from '@/assets/svgs/right-arrow.svg?react';

interface BeneficiaryListProps {
  data: BeneficiaryData[];
  onSelectHandler: (id: string) => void;
  selectedBeneficiary: string;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrow: false,
};

const BeneficiaryList: FC<BeneficiaryListProps> = ({
  data,
  onSelectHandler,
  selectedBeneficiary,
}) => {
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    // @ts-ignore
    sliderRef?.slickNext();
  };
  const previous = () => {
    // @ts-ignore
    sliderRef?.slickPrev();
  };
  return (
    <div className="relative">
      {/* @ts-ignore */}
      <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
        {data.map((item) => (
          <BeneficiaryItem
            key={item.id}
            data={item}
            onSelectHandler={onSelectHandler}
            selectedBeneficiary={selectedBeneficiary}
          />
        ))}
      </Slider>

      <button
        aria-label="previous beneficiary"
        onClick={previous}
        className="absolute top-1/2 -translate-y-1/2 left-0 shadow shad-shadowColor w-[50px] h-[50px] rounded-full flex justify-center items-center"
      >
        <ArrowIcon className="rotate-180" />
      </button>
      <button
        aria-label="next beneficiary"
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-0 shadow shad-shadowColor w-[50px] h-[50px] rounded-full flex justify-center items-center"
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default BeneficiaryList;
