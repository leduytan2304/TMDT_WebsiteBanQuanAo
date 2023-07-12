
SET NAMES 'utf8mb4';
USE clothingstore;
--
-- Delete data from the table 'shoppingcartdetails'
--
TRUNCATE TABLE shoppingcartdetails;
--
-- Delete data from the table 'return'
--
TRUNCATE TABLE `return`;
--
-- Delete data from the table 'orderdetails'
--
TRUNCATE TABLE orderdetails;
--
-- Delete data from the table 'productvariant'
--
DELETE FROM productvariant;
--
-- Delete data from the table 'shoppingcart'
--
DELETE FROM shoppingcart;
--
-- Delete data from the table 'product'
--
DELETE FROM product;
--
-- Delete data from the table 'order'
--
DELETE FROM clothingstore.order;
--
-- Delete data from the table 'size'
--
DELETE FROM size;
--
-- Delete data from the table 'productmaterial'
--
DELETE FROM productmaterial;
--
-- Delete data from the table 'productcategory'
--
DELETE FROM productcategory;
--
-- Delete data from the table 'paymentmethod'
--
DELETE FROM paymentmethod;
--
-- Delete data from the table 'customer'
--
DELETE FROM customer;
--
-- Delete data from the table 'color'
--
DELETE FROM color;

--
-- Inserting data into table color
--
INSERT INTO clothingstore.color(ColorID, ColorName) VALUES
('00', 'ZinnwalditeBrown'),
('01', 'BabyBlue'),
('02', 'TealGreen'),
('03', 'LavenderPink'),
('04', 'PowderBlue'),
('05', 'RoyalPurple'),
('06', 'TerraCotta'),
('07', 'CaputMortuum'),
('08', 'Cream'),
('09', 'BabyBlueEyes'),
('10', 'OutrageousOrange'),
('11', 'Cardinal'),
('12', 'Ruby'),
('13', 'MediumTaupe'),
('14', 'DogwoodRose');

