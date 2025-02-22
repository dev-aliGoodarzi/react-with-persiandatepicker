// React
import { useState } from "react";
// React

// Persian Calendar
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// Persian Calendar

// Swipeable
import { useSwipeable } from "react-swipeable";
// Swipeable

const onNextMonthClick = () => {
  const element = document.querySelector(".rmdp-arrow-container.rmdp-right");
  if (!element) return;
  element.click();
};

const onPrevMonthClick = () => {
  const element = document.querySelector(".rmdp-arrow-container.rmdp-left");
  if (!element) return;
  element.click();
};

function p2eConverter(persianNumber) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";
  let englishNumber = "";

  for (let i = 0; i < persianNumber.length; i++) {
    const digit = persianNumber.charAt(i);
    const index = persianDigits.indexOf(digit);
    if (index !== -1) {
      englishNumber += englishDigits.charAt(index);
    } else {
      englishNumber += digit;
    }
  }

  return englishNumber;
}

const PersianDatePicker = () => {
  const [value, setValue] = useState(new Date());
  const [shouldCloseCalendar, setShouldCloseCalendar] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: onPrevMonthClick,
    onSwipedRight: onNextMonthClick,
  });

  const handleChange = (newValue) => {
    setValue(p2eConverter(String(newValue?.toString())));
  };

  return (
    <div className={``} ref={handlers.ref}>
      <br />
      <br />
      <br />
      <button onClick={onNextMonthClick}>next month</button>
      <br />
      <br />
      <button onClick={onNextMonthClick}>prev month</button>
      <br />
      <br />
      <DatePicker
        value={value}
        onChange={handleChange}
        onClose={() => shouldCloseCalendar}
        calendar={persian}
        locale={persian_fa}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      value : {JSON.stringify(value)}
      <br />
      <br />
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          checked={shouldCloseCalendar}
          onChange={() => setShouldCloseCalendar((prevState) => !prevState)}
        />
        باید تقویم بسته شود
      </label>
    </div>
  );
};

export default PersianDatePicker;
