/**
 * formate time
 * @param {number} time input time
 * @returns {string} result
 */
function dealTime(time) {
  let seconds = time || 0;
  const days = Math.floor(seconds / 60 / 60 / 24);
  seconds -= days * 60 * 60 * 24;
  const hours = Math.floor(seconds / 60 / 60);
  seconds -= hours * 60 * 60;
  const mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  return `${days}天${hours}小时${mins}分钟${seconds}秒`;
}

/**
 * formate memo
 * @param {number} memo input memo
 * @returns {string} result
 */
function dealMemo(memo) {
  let bytes = memo || 0;
  const gbs = Math.floor(bytes / 1024 / 1024 / 1024);
  bytes -= gbs * 1024 * 1024 * 1024;
  const mbs = Math.floor(bytes / 1024 / 1024);
  bytes -= mbs * 1024 * 1024;
  const kbs = Math.floor(bytes / 1024);
  bytes -= kbs * 1024;
  return `${gbs}G${mbs}M${kbs}K${bytes}B`;
}

module.exports = {
  dealMemo,
  dealTime,
};
