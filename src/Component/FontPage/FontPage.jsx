import backgroundImage from "../../assets/hero.png";

import { useEffect, useState } from "react";
import Events from "../Events/Events";

const FontPage = () => {
  const [donateEvent, setDonateEvent] = useState([]);
  const [searchDonateEvent, setSearchDonateEvent] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => {
        setDonateEvent(data);
        setSearchDonateEvent(data);
       
      });
  }, [search]);


  const handleSearch = (search) => {
    const filterData = donateEvent.filter((srh) =>
      srh.category.toLowerCase().includes(search.trim().toLowerCase())
    );
    setSearchDonateEvent(filterData);
  };

  return (
    <div>
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
              onChange={(e) => setSearch(e.target.value)}
              className="h-[50px] w-[350px] rounded-l-xl p-[16px] outline-none text-black"
              type="text"
              placeholder="Search Category..."
            />
            <button
              onClick={() => handleSearch(search)}
              className="w-[110px] h-[50px] rounded-r-xl bg-[#FF444A] text-white text-[16px] inter6"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="px-[140px]">
        {searchDonateEvent.length === 0 ? (
          <div className="text-center text-[24px] text-gray-500">
            No matching categories found.
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-[24px] mb-[180px]">
            {Array.isArray(searchDonateEvent) &&
              searchDonateEvent.map((event, i) => (
                <Events key={i} event={event}></Events>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FontPage;
