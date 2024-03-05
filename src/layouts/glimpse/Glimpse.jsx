import React from "react";
import styled, { keyframes, css } from "styled-components";
// import { about1, about2, about3, about4, about5, about6, about7 } from "../../assets/images";
import g1 from "../../assets/images/glimpse/g1.jpg"
import g2 from "../../assets/images/glimpse/g2.jpg"
import g3 from "../../assets/images/glimpse/g3.jpg"
import g6 from "../../assets/images/glimpse/g6.jpg"
import g7 from "../../assets/images/glimpse/g7.jpg"
import g8 from "../../assets/images/glimpse/g8.jpg"
import g9 from "../../assets/images/glimpse/g9.jpg"
import g10 from "../../assets/images/glimpse/g10.jpg"
import g11 from "../../assets/images/glimpse/g11.jpg"

function Glimpse() {
  const row1 = [
    g1,
    g2,
    g3,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
  ];


  return (
    <section id="glimpse" >
    <AppContainer className="">
      <Wrapper>
        <h2
          data-aos="fade-up" data-aos-offset="10"
          data-aos-once="true"  data-aos-delay="10"
          className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
        >
          A Glimpse of<span className='text-2xl'></span>
        </h2>
        <h3
          data-aos="fade-up" data-aos-offset="10"
          data-aos-once="true"  data-aos-delay="0"
          className=" text-3xl sm:text-6xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0 mb-16 font-semibold"
        >
          V-PRAYUKTI’23
        </h3>
        <Marquee data-aos="fade-up" data-aos-offset="10"
          data-aos-once="true"  data-aos-delay="0">
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} key={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} key={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
    </section>
  );
}

export default Glimpse;


const AppContainer = styled.div`
  width: 100%;
  height:auto;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 90%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: auto;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(7rem, 20rem + 45vmin, 20rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  background: white;
  aspect-ratio: 16/9;
  padding: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;