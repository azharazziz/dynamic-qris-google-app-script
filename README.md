# What Is QRIS?
QRIS is a QR Code specification for the Indonesian Payment System which aims for Interconnection and Interopability through the National Payment Gateway (GPN).

There are 2 types of QRIS:
1. Static Type
2. Dynamic Type

### Static Type
Static QRIS is a payment system that is carried out by the user directly (scan, enter nominal amount, enter PIN and click pay)

### Dynamic Type
Qris Dynamic is a payment system that has been determined by the Merchant in advance, so the nominal price is already listed on the QRIS so users just have to scan then pay

# Dynamic QRIS for Google Apps Script
Script to Convert Your Static QRIS into Dynamic QRIS using Google Apps Script.
This script is the result of the transformation of the script belonging to [Verssache](https://github.com/verssache/qris-dinamis). Rewritten to support use in Google Apps Script, primarily used in Google Sheets.

# How To Use
1. Open Google Sheet.
2. Click on tab `Extentions` then select on `Apps Script`.
3. Create new file `qrisdinamis.gs` & `crc_ccitt_ffff.gs`.
4. Copy paste the code.
5. Save the script, and back to the Google Sheets.
6. Call the Function, using `qrisdinamis(static_qr_code, amount_of_money)`
7. The Result will be like this, `00020101021226680019COM.PERMATABANK.WWW011893600013160059752602120088062440910303UMI51440014ID.CO.QRIS.WWW0215ID10232625439040303UMI520459425303360540420005802ID5925Kamar Baca Magelang Wareh6008MAGELANG61055617262070703A01630423BB`
8. Convert the generated code into QR using `IMAGE("https://chart.googleapis.com/chart?chs=500x500&cht=qr&chld=l|1&chl="&ENCODEURL(generated_code))` or you can use nested function like `=IMAGE("https://chart.googleapis.com/chart?chs=500x500&cht=qr&chld=l|1&chl="&ENCODEURL(qrisdinamis(generated_code, amount_of_money)))`
   
# Explanation of Files
We have 2 script in this project
1. `qrisdinamis.gs` to convert the Static QRIS into Dynamic QRIS.
2. `crc_ccitt_ffff.gs` to get the check error value or checksum with the CRC-16 or CRC-ITT algorithm, present as suffix.

