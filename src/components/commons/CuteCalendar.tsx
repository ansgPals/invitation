import { css } from "@emotion/react";
import styled from "@emotion/styled";

const purple = "#c46d96";

const CalendarWrapper = styled.div`
  margin: 20px 0;
  width: 300px;
  border-radius: 1rem;
  background: white;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ffd7f6;
  font-family: "Arial Rounded MT Bold", "Segoe UI", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  color: ${purple};
  margin-bottom: 15px;
  font-family: "Gamja Flower", sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

const DayName = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${purple};
  font-family: "Gamja Flower", sans-serif;
`;

const DayCell = styled.div<{
  isCurrentDay?: boolean;
  isSunday?: boolean;
  isSaturday?: boolean;
}>`
  width: 30px;
  height: 30px;
  border-radius: ${({ isCurrentDay }) => (isCurrentDay ? "50%" : "0.5rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrentDay }) => (isCurrentDay ? "bold" : "normal")};
  position: relative;
  color: ${({ isSunday, isSaturday }) =>
    isSunday ? "#d00" : isSaturday ? "#0066cc" : purple};
  font-size: 17px;
  padding: 0 0 0 4px;
  font-family: "Gamja Flower", sans-serif;
  text-align: center;
  ${({ isCurrentDay }) =>
    isCurrentDay &&
    css`
      ::after {
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        border: 2px solid #ffa0ee;
        border-radius: 50%;
        position: absolute;
      }
      ::before {
        content: "🩷";
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        right: -15px;
        z-index: 3;
      }
    `};
`;

const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

const generateAugust2025Calendar = (): (number | null)[] => {
  const days: (number | null)[] = [];
  const startDay = 5; // 2025년 8월 1일은 금요일 (요일 index: 0=일요일)
  const totalDays = 31;

  for (let i = 0; i < startDay; i++) {
    days.push(null); // 빈칸
  }

  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
  }

  return days;
};

export default function CuteCalendar() {
  const days = generateAugust2025Calendar();

  return (
    <CalendarWrapper>
      <Title>2025년 8월</Title>
      <Grid>
        {dayNames.map((day) => (
          <DayName key={day}>{day}</DayName>
        ))}
        {days.map((day, idx) => {
          const dayOfWeek = idx % 7;

          if (day === null) {
            return <div key={idx} />;
          }

          return (
            <DayCell
              key={idx}
              isCurrentDay={day === 31}
              isSunday={dayOfWeek === 0}
              isSaturday={dayOfWeek === 6}
            >
              {day}
            </DayCell>
          );
        })}
      </Grid>
    </CalendarWrapper>
  );
}
