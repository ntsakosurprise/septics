
DROP DATABASE IF EXISTS jobbri;

CREATE DATABASE IF NOT EXISTS jobbri;

USE jobbri; 




CREATE TABLE IF NOT EXISTS jo_user(

  id INT AUTO_INCREMENT PRIMARY KEY,
  u_type ENUM('applicant','recruiter'),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(100),
  profile_url VARCHAR(255),
  join_date TIMESTAMP DEFAULT NOW()

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 


CREATE TABLE IF NOT EXISTS jo_address(


  address_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  state_abbr CHAR(5) NOT NULL,
  zip_code CHAR(7) NOT NULL,
  address_set BOOLEAN DEFAULT 0,

  FOREIGN KEY(user_id) REFERENCES jo_user(id)
  ON DELETE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS jo_user_join_log(


  log_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  log_message VARCHAR(255) DEFAULT 'New Jobbri user has been created',
  user_type VARCHAR(255),
  log_date TIMESTAMP DEFAULT NOW()


) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


/*CREATE TABLE IF NOT EXISTS jo_user_type(

  id INT AUTO_INCREMENT PRIMARY KEY,
  u_id INT,
  type_name VARCHAR(255),
  
  
  FOREIGN KEY(u_id) REFERENCES jo_user(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;*/

CREATE TABLE IF NOT EXISTS jo_account(

  id INT AUTO_INCREMENT PRIMARY KEY,
  account_name VARCHAR(100)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 



CREATE TABLE IF NOT EXISTS jo_user_account_join(

  id INT AUTO_INCREMENT PRIMARY KEY,
  u_id INT,
  account_id INT,
  account_email VARCHAR(255),
  
  FOREIGN KEY(u_id) REFERENCES jo_user(id),
  FOREIGN KEY(account_id) REFERENCES jo_account(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 




CREATE TABLE IF NOT EXISTS jo_login(

  id INT AUTO_INCREMENT PRIMARY KEY,
  u_id INT,
  password VARCHAR(100),
  username VARCHAR(255), 
  
  FOREIGN KEY(u_id) REFERENCES jo_user(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 



CREATE TABLE IF NOT EXISTS jo_ext_login(

  id INT AUTO_INCREMENT PRIMARY KEY,
  providerKey VARCHAR(255) NOT NULL,
  providerType enum('facebook','twitter','instagram','google'),
  u_id INT,

  FOREIGN KEY(u_id) REFERENCES jo_user(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 




CREATE TABLE IF NOT EXISTS job_category(

  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10),
  name VARCHAR(100),
  description VARCHAR(255)
  

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 



/*CREATE TABLE IF NOT EXISTS job_platform(

  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10),
  name VARCHAR(100),
  description VARCHAR(255)
  

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;*/

CREATE TABLE IF NOT EXISTS organization(

  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10),
  name VARCHAR(100),
  description VARCHAR(255)
  

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

CREATE TABLE IF NOT EXISTS job(

  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10),
  name VARCHAR(100),
  description VARCHAR(255),
  date_published TIMESTAMP,
  start_date DATETIME,
  num_of_openings INT,
  job_category_id INT,
  job_platform_id INT,
  organization_id INt,
  
  FOREIGN KEY (job_category_id) REFERENCES job_category(id),
  FOREIGN KEY (job_position_id) REFERENCES job_position(id),
  FOREIGN KEY (job_platform_id) REFERENCES job_platform(id),
  FOREIGN KEY (organization_id) REFERENCES organization(id)
  
 

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 


CREATE TABLE IF NOT EXISTS jo_job_bookmark(

  id INT AUTO_INCREMENT PRIMARY KEY,
  u_id INT,
  job_id INT,
  job_url VARCHAR(255),
  date_bookmarked TIMESTAMP,
  
  FOREIGN KEY(u_id) REFERENCES jo_user(id), 
  FOREIGN KEY(job_id) REFERENCES job(id) 
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

CREATE TABLE IF NOT EXISTS jo_search_history(

  id INT AUTO_INCREMENT PRIMARY KEY,
  u_id INT,
  job_id INT,
  job_url VARCHAR(255),
  date_searched TIMESTAMP,
  
  FOREIGN KEY(u_id) REFERENCES jo_user(id), 
  FOREIGN KEY(job_id) REFERENCES job(id) 
  
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS jo_job_alerts_subscription(

  id INT AUTO_INCREMENT PRIMARY KEY,
  u_id INT,
  job_id INT,
  job_url VARCHAR(255),
  frequency ENUM('Daily','Weekly','Bi-monthly','Monthly'),
  start_date DATETIME,
  end_date DATETIME,
  
  FOREIGN KEY(u_id) REFERENCES jo_user(id), 
  FOREIGN KEY(job_id) REFERENCES job(id) 
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 






CREATE TABLE  jo_blog_user(

  id   INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL, 
  username   VARCHAR(255) NOT NULL,
  email   VARCHAR(255) NOT NULL, 
  role  enum('Author','Admin') DEFAULT NULL, 
  password   VARCHAR(255) NOT NULL, 
  created_at  timestamp NULL DEFAULT Now(), 
  updated_at  timestamp NULL DEFAULT NULL 
 
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE  jo_blog_post( 
 
 id  INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,  
 user_id   INT(11) DEFAULT NULL,  
 title   VARCHAR(255) NOT NULL,  
 slug   VARCHAR(255) NOT NULL UNIQUE,  
 views   INT(11) NOT NULL DEFAULT '0',  
 image   VARCHAR(255) NOT NULL,  
 body  text NOT NULL,  
 published  INT NOT NULL,  
 created_at  TIMESTAMP DEFAULT NOW(),  
 updated_at  timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
 
  FOREIGN KEY(user_id) REFERENCES  jo_blog_user(id) ON DELETE NO ACTION ON UPDATE NO ACTION 
  
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE  jo_blog_topic( 
 
 id  INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,  
 name  VARCHAR(255) NOT NULL,  
 slug   VARCHAR(255) NOT NULL UNIQUE
   
  
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE  jo_blog_post_topic( 
 
 id  INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,  
 post_id  INT,
 post_topic_id INT,
   
  FOREIGN KEY(post_id) REFERENCES  jo_blog_post(id),
  FOREIGN KEY(post_topic_id) REFERENCES  jo_blog_topic(id)
   
   
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO  jo_blog_user ( id ,  username ,  email ,  role ,  password ,  created_at ,  updated_at ) VALUES (1, 'Awa', 'info@codewithawa.com', 'Admin', 'mypassword', '2018-01-08 12:52:58', '2018-01-08 12:52:58');


INSERT INTO  jo_blog_post ( id ,  user_id ,  title ,  slug ,  views ,  image ,  body ,  published ,  created_at ,  updated_at ) VALUES (1, 1, '5 Habits that can improve your life', '5-habits-that-can-improve-your-life', 0, 'banner.jpg', 'Read every day', 1, '2018-02-03 07:58:02', '2018-02-01 19:14:31'), (2, 1, 'Second post on LifeBlog', 'second-post-on-lifeblog', 0, 'banner.jpg', 'This is the body of the second post on this site', 0, '2018-02-02 11:40:14', '2018-02-01 13:04:36'); 


INSERT INTO  jo_blog_topic ( id ,  name ,  slug ) VALUES (1, 'Inspiration', 'inspiration'), (2, 'Motivation', 'motivation'), (3, 'Diary', 'diary'); 


INSERT INTO  jo_blog_post_topic  ( id ,  post_id ,  post_topic_id ) VALUES (1, 1, 1), (2, 2, 2);


DROP TRIGGER IF EXISTS user_join;

DELIMITER //

CREATE TRIGGER user_join AFTER INSERT ON jo_user

  FOR EACH ROW

  BEGIN

    INSERT INTO jo_user_join_log VALUES(NULL,'New jobbri User',NEW.u_type,NOW());

  END //

DELIMITER ;

  


INSERT INTO jo_user VALUES(


   NULL,
  'applicant',
  'Surprise',
  'Mashele',
  'mashelesurprise@gmail.com',
  '072-286-8851',
  '/img/user.jpeg',
   NOW()




);







INSERT INTO jo_address VALUES(


  NULL,
  1,
  'Pretoria',
  'Gauteng',
  'PTA',
  '0152',
  TRUE



);


INSERT INTO jo_account VALUES(


   NULL,
  'applicant'

);


INSERT INTO jo_user_account_join VALUES(

  NULL,
  '1',
  '1',
  NULL
);


INSERT INTO jo_login VALUES(


   NULL,
  '1',
  '12054s5f05sf',
  'mashelesurprise@gmail.com'
  

);












