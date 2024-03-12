const languages = ["D", "F", "I", "K"];

export function trilingualDemocracy(group: string): string {
  const langCount: number[] = langCountIn(group);
  const indexOfTripple: number = langCount.findIndex((occ) => occ === 3);
  if (indexOfTripple !== -1) return group.charAt(0);

  const indexOfDouble: number = langCount.findIndex((occ) => occ === 2);
  if (indexOfDouble !== -1)
    return languages[langCount.findIndex((occ) => occ === 1)];

  return languages[langCount.findIndex((occ) => occ === 0)];
}

function langCountIn(group: string): number[] {
  return languages.map(
    (lang) => (group.match(new RegExp(lang, "g")) || []).length
  );
}
