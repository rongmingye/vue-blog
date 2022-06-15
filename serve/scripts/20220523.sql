
CREATE TABLE IF NOT EXISTS `b_article`(
  `id` INT UNSIGNED AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `desc` VARCHAR(40) NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  `articleType` VARCHAR(40) NOT NULL,
  `isHot` VARCHAR(40) NOT NULL,
  `author` VARCHAR(40) NOT NULL,
  `createTime` DATE,
  `tags` VARCHAR(40) NOT NULL,
  `readNum` VARCHAR(40) NOT NULL,
  PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `b_collection`(
  `id` INT UNSIGNED AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `desc` VARCHAR(40) NOT NULL,
  `link` VARCHAR(100) NOT NULL,
  `createTime` DATE,
  PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;