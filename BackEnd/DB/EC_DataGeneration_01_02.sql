
SET NAMES 'utf8mb4';
USE clothingstore;
--
-- Delete data from the table 'vouchersfortier'
--
TRUNCATE TABLE clothingstore.vouchersfortier;
--
-- Delete data from the table 'shoppingcartdetails'
--
TRUNCATE TABLE clothingstore.shoppingcartdetails;
--
-- Delete data from the table 'rewardpoint'
--
TRUNCATE TABLE clothingstore.rewardpoint;
--
-- Delete data from the table 'return'
--
TRUNCATE TABLE clothingstore.return;
--
-- Delete data from the table 'productdiscount'
--
TRUNCATE TABLE clothingstore.productdiscount;
--
-- Delete data from the table 'orderdetails'
--
TRUNCATE TABLE clothingstore.orderdetails;
--
-- Delete data from the table 'loyaltypointtransaction'
--
TRUNCATE TABLE clothingstore.loyaltypointtransaction;
--
-- Delete data from the table 'customervouchers'
--
TRUNCATE TABLE clothingstore.customervouchers;
--
-- Delete data from the table 'shoppingcart'
--
DELETE FROM clothingstore.shoppingcart;
--
-- Delete data from the table 'productvariant'
--
DELETE FROM clothingstore.productvariant;
--
-- Delete data from the table 'order'
--
DELETE FROM clothingstore.order;
--
-- Delete data from the table 'product'
--
DELETE FROM clothingstore.product;
--
-- Delete data from the table 'customer'
--
DELETE FROM clothingstore.customer;
--
-- Delete data from the table 'vouchers'
--
DELETE FROM clothingstore.vouchers;
--
-- Delete data from the table 'tieredloyalty'
--
DELETE FROM clothingstore.tieredloyalty;
--
-- Delete data from the table 'size'
--
DELETE FROM clothingstore.size;
--
-- Delete data from the table 'productmaterial'
--
DELETE FROM clothingstore.productmaterial;
--
-- Delete data from the table 'productcategory'
--
DELETE FROM clothingstore.productcategory;
--
-- Delete data from the table 'paymentmethod'
--
DELETE FROM clothingstore.paymentmethod;
--
-- Delete data from the table 'color'
--
DELETE FROM clothingstore.color;

--
-- 1.Inserting data into table Color
--
INSERT INTO clothingstore.color(ColorID, ColorName) VALUES
(1, 'ZinnwalditeBrown'),
(2, 'BabyBlue'),
(3, 'TealGreen'),
(4, 'LavenderPink'),
(5, 'PowderBlue'),
(6, 'RoyalPurple'),
(7, 'TerraCotta'),
(8, 'CaputMortuum'),
(9, 'Cream'),
(10, 'BabyBlueEyes'),
(11, 'OutrageousOrange'),
(12, 'Cardinal'),
(13, 'Ruby'),
(14, 'MediumTaupe'),
(15, 'DogwoodRose');

--
-- 2 Inserting data into table PaymentMethod
--
INSERT INTO clothingstore.paymentmethod(PaymentMethodID, PaymentMethodName, PaymentMethodDetails, BankName, BankAccount, AccountOwner) VALUES
(1, 'COD', ' Thanh toán khi nhận hàng', '', '', ''),
(2, 'Ví điện tử', 'Chuyển khoản ', 'Agribank', '16066223255', 'Trần Ngọc B'),
(3, 'Chuyển khoản qua ngân hàng', 'Quét mã', '', '', 'Nguyễn Thanh A');

--
-- 3 Inserting data into table ProductCategory
--
INSERT INTO clothingstore.productcategory(CategoryID, ProductCategoryName, ParentCategoryID, Gender) VALUES
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
-- 4 Inserting data into table ProductMaterial
--
INSERT INTO clothingstore.productmaterial(ProductMaterialID, ProductMaterialName) VALUES
(1, 'Nỉ'),
(2, 'Cotton'),
(3, 'Lanh'),
(4, 'Len');

--
-- 5 Inserting data into table Size
--
INSERT INTO clothingstore.size(ProductSizeID, ProductSizeName) VALUES
('XS', 'Extra small'),
('XL', 'Extra large'),
('L', 'Large'),
('S', 'Small'),
('M', 'Medium');

