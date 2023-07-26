USE CLOTHINGSTORE;

-- --Hàm tạo Mã khách hàng
DELIMITER $$
CREATE FUNCTION CLOTHINGSTORE.GenerateCustomerID()
RETURNS VARCHAR(10) 
DETERMINISTIC
BEGIN
	DECLARE customer_id int;
    DECLARE customer_id_char varchar(10);
    SET customer_id = 1 + cast((select customerid from clothingstore.customer order by customerid desc limit 1) as unsigned); 
	SET customer_id_char = (SELECT CAST(customer_id as char(10)));
    
	return customer_id_char;
END $$
DELIMITER ;

-- SELECT LPAD(GenerateCustomerID(),5,0);
-- DROP FUNCTION CLOTHINGSTORE.GenerateCustomerID;

-- -------------STORED PROCEDURE ----------------------------
-- 1. Đăng ký --
DELIMITER $$
CREATE PROCEDURE Clothingstore.sp_Register(
    in Customer_FirstName varchar(20),
    in customer_Lastname varchar(20),
    in customer_Address varchar(100),
    in customer_Tel varchar(12),
    in customer_Dob date,
    in customer_Gender varchar(10),
    in customer_Email varchar(150),
    in customer_username varchar(45),
	in customer_pw varchar(45))

sp_register: BEGIN
	DECLARE customer_id varchar(10);
    DECLARE cur_date datetime;
    DEClARE shoppingcart_id int default 0;
    Set cur_date = now();
		
    IF EXISTS (SELECT * FROM CLOTHINGSTORE.CUSTOMER WHERE CustomerEmail = customer_Email) then
		SELECT 'Email đã tồn tại, vui lập nhập email khác' as Result;
		LEAVE sp_register;
    END IF;
    
    IF EXISTS (SELECT * FROM CLOTHINGSTORE.CUSTOMER WHERE CustomerUsername = customer_username) then
		SELECT 'Tên người dùng đã tồn tại, vui lập nhập tên khác' as Result;
		LEAVE sp_register;
    END IF;
    
	IF Customer_FirstName = '' or customer_Lastname = '' or 
		customer_Address = '' or customer_Tel = '' or 
		customer_Dob is NULL or customer_Gender = ''  or 
		customer_Email = ''  and customer_pw ='' or customer_username ='' 
	THEN
		SELECT 'Vui lòng nhập đủ thông tin' AS Result;
		LEAVE sp_register;
    END IF;
	
	SET customer_id = (SELECT LPAD(CLOTHINGSTORE.GenerateCustomerID(),5,0));
	INSERT INTO CLOTHINGSTORE.CUSTOMER (CustomerId,CustomerLastname,CustomerFirstname,CustomerAddress,CustomerTel,CustomerDob,
				CustomerGender,CustomerEmail,CustomerPw,CustomerUsername,TierLevel,RegistrationDate,UpdateLoyaltyTierdate)
	VALUES (customer_id,customer_Lastname,Customer_FirstName,customer_Address,customer_Tel,customer_Dob,
				customer_Gender,customer_Email,customer_pw,customer_username,'3',cur_date,cur_date);
	
	IF EXISTS (SELECT * FROM CLOTHINGSTORE.CUSTOMER WHERE CUSTOMERID = customer_id)
		THEN 
			SET shoppingcart_id = (SELECT MAX(SHOPPINGCARTID) FROM CLOTHINGSTORE.SHOPPINGCART) +1;
			INSERT INTO CLOTHINGSTORE.SHOPPINGCART(ShoppingCartID, Totalproduct, CustomerID) 
			VALUES (shoppingcart_id, 0, customer_id);
		
			SELECT 'Đăng ký thành công' AS Result;
	ELSE SELECT  'Đăng ký thât bại' as Result;
	END IF;
END $$
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_Register;
-- call sp_Register('Hoa','Nguyễn','227 Nguyễn Văn Cừ P4 Q5','12345667','2002-12-12','Nữ','123@gmail','HoaB','1234');


-- 2. Đăng nhập
DELIMITER $$ 
CREATE PROCEDURE clothingstore.sp_Login(
	in username varchar(45),
	in pw varchar(45))
