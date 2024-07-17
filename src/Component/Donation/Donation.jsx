import pic from "../../assets/Health.png";
const Donation = () => {
  return (
    <div className="mt-[250px]">
      <div className="px-[140px]">
        <div className="grid grid-cols-2 gap-[24px] mb-[54px]">
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px] h-[200px]  overflow-hidden flex">
            <div className="w-[220px] h-[200px] ">
              <img src={pic} className="w-full h-full " alt="" />
            </div>
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#000] text-[24px] inter6">Clean water for children</p>
              <p className="text-[#0052FF] inter6 text-[16px]"> $290.00</p>
              <button className="bg-[#0052FF] px-[16px] py-[9px] rounded-[4px] text-[white] inter6 text-[18px] mt-[12px]">View Details</button>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px] h-[200px]  overflow-hidden flex">
            <div className="w-[220px] h-[200px] ">
              <img src={pic} className="w-full h-full " alt="" />
            </div>
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#000] text-[24px] inter6">Clean water for children</p>
              <p className="text-[#0052FF] inter6 text-[16px]"> $290.00</p>
              <button className="bg-[#0052FF] px-[16px] py-[9px] rounded-[4px] text-[white] inter6 text-[18px] mt-[12px]">View Details</button>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px] h-[200px]  overflow-hidden flex">
            <div className="w-[220px] h-[200px] ">
              <img src={pic} className="w-full h-full " alt="" />
            </div>
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#000] text-[24px] inter6">Clean water for children</p>
              <p className="text-[#0052FF] inter6 text-[16px]"> $290.00</p>
              <button className="bg-[#0052FF] px-[16px] py-[9px] rounded-[4px] text-[white] inter6 text-[18px] mt-[12px]">View Details</button>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px] h-[200px]  overflow-hidden flex">
            <div className="w-[220px] h-[200px] ">
              <img src={pic} className="w-full h-full " alt="" />
            </div>
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#000] text-[24px] inter6">Clean water for children</p>
              <p className="text-[#0052FF] inter6 text-[16px]"> $290.00</p>
              <button className="bg-[#0052FF] px-[16px] py-[9px] rounded-[4px] text-[white] inter6 text-[18px] mt-[12px]">View Details</button>
            </div>
          </div>
        </div>

        <button className=" w-[110px] h-[48px] flex justify-center items-center mx-auto bg-[#009444] text-white inter6 text-[16px] rounded-[8px]">See All</button>
      </div>
    </div>
  );
};

export default Donation;
