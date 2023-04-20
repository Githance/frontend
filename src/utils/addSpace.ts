export function addSpaceBeforeUpperCase(str: any) {
  const result = str.replace(/([a-zа-я])([A-ZА-Я])/g, '$1 $2');
  return result;
}