--
-- Inserting data into table customer
--
INSERT INTO clothingstore.customer(CustomerID,CustomerLastName, CustomerFirstName, CustomerAddress, CustomerTel, CustomerDOB, CustomerGender, CustomerEmail, CustomerPW, CustomerUsername) VALUES
('00000', 'Phan', 'Thị Tèo', '443 Hồng Bàng, P1, Q10, TPHCM', '9463011450', '1970-01-04', 'Nữ', 'AbrahamAcevedo@example.com', 'J3818I3377WK6595ZC8ZC3I76', 'Abraham968'),
('00001', 'Nguyễn', 'Thị E', '130/468 Nguyễn Biểu, P5, Tân Bình, TPHCM', '0824234958', '1984-04-21', 'Nam', 'Jude_High169@example.com', '2052491F939C746AFUJ55N0F2', 'Markus549'),
('00002', 'Phan', 'Thị E', '22 Hoa Hồng, P6, Tân Bình, TPHCM', '7670349273', '1970-01-08', 'Nam', 'Bauer@example.com', 'L674HL49W', 'Jason4'),
('00003', 'Trần', 'Thị A', '775 Hồng Bàng, P13, Tân Phú, TPHCM', '4373577578', '1979-02-25', 'Nữ', 'Alarcon@example.com', '66CM0A1302N', 'Mcnally2'),
('00004', 'Trương', 'Văn Tèo', '736 An Dương Vương, P1, Q9, TPHCM', '4343896139', '1971-03-26', 'Nam', 'gndd9978@example.com', 'V6GA4FP7', 'Adolph45'),
('00005', 'Trần', 'Ngọc C', '230 Hùng Vương, P1, Q11, TPHCM', '9939974840', '1988-09-10', 'Khác', 'Palmer_Lofton@example.com', 'Y4F69417', 'Luther2020'),
('00006', 'Phan', 'Ngọc A', '64 Hùng Vương, P2, Q5, TPHCM', '5384278879', '1975-02-15', 'Nam', 'Abernathy@example.com', '1CVWR08VUI0QQVXB', 'Ada2005'),
('00007', 'Lương', 'Ngọc E', '805 Nguyễn Biểu, P6, Q3, TPHCM', '8796848619', '1973-07-03', 'Khác', 'Adaline_Abbott@example.com', 'BCU70W006WQ19D2VYC568N45PIGRU7X', 'Gerardo1992'),
('00008', 'Trần', 'Ngọc D', '130 Hoa Hồng, P5, Q6, TPHCM', '5477093604', '2005-09-25', 'Nữ', 'Shayne_Britton589@example.com', 'B8H9NK5CO7O05J', 'Carmela778'),
('00009', 'Huỳnh', 'Văn B', '953 Nguyễn Văn Cừ , P1, Q4, TPHCM', '0797509304', '2001-03-31', 'Nam', 'mxwygtmf_ahjpwboxdy@example.com', 'ED69C0BEXZ844H5', 'Florida343'),
('00010', 'Trương', 'Văn Tèo', '118 Nguyễn Biểu, P3, Q2, TPHCM', '9894434891', '1971-10-01', 'Nữ', 'Steve.A.Pape@nowhere.com', '3YA7TVR656XN', 'Abel79'),
('00011', 'Phan', 'Ngọc E', '714 An Dương Vương, P8, Tân Phú, TPHCM', '5050070957', '1979-04-23', 'Nữ', 'Ivan.Southern98@example.com', 'L090C480DC902', 'Alesia1986'),
('00012', 'Trương', 'Văn E', '487/541 Học Lạc, P12, Q6, TPHCM', '2092864117', '1973-05-09', 'Nam', 'Darell_Centeno27@example.com', 'Z33V2L11K7Y0EJ7G2', 'Abigail658'),
('00013', 'Lương', 'Ngọc E', '689 An Dương Vương, P1, Q3, TPHCM', '9660024021', '1970-03-07', 'Nữ', 'Shanta.Beaver89@nowhere.com', 'D8RW9S65NY0', 'Abernathy1968'),
('00014', 'Đặng', 'Ngọc E', '766/325 Học Lạc, P4, Q2, TPHCM', '4709065214', '1971-02-19', 'Nam', 'GregoryMurrell@example.com', '9CU31KD6S94S7QQ7S00', 'Allman22'),
('00015', 'Huỳnh', 'Thị A', '27 Nguyễn Xí, P14, Tân Phú, TPHCM', '8115006633', '1971-11-13', 'Nữ', 'rfgxqoso9811@example.com', 'U49V24IQ1MC2XG3M6W1G4W', 'Brandt151'),
('00016', 'Trần', 'Văn A', '473/634 Hồng Bàng, P6, Phú Nhuận, TPHCM', '2086478189', '1970-01-25', 'Nam', 'Violette_Maxey368@example.com', 'SAH24Y3T9V3O116694NZ', 'Celestine1984'),
('00017', 'Nguyễn', 'Ngọc C', '25 Nguyễn Xí, P3, Q11, TPHCM', '4543423342', '1975-01-22', 'Nữ', 'Sanderson@example.com', 'ZT94RM4I', 'Andrew2004'),
('00018', 'Đặng', 'Văn A', '38 Học Lạc, P5, Q8, TPHCM', '4239332691', '1986-04-03', 'Nam', 'Dennis@example.com', '409ZZMD8', 'Lewis1950'),
('00019', 'Phan', 'Thị C', '532 Hùng Vương, P10, Q2, TPHCM', '1339218350', '1979-06-16', 'Nam', 'Shifflett@example.com', 'SSGSS415B4C8B2C10', 'Alphonso1996'),
('00020', 'Bùi', 'Văn B', '47 Hồng Bàng, P9, Q1, TPHCM', '1478654239', '1991-03-20', 'Nam', 'Abbie.Watts@example.com', 'WBKLZEM2', 'Huey266'),
('00021', 'Huỳnh', 'Văn E', '84 Hoa Hồng, P1, Q12, TPHCM', '7668822793', '1984-12-26', 'Nữ', 'AlessandraNMckenzie72@example.com', '25W2DD778N99C48EM150C9', 'Sauer1'),
('00022', 'Bùi', 'Văn B', '132/443 Nguyễn Văn Cừ , P14, Q7, TPHCM', '1455481148', '1993-12-11', 'Nam', 'mivxztrm_txjxxsw@example.com', '4140H4RJJG4', 'Angelia7'),
('00023', 'Lê', 'Ngọc Tèo', '109 Hồng Bàng, P6, Q5, TPHCM', '1665329443', '1994-10-21', 'Nữ', 'Killian@nowhere.com', 'N8UL828Z2J28', 'Douglass6'),
('00024', 'Nguyễn', 'Ngọc E', '289 Học Lạc, P2, Q3, TPHCM', '9194668391', '1970-01-10', 'Nữ', 'Maness@nowhere.com', '42Q08O00G3U1892BD72106I2WZJ67P11', 'Adrian25');

--
-- Inserting data into table paymentmethod
--
INSERT INTO clothingstore.paymentmethod(PaymentMethodID, PaymentMethodName, PaymentMethodDetails) VALUES
(1, 'Chuyển khoản qua ngân hàng', 'Nhập số tiền, tài khoản thanh toán'),
(2, 'Ví điện tử', 'Quét mã'),
(3, 'COD', 'Thanh toán khi nhận hàng');

--
-- Inserting data into table productcategory
--
select * from clothingstore.productcategory;
INSERT INTO clothingstore.productcategory(CategoryID, ProducCategoryName, ParentCategoryID, Gender) VALUES
('CAT01', 'Quần', 'CAT01', ''),
('CAT02', 'Áo', 'CAT02', ''),
('CAT03', 'Đồ mặc ngoài', 'CAT03', ''),
('CAT04', 'Đầm', 'CAT04', ''),
('CAT05', 'Phụ kiện', 'CAT05', ''),
('CAT000', 'Túi', 'CAT05', 'Nam'),
('CAT001', 'Giày', 'CAT05', 'Nam'),
('CAT002', 'Kính mát', 'CAT05', 'Nữ'),
('CAT003', 'Áo sơ mi', 'CAT02', 'Nữ'),
('CAT004', 'Áo khoác', 'CAT03', 'Nam'),
('CAT005', 'Áo blazer', 'CAT03', 'Nam'),
('CAT006', 'Áo len', 'CAT02', 'Nam'),
('CAT007', 'Quần jean', 'CAT01', 'Nam'),
('CAT008', 'Thắt lưng', 'CAT05', 'Nữ'),
('CAT009', 'Quần jean', 'CAT01', 'Nữ');
--
-- Inserting data into table productmaterial
--
INSERT INTO clothingstore.productmaterial(ProductMaterialID, ProductMaterialName) VALUES
(1, 'Lanh'),
(2, 'Cotton'),
(3, 'Len'),
(4, 'Nỉ');