--
-- 6 Inserting data into table TieredLoyalty
--
INSERT INTO clothingstore.tieredloyalty(TierLevel, TierName, MinSpendRequired, MaintenanceFee, ShippingFee) VALUES
(1, 'Vàng', 1000000, 800000, 100),
(2, 'Bạc', 500000, 600000, 50),
(3, 'Đồng ', 300000, 500000, 20);

--
-- 7 Inserting data into table Vouchers
--
INSERT INTO clothingstore.vouchers(VoucherID, VoucherUnit, VoucherValue, VoucherDescription, ActiveDate, ExpirationDate, MaxDiscount, MinSpend, CreatedDate) VALUES
(1, ' VND', 100000, 'Molestiae quia possimus. Aut consectetur perspiciatis; fugiat rerum eos nisi.', '2023-06-18 10:10:59.750393', '2023-06-20 08:19:09.980851', 100000, 100000, '2023-06-17 19:48:20'),
(2, '% ', 60, 'Repudiandae expedita placeat sequi distinctio...', '2023-03-16 05:45:53.991591', '2023-03-18 21:01:24.774536', 150000, 150000, '2023-03-13 05:25:17'),
(3, ' %', 70, 'Blanditiis et enim est; eos cum. Iste itaque. Quaerat vitae?', '2023-02-11 17:34:36.739407', '2023-02-16 01:54:05.309559', 200000, 200000, '2023-02-10 18:23:24'),
(4, ' %', 20, 'Error quia aut. Omnis sequi! Sunt vitae tempore. Molestiae dolorum eius est!', '2023-01-07 19:55:32.632249', '2023-01-10 05:10:02.661698', 100000, 250000, '2023-01-01 00:00:45'),
(5, ' %', 10, 'Et fugit libero illo. Quaerat dolor non fugiat pariatur.', '2023-06-08 03:27:48.515299', '2023-06-14 15:33:04.697126', 150000, 300000, '2023-06-03 12:00:03');
--
-- 8 Inserting data into table Customer
--
INSERT INTO clothingstore.customer(CustomerID, CustomerLastName, CustomerFirstName, CustomerAddress, CustomerTel, CustomerDOB, CustomerGender, CustomerEmail, CustomerPW, CustomerUsername, TierLevel, RegistrationDate, UpdateLoyaltyTierDate) VALUES
('00001', 'Phan', 'Thị Tèo', '443 Hồng Bàng, P1, Q10, TPHCM', '9463011450', '1970-01-04', 'Nữ', 'AbrahamAcevedo@example.com', 'J3818I33', 'Abraham968', 3, '2023-01-01 00:00:04', '2023-03-13 03:47:20.723636'),
('00002', 'Nguyễn', 'Thị E', '130/468 Nguyễn Biểu, P5, Tân Bình, TPHCM', '0824234958', '1977-01-26', 'Nam', 'Jude_High169@example.com', 'KP76Q262', 'Markus549', 1, '2023-05-04 16:11:30', '2023-07-13 03:46:06.520949'),
('00003', 'Phan', 'Thị E', '22 Hoa Hồng, P6, Tân Bình, TPHCM', '7670349273', '1970-01-08', 'Nam', 'Bauer@example.com', 'B9IYZ978', 'Jason4', 1, '2023-01-01 00:00:08', '2023-02-19 11:50:29.375929'),
('00004', 'Trần', 'Thị A', '775 Hồng Bàng, P13, Tân Phú, TPHCM', '4373577578', '2008-12-25', 'Nữ', 'Alarcon@example.com', '3DS13BW5', 'Mcnally2', 2, '2023-01-08 13:26:46', '2023-03-26 12:34:05.777043'),
('00005', 'Trương', 'Văn Tèo', '736 An Dương Vương, P1, Q9, TPHCM', '4343896139', '2022-08-11', 'Nam', 'gndd9978@example.com', '72052491', 'Adolph45', 1, '2023-06-22 03:11:23', '2023-09-20 11:24:42.106414'),
('00006', 'Trần', 'Ngọc C', '230 Hùng Vương, P1, Q11, TPHCM', '9939974840', '1997-01-22', 'Khác', 'Palmer_Lofton@example.com', 'F8Z36CCW', 'Luther2020', 3, '2023-07-04 18:42:07', '2023-09-10 02:09:52.308131'),
('00007', 'Phan', 'Ngọc A', '64 Hùng Vương, P2, Q5, TPHCM', '5384278879', '1976-10-05', 'Nam', 'Abernathy@example.com', 'L4W0A3HU', 'Ada2005', 2, '2023-05-28 01:57:19', '2023-08-07 22:52:44.107787'),
('00008', 'Lương', 'Ngọc E', '805 Nguyễn Biểu, P6, Q3, TPHCM', '8796848619', '2001-09-24', 'Khác', 'Adaline_Abbott@example.com', '5T5WXN48', 'Gerardo1992', 3, '2023-07-08 14:54:54', '2023-10-03 16:19:01.092769'),
('00009', 'Trần', 'Ngọc D', '130 Hoa Hồng, P5, Q6, TPHCM', '5477093604', '1988-05-29', 'Nữ', 'Shayne_Britton589@example.com', 'F8436U50', 'Carmela778', 3, '2023-06-30 10:37:21', '2023-08-12 08:44:24.587664'),
('00010', 'Huỳnh', 'Văn B', '953 Nguyễn Văn Cừ , P1, Q4, TPHCM', '0797509304', '1987-08-04', 'Nam', 'mxwygtmf_ahjpwboxdy@example.com', 'K8PW8619', 'Florida343', 1, '2023-03-24 06:09:30', '2023-07-01 03:08:19.488641'),
('00011', 'Trương', 'Văn Tèo', '118 Nguyễn Biểu, P3, Q2, TPHCM', '9894434891', '1971-10-01', 'Nữ', 'Steve.A.Pape@nowhere.com', '830KM083', 'Abel79', 3, '2023-01-01 00:10:39', '2023-05-26 16:49:02.173903'),
('00012', 'Phan', 'Ngọc E', '714 An Dương Vương, P8, Tân Phú, TPHCM', '5050070957', '1979-04-23', 'Nữ', 'Ivan.Southern98@example.com', 'NHG51235', 'Alesia1986', 3, '2023-01-01 00:56:40', '2023-02-20 15:10:04.231714'),
('00013', 'Trương', 'Văn E', '487/541 Học Lạc, P12, Q6, TPHCM', '2092864117', '2008-12-11', 'Nam', 'Darell_Centeno27@example.com', '9C69YP0R', 'Abigail658', 1, '2023-03-11 23:01:48', '2023-04-29 12:55:14.174305'),
('00014', 'Lương', 'Ngọc E', '689 An Dương Vương, P1, Q3, TPHCM', '9660024021', '1970-03-07', 'Nữ', 'Shanta.Beaver89@nowhere.com', 'YICEYZW8', 'Abernathy1968', 2, '2023-01-01 00:01:06', '2023-04-03 16:35:10.081679'),
('00015', 'Đặng', 'Ngọc E', '766/325 Học Lạc, P4, Q2, TPHCM', '4709065214', '1971-02-19', 'Nam', 'GregoryMurrell@example.com', 'U4Z61009', 'Allman22', 1, '2023-01-01 00:06:55', '2023-02-15 23:07:52.576442'),
('00016', 'Huỳnh', 'Thị A', '27 Nguyễn Xí, P14, Tân Phú, TPHCM', '8115006633', '2008-07-11', 'Nữ', 'rfgxqoso9811@example.com', '6Q1WXXAB', 'Brandt151', 1, '2023-01-05 01:45:56', '2023-05-26 19:26:10.757583'),
('00017', 'Trần', 'Văn A', '473/634 Hồng Bàng, P6, Phú Nhuận, TPHCM', '2086478189', '1970-01-25', 'Nam', 'Violette_Maxey368@example.com', 'CU70W00W', 'Celestine1984', 1, '2023-01-01 00:00:25', '2023-03-03 11:46:47.594094'),
('00018', 'Nguyễn', 'Ngọc C', '25 Nguyễn Xí, P3, Q11, TPHCM', '4543423342', '2013-04-20', 'Nữ', 'Sanderson@example.com', '3W9418ND', 'Andrew2004', 2, '2023-04-16 04:33:08', '2023-08-16 23:40:40.519678'),
('00019', 'Đặng', 'Văn A', '38 Học Lạc, P5, Q8, TPHCM', '4239332691', '1970-05-09', 'Nam', 'Dennis@example.com', 'I7VH1CKA', 'Lewis1950', 2, '2023-06-25 15:41:11', '2023-09-27 23:47:38.731381'),
('00020', 'Phan', 'Thị C', '532 Hùng Vương, P10, Q2, TPHCM', '1339218350', '1979-06-16', 'Nam', 'Shifflett@example.com', '6M2T010P', 'Alphonso1996', 3, '2023-01-01 00:57:34', '2023-05-16 17:35:08.680923');