BEGIN
	DECLARE result INT DEFAULT 0;
    
    -- Đăng nhập Thành công: Trả về 1, Thất bại: Trả về 0
    IF EXISTS (SELECT * FROM CLOTHINGSTORE.CUSTOMER WHERE customerUsername=username and customerPW=pw) THEN
		SET result=1;
	else set result=0;
    end if;
    SELECT result;
END $$ 
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_Login;
-- call Clothingstore.sp_Login('HoaB','1234');

-- 3.Xem thông tin cá nhân
DELIMITER $$ 
CREATE PROCEDURE Clothingstore.sp_Profile(
	in customer_id varchar(20))
BEGIN
	-- Xem thông tin Tên, Địa chỉ, SĐT, Ngày sinh, Giới tính, Email
	SELECT CustomerFirstName, CustomerLastname, CustomerAddress, CustomerTel, CustomerDOB,CustomerGender, CustomerEmail 
    FROM CLOTHINGSTORE.CUSTOMER 
    WHERE CUSTOMERID=customer_id;
END $$ 
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_Profile;
-- call Clothingstore.sp_Profile('00021');

-- 4.Chỉnh sửa thông tin cá nhân
DELIMITER $$ 
CREATE PROCEDURE Clothingstore.sp_Edit_Profile(
	in customer_id varchar(20), 
    in Customer_FirstName varchar(20),
    in customer_Lastname varchar(20),
    in customer_Address varchar(100),
    in customer_Tel varchar(12),
    in customer_Dob date,
    in customer_Gender varchar(10),
    in customer_Email varchar(150))

sp_edit_profile: BEGIN
	IF Customer_FirstName = '' or customer_Lastname = '' or 
		customer_Address = '' or customer_Tel = '' or 
		customer_Dob is NULL or customer_Gender = ''  or 
		customer_Email = ''
	THEN
		SELECT 'Vui lòng nhập đủ thông tin' AS Result;
		LEAVE sp_edit_profile;
	ELSEIF EXISTS (SELECT * FROM CLOTHINGSTORE.Customer WHERE customerEmail=customer_email and customerid!=customer_id)
    THEN
		SELECT 'Email đã tồn tại, vui lòng nhập email khác' As Result;
        LEAVE sp_edit_profile;
    END IF;
    
    -- Cập nhật các thông tin: Tên, Địa chỉ, SĐT, Ngày sinh, Giới tính, Email
	UPDATE CLOTHINGSTORE.CUSTOMER 
    SET 
		CustomerFirstName = Customer_FirstName ,
        CustomerLastname = customer_Lastname, 
        CustomerAddress=customer_Address, 
        CustomerTel = customer_Tel, 
        CustomerDOB = customer_Dob,
        CustomerGender= customer_Gender
	WHERE CUSTOMERID=customer_id;
		
    IF customer_Email != (SELECT customeremail from clothingstore.customer where customerid=customer_id) 
    THEN 
		UPDATE CLOTHINGSTORE.CUSTOMER 
		SET 
		CustomerEmail=customer_Email
		WHERE CUSTOMERID=customer_id;
    END IF;
	SELECT CustomerFirstName, CustomerLastname, CustomerAddress, CustomerTel, CustomerDOB,CustomerGender, CustomerEmail 
    FROM CLOTHINGSTORE.CUSTOMER 
    WHERE CUSTOMERID=customer_id;
END $$ 
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_Edit_Profile;
-- call Clothingstore.sp_Edit_Profile('00021','Hoa','Nguyễn','30 Nguyễn Văn Cừ P4 Q5',
									-- '1234567893','2002-05-20','Nam','123@gmail');

-- 5. Xem sản phẩm theo phân loại 
DELIMITER $$ 
CREATE PROCEDURE Clothingstore.sp_GetProductByCategory(
	in category_name varchar(45))
BEGIN
	DECLARE category_id varchar(20);
    SET category_id = (SELECT CATEGORYID FROM CLOTHINGSTORE.PRODUCTCATEGORY where productcategoryname=category_name);
	SELECT P.PRODUCTNAME, P.PRODUCTPRICE, P.IMAGEFOLDERPATH
    FROM CLOTHINGSTORE.PRODUCT P JOIN CLOTHINGSTORE.PRODUCTCATEGORY C ON P.CATEGORYID=C.CATEGORYID
    WHERE C.CATEGORYID=category_id or c.parentcategoryid=category_id  ;
END $$ 
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_GetProductByCategory;
-- CALL Clothingstore.sp_GetProductByCategory('Quần');

