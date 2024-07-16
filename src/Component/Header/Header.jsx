import backgroundImage from "../../assets/hero.png";
import logo from "../../assets/Logo.png";
import pic from "../../assets/Health.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[140px] py-[50px]">
        <div className="w-[200px] h-[72px]">
          <img src={logo} className="w-auto" alt="" />
        </div>
        <div className="space-x-[50px] text-[18px] font-normal inter6">
          <a href="">Home</a>
          <a href="">Donation</a>
          <a href="">Statistics</a>
        </div>
      </div>

      <div
        className="h-[600px] hero bg-slate-50 flex justify-center items-center relative mb-[100px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="z-10">
          <h1 className="text-[48px] text-black text-center inter7">
            I Grow By Helping People In Need
          </h1>
          <div className="w-[500px] mx-auto mt-[40px]">
            <input
              className="h-[50px] w-[350px] rounded-l-xl p-[16px] outline-none text-black"
              type="text"
              placeholder="Search..."
            />
            <button className="w-[110px] h-[50px] rounded-r-xl bg-[#FF444A] text-white text-[16px] inter6">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="px-[140px]">
        <div className="grid grid-cols-4 gap-[24px] mb-[180px]">
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#0052FF26] pb-[16px]">
            <img src={pic} className="w-[100%]" alt="" />
            <div className="mt-[16px] px-[16px]">
              <div className="px-[10px] py-[2px] bg-[#0052FF33] inline-block rounded-[4px] mb-[8px]">
                <p className="text-[#0052FF] text-[14px] inter5">Health</p>
              </div>
              <p className="text-[#0052FF] text-[20px] inter6">Clean water for children</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
