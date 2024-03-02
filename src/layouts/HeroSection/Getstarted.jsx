import styles from "../../assets/css/styles";
import arrowUp from "../../assets/images/arrow-up.svg";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[130px] h-[130px]  rounded-full bg-blue-gradient border-accent border-2 p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} p-2 flex-row`}>
        <p className="font-poppins font-medium text-[16px] sm:text-[18px] leading-[15px] sm:leading-[23.4px]">
          <span className=" text-white">Explore</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[16px] sm:text-[18px] leading-[15px] sm:leading-[23.4px]">
        <span className=" text-white">Events</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
