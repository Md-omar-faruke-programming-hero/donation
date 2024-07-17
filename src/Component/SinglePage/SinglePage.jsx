/* eslint-disable react/no-unescaped-entities */
import pic from "../../assets/Health.png";
const SinglePage = () => {
  return (
    <div className="px-[140px]">
      <div className="w-auto h-[700px] relative mb-[56px]">
        <div className="">
          <img src={pic} className=" w-full h-[700px]" alt="" />
        </div>
        <div className="px-[63px] py-[53px] absolute w-full bottom-0 bg-[#00000080]">
          <button className="px-[26px] py-[16px] bg-[#FF444A] text-[white] inter6 text-[20px] rounded-[4px]">
            Donate $200
          </button>
        </div>
      </div>
      <div className="mb-[120px]">
        <h2 className="inter7 text-[40px] text-black mb-[24px]">Good Education</h2>
        <p className="text-[16px] font-normal text-[#0B0B0BB2] leading-[30px]">There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
      </div>
    </div>
  );
};

export default SinglePage;