-- 6.Thêm vào giỏ hàng
DELIMITER $$ 
CREATE PROCEDURE Clothingstore.sp_AddProductIntoShoppingCart(
	in product_id varchar(20),
    in product_sizeid varchar(5),
    in product_colorid int,
    in product_quantity int,
    in product_cost float,
    in customer_id varchar(10))
sp_addProductShoppingCart: BEGIN
	DECLARE shoppingcart_id int default 0;
    DECLARE product_num int default 0;
    
    SET shoppingcart_id = (SELECT SHOPPINGCARTID FROM CLOTHINGSTORE.SHOPPINGCART WHERE customerid= customer_id);
    SET product_num = (SELECT productnum FROM CLOTHINGSTORE.shoppingcartdetails
					WHERE ProductID= product_id and ProductSizeID = product_sizeid and ProductColorID=product_colorid 
                    and shoppingcartid=shoppingcart_id);
         
    IF shoppingcart_id is null 
    THEN
		SELECT 'Giỏ hàng không tồn tại' as Result;
		LEAVE sp_addProductShoppingCart;
    ELSE 
        IF product_num is not null and EXISTS (SELECT * FROM CLOTHINGSTORE.shoppingcartdetails 
					WHERE productnum=product_num and shoppingcartid=shoppingcart_id)
		THEN 
			UPDATE CLOTHINGSTORE.SHOPPINGCARTDETAILS
			SET ProductQuantity = ProductQuantity + product_quantity
			WHERE productnum=product_num and shoppingcartid=shoppingcart_id;
			
			UPDATE CLOTHINGSTORE.SHOPPINGCART 
			SET TOTALPRODUCT = TOTALPRODUCT + product_quantity
			WHERE SHOPPINGCARTID = shoppingcart_id;
            
            LEAVE sp_addProductShoppingCart;
		ELSE 
			IF product_num is null and (SELECT TotalProduct FROM Clothingstore.Shoppingcart Where shoppingcartid=shoppingcart_id)=0 then 
				SET product_num=1;
                SELECT product_num;
			ELSE SET product_num = (SELECT 1+MAX(productnum) from CLOTHINGSTORE.ShoppingcartDetails WHERE ShoppingcartID=shoppingcart_id);
            END IF;
            
			INSERT INTO CLOTHINGSTORE.SHOPPINGCARTDETAILS(Shoppingcartid,Productnum,Productid,productsizeid,productcolorid,productcost,productquantity)
			VALUES (shoppingcart_id,product_num,product_id,product_sizeid,product_colorid,product_cost,product_quantity);
    
			UPDATE CLOTHINGSTORE.SHOPPINGCART 
			SET TOTALPRODUCT = TOTALPRODUCT + product_quantity
			WHERE SHOPPINGCARTID = shoppingcart_id;
            
            SELECT * FROM CLOTHINGSTORE.SHOPPINGCARTDETAILS WHERE productnum=productnum and shoppingcartid=shoppingcart_id;
        END IF;
	END IF;
END $$ 	
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_AddProductIntoShoppingCart
-- call Clothingstore.sp_AddProductIntoShoppingCart('4691','S',5,2,120000,'00021');
-- call Clothingstore.sp_AddProductIntoShoppingCart('4529','L',1,1,100000,'00021');
-- SELECT * FROM CLOTHINGSTORE.SHOPPINGCART WHERE CUSTOMERID='00021';
-- SELECT * FROM CLOTHINGSTORE.SHOPPINGCARTDETAILS WHERE SHOPPINGCARTID=21;


-- 7 Xóa sản phẩm trong giỏ 
DELIMITER $$ 
CREATE PROCEDURE Clothingstore.sp_RemoveProductShoppingCart(
	in product_id varchar(20),
    in product_sizeid varchar(5),
    in product_colorid int,
    in remove_quantity int,
    in customer_id varchar(10))
