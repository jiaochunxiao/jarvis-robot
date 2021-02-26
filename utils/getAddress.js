module.exports = (networkInterfaces) => {
  let res = [];
  Object.keys(networkInterfaces).map((devName) => {
    const iface = networkInterfaces[devName];
    const len = iface.length;
    for (let i = 0; i < len; i += 1) {
      const item = iface[i];
      if (item.family.toLocaleLowerCase() === 'ipv4'
          && item.address !== '127.0.0.1'
          && !item.internal) {
        res = item;
        break;
      }
    }
    return devName;
  });
  return res;
};