--
-- 9 Inserting data into table Product
--
INSERT INTO clothingstore.product(ProductID, ProductName, ProductQuantity, ProductDescription, CategoryID, ProductPrice, ImageFolderPath, ProductMaterialID, PublishedDate, NumberOfProductSold, UpdateDate) VALUES
('4529', ' Áo sơ mi tay dài', 16, 'Necessitatibus illo libero dolorem consequatur. Veritatis accusamus.', 'CAT003', 100000, 'F:\\Windows\\dbForge Data Generator for SQL Ser', 3, '2023-02-13 09:02:12', 0, '2023-04-11 12:09:22.543884'),
('3352', ' Áo blazer', 1, 'Modi quasi incidunt assumenda. Repellat perspiciatis! Ullam ipsam.', 'CAT005', 110000, 'D:\\Inetpub\\Test\\oulentital.dbf', 3, '2023-01-01 00:05:20', 0, '2023-02-02 13:59:43.731193'),
('4691', ' Áo sơ mi tay ngắn', 82, 'Eius voluptas voluptatem odit quam.', 'CAT003', 120000, 'E:\\Inetpub\\dbForge Data Generator for SQL Ser', 2, '2023-04-05 09:27:14', 0, '2023-04-29 12:29:32.558558'),
('4392', 'Quần jean', 60, 'Voluptate fuga. Unde exercitationem cum; ipsam est. Voluptas quasi. Cum qui.', 'CAT007', 130000, 'E:\\ProgramData\\dbForge Query Builder for SQL ', 1, '2023-01-01 00:00:47', 0, '2023-01-31 02:18:45.859407');

