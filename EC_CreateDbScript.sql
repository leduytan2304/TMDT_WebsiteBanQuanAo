SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ClothingStore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ClothingStore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ClothingStore` DEFAULT CHARACTER SET utf8 ;
USE `ClothingStore` ;
-- -----------------------------------------------------
-- Table `ClothingStore`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`Customer` (
  `CustomerID` VARCHAR(10) NOT NULL,
  `CustomerFirstName` NVARCHAR(20) NULL,
  `CustomerLastName` NVARCHAR(20) NULL,
  `CustomerAddress` VARCHAR(100) NULL,
  `CustomerTel` VARCHAR(12) NULL,
  `CustomerDOB` DATE NULL,
  `CustomerGender` NVARCHAR(10) NULL,
  `CustomerEmail` VARCHAR(150) NULL,
  `CustomerPW` VARCHAR(45) NULL,
  `CustomerUsername` VARCHAR(45) NULL,
  PRIMARY KEY (`CustomerID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`PaymentMethod`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`PaymentMethod` (
  `PaymentMethodID` INT NOT NULL,
  `PaymentMethodName` VARCHAR(45) NULL,
  `PaymentMethodDetails` VARCHAR(45) NULL,
  PRIMARY KEY (`PaymentMethodID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`Order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`Order` (
  `OrderID` VARCHAR(10) NOT NULL,
  `OrderDate` DATETIME NOT NULL,
  `CustomerID` VARCHAR(10) NOT NULL,
  `TotalProduct` INT NOT NULL,
  `TotalCost` FLOAT NOT NULL,
  `OrderStatus` VARCHAR(20) NULL,
  `OrderAddress` NVARCHAR(100) NOT NULL,
  `OrderReceiverName` NVARCHAR(45) NOT NULL,
  `OrderReceiverPhoneNumber` VARCHAR(12) NULL,
  `OrderShippingDate` VARCHAR(45) NULL,
  `PaymentMethodID` INT NOT NULL,
  `PaymentStatus` TINYINT NULL,
  `CustomerPaymentDetails` VARCHAR(45) NULL,
  `OrderFinishedDate` DATETIME NULL,
  PRIMARY KEY (`OrderID`),
  INDEX `fk_Order_Customer1_idx` (`CustomerID` ASC) VISIBLE,
  INDEX `fk_Order_PaymentMethod1_idx` (`PaymentMethodID` ASC) VISIBLE,
  CONSTRAINT `fk_Order_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `ClothingStore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_PaymentMethod1`
    FOREIGN KEY (`PaymentMethodID`)
    REFERENCES `ClothingStore`.`PaymentMethod` (`PaymentMethodID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`ProductCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`ProductCategory` (
  `CategoryID` VARCHAR(20) NOT NULL,
  `ProducCategoryName` NVARCHAR(45) NULL,
  `ParentCategoryID` VARCHAR(20) NULL,
  `Gender` NVARCHAR(4) NULL,
  PRIMARY KEY (`CategoryID`),
  INDEX `fk_ProductCategory_ProductCategory1_idx` (`ParentCategoryID` ASC) VISIBLE,
  CONSTRAINT `fk_ProductCategory_ProductCategory1`
    FOREIGN KEY (`ParentCategoryID`)
    REFERENCES `ClothingStore`.`ProductCategory` (`CategoryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`ProductMaterial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`ProductMaterial` (
  `ProductMaterialID` INT NOT NULL,
  `ProductMaterialName` VARCHAR(45) NULL,
  PRIMARY KEY (`ProductMaterialID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`Product` (
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductName` NVARCHAR(100) NULL,
  `ProductQuantity` INT NULL,
  `ProductDescription` NVARCHAR(150) NULL,
  `CategoryID` VARCHAR(20) NOT NULL,
  `ProductPrice` FLOAT NULL,
  `ImageFolderPath` VARCHAR(45) NULL,
  `ProductMaterialID` INT NOT NULL,
  PRIMARY KEY (`ProductID`),
  INDEX `fk_Product_ProductType1_idx` (`CategoryID` ASC) VISIBLE,
  INDEX `fk_Product_ProductMaterial1_idx` (`ProductMaterialID` ASC) VISIBLE,
  CONSTRAINT `fk_Product_ProductType1`
    FOREIGN KEY (`CategoryID`)
    REFERENCES `ClothingStore`.`ProductCategory` (`CategoryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_ProductMaterial1`
    FOREIGN KEY (`ProductMaterialID`)
    REFERENCES `ClothingStore`.`ProductMaterial` (`ProductMaterialID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`Color`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`Color` (
  `ColorID` VARCHAR(20) NOT NULL,
  `ColorName` NVARCHAR(30) NULL,
  PRIMARY KEY (`ColorID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`Size`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`Size` (
  `ProductSizeID` VARCHAR(20) NOT NULL,
  `ProductSizeName` NVARCHAR(45) NOT NULL,
  PRIMARY KEY (`ProductSizeID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`ProductVariant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`ProductVariant` (
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductColorID` VARCHAR(20) NOT NULL,
  `Quantity` INT NULL,
  `Status` VARCHAR(45) NULL,
  `Size_ProductSizeID` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ProductID`, `ProductColorID`, `Size_ProductSizeID`),
  INDEX `fk_ProductVariant_Product1_idx` (`ProductID` ASC) VISIBLE,
  INDEX `fk_ProductVariant_Color1_idx` (`ProductColorID` ASC) VISIBLE,
  INDEX `fk_ProductVariant_Size1_idx` (`Size_ProductSizeID` ASC) VISIBLE,
  CONSTRAINT `fk_ProductVariant_Product1`
    FOREIGN KEY (`ProductID`)
    REFERENCES `ClothingStore`.`Product` (`ProductID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProductVariant_Color1`
    FOREIGN KEY (`ProductColorID`)
    REFERENCES `ClothingStore`.`Color` (`ColorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProductVariant_Size1`
    FOREIGN KEY (`Size_ProductSizeID`)
    REFERENCES `ClothingStore`.`Size` (`ProductSizeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`OrderDetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`OrderDetails` (
  `OrderID` VARCHAR(10) NOT NULL,
  `OrderQuantity` INT NULL,
  `ProductCost` FLOAT NULL,
  `ProductStatus` VARCHAR(45) NULL,
  `ProductSizeID` VARCHAR(20) NOT NULL,
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductColorID` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`OrderID`, `ProductSizeID`, `ProductID`, `ProductColorID`),
  INDEX `fk_Order_has_Product_Order1_idx` (`OrderID` ASC) VISIBLE,
  INDEX `fk_OrderDetails_ProductVariant1_idx` (`ProductSizeID` ASC, `ProductID` ASC, `ProductColorID` ASC) VISIBLE,
  CONSTRAINT `fk_Order_has_Product_Order1`
    FOREIGN KEY (`OrderID`)
    REFERENCES `ClothingStore`.`Order` (`OrderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OrderDetails_ProductVariant1`
    FOREIGN KEY (`ProductID` , `ProductColorID`)
    REFERENCES `ClothingStore`.`ProductVariant` (`ProductID` , `ProductColorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '	';


-- -----------------------------------------------------
-- Table `ClothingStore`.`ShoppingCart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`ShoppingCart` (
  `ShoppingCartID` INT NOT NULL,
  `TotalProduct` INT NULL,
  `CustomerID` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`ShoppingCartID`),
  INDEX `fk_ShoppingCart_Customer1_idx` (`CustomerID` ASC) VISIBLE,
  CONSTRAINT `fk_ShoppingCart_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `ClothingStore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`ShoppingCartDetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`ShoppingCartDetails` (
  `ShoppingCartID` INT NOT NULL,
  `ProductCost` FLOAT NULL,
  `ProductQuantity` INT NULL,
  `ProductSizeID` VARCHAR(20) NOT NULL,
  `ProductID` VARCHAR(20) NOT NULL,
  `ProductColorID` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ShoppingCartID`, `ProductSizeID`, `ProductID`, `ProductColorID`),
  INDEX `fk_ShoppingCart_has_Product_ShoppingCart1_idx` (`ShoppingCartID` ASC) VISIBLE,
  INDEX `fk_ShoppingCartDetails_ProductVariant1_idx` (`ProductSizeID` ASC, `ProductID` ASC, `ProductColorID` ASC) VISIBLE,
  CONSTRAINT `fk_ShoppingCart_has_Product_ShoppingCart1`
    FOREIGN KEY (`ShoppingCartID`)
    REFERENCES `ClothingStore`.`ShoppingCart` (`ShoppingCartID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ShoppingCartDetails_ProductVariant1`
    FOREIGN KEY (`ProductID` , `ProductColorID`)
    REFERENCES `ClothingStore`.`ProductVariant` (`ProductID` , `ProductColorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClothingStore`.`Return`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ClothingStore`.`Return` (
  `CustomerID` VARCHAR(10) NOT NULL,
  `OrderID` VARCHAR(10) NOT NULL,
  `ReturnDate` DATETIME NULL,
  `RefundDate` DATETIME NULL,
  `CustomerBankName` VARCHAR(45) NULL,
  `CustomerBankAccount` VARCHAR(45) NULL,
  `TotalRefund` FLOAT NULL,
  `RefundStatus` NVARCHAR(20) NULL,
  `ReturnState` VARCHAR(45) NULL,
  PRIMARY KEY (`CustomerID`, `OrderID`),
  INDEX `fk_Return_Order1_idx` (`OrderID` ASC) VISIBLE,
  CONSTRAINT `fk_ReturnDetails_Customer1`
    FOREIGN KEY (`CustomerID`)
    REFERENCES `ClothingStore`.`Customer` (`CustomerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Return_Order1`
    FOREIGN KEY (`OrderID`)
    REFERENCES `ClothingStore`.`Order` (`OrderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
