export const transformPrizeType = (type: string) => {
  switch (type) {
    case 'Economic Sciences':
      return '经济';
    case 'Physics':
      return '生物';
    case 'Chemistry':
      return '化学';
    case 'Peace':
      return '和平';
    case 'Literature':
      return '文学';
    case 'Physiology or Medicine':
      return '医学';
    default:
      return 'other'; //
  }
};
export const awardAge = (birth: string, awardDate: string) => {
  let arr = birth.split('-');
  return +arr[0] - +awardDate;
};