--
-- 10 Inserting data into table Order
--
INSERT INTO clothingstore.order(OrderID, OrderDate, CustomerID, TotalProduct, TotalCost, OrderStatus, OrderAddress, OrderReceiverName, OrderReceiverPhoneNumber, OrderShippingDate, PaymentMethodID, PaymentStatus, CustomerPaymentDetails, OrderFinishedDate, TotalDiscount, VoucherID) VALUES
('5e6695e2-5', '2023-05-02 15:21:31', '00002', 0, 0, 'Hoàn thành', '81 Học Lạc, P5, Q11, TPHCM', 'Lê Thị E', '4375733847', '2023-05-07 00:32:40.374249', 3, 'Đã thanh toán', 'LU33527425', '2023-05-09 22:44:47.988316', 0, null),
('6207a9a7-3', '2023-03-12 08:59:38', '00018', 0, 0, 'Hoàn thành', '8695 Nguyễn Biểu, P11, Q2, TPHCM', 'Lê Ngọc E', '2324803317', '2023-03-18 09:36:09.705963', 1, 'Đã thanh toán', 'BG550801857', '2023-03-20 19:54:17.873591', 0, null),
('6d81a322-6', '2023-01-01 01:08:43', '00011', 0, 0, 'Hoàn thành', '7793 Nguyễn Văn Cừ , P5, Q8, TPHCM', 'Đặng Văn C', '3854988873', '2023-01-05 22:02:50.919609', 3, 'Đã thanh toán', 'SE061576889101', '2023-01-08 16:17:11.920683', 0, null),
('60e226cb-6', '2023-01-01 00:01:08', '00017', 0, 0, 'Hoàn thành', '7020 Hồng Bàng, P5, Q2, TPHCM', 'Lê Văn D', '6758649858', '2023-01-03 19:50:08.534924', 3, 'Đã thanh toán', 'ESC8522663A', '2023-01-06 13:55:42.376489', 0, null),
('11fbda18-5', '2023-07-06 06:24:14', '00001', 0, 0, 'Hoàn thành', '9441  Nơ Trang long, P10, Q6, TPHCM', 'Huỳnh Thị B', '0021608394', '2023-07-07 23:15:41.924002', 2, 'Đã thanh toán', 'EL774150533', '2023-07-08 22:25:26.330909', 0, null),
('76598eb0-2', '2023-06-06 18:57:03', '00002', 0, 0, 'Hoàn thành', '1626 Nguyễn Xí, P11, Tân Bình, TPHCM', 'Nguyễn Ngọc E', '8240474332', '2023-06-12 13:56:22.567734', 1, 'Đã thanh toán', 'EL431757079', '2023-06-13 11:31:09.740021', 0, null),
('5ada22d3-3', '2023-04-28 03:26:58', '00013', 0, 0, 'Hoàn thành', '34 An Dương Vương, P7, Q9, TPHCM', 'Trần Văn A', '2612357133', '2023-05-02 01:13:35.635752', 2, 'Đã thanh toán', 'IE1259106GV', '2023-05-03 01:04:41.857861', 0, null),
('697be7ba-1', '2023-06-05 09:52:59', '00003', 0, 0, 'Hoàn thành', '1261 Hùng Vương, P12, Q8, TPHCM', 'Lương Ngọc D', '3892817618', '2023-06-06 23:48:09.104546', 1, 'Đã thanh toán', 'EL590593356', '2023-06-08 02:05:15.634335', 0, null);