--
-- Inserting data into table size
--
INSERT INTO clothingstore.size(ProductSizeID, ProductSizeName) VALUES
('XS', 'Extra small'),
('S', 'Small'),
('M', 'Medium'),
('L', 'Large'),
('XL', 'Extra large');

--
-- Inserting data into table `order`
--
INSERT INTO clothingstore.order(OrderID, OrderDate, CustomerID, TotalProduct, ShippingFee, TotalCost, OrderStatus, OrderAddress, OrderReceiverName, OrderReceiverPhoneNumber, OrderShippingDate, PaymentMethodID, PaymentStatus, CustomerPaymentDetails, OrderFinishedDate) VALUES
('56857', '2023-03-18 01:13:29', '00002', 0, 0, 0, 'Hoàn thành', '46  Nơ Trang long, P8, Tân Phú, TPHCM', 'Phan Thị E', '6740764850', '2023-03-23 08:47:59.857479', 1, 'Đã thanh toán', 'BE0787909274', '2023-03-24 00:54:09.876645'),
('08272', '2023-05-04 15:51:12', '00022', 0, 0, 0, 'Hoàn thành', '3420 Học Lạc, P2, Q4, TPHCM', 'Lương Văn D', '2556868679', '2023-05-09 09:31:06.727354', 2, 'Đã thanh toán', 'LU66725059', '2023-05-10 13:05:07.075736'),
('71802', '2023-05-25 14:33:58', '00017', 0, 0, 0, 'Hoàn thành', '1020 Hồng Bàng, P11, Q4, TPHCM', 'Lê Ngọc D', '0087870736', '2023-06-01 08:21:03.945348', 3, 'Đã thanh toán', 'BE7332383127', '2023-06-02 16:49:13.920228'),
('46790', '2023-06-05 22:18:29', '00016', 0, 0, 0, 'Hoàn thành', '74 An Dương Vương, P9, Q6, TPHCM', 'Phan Văn A', '0164432626', '2023-06-08 00:52:21.527531', 1, 'Đã thanh toán', 'SE284178565101', '2023-06-08 17:03:13.030201'),
('30199', '2023-01-16 18:24:20', '00019', 0, 0, 0, 'Hoàn thành', '9010 Học Lạc, P14, Q1, TPHCM', 'Trần Văn D', '5258252410', '2023-01-17 13:24:23.338181', 1, 'Đã thanh toán', 'GB65033242', '2023-01-18 04:29:10.225809'),
('96161', '2023-03-19 10:32:01', '00020', 0, 0, 0, 'Hoàn thành', '6370 Hoa Hồng, P7, Q7, TPHCM', 'Lương Thanh B', '4992697577', '2023-03-24 15:08:33.748673', 1, 'Đã thanh toán', 'CZ2093194133', '2023-03-26 05:34:52.397427'),
('43675', '2023-04-28 17:03:55', '00004', 0, 0, 0, 'Hoàn thành', '65 Hồng Bàng, P10, Q8, TPHCM', 'Nguyễn Ngọc A', '9160461033', '2023-05-03 00:57:22.656189', 3, 'Đã thanh toán', 'ATU62638770', '2023-05-04 17:48:45.624212'),
('05134', '2023-03-03 21:51:27', '00017', 0, 0, 0, 'Hoàn thành', '8309  Nơ Trang long, P7, Tân Bình, TPHCM', 'Lê Thị E', '8252479683', '2023-03-10 18:40:01.686761', 3, 'Đã thanh toán', 'DE398097997', '2023-03-11 11:05:30.658338'),
('39121', '2023-01-01 00:08:53', '00018', 0, 0, 0, 'Hoàn thành', '7518 Hoa Hồng, P13, Q8, TPHCM', 'Nguyễn Ngọc C', '7978813888', '2023-01-06 22:07:31.615473', 3, 'Đã thanh toán', 'CY29263412F', '2023-01-07 06:46:16.101159'),
('69493', '2023-01-01 00:04:54', '00021', 0, 0, 0, 'Hoàn thành', '1020 Hoa Hồng, P5, Q1, TPHCM', 'Bùi Thanh A', '2349193779', '2023-01-01 02:34:33.469112', 3, 'Đã thanh toán', 'DE571894477', '2023-01-02 15:16:51.430217'),
('52349', '2023-03-11 03:51:24', '00013', 0, 0, 0, 'Hoàn thành', '4322 Nguyễn Xí, P1, Q4, TPHCM', 'Trương Thanh A', '5244574567', '2023-03-17 23:47:47.686497', 2, 'Đã thanh toán', 'CY90148951M', '2023-03-19 22:19:39.199615'),
('35930', '2023-03-17 16:10:59', '00002', 0, 0, 0, 'Hoàn thành', '6746 Hồng Bàng, P8, Tân Bình, TPHCM', 'Bùi Văn D', '1825281759', '2023-03-19 13:59:10.999096', 3, 'Đã thanh toán', 'DE957040587', '2023-03-20 09:34:58.738429'),
('43325', '2023-02-22 07:16:51', '00001', 0, 0, 0, 'Hoàn thành', '3943 Hồng Bàng, P7, Q10, TPHCM', 'Trương Văn B', '2925272811', '2023-02-25 22:08:58.879728', 2, 'Đã thanh toán', 'LU33238502', '2023-02-26 03:13:38.957125'),
('35066', '2023-01-01 00:00:06', '00010', 0, 0, 0, 'Hoàn thành', '80 Hồng Bàng, P13, Q5, TPHCM', 'Lê Ngọc C', '0620825041', '2023-01-06 12:20:27.657775', 2, 'Đã thanh toán', 'SE186893877301', '2023-01-07 03:49:03.722238'),
('22845', '2023-05-15 10:21:00', '00009', 0, 0, 0, 'Hoàn thành', '2701 Học Lạc, P14, Q3, TPHCM', 'Nguyễn Thanh A', '0141942753', '2023-05-17 03:54:19.349523', 3, 'Đã thanh toán', 'BG9754983876', '2023-05-18 16:47:47.175771');

