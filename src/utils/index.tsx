import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const toMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
};

export const formatTime = ({
  year,
  month,
  day,
  hours,
  minutes,
  seconds,
}: {
  year?: number;
  month?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}): string =>
  format(
    new Date(
      year || 2000,
      month || 9,
      day || 25,
      hours || 0,
      minutes || 0,
      seconds || 0
    ),
    'HH:mm',
    { locale: pt }
  );
