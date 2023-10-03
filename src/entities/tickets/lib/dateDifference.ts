import dayjs from "dayjs";


export const dateDifference = (dateFrom: string, dateTo: string) => {
  const dif = dayjs(dateFrom);
  const dif2 = dayjs(dateTo);
  const result = dif.diff(dif2, 'minutes') > 0 ? dif.diff(dif2, 'minutes') : dif.diff(dif2, 'minutes') * -1
  // @ts-ignore
  const hours = dayjs().minute(result)?.$W;
  // @ts-ignore
  const minutes = dayjs().minute(result)?.$m;
  if (hours) {
    return `${hours} ч ${minutes} мин`
  } else {
    return `${minutes}мин`
  }
}