--
-- Inserting data into table product
--
INSERT INTO clothingstore.product(ProductID, ProductName, ProductQuantity, ProductDescription, CategoryID, ProductPrice, ImageFolderPath, ProductMaterialID, PublishedDate, NumberOfProductSold, UpdateDate) VALUES
('27992', 'Printculer', 52, 'Stereowoofentor', 'CAT002', 143980, 'D:\\Inetpub\\dbForge Data Compare for SQL Serve', 1, '2023-06-23 21:46:27', 0, '2023-09-19 03:46:41.347836'),
('41578', 'Proplottimlet', 71, 'Teculer', 'CAT002', 374023, 'E:\\Windows\\Products\\tioesithera.txt', 2, '2023-01-01 00:09:30', 0, '2023-12-18 05:13:42.126346'),
('59510', 'Miclifior', 98, 'Combandaquer', 'CAT002', 203119, 'D:\\Document and Settings\\Devart\\rean.docx', 4, '2023-02-14 07:51:46', 0, '2023-12-17 08:07:18.664647'),
('88655', 'Stereotingaer', 2, 'Comleewer', 'CAT008', 499310, 'F:\\ProgramData\\dbForge Query Builder for SQL ', 1, '2023-06-12 13:33:39', 0, '2024-04-12 20:46:41.996066'),
('41899', 'Monocessor', 42, 'Stereoceivedglet', 'CAT007', 375307, 'E:\\ProgramData\\dbForge Data Compare for SQL S', 4, '2023-01-01 01:27:28', 0, '2023-05-16 18:46:48.389499'),
('57878', 'Recorderscope', 58, 'Retary', 'CAT007', 449212, 'F:\\Inetpub\\dbForge SQL Decryptor\\hierene04.in', 2, '2023-01-01 00:00:06', 0, '2023-07-16 17:21:07.671279'),
('75249', 'Transcesslet', 77, 'Cabwoofscope', 'CAT007', 164327, 'C:\\Document and Settings\\Products\\orheereere.', 1, '2023-02-12 21:58:50', 0, '2023-04-26 05:31:13.768615'),
('66974', 'Tabniader', 44, 'Playtopewentor', 'CAT005', 381036, 'F:\\Program Files\\dbForge Data Generator for S', 3, '2023-01-01 01:36:19', 0, '2023-01-28 02:19:02.100412'),
('03175', 'Tabjectefer', 79, 'Tabtary', 'CAT007', 118321, 'C:\\ProgramData\\dbForge Data Generator for SQL', 3, '2023-02-17 05:47:15', 0, '2023-03-25 06:47:19.717943'),
('11004', 'Subputator', 8, 'Subplottefor', 'CAT000', 260328, 'D:\\Program Files\\Builds\\youhatonand8.dbf', 3, '2023-01-01 00:00:01', 0, '2023-07-20 17:16:45.431364'),
('72124', 'Bitinar', 75, 'Cartfindewentor', 'CAT006', 471826, 'C:\\Program Files\\dbForge SQL Decryptor\\erahen', 2, '2023-02-17 20:00:41', 0, '2023-12-06 15:34:23.727586'),
('61144', 'Playcordewator', 8, 'Charputar', 'CAT009', 195060, 'D:\\Inetpub\\dbForge Data Compare for SQL Serve', 3, '2023-06-02 21:39:55', 0, '2023-10-10 15:14:18.889825'),
('08389', 'Amptaimer', 47, 'Anculon', 'CAT001', 109474, 'C:\\ProgramData\\dbForge SQL Decryptor\\iteraeae', 1, '2023-04-16 21:57:13', 0, '2023-12-12 05:27:48.269044'),
('99863', 'Subceivuper', 95, 'Transleaner', 'CAT007', 495741, '\\\\VMServer\\Program Files\\dbForge SQL Complete', 4, '2023-01-01 01:26:22', 0, '2023-03-29 11:29:01.28775'),
('93954', 'Stereoculridge', 3, 'Biputar', 'CAT009', 118191, 'D:\\Document and Settings\\Products\\eratedted30', 3, '2023-01-01 16:14:02', 0, '2023-09-25 14:27:05.090244'),
('19536', 'Armtagaor', 62, 'Playcordridge', 'CAT006', 429739, 'E:\\Windows\\Products\\eraititat.html', 1, '2023-04-13 04:56:59', 0, '2023-08-23 09:46:00.083754'),
('30664', 'Tweetleaner', 54, 'Speakputator', 'CAT002', 109976, 'E:\\Program Files\\Builds\\inme.exe', 1, '2023-01-14 03:54:50', 0, '2023-03-26 21:32:38.01872'),
('99642', 'Charpickon', 39, 'Montopommer', 'CAT003', 280726, 'D:\\Inetpub\\dbForge Data Generator for SQL Ser', 2, '2023-06-01 16:51:46', 0, '2024-03-02 00:09:36.530538'),
('67161', 'Charplottor', 70, 'Armtopletor', 'CAT002', 345266, 'E:\\ProgramData\\dbForge SQL Decryptor\\wittithe', 4, '2023-02-09 14:12:46', 0, '2023-09-07 21:38:08.982641'),
('54585', 'Subcorder', 86, 'Stereoholdonlet', 'CAT001', 134395, 'E:\\Document and Settings\\Products\\hinntouyou.', 2, '2023-01-01 02:10:09', 0, '2023-09-19 05:41:24.939842'),
('68576', 'Cabtinon', 33, 'Tabwoofepor', 'CAT007', 172497, 'C:\\Inetpub\\dbForge Data Compare for SQL Serve', 4, '2023-01-01 00:10:09', 0, '2023-03-18 16:01:38.588605'),
('58886', 'Playholder', 5, 'Transculaquscope', 'CAT007', 110876, 'D:\\Program Files\\dbForge SQL Complete\\hatthiu', 4, '2023-06-16 16:57:12', 0, '2023-11-08 04:36:42.661459'),
('26403', 'Ampholdridge', 9, 'Supholdor', 'CAT001', 239349, 'D:\\Windows\\Test\\waereandnot072.doc', 1, '2023-05-02 17:45:18', 0, '2023-05-21 15:08:40.517714'),
('16342', 'Recessor', 94, 'Printlictphone', 'CAT006', 403085, 'F:\\Inetpub\\dbForge SQL Decryptor\\notourthaare', 2, '2023-01-01 00:01:19', 0, '2023-02-16 00:38:16.961261'),
('21450', 'Supcordscope', 7, 'Tabnientor', 'CAT007', 398761, 'E:\\Windows\\Builds\\shoareandthe.doc', 3, '2023-05-10 06:51:33', 0, '2023-06-05 13:55:23.338408');

