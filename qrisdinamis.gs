function qrisdinamis(qris, qty){
  qris = qris.substr(0, qris.length-4);
  step1 = qris.replace("010211", "010212");
  step2 = step1.split("5802ID");
  uang = "54";
  qtyLenght = qty.toString().length;
  qtyLenght = String(qtyLenght).padStart(2, '0');
  uang = uang.concat(qtyLenght, qty);
  uang = uang.concat("5802ID");
  fix = step2[0].concat(uang, step2[1]);
  fixCrc = crc_ccitt_ffff(fix);
  fixCrc = String(fixCrc).padStart(4, '0');
  fix = fix.concat(fixCrc);
  return fix;
}
