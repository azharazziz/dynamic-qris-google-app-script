function crc_ccitt_ffff(text, hex_output = true) {
  // adapted from https://github.com/damonlear/CRC16-CCITT
  // by https://stackoverflow.com/users/13045193/doubleunary
  // for https://stackoverflow.com/q/68235740/13045193
  // 在线校验工具及相关说明：http://www.ip33.com/crc.html
  if (!Array.isArray(text))
    text = [[text]];
  const polynomial = 0x1021;
  return text.map(row => row.map(string => {
    if (!string.length)
      return null;
    const bytes = Array.from(String(string))
      .map(char => char.charCodeAt(0) & 0xff); // gives 8 bits; higher bits get discarded
    let crc = 0xffff;
    bytes.forEach(byte => {
      for (let i = 0; i < 8; i++) {
        let bit = 1 === (byte >> (7 - i) & 1);
        let c15 = 1 === (crc >> 15 & 1);
        crc <<= 1;
        if (c15 ^ bit)
          crc ^= polynomial;
      }
    });
    crc &= 0xffff;
    return hex_output ? crc.toString(16).toUpperCase() : crc;
  }));
}