--
-- Inserting data into table shoppingcart
--
INSERT INTO clothingstore.shoppingcart(ShoppingCartID, TotalProduct, CustomerID) VALUES
(1, 0, '00011'),
(2, 0, '00008'),
(3, 0, '00018'),
(4, 0, '00022'),
(5, 0, '00015'),
(6, 0, '00004'),
(7, 0, '00007'),
(8, 0, '00019'),
(9, 0, '00011'),
(10, 0, '00021');


--
-- Inserting data into table productvariant
--
INSERT INTO clothingstore.productvariant(ProductID, ProductSizeID, ProductColorID, Quantity, Status) VALUES
('72124', 'L', '01', 39, 'Hết hàng'),
('41899', 'XL', '03', 62, 'Còn ít hàng'),
('57878', 'XL', '02', 75, 'Còn ít hàng'),
('88655', 'XL', '03', 81, 'Còn hàng'),
('66974', 'XL', '02', 72, 'Hết hàng'),
('99863', 'M', '04', 9, 'Còn ít hàng'),
('08389', 'M', '04', 47, 'Còn hàng'),
('61144', 'XL', '02', 7, 'Còn ít hàng'),
('11004', 'XS', '00', 8, 'Hết hàng'),
('75249', 'XL', '02', 87, 'Còn hàng'),
('41899', 'XL', '02', 39, 'Hết hàng'),
('75249', 'XL', '03', 24, 'Còn ít hàng'),
('11004', 'L', '01', 25, 'Còn hàng'),
('57878', 'XL', '03', 27, 'Còn ít hàng'),
('66974', 'M', '04', 10, 'Còn ít hàng'),
('08389', 'XL', '03', 69, 'Còn ít hàng'),
('75249', 'M', '04', 53, 'Hết hàng'),
('03175', 'L', '01', 21, 'Còn hàng'),
('72124', 'XL', '02', 17, 'Hết hàng'),
('41899', 'XS', '00', 26, 'Còn ít hàng'),
('03175', 'XL', '03', 9, 'Còn hàng'),
('11004', 'XL', '02', 72, 'Hết hàng'),
('57878', 'M', '04', 10, 'Còn ít hàng'),
('88655', 'XS', '00', 48, 'Còn ít hàng'),
('41899', 'M', '04', 88, 'Còn ít hàng'),
('59510', 'XS', '00', 8, 'Còn hàng'),
('66974', 'XL', '03', 9, 'Còn hàng'),
('11004', 'M', '04', 48, 'Còn ít hàng'),
('03175', 'M', '04', 75, 'Còn hàng'),
('57878', 'L', '01', 1, 'Còn ít hàng'),
('61144', 'XL', '03', 63, 'Hết hàng'),
('41578', 'XS', '00', 27, 'Hết hàng'),
('75249', 'XS', '00', 57, 'Hết hàng'),
('72124', 'XL', '03', 63, 'Còn ít hàng'),
('57878', 'XS', '00', 39, 'Còn ít hàng'),
('66974', 'L', '01', 60, 'Còn ít hàng'),
('41899', 'L', '01', 71, 'Còn ít hàng'),
('88655', 'L', '01', 18, 'Còn ít hàng'),
('27992', 'XS', '00', 65, 'Còn hàng'),
('11004', 'XL', '03', 23, 'Còn ít hàng'),
('61144', 'M', '04', 35, 'Còn ít hàng'),
('75249', 'L', '01', 38, 'Còn hàng'),
('03175', 'XL', '02', 26, 'Còn ít hàng'),
('59510', 'L', '01', 62, 'Hết hàng'),
('72124', 'M', '04', 87, 'Còn hàng'),
('03175', 'XS', '00', 68, 'Hết hàng'),
('66974', 'XS', '00', 71, 'Còn ít hàng'),
('41578', 'L', '01', 2, 'Còn hàng'),
('88655', 'XL', '02', 82, 'Còn ít hàng'),
('59510', 'XL', '02', 63, 'Còn hàng');

