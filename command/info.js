const os = require('os');
const chalk = require('chalk');
const getAddress = require('../utils/getAddress');

const { dealTime } = require('../utils/formateData');

const { log } = console;

module.exports = () => {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const time = os.uptime();
  log(chalk.bold.blue('系统信息：'));
  log(`CPU架构： ${os.arch()}`);
  log(`操作系统平台： ${os.platform()}`);
  log(`操作系统名称： ${os.type()}`);
  log((`系统内存大小： ${(totalMem / (1024 * 1024 * 1024)).toFixed(2)}GB`));
  log(`系统可用内存： ${(freeMem / (1024 * 1024 * 1024)).toFixed(2)}GB`);
  log(`系统内存使用率： ${((totalMem - freeMem) / totalMem).toFixed(4) * 100}%`);
  log(`系统本次已正常运行： ${dealTime(time)}`);
  log('\n');
  log(chalk.bold.blue('用户信息'));
  const userInfo = os.userInfo();
  Object.keys(userInfo).map((item) => {
    log(`${item}： ${userInfo[item]}`);
    return item;
  });
  log('\n');
  log(chalk.bold.blue('网络信息'));
  const networkInterfaces = os.networkInterfaces();
  const ipv4Info = getAddress(networkInterfaces);
  Object.keys(ipv4Info).map((item) => {
    log(`${item}: ${ipv4Info[item]}`);
    return item;
  });
};
