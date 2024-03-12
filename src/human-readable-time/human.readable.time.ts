export function humanReadable(s: number): string {
  return `${hours(s)}:${minutes(s)}:${seconds(s)}`;
}

function hours(s: number): string {
  if (s <= 3599) return "00";

  const hours: number = s / 3600;

  return format(hours);
}

function format(s: number): string {
  const asInt: number = Math.floor(s);
  return asInt < 10 ? `0${asInt}` : asInt.toString();
}

function seconds(s: number): string {
  return s <= 59 ? format(s) : format(s % 60);
}

function minutes(s: number): string {
  if (s <= 59) return "00";

  const totalSeconds = s;
  const hoursAsSeconds = 3600 * Math.floor(s / 3600);
  const remainingSeconds = totalSeconds - hoursAsSeconds;
  const minutes: number =
    s > 59 && s <= 3599 ? totalSeconds / 60 : remainingSeconds / 60;

  return format(minutes);
}

const formatV2 = (n: number) => String(Math.floor(n)).padStart(2, "00");

export function humanReadableV2(seconds: number): string {
  const h = seconds / 3600;
  const m = (seconds % 3600) / 60;
  const s = (seconds % 3600) % 60;

  return [h, m, s].map(formatV2).join(":");
}
