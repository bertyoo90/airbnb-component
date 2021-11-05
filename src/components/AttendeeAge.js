import PersonAmount from "./PersonAmount";

const AttendeeAge = () => {
  return (
    <div>
      <div class="ml-7 mt-7">
        <h3 class="text-black-600 text-xl">Adults</h3>
        <h4 class="text-gray-400">Ages 13 or Older</h4>
        <PersonAmount />
      </div>
      <div class="ml-7">
        <h3 class="text-black-600 text-xl">Children</h3>
        <h4 class="text-gray-400">Ages 2 - 12</h4>
        <PersonAmount />
      </div>
      <div class="ml-7">
        <h3 class="text-black-600 text-xl">Infants</h3>
        <h4 class="text-gray-400">Under 2</h4>
        <PersonAmount />
      </div>
    </div>
  );
};

export default AttendeeAge;
