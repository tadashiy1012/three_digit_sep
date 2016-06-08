module.exports = function(num) {
  if (!Number.isSafeInteger(parseInt(num, 10))) throw new Error('Invalid argument');
  const ary = [];
  const nstr = parseInt(num, 10).toString();
  for (let i = nstr.length; i > 0; i -= 3) {
    ary.unshift(nstr.substring(i - 3, i));
  }
  return ary.join(',');
};