import dayjs from "dayjs";

export const getDay = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY')

}