--
-- Inserting data into table orderdetails
--
INSERT INTO clothingstore.orderdetails(OrderID, ProductID, ProductSizeID, ProductColorID, OrderQuantity, ProductCost, ProductStatus) VALUES
('35066', '03175', 'M', '04', 10, 0, 0),
('30199', '41899', 'XS', '00', 7, 0, 0),
('43325', '11004', 'L', '01', 9, 0, 0),
('08272', '75249', 'M', '04', 3, 0, 0),
('69493', '75249', 'XL', '02', 2, 0,0),
('35066', '57878', 'XL', '03', 2, 0,0),
('71802', '57878', 'XL', '02', 3, 0,0),
('43675', '08389', 'M', '04', 9, 0, 0),
('46790', '88655', 'XL', '03', 4, 0,0),
('52349', '41899', 'XL', '02', 2, 0,0),
('56857', '72124', 'L', '01', 10, 0,0),
('05134', '61144', 'XL', '02', 2, 0,0),
('22845', '57878', 'L', '01', 10, 0,0),
('52349', '59510', 'XS', '00', 9, 0,0),
('05134', '57878', 'M', '04', 2, 0, 0),
('35930', '66974', 'XL', '03', 3, 0,0),
('35930', '75249', 'XL', '03', 8, 0,0),
('39121', '11004', 'XS', '00', 4, 0, 0),
('30199', '66974', 'XL', '02', 9, 0, 0),
('96161', '03175', 'XL', '03', 2, 0, 0),
('08272', '41899', 'XL', '03', 2, 0, 0),
('39121', '88655', 'XS', '00', 6, 0, 0),
('96161', '99863', 'M', '04', 10, 0, 0),
('43325', '11004', 'M', '04', 4, 0, 0),
('71802', '03175', 'L', '01', 9, 0, 0),
('69493', '41899', 'M', '04', 2, 0, 0),
('22845', '66974', 'M', '04', 2, 0,0),
('46790', '72124', 'XL', '02', 5, 0, 0),
('43675', '11004', 'XL', '02', 3, 0, 0),
('56857', '08389', 'XL', '03', 8, 0, 0);

--
-- Inserting data into table `return`
--
INSERT INTO clothingstore.return(CustomerID, OrderID, ReturnDate, RefundDate, CustomerBankName, CustomerBankAccount, TotalRefund, RefundStatus, ReturnState) VALUES
('00000', '56857', '2020-09-14 01:09:05', '2020-09-15 11:48:14.361703', 'VietinBank', '3530399911603297', 0, 'Không thành công', 'Đã hoàn thành');
--
-- Inserting data into table shoppingcartdetails
--
INSERT INTO clothingstore.shoppingcartdetails(ShoppingCartID, ProductID, ProductSizeID, ProductColorID, ProductCost, ProductQuantity) VALUES
(1, '66974', 'XS', '00', 429739, 2),
(1, '11004', 'XS', '00', 172497, 1),
(1, '03175', 'L', '01', 134395, 2),
(2, '88655', 'XL', '03', 495741, 3),
(2, '11004', 'M', '04', 374023, 1),
(2, '59510', 'XL', '02', 239349, 1),
(3, '72124', 'M', '04', 449212, 1),
(3, '41578', 'L', '01', 109474, 1),
(4, '03175', 'XS', '00', 164327, 1),
(4, '57878', 'M', '04', 134395, 2),
(4, '11004', 'L', '01', 143980, 3),
(4, '72124', 'XL', '02', 109976, 4),
(5, '75249', 'L', '01', 375307, 2),
(6, '57878', 'XL', '03', 203119, 2),
(7, '41899', 'XS', '00', 118191, 1),
(7, '88655', 'XL', '02', 118191, 3),
(8, '66974', 'M', '04', 195060, 2),
(8, '41899', 'L', '01', 239349, 6),
(9, '03175', 'XL', '02', 374023, 3),
(10, '03175', 'XL', '03', 374023, 4),
(8, '03175', 'M', '04', 203119, 1),
(8, '88655', 'L', '01', 381036, 1),
(8, '75249', 'XL', '02', 449212, 1),
(6, '08389', 'XL', '03', 374023, 1),
(7, '66974', 'XL', '02', 429739, 1),
(9, '41899', 'XL', '02', 471826, 1),
(9, '88655', 'XS', '00', 280726, 1),
(9, '57878', 'L', '01', 164327, 7),
(10, '41899', 'M', '04', 203119, 5),
(10, '11004', 'XL', '02', 429739, 3),
(10, '59510', 'L', '01', 499310, 1),
(10, '99863', 'M', '04', 172497, 2),
(2, '61144', 'XL', '03', 449212, 2),
(2, '27992', 'XS', '00', 449212, 2),
(9, '59510', 'XS', '00', 260328, 2),
(7, '41578', 'XS', '00', 495741, 2);