-- 11 Inserting data into table ProductVariant
--
INSERT INTO clothingstore.productvariant(ProductID, ProductSizeID, ProductColorID, Quantity, Status) VALUES
('4691', 'S', 5, 40, 'Còn hàng'),
('4529', 'L', 1, 75, 'Còn hàng'),
('3352', 'XS', 2, 26, 'Còn hàng'),
('4392', 'S', 4, 6, 'Còn hàng'),
('4392', 'M', 5, 14, 'Còn hàng'),
('3352', 'S', 4, 62, 'Còn hàng'),
('4529', 'XL', 3, 94, 'Còn hàng'),
('4392', 'M', 6, 19, 'Còn hàng'),
('3352', 'L', 4, 74, 'Còn hàng'),
('4691', 'L', 4, 25, 'Còn hàng'),
('4529', 'S', 1, 11, 'Còn hàng'),
('4691', 'XL', 3, 77, 'Còn hàng'),
('3352', 'XL', 4, 42, 'Còn hàng'),
('3352', 'M', 2, 12, 'Còn hàng'),
('4392', 'L', 4, 82, 'Còn hàng'),
('4529', 'L', 3, 86, 'Còn hàng'),
('4691', 'XS', 3, 96, 'Còn hàng'),
('4529', 'M', 2, 61, 'Còn hàng'),
('4691', 'L', 5, 34, 'Còn hàng'),
('4529', 'XS', 2, 41, 'Còn hàng'),
('4529', 'L', 2, 10, 'Còn hàng'),
('3352', 'XS', 3, 27, 'Còn hàng'),
('3352', 'S', 2, 9, 'Còn hàng'),
('4392', 'XL', 4, 63, 'Còn hàng'),
('4529', 'XL', 1, 34, 'Còn hàng'),
('4691', 'M', 3, 75, 'Còn hàng'),
('4392', 'S', 5, 85, 'Còn hàng'),
('3352', 'S', 3, 95, 'Còn hàng'),
('4529', 'XL', 2, 6, 'Còn hàng'),
('3352', 'XL', 3, 97, 'Còn hàng'),
('4392', 'S', 6, 93, 'Còn hàng'),
('3352', 'L', 2, 54, 'Còn hàng'),
('4691', 'M', 4, 71, 'Còn hàng'),
('4691', 'XL', 4, 34, 'Còn hàng'),
('3352', 'L', 3, 17, 'Còn hàng'),
('4392', 'XS', 5, 2, 'Còn hàng'),
('4529', 'M', 1, 13, 'Còn hàng'),
('4392', 'XS', 4, 42, 'Còn hàng'),
('4529', 'XS', 1, 42, 'Còn hàng'),
('3352', 'M', 3, 64, 'Còn hàng'),
('4392', 'L', 5, 89, 'Còn hàng'),
('4691', 'S', 4, 8, 'Còn hàng'),
('4529', 'S', 2, 49, 'Còn hàng'),
('4691', 'S', 3, 76, 'Còn hàng'),
('4691', 'XS', 4, 75, 'Còn hàng'),
('4529', 'XS', 3, 59, 'Còn hàng'),
('4392', 'XL', 5, 24, 'Còn hàng'),
('3352', 'XL', 2, 10, 'Còn hàng'),
('4392', 'M', 4, 95, 'Còn hàng'),
('4691', 'L', 3, 10, 'Còn hàng');

--
-- 12 Inserting data into table shoppingcart
--
INSERT INTO clothingstore.shoppingcart(ShoppingCartID, TotalProduct, CustomerID) VALUES
(1, 0, '00001'),
(2, 0, '00002'),
(3, 0, '00003'),
(4, 0, '00004'),
(5, 0, '00005'),
(6, 0, '00006'),
(7, 0, '00007'),
(8, 0, '00008'),
(9, 0, '00009'),
(10, 0, '00010'),
(11, 0, '00011'),
(12, 0, '00012'),
(13, 0, '00013'),
(14, 0, '00014'),
(15, 0, '00015'),
(16, 0, '00016'),
(17, 0, '00017'),
(18, 0, '00018'),
(19, 0, '00019'),
(20, 0, '00020');

