export default function Result({ steps, jumps }) {
  return (
    <>
      <div>
        <div className="text-sm ml-8 font-bold mt-2">Today's Events</div>
        <div className="border w-64 mx-auto h-8 mt-2 bg-yellow border-yellow rounded-md mb-4 text-sm font-semibold pl-4">
          {steps !== null ? "No of steps:" + `${steps}` : "no record found"}
        </div>
        <div className="border w-64 mx-auto h-8 mt-2 bg-yellow border-yellow rounded-md mb-4 text-sm font-semibold pl-4">
          {jumps !== null ? "No of jumps:" + `${jumps}` : "no record found"}
        </div>
      </div>
      {/*<div>{value}</div>*/}
    </>
  ); // Use toString() to display the date correctly
}