-- ------------------------PROCEDURE: Cập nhật lại dữ liệu alter
-- -------------------1. CHECK_AND_UPDATE_PRICE_ORDERDETAILS(): Cập nhật giá sản phẩm trong OrderDetails-----------------------------------------
DELIMITER $$
CREATE PROCEDURE CHECK_AND_UPDATE_PRICE_ORDERDETAILS()
BEGIN 
	DECLARE done INT default FALSE;
    DECLARE product_id varchar(20);	
    DECLARE price float;	
    DECLARE cursor_order_details 
    cursor for SELECT productid, productcost FROM clothingstore.ORDERDETAILS;
    
    DECLARE 
		CONTINUE HANDLER FOR NOT FOUND
    SET done =TRUE;
        
	OPEN cursor_order_details;
    
    order_details_loop: LOOP
		FETCH cursor_order_details INTO product_id,price;
        if price <=0 then
		set price := (SELECT productprice from clothingstore.product
							WHERE productid = product_id);
        UPDATE clothingstore.ORDERDETAILS
        SET PRODUCTCOST = price
        where productid= product_id;
		end if;
	IF done then 
		leave order_details_loop;
	end if;
    
	END LOOP order_details_loop;
END $$
DELIMITER ;

-- DROP PROCEDURE CHECK_AND_UPDATE_PRICE_ORDERDETAILS;

call CHECK_AND_UPDATE_PRICE_ORDERDETAILS();

-- ----------------------------------2.CHECK_AND_UPDATE_TOTAL_COST: Cập nhật tổng tiền sản phẩm của bảng ORDER-----------------------------------------
DELIMITER $$
CREATE PROCEDURE CHECK_AND_UPDATE_TOTAL_COST()
BEGIN 
	DECLARE done int default FALSE;
    DECLARE order_id varchar(10);
    DECLARE total_cost float;
    DECLARE check_total_cost float;
    
    DECLARE cursor_order cursor for
	SELECT ORDERID, totalcost FROM clothingstore.ORDER;
    DECLARE 
		CONTINUE HANDLER FOR NOT FOUND
    SET 
		DONE =TRUE;
        
	OPEN cursor_order;
    
    order_loop:
    LOOP
		FETCH cursor_order INTO order_id,total_cost;
		set check_total_cost = (SELECT totalcost from clothingstore.order where orderid=order_id);
        set total_cost = (SELECT SUM(ORDERQUANTITY*PRODUCTCOST) FROM CLOTHINGSTORE.ORDERDETAILS 
					WHERE order_id= orderid);
        if total_cost!= check_total_cost then
			UPDATE CLOTHINGSTORE.ORDER 
			SET totalcost = total_cost
			WHERE ORDERID = order_id;
		end if;
		IF done then 
			leave order_loop;
		end if;
	end loop order_loop;
END $$
DELIMITER ;

-- DROP PROCEDURE CHECK_AND_UPDATE_TOTAL_COST;

call CHECK_AND_UPDATE_TOTAL_COST();


-- --------------------------------3. UPDATE TOTAL PRODUCT ORDER: Cập nhật tổng số sản phẩm của bảng ORDER -------------------------------------
DELIMITER $$
CREATE PROCEDURE UPDATE_TOTAL_PRODUCT_ORDER()
BEGIN
	DECLARE done int DEFAULT FALSE;
    DECLARE order_id varchar(10);
    DECLARE total_product int default 0;
    DECLARE check_total_product int default 0;
    DECLARE cursor_order CURSOR for SELECT orderid,TOTALPRODUCT FROM CLOTHINGSTORE.ORDER;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET DONE =TRUE;
        
    OPEN cursor_order;
    order_loop: LOOP
    FETCH cursor_order into order_id, total_product;
		set check_total_product = (select totalproduct from clothingstore.order where orderid=order_id);
		set total_product = (select sum(orderquantity) from clothingstore.orderdetails where orderid=order_id);
		if total_product != check_total_product then
			update clothingstore.order
			set totalproduct = total_product
			where orderid=order_id;
		END IF;
        IF done then 
		leave order_loop;
		end if;
    END LOOP order_loop;
END $$
DELIMITER ;

-- DROP PROCEDURE UPDATE_TOTAL_PRODUCT_ORDER;

CALL UPDATE_TOTAL_PRODUCT_ORDER();