--
-- 13 Inserting data into table customervouchers
--
INSERT INTO clothingstore.customervouchers(CustomerID, VoucherID, ReceiveDate, Status) VALUES
('00009', 2, '2023-05-21 03:47:26', 'A'),
('00001', 2, '2023-04-21 05:13:14', 'A'),
('00004', 5, '2023-04-10 09:27:22', 'A'),
('00001', 1, '2023-04-29 20:01:21', 'A'),
('00003', 4, '2023-03-05 22:22:07', 'A'),
('00012', 3, '2023-07-18 03:35:45', 'A'),
('00011', 3, '2023-07-10 08:50:16', 'A'),
('00010', 3, '2023-06-28 06:54:22', 'A'),
('00005', 4, '2023-01-01 00:08:53', 'A'),
('00014', 1, '2023-01-01 00:04:54', 'A'),
('00002', 1, '2023-07-09 03:14:24', 'A'),
('00013', 1, '2023-03-23 08:38:06', 'A'),
('00006', 1, '2023-02-17 02:33:14', 'A'),
('00008', 2, '2023-01-01 00:00:06', 'A'),
('00007', 5, '2023-03-28 12:54:13', 'A');

--
-- 14 Inserting data into table loyaltypointtransaction
--
INSERT INTO loyaltypointtransaction(TransactionID, TypeOfTransaction, CustomerID, OrderID, TransactionDate,RedeemedAmount) VALUES
(5133934, 0, '00011', '76598eb0-2', '1970-01-01 02:13:43',12);
--
-- 15 Inserting data into table OrderDetails
--
INSERT INTO clothingstore.orderdetails(OrderID,ProductNum, ProductID, ProductSizeID,ProductColorID, OrderQuantity, ProductCost, ProductStatus) VALUES
('5ada22d3-3',1, '3352', 'XL', 3,1, 110000, 0),
('76598eb0-2',1,'4529', 'XL', 1,1, 100000, 0),
('60e226cb-6', 1,'3352', 'M', 3,5, 130000, 0),
('76598eb0-2',2, '3352', 'M', 3,5, 120000, 0),
('60e226cb-6',2, '4392', 'XS', 5,5, 100000, 0),
('11fbda18-5',1, '4529', 'M', 1,3, 130000, 0),
('6d81a322-6',1, '3352', 'XL', 2,2, 130000, 0),
('5e6695e2-5',1, '4691', 'S', 4,6, 110000, 0),
('60e226cb-6',3, '4529', 'XS', 1,7, 130000, 0),
('6d81a322-6',2, '4392', 'XS', 4,8, 130000, 0),
('6207a9a7-3',1, '4392', 'L', 5,9, 110000, 0),
('6d81a322-6',3, '4691', 'M', 3,1, 110000, 0),
('697be7ba-1',1, '4529', 'S', 2,1, 110000, 0),
('5ada22d3-3',2, '4529', 'M', 1,1, 120000, 0),
('76598eb0-2',3, '4392', 'XL',4,1, 120000, 0),
('11fbda18-5',2, '4691', 'S', 3,1, 100000, 0),
('60e226cb-6',4, '4691', 'L', 4,1, 100000, 0),
('6207a9a7-3',2, '4691', 'L', 4,1, 130000, 0),
('11fbda18-5',3, '3352', 'L', 4,1, 110000, 0),
('11fbda18-5',4, '4392', 'XL', 4,1, 110000, 0);

