SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clothingstore
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `clothingstore` ;

-- -----------------------------------------------------
-- Schema clothingstore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clothingstore` DEFAULT CHARACTER SET utf8mb4 ;
USE `clothingstore` ;

-- -----------------------------------------------------
-- Table `clothingstore`.`TieredLoyalty`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`TieredLoyalty` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`TieredLoyalty` (
  `TierLevel` TINYINT NOT NULL,
  `TierName` VARCHAR(45) NOT NULL,
  `MinSpendRequired` INT NOT NULL,
  `MaintenanceFee` INT NOT NULL,
  `ShippingFee` TINYINT NOT NULL,
  PRIMARY KEY (`TierLevel`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`Customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`Customer` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`Customer` (
  `CustomerID` VARCHAR(10) NOT NULL,
  `CustomerFirstName` VARCHAR(20) NOT NULL,
  `CustomerLastName` VARCHAR(20) NOT NULL,
  `CustomerAddress` VARCHAR(100) NOT NULL,
  `CustomerTel` VARCHAR(12) NOT NULL,
  `CustomerDOB` DATE NOT NULL,
  `CustomerGender` VARCHAR(10) NOT NULL,
  `CustomerEmail` VARCHAR(50) NOT NULL,
  `CustomerPW` VARCHAR(45) NOT NULL,
  `CustomerUsername` VARCHAR(45) NOT NULL,
  `TierLevel` TINYINT NOT NULL,
  `RegistrationDate` DATETIME NOT NULL,
  `UpdateLoyaltyTierDate` DATETIME NOT NULL,
  PRIMARY KEY (`CustomerID`),
  INDEX `fk_Customer_LoyaltyTier1_idx` (`TierLevel` ASC) VISIBLE,
  UNIQUE INDEX `CustomerUsername_UNIQUE` (`CustomerUsername` ASC) VISIBLE,
  UNIQUE INDEX `CustomerEmail_UNIQUE` (`CustomerEmail` ASC) VISIBLE,
  CONSTRAINT `fk_Customer_LoyaltyTier1`
    FOREIGN KEY (`TierLevel`)
    REFERENCES `clothingstore`.`TieredLoyalty` (`TierLevel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`PaymentMethod`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`PaymentMethod` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`PaymentMethod` (
  `PaymentMethodID` INT NOT NULL,
  `PaymentMethodName` VARCHAR(45) NOT NULL,
  `PaymentMethodDetails` VARCHAR(45) NOT NULL,
  `BankName` VARCHAR(45) NULL,
  `BankAccount` VARCHAR(45) NULL,
  `AccountOwner` VARCHAR(45) NULL,
  PRIMARY KEY (`PaymentMethodID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`Vouchers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`Vouchers` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`Vouchers` (
  `VoucherID` TINYINT NOT NULL,
  `VoucherUnit` VARCHAR(10) NOT NULL,
  `VoucherValue` INT NOT NULL,
  `VoucherDescription` VARCHAR(100) NOT NULL,
  `ActiveDate` DATETIME NOT NULL,
  `ExpirationDate` DATETIME NOT NULL,
  `MaxDiscount` INT NOT NULL,
  `MinSpend` INT NOT NULL,
  `CreatedDate` DATETIME NOT NULL,
  PRIMARY KEY (`VoucherID`))
ENGINE = InnoDB
COMMENT = '	';


-- -----------------------------------------------------
-- Table `clothingstore`.`Order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`Order` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`Order` (
  `OrderID` VARCHAR(10) NOT NULL,
  `OrderDate` DATETIME NOT NULL,
  `CustomerID` VARCHAR(10) NOT NULL,
  `TotalProduct` INT NOT NULL,
  `TotalCost` FLOAT NOT NULL,
  `OrderStatus` VARCHAR(20) NULL,
  `OrderAddress` VARCHAR(100) NOT NULL,
  `OrderReceiverName` VARCHAR(45) NOT NULL,
  `OrderReceiverPhoneNumber` VARCHAR(12) NOT NULL,
  `OrderShippingDate` DATETIME NOT NULL,
  `PaymentMethodID` INT NOT NULL,
  `PaymentStatus` VARCHAR(20) NOT NULL,
  `CustomerPaymentDetails` VARCHAR(45) NOT NULL,
  `OrderFinishedDate` DATETIME NOT NULL,
  `TotalDiscount` FLOAT NOT NULL,
  `VoucherID` TINYINT NULL,
  PRIMARY KEY (`OrderID`),
  INDEX `fk_Order_Customer1_idx` (`CustomerID` ASC) VISIBLE,
  INDEX `fk_Order_PaymentMethod1_idx` (`PaymentMethodID` ASC) VISIBLE,
  INDEX `fk_Order_Vouchers1_idx` (`VoucherID` ASC) VISIBLE,
  CONSTRAINT `fk_Order_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `clothingstore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_PaymentMethod1`
    FOREIGN KEY (`PaymentMethodID`)
    REFERENCES `clothingstore`.`PaymentMethod` (`PaymentMethodID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_Vouchers1`
    FOREIGN KEY (`VoucherID`)
    REFERENCES `clothingstore`.`Vouchers` (`VoucherID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`ProductCategory`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`ProductCategory` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`ProductCategory` (
  `CategoryID` VARCHAR(20) NOT NULL,
  `ProductCategoryName` VARCHAR(45) NOT NULL,
  `ParentCategoryID` VARCHAR(20) NOT NULL,
  `Gender` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`CategoryID`),
  INDEX `fk_ProductCategory_ProductCategory1_idx` (`ParentCategoryID` ASC) VISIBLE,
  CONSTRAINT `fk_ProductCategory_ProductCategory1`
    FOREIGN KEY (`ParentCategoryID`)
    REFERENCES `clothingstore`.`ProductCategory` (`CategoryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`ProductMaterial`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`ProductMaterial` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`ProductMaterial` (
  `ProductMaterialID` INT NOT NULL,
  `ProductMaterialName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ProductMaterialID`),
  UNIQUE INDEX `ProductMaterialName_UNIQUE` (`ProductMaterialName` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`Product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`Product` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`Product` (
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductName` VARCHAR(100) NOT NULL,
  `ProductQuantity` INT NOT NULL,
  `ProductDescription` VARCHAR(150) NOT NULL,
  `CategoryID` VARCHAR(20) NOT NULL,
  `ProductPrice` FLOAT NOT NULL,
  `ImageFolderPath` VARCHAR(45) NOT NULL,
  `ProductMaterialID` INT NOT NULL,
  `PublishedDate` DATETIME NOT NULL,
  `NumberOfProductSold` INT NOT NULL DEFAULT 0,
  `UpdateDate` DATETIME NOT NULL,
  PRIMARY KEY (`ProductID`),
  INDEX `fk_Product_ProductType1_idx` (`CategoryID` ASC) VISIBLE,
  INDEX `fk_Product_ProductMaterial1_idx` (`ProductMaterialID` ASC) VISIBLE,
  UNIQUE INDEX `ProductName_UNIQUE` (`ProductName` ASC) VISIBLE,
  CONSTRAINT `fk_Product_ProductType1`
    FOREIGN KEY (`CategoryID`)
    REFERENCES `clothingstore`.`ProductCategory` (`CategoryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_ProductMaterial1`
    FOREIGN KEY (`ProductMaterialID`)
    REFERENCES `clothingstore`.`ProductMaterial` (`ProductMaterialID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`Color`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`Color` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`Color` (
  `ColorID` TINYINT NOT NULL,
  `ColorName` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`ColorID`),
  UNIQUE INDEX `ColorName_UNIQUE` (`ColorName` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`Size`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`Size` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`Size` (
  `ProductSizeID` VARCHAR(5) NOT NULL,
  `ProductSizeName` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`ProductSizeID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`ProductVariant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`ProductVariant` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`ProductVariant` (
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductSizeID` VARCHAR(5) NOT NULL,
  `ProductColorID` TINYINT NOT NULL,
  `Quantity` INT NOT NULL DEFAULT 0,
  `Status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ProductID`, `ProductSizeID`, `ProductColorID`),
  INDEX `fk_ProductVariant_Product1_idx` (`ProductID` ASC) VISIBLE,
  INDEX `fk_ProductVariant_Size1_idx` (`ProductSizeID` ASC) VISIBLE,
  INDEX `fk_ProductVariant_Color1_idx` (`ProductColorID` ASC) VISIBLE,
  CONSTRAINT `fk_ProductVariant_Product1`
    FOREIGN KEY (`ProductID`)
    REFERENCES `clothingstore`.`Product` (`ProductID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProductVariant_Size1`
    FOREIGN KEY (`ProductSizeID`)
    REFERENCES `clothingstore`.`Size` (`ProductSizeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProductVariant_Color1`
    FOREIGN KEY (`ProductColorID`)
    REFERENCES `clothingstore`.`Color` (`ColorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`OrderDetails`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`OrderDetails` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`OrderDetails` (
  `OrderID` VARCHAR(10) NOT NULL,
	`ProductNum` INT NOT NULL,
  `OrderQuantity` INT NOT NULL,
  `ProductCost` FLOAT NOT NULL,
  `ProductStatus` TINYINT NOT NULL,
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductSizeID` VARCHAR(5) NOT NULL,
  `ProductColorID` TINYINT NOT NULL,
 
  INDEX `fk_Order_has_Product_Order1_idx` (`OrderID` ASC) VISIBLE,
  INDEX `fk_OrderDetails_ProductVariant1_idx` (`ProductID` ASC, `ProductSizeID` ASC, `ProductColorID` ASC) VISIBLE,
  PRIMARY KEY (`OrderID`, `ProductNum`),
  CONSTRAINT `fk_Order_has_Product_Order1`
    FOREIGN KEY (`OrderID`)
    REFERENCES `clothingstore`.`Order` (`OrderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OrderDetails_ProductVariant1`
    FOREIGN KEY (`ProductID` , `ProductSizeID` , `ProductColorID`)
    REFERENCES `clothingstore`.`ProductVariant` (`ProductID` , `ProductSizeID` , `ProductColorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '	';


-- -----------------------------------------------------
-- Table `clothingstore`.`ShoppingCart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`ShoppingCart` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`ShoppingCart` (
  `ShoppingCartID` INT NOT NULL,
  `TotalProduct` INT NOT NULL DEFAULT 0,
  `CustomerID` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`ShoppingCartID`),
  INDEX `fk_ShoppingCart_Customer1_idx` (`CustomerID` ASC) VISIBLE,
	UNIQUE INDEX `CustomerID_UNIQUE` (`CustomerID` ASC) VISIBLE,
  CONSTRAINT `fk_ShoppingCart_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `clothingstore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`ShoppingCartDetails`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`ShoppingCartDetails` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`ShoppingCartDetails` (
  `ShoppingCartID` INT NOT NULL,
   `ProductNum` INT NOT NULL,
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductSizeID` VARCHAR(5) NOT NULL,
  `ProductColorID` TINYINT NOT NULL,
  `ProductCost` FLOAT NOT NULL,
  `ProductQuantity` INT NOT NULL,
 
  INDEX `fk_ShoppingCartDetails_ShoppingCart1_idx` (`ShoppingCartID` ASC) VISIBLE,
  INDEX `fk_ShoppingCartDetails_ProductVariant1_idx` (`ProductID` ASC, `ProductSizeID` ASC, `ProductColorID` ASC) VISIBLE,
  PRIMARY KEY (`ProductNum`, `ShoppingCartID`),
  CONSTRAINT `fk_ShoppingCartDetails_ShoppingCart1`
    FOREIGN KEY (`ShoppingCartID`)
    REFERENCES `clothingstore`.`ShoppingCart` (`ShoppingCartID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ShoppingCartDetails_ProductVariant1`
    FOREIGN KEY (`ProductID` , `ProductSizeID` , `ProductColorID`)
    REFERENCES `clothingstore`.`ProductVariant` (`ProductID` , `ProductSizeID` , `ProductColorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`Return`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`Return` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`Return` (
  `CustomerID` VARCHAR(10) NOT NULL,
  `OrderID` VARCHAR(10) NOT NULL,
  `ReturnDate` DATETIME NOT NULL,
  `RefundDate` DATETIME NULL,
  `CustomerBankName` VARCHAR(45) NOT NULL,
  `CustomerBankAccount` VARCHAR(45) NOT NULL,
  `TotalRefund` FLOAT NOT NULL,
  `RefundStatus` VARCHAR(20) NULL,
  `ReturnStatus` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`CustomerID`, `OrderID`),
  INDEX `fk_Return_Order1_idx` (`OrderID` ASC) VISIBLE,
  CONSTRAINT `fk_ReturnDetails_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `clothingstore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Return_Order1`
    FOREIGN KEY (`OrderID`)
    REFERENCES `clothingstore`.`Order` (`OrderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`LoyaltyPointTransaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`LoyaltyPointTransaction` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`LoyaltyPointTransaction` (
  `TransactionID` INT NOT NULL,
  `TypeOfTransaction` TINYINT NOT NULL,
  `CustomerID` VARCHAR(10) NOT NULL,
  `OrderID` VARCHAR(10) NULL,
  `TransactionDate` DATETIME NOT NULL,
  `RedeemedAmount` INT NOT NULL,
  PRIMARY KEY (`TransactionID`),
  INDEX `fk_LoyaltyPointTransaction_Customer1_idx` (`CustomerID` ASC) VISIBLE,
  INDEX `fk_LoyaltyPointTransaction_Order1_idx` (`OrderID` ASC) VISIBLE,
  CONSTRAINT `fk_LoyaltyPointTransaction_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `clothingstore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_LoyaltyPointTransaction_Order1`
    FOREIGN KEY (`OrderID`)
    REFERENCES `clothingstore`.`Order` (`OrderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`VouchersForTier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`VouchersForTier` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`VouchersForTier` (
  `VoucherID` TINYINT NOT NULL,
  `TierLevel` TINYINT NOT NULL,
  PRIMARY KEY (`VoucherID`, `TierLevel`),
  INDEX `fk_Vouchers_has_LoyaltyTier_LoyaltyTier1_idx` (`TierLevel` ASC) VISIBLE,
  INDEX `fk_Vouchers_has_LoyaltyTier_Vouchers1_idx` (`VoucherID` ASC) VISIBLE,
  CONSTRAINT `fk_Vouchers_has_LoyaltyTier_Vouchers1`
    FOREIGN KEY (`VoucherID`)
    REFERENCES `clothingstore`.`Vouchers` (`VoucherID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vouchers_has_LoyaltyTier_LoyaltyTier1`
    FOREIGN KEY (`TierLevel`)
    REFERENCES `clothingstore`.`TieredLoyalty` (`TierLevel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`RewardPoint`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`RewardPoint` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`RewardPoint` (
  `CustomerID` VARCHAR(10) NOT NULL,
  `CurrentPoint` INT NOT NULL,
  `UsedPoint` INT NOT NULL,
  `ExpirationDate` DATE NOT NULL,
  `ExpiredAmount` INT NOT NULL,
  `TotalSpend` FLOAT NOT NULL,
  `UpdateDate` DATETIME NOT NULL,
  PRIMARY KEY (`CustomerID`),
  INDEX `fk_RewardPoint_Customer1_idx` (`CustomerID` ASC) VISIBLE,
  CONSTRAINT `fk_RewardPoint_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `clothingstore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`ProductDiscount`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`ProductDiscount` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`ProductDiscount` (
  `ProductDiscountID` VARCHAR(10) NOT NULL,
  `CreatedDate` DATETIME NOT NULL,
  `ActiveDate` DATETIME NOT NULL,
  `ExpirationDate` DATETIME NOT NULL,
  `DiscountValue` INT NOT NULL,
  `ProductID` VARCHAR(20) NOT NULL,
  `DiscountDescription` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ProductDiscountID`, `ProductID`),
  INDEX `fk_ProductDiscount_Product1_idx` (`ProductID` ASC) VISIBLE,
  CONSTRAINT `fk_ProductDiscount_Product1`
    FOREIGN KEY (`ProductID`)
    REFERENCES `clothingstore`.`Product` (`ProductID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothingstore`.`CustomerVouchers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothingstore`.`CustomerVouchers` ;

CREATE TABLE IF NOT EXISTS `clothingstore`.`CustomerVouchers` (
  `CustomerID` VARCHAR(10) NOT NULL,
  `VoucherID` TINYINT NOT NULL,
  `ReceiveDate` DATETIME NOT NULL,
  `Status` CHAR(1) NOT NULL,
  PRIMARY KEY (`CustomerID`, `VoucherID`),
  INDEX `fk_Customer_has_Vouchers_Vouchers1_idx` (`VoucherID` ASC) VISIBLE,
  INDEX `fk_Customer_has_Vouchers_Customer1_idx` (`CustomerID` ASC) VISIBLE,
  CONSTRAINT `fk_Customer_has_Vouchers_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `clothingstore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Customer_has_Vouchers_Vouchers1`
    FOREIGN KEY (`VoucherID`)
    REFERENCES `clothingstore`.`Vouchers` (`VoucherID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
