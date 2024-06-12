import { z } from "zod";

const hoursArray = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
] as const;

const hoursEnum = z.enum(hoursArray);

const slotValidationSchema = z.object({
  service: z.string(),
  date: z.date(),
  startTime: hoursEnum,
  endTime: hoursEnum,
  isBooked: z.boolean(),
});

export default slotValidationSchema;