--
-- 16 Inserting data into table ProductDiscount
--
INSERT INTO clothingstore.productdiscount(ProductDiscountID, ProductID, CreatedDate, ActiveDate, ExpirationDate, DiscountValue, DiscountDescription) VALUES
('ID001', '3352', '2023-02-27 17:20:08', '2023-03-02 00:25:57.688707', '2023-03-05 14:00:16.683067', 26, 'Ducimus molestiae debitis corrupti at.'),
('ID002', '3352', '2023-01-01 00:11:32', '2023-01-03 12:25:39.928008', '2023-01-07 05:56:53.039795', 17, 'Magni eos rem dolor minus.'),
('ID003', '4529', '2023-01-03 23:53:34', '2023-01-10 01:11:13.977318', '2023-01-13 23:36:34.857792', 30, 'Tempora voluptatibus quibusdam dolor incidunt.'),
('ID004', '4529', '2023-07-10 11:15:12', '2023-07-13 12:09:28.948588', '2023-07-20 00:26:01.054765', 47, 'Esse omnis asperiores rerum. Autem quis modi expedita unde. Quis ut.'),
('ID005', '4392', '2023-01-01 02:03:38', '2023-01-02 17:16:47.845066', '2023-01-09 14:03:05.120414', 49, 'Obcaecati excepturi totam perferendis. Nostrum vel. Aut et. Mollitia eum!');
--
-- 17 Inserting data into table Return
--
INSERT INTO clothingstore.return(CustomerID, OrderID, ReturnDate, RefundDate, CustomerBankName, CustomerBankAccount, TotalRefund, RefundStatus, ReturnStatus) VALUES
('00001', '5e6695e2-5', '2023-04-02 17:38:56', '2023-04-04 01:54:21.358949', 'ACB', '4844852147205419', 0, 'Không thành công', 'Hoàn thành');

--
-- 18 Inserting data into table RewardPoint
--
INSERT INTO clothingstore.rewardpoint(CustomerID, CurrentPoint, UsedPoint, ExpirationDate, ExpiredAmount, TotalSpend, UpdateDate) VALUES
('00010', 98, 0, '2023-07-09', 0, 0, '2023-01-01 02:09:19'),
('00018', 64, 0, '2023-02-08', 0, 0, '2023-05-29 07:16:58'),
('00002', 51, 0, '2023-05-20', 0, 0, '2023-06-24 02:52:00'),
('00001', 2, 0, '2023-02-03', 0, 0, '2023-01-14 01:20:47'),
('00019', 92, 0, '2023-02-19', 0, 0, '2023-06-28 13:04:30'),
('00013', 74, 0, '2023-04-17', 0, 0, '2023-01-01 00:01:40'),
('00011', 73, 0, '2023-06-21', 0, 0, '2023-06-02 05:14:20'),
('00003', 89, 0, '2023-05-28', 0, 0, '2023-01-01 00:00:05'),
('00007', 27, 0, '2023-03-17', 0, 0, '2023-03-27 16:09:24'),
('00014', 70, 0, '2023-06-11', 0, 0, '2023-01-26 05:43:49');

--
-- 19 Inserting data into table ShoppingCartDetails
--
INSERT INTO clothingstore.shoppingcartdetails(ShoppingCartID,ProductNum, ProductID, ProductSizeID, ProductColorID, ProductCost, ProductQuantity) VALUES
(7,1, '4529', 'S', 1, 120000, 6),
(6,1, '4691', 'S', 5, 110000, 2),
(4,1, '4529', 'S', 1, 120000, 2),
(6,2, '4529', 'S', 1, 120000, 7),
(4,2, '4392', 'L', 4, 110000, 1),
(5,1, '4691', 'S', 5, 120000, 9),
(3,1, '4529', 'S', 1, 130000, 1),
(1,1, '3352', 'XS', 2, 110000, 2),
(4,3, '4691', 'S', 5, 110000, 3),
(3,2, '4392', 'L', 4, 110000, 1),
(2,1, '4392', 'L', 4, 120000, 3),
(3,3, '3352', 'XS', 2, 100000, 9),
(8,1, '4691', 'S', 5, 100000, 6),
(7,2, '4691', 'S', 5, 120000, 9),
(6,3, '4392', 'L', 4, 100000, 1),
(5,2, '3352', 'XS', 2, 120000, 4),
(4,4, '3352', 'XS', 2, 120000, 10),
(2,2, '3352', 'XS', 2, 130000, 2),
(5,3, '4529', 'S', 1, 100000, 8),
(5,4, '4392', 'L', 4, 130000, 5);

--
-- 20 Inserting data into table vouchersfortier
--
INSERT INTO vouchersfortier(VoucherID, TierLevel) VALUES
(4, 1),
(3, 2),
(1, 1),
(4, 3),
(2, 2);





