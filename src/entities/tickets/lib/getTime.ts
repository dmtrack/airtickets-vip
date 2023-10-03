import dayjs from "dayjs";

export const getTime = (date: string) => {
  return dayjs(date).format('HH:mm')

}