sp_removeProductShoppingCart: BEGIN
	DECLARE shoppingcart_id int default 0;    
    DECLARE product_quantity int default 0;
    DECLARE product_num int default 0;
    SET shoppingcart_id = (SELECT SHOPPINGCARTID FROM CLOTHINGSTORE.SHOPPINGCART WHERE customerid= customer_id);

    IF shoppingcart_id is null 
    THEN 
		SELECT 'Giỏ hàng không tồn tại' as Result;
		LEAVE sp_removeProductShoppingCart;
    ELSEIF (SELECT TOTALPRODUCT FROM clothingstore.shoppingcart WHERE ShoppingCartID= shoppingcart_id) = 0
    THEN 
		SELECT 'Giỏ hàng rỗng' as Result;
        LEAVE sp_removeProductShoppingCart;
	ELSE 
		SET product_num = (SELECT productnum FROM CLOTHINGSTORE.shoppingcartdetails
					WHERE ProductID= product_id and ProductSizeID = product_sizeid and ProductColorID=product_colorid
                    and shoppingcartid=shoppingcart_id);
		
		IF product_num is not null
		THEN 
			UPDATE CLOTHINGSTORE.SHOPPINGCARTDETAILS
			SET ProductQuantity = ProductQuantity - remove_quantity
			WHERE Productnum=product_num and shoppingcartid=shoppingcart_id;
			
			UPDATE CLOTHINGSTORE.SHOPPINGCART 
			SET TOTALPRODUCT = TOTALPRODUCT - remove_quantity
			WHERE SHOPPINGCARTID = shoppingcart_id;
            
            SET product_quantity = (SELECT ProductQuantity FROM clothingstore.shoppingcartdetails 
									WHERE shoppingcartid=shoppingcart_id and ProductNum=product_num);
			IF product_quantity = 0 
			THEN 
				DELETE FROM CLOTHINGSTORE.SHOPPINGCARTDETAILS
                WHERE productnum=product_num;
			END IF;
            LEAVE sp_removeProductShoppingCart;
		ELSE SELECT 'Sản phẩm không nằm trong giỏ hàng' as Result;
        END IF;
	END IF;
END $$ 	
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_RemoveProductShoppingCart;
-- call  Clothingstore.sp_RemoveProductShoppingCart('4529','L',1,1,'00021');
-- call  Clothingstore.sp_RemoveProductShoppingCart('4691','S',5,1,'00021');
-- SELECT * FROM CLOTHINGSTORE.SHOPPINGCART WHERE CUSTOMERID='00021';
-- SELECT * FROM CLOTHINGSTORE.SHOPPINGCARTDETAILS WHERE SHOPPINGCARTID=21;


-- 8. Xem chi tiết giỏ hàng
DELIMITER $$
CREATE PROCEDURE Clothingstore.sp_ShoppingCart(
	in customer_id varchar(10))
BEGIN
	DECLARE shoppingcart_id int default 0;
	SET shoppingcart_id = (SELECT SHOPPINGCARTID FROM CLOTHINGSTORE.SHOPPINGCART WHERE CUSTOMERID=customer_id);
    SELECT P.ProductName, SD.ProductSizeID, SD.ProductColorID,  SD.ProductQuantity ,SD.ProductCost
    FROM CLOTHINGSTORE.shoppingcartdetails SD JOIN CLOTHINGSTORE.PRODUCT P ON SD.PRODUCTID=P.PRODUCTID
    JOIN CLOTHINGSTORE.PRODUCTVARIANT PV ON PV.PRODUCTID=SD.PRODUCTID AND PV.PRODUCTSIZEID= SD.PRODUCTSIZEID AND PV.PRODUCTCOLORID=SD.PRODUCTCOLORID
    WHERE  SHOPPINGCARTID=shoppingcart_id AND  PV.Quantity > 0 ;
END $$
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_ShoppingCart
-- call  Clothingstore.sp_ShoppingCart('00021');

-- 9.Sản phẩm đã mua
DELIMITER $$
CREATE PROCEDURE Clothingstore.sp_Purchased_History(
	IN customer_id varchar(10) )
BEGIN
	SELECT P.PRODUCTNAME, OD.ProductColorID, OD.PRODUCTSIZEID,OD.ORDERQUANTITY, O.ORDERDATE
    FROM CLOTHINGSTORE.ORDERDETAILS OD JOIN CLOTHINGSTORE.PRODUCT P ON OD.PRODUCTID=P.PRODUCTID
    JOIN CLOTHINGSTORE.ORDER O ON OD.ORDERID=O.ORDERID
    WHERE O.CUSTOMERID=customer_id;
END $$
DELIMITER ;

-- DROP PROCEDURE Clothingstore.sp_Purchased_History;
-- CALL Clothingstore.sp_Purchased_History('00017');