-- ------------------------PROCEDURE: Để chỉnh lại dữ liệu 
-- -------------------1. CHECK_AND_UPDATE_PRICE_ORDERDETAILS(): Cập nhật giá sản phẩm trong OrderDetails và ShoppingcartDetails-----------------------------------------
DELIMITER $$
CREATE PROCEDURE Clothingstore.UPDATE_PRICE_ORDERDETAILS_ShoppingCartDetails()
BEGIN 
	DECLARE done INT default FALSE;
    DECLARE product_id varchar(20);	
    DECLARE product_price float;
    DECLARE cursor_product
    cursor for SELECT productid, productprice FROM clothingstore.Product;
    
    DECLARE 
		CONTINUE HANDLER FOR NOT FOUND
    SET done =TRUE;
        
	OPEN cursor_product;
    
    product_loop: LOOP
		FETCH cursor_product INTO product_id,product_price;
        
		UPDATE clothingstore.ORDERDETAILS
		SET PRODUCTCOST = product_price
		WHERE productid= product_id;
        
        UPDATE clothingstore.ShoppingCartDetails
		SET PRODUCTCOST = product_price
		WHERE productid= product_id;
		
		IF done THEN 
			LEAVE product_loop;
		END IF;
    
	END LOOP product_loop;
END $$
DELIMITER ;

-- DROP PROCEDURE Clothingstore.UPDATE_PRICE_ORDERDETAILS_ShoppingCartDetails;

call Clothingstore.UPDATE_PRICE_ORDERDETAILS_ShoppingCartDetails();

-- ----------------------------------2.CHECK_AND_UPDATE_TOTAL_COST: Cập nhật tổng tiền sản phẩm của bảng ORDER-----------------------------------------
DELIMITER $$
CREATE PROCEDURE Clothingstore.CHECK_AND_UPDATE_TOTAL_COST()
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

-- DROP PROCEDURE Clothingstore.CHECK_AND_UPDATE_TOTAL_COST;

call Clothingstore.CHECK_AND_UPDATE_TOTAL_COST();

-- --------------------------------3. UPDATE TOTAL PRODUCT ORDER: Cập nhật tổng số sản phẩm của bảng ORDER -------------------------------------
DELIMITER $$
CREATE PROCEDURE Clothingstore.UPDATE_TOTAL_PRODUCT_ORDER()
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

-- DROP PROCEDURE Clothingstore.UPDATE_TOTAL_PRODUCT_ORDER;

CALL Clothingstore.UPDATE_TOTAL_PRODUCT_ORDER();

-- -------------------4. PROCEDURE UPDATE TOTAL PRODUCT SHOPPING CART: Cập nhật tổng số sản phẩm trong giỏ hàng của bảng SHOPPINGCART-------------------------------
DELIMITER $$
CREATE PROCEDURE Clothingstore.CHECK_UPDATE_TOTAL_PRODUCT_SHOPPINGCART()
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
CALL Clothingstore.CHECK_UPDATE_TOTAL_PRODUCT_SHOPPINGCART();


-- -------------------5. CHECK_UPDATE_PRODUCT_STATUS: Cập nhật tình trạng sản phẩm của bảng PRODUCTVARIANT-------------------------
DELIMITER $$
CREATE PROCEDURE Clothingstore.CHECK_UPDATE_PRODUCT_STATUS_PRODUCTVARIANT()
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

-- DROP PROCEDURE Clothingstore.CHECK_UPDATE_PRODUCT_STATUS_PRODUCTVARIANT;
call Clothingstore.CHECK_UPDATE_PRODUCT_STATUS_PRODUCTVARIANT();


-- ---------------06. UPDATE TOTAL NUMBER OF PRODUCT SOLD
DELIMITER $$
CREATE PROCEDURE Clothingstore.UPDATE_TOTAL_PRODUCT_SOLD_PRODUCT()
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

-- DROP PROCEDURE Clothingstore.UPDATE_TOTAL_PRODUCT_SOLD_PRODUCT;
CALL Clothingstore.UPDATE_TOTAL_PRODUCT_SOLD_PRODUCT();



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
SELECT * FROM CLOTHINGSTORE.SHOPPINGCARTDETAILS ORDER BY SHOPPINGCARTID;
SELECT * FROM CLOTHINGSTORE.SIZE;

SELECT * FROM CLOTHINGSTORE.VOUCHERS;
SELECT * FROM CLOTHINGSTORE.CUSTOMERVOUCHERS;
SELECT * FROM CLOTHINGSTORE.VOUCHERSFORTIER;
SELECT * FROM CLOTHINGSTORE.TIEREDLOYALTY;
SELECT * FROM CLOTHINGSTORE.LOYALTYPOINTTRANSACTION;
SELECT * FROM CLOTHINGSTORE.PRODUCTDISCOUNT;













