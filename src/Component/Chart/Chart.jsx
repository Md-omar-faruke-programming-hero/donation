import { PieChart } from 'react-minimal-pie-chart';

const Chart = () => {
  const totalGoal = 10000;
  const donations = [
    { title: "Donation 1", value: 500, color: "#E38627" },
    { title: "Donation 2", value: 40, color: "#C13C37" },
  ];

  const totalDonated = donations.reduce((acc, donation) => acc + donation.value, 0);
  const remainingAmount = totalGoal - totalDonated;

  const data = [
    { title: "my donation", value: totalDonated, color: "#00C49F" },
    { title: "total donation", value: remainingAmount, color: "#FF444A" },
  ];

  return (
   <div className='w-[500px] h-[500px] mx-auto mt-[200px]'>
     <PieChart
      data={data}
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
      labelStyle={{
        fontSize: '5px',
        fontFamily: 'sans-serif',
        fill: '#fff',
      }}
      labelPosition={60} // Adjust this value to position the label correctly
    />


    <div className='mt-[70px]'>
        <div className='flex justify-evenly'>
            <p>Your Donation: <span className='w-[100px] h-[12px] bg-[#00C49F] inline-block ml-[5px]'></span></p>
            <p>Total Donation: <span className='w-[100px] h-[12px] bg-[#FF444A] inline-block ml-[5px]'></span></p>
        </div>
        <div></div>
    </div>
   </div>
  );
};

export default Chart;