-- -------------------4. PROCEDURE UPDATE TOTAL PRODUCT SHOPPING CART: Cập nhật tổng số sản phẩm trong giỏ hàng của bảng SHOPPINGCART-------------------------------
DELIMITER $$
CREATE PROCEDURE CHECK_UPDATE_TOTAL_PRODUCT_SHOPPINGCART()
BEGIN
	DECLARE done int DEFAULT FALSE;
    DECLARE shoppingcart_id int;
    DECLARE total_product int default 0;
    DECLARE check_total_product int default 0;
    DECLARE cursor_shoppingcart CURSOR for SELECT shoppingcartid,TOTALPRODUCT FROM CLOTHINGSTORE.shoppingcart;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET DONE =TRUE;
        
    OPEN cursor_shoppingcart;
    shoppingcart_loop: LOOP
    FETCH cursor_shoppingcart into shoppingcart_id, total_product;
		set check_total_product = (select totalproduct from clothingstore.shoppingcart where shoppingcartid=shoppingcart_id);
		set total_product = (select sum(productquantity) from clothingstore.shoppingcartdetails where shoppingcartid=shoppingcart_id);
		if total_product != check_total_product then
			update clothingstore.shoppingcart
			set totalproduct = total_product
			where shoppingcartid=shoppingcart_id;
		END IF;
        IF done then 
		leave shoppingcart_loop;
		end if;
    END LOOP shoppingcart_loop;
END $$
DELIMITER ;

-- DROP PROCEDURE CHECK_UPDATE_TOTAL_PRODUCT_SHOPPINGCART;
CALL CHECK_UPDATE_TOTAL_PRODUCT_SHOPPINGCART();


-- -------------------5. CHECK_UPDATE_PRODUCT_STATUS: Cập nhật tình trạng sản phẩm của bảng PRODUCTVARIANT-------------------------
DELIMITER $$
CREATE PROCEDURE CHECK_UPDATE_PRODUCT_STATUS_PRODUCTVARIANT()
BEGIN
	DECLARE done int DEFAULT FALSE;
    DECLARE product_id varchar(20);
    DECLARE productsize_id varchar(20);
    DECLARE productColor_id varchar(20);
    DECLARE ProductQuantity int default 0;
    DECLARE productStatus varchar(45);
    DECLARE cursor_productVariant CURSOR for SELECT pv.productid, pv.productsizeid, pv.productcolorid, pv.quantity, pv.status 
											FROM CLOTHINGSTORE.ProductVariant pv;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET DONE =TRUE;
        
	OPEN cursor_productVariant;
    productVariant_loop: Loop
    FETCH cursor_productVariant into product_id,productsize_id,productColor_id, ProductQuantity,productStatus;
    
		IF ProductQuantity<=0 and productStatus != 'Hết hàng' then 
        	
			UPDATE clothingstore.productvariant pv
            SET pv.status = 'Hết hàng'
            WHERE productid=product_id and productsizeid=productsize_id and productcolorid=productcolor_id;
            
		ELSEIF ProductQuantity < 10 and productStatus != 'Còn ít hàng' then
			UPDATE clothingstore.productvariant pv
            SET pv.status = 'Còn ít hàng'
            WHERE productid=product_id and productsizeid=productsize_id and productcolorid=productcolor_id;
            
		ELSEIF ProductQuantity>=10 and productStatus != 'Còn hàng' then
        	
			UPDATE clothingstore.productvariant pv
            SET pv.status = 'Còn hàng'
            WHERE productid=product_id and productsizeid=productsize_id and productcolorid=productcolor_id;
		END IF;

		IF done then 
			leave productVariant_loop;
		end if;
        
	end loop productVariant_loop;
END $$	
DELIMITER ;

-- DROP PROCEDURE CHECK_UPDATE_PRODUCT_STATUS_PRODUCTVARIANT;
call CHECK_UPDATE_PRODUCT_STATUS_PRODUCTVARIANT();


-- ---------------06. UPDATE TOTAL NUMBER OF PRODUCT SOLD
DELIMITER $$
CREATE PROCEDURE UPDATE_TOTAL_PRODUCT_SOLD_PRODUCT()
BEGIN
	DECLARE done int DEFAULT FALSE;
    DECLARE product_id varchar(20);
    DECLARE cursor_productID CURSOR for SELECT productid FROM CLOTHINGSTORE.Product;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET DONE =TRUE;
    
    OPEN cursor_productID;
    product_loop: 
    LOOP
		FETCH cursor_productID into product_id;
        UPDATE CLOTHINGSTORE.PRODUCT 
        SET NumberOfProductSold = (SELECT sum(orderquantity) FROM CLOTHINGSTORE.ORDERDETAILS WHERE PRODUCTID=product_id and Productstatus=0)
        WHERE ProductID= product_id;
    IF done then
		leave product_loop;
	END IF;
	END LOOP product_loop;
END $$
DELIMITER ;

-- DROP PROCEDURE UPDATE_TOTAL_PRODUCT_SOLD_PRODUCT;
CALL UPDATE_TOTAL_PRODUCT_SOLD_PRODUCT();


SELECT * FROM CLOTHINGSTORE.CUSTOMER;
SELECT * FROM CLOTHINGSTORE.COLOR;
SELECT * FROM CLOTHINGSTORE.ORDER;
SELECT * FROM CLOTHINGSTORE.ORDERDETAILS;

SELECT * FROM CLOTHINGSTORE.PAYMENTMETHOD;
SELECT * FROM CLOTHINGSTORE.PRODUCT;
SELECT * FROM CLOTHINGSTORE.ProductCategory;
SELECT * FROM CLOTHINGSTORE.ProductMaterial;

SELECT * FROM CLOTHINGSTORE.ProductVariant;
SELECT * FROM CLOTHINGSTORE.Return;
SELECT * FROM CLOTHINGSTORE.SHOPPINGCART;
SELECT * FROM CLOTHINGSTORE.SHOPPINGCARTDETAILS;
SELECT * FROM CLOTHINGSTORE.SIZE;












