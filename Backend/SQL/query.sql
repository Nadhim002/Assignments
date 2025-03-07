create database sprint_challenge_sql ;
use sprint_challenge_sql ;

-- Write CREATE TABLE statements for tables organization, channel, user, and message. 

CREATE TABLE if not exists organizations (
    organization_id INT PRIMARY KEY AUTO_INCREMENT, 
    organization_name VARCHAR(50) not NULL 
);

CREATE TABLE if not exists channels (
    channel_id INT PRIMARY KEY AUTO_INCREMENT, 
    channel_name VARCHAR(50) not NULL,
    organization_id INT  ,
    FOREIGN KEY (organization_id) REFERENCES organizations(organization_id)  ON DELETE CASCADE
);

CREATE TABLE if not exists users (
    user_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_name VARCHAR(50) not NULL 
);
                        
CREATE TABLE if not exists message (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    post_time DATETIME DEFAULT CURRENT_TIMESTAMP ,
    content VARCHAR(200) not NULL,
    user_id_posted INT,
    channel_id_posted INT,
    FOREIGN KEY (user_id_posted) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (channel_id_posted) REFERENCES channels(channel_id)  ON DELETE CASCADE
);

CREATE TABLE if not exists channel_subscribed_by_users (
    subscription_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    channel_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE, 
    FOREIGN KEY (channel_id) REFERENCES channels(channel_id)  ON DELETE CASCADE
);

-- One organization, Lambda School

insert into organizations (organization_name) values("Lambda School"); 

-- Three users, Alice, Bob, and Chris

insert into users (user_name) values("Alice") , ("Bob") ,("Chris")  ; 

-- Two channels, #general and #random

insert into channels ( channel_name , organization_id ) values("#general" , 1 ) , ("#random" , 1 ) ; 

-- Alice should be in #general and #random.
-- Bob should be in #general.
-- Chris should be in #random.

insert into channel_subscribed_by_users( user_id , channel_id ) 
values ( ( select user_id from users where user_name = "Alice"   ) , (  select channel_id from channels where channel_name = "#random"  ) ) ,
( ( select user_id from users where user_name = "Bob"   ) , (  select channel_id from channels where channel_name = "#general"  ) ) ,
( ( select user_id from users where user_name = "Chris"   ) , (  select channel_id from channels where channel_name = "#random"  ) )  ,
( ( select user_id from users where user_name = "Alice"   ) , (  select channel_id from channels where channel_name = "#general"  ) ) ;

-- 10 messages (at least one per user, and at least one per channel).

insert into  message ( content ,  user_id_posted ,  channel_id_posted  ) values 
( "Message One" , ( ( select user_id from users where user_name = "Alice"   ) ) , (  select channel_id from channels where channel_name = "#general"  )  )  , 
( "Message Two" , ( ( select user_id from users where user_name = "Alice"   ) ) , (  select channel_id from channels where channel_name = "#random"  )  ) ,
( "Message Three" , ( ( select user_id from users where user_name = "Bob"   ) ) , (  select channel_id from channels where channel_name = "#general"  )  )  ,
( "Message Four" , ( ( select user_id from users where user_name = "Chris"   ) ) , (  select channel_id from channels where channel_name = "#random"  )  )  ,
( "Message Five" , ( ( select user_id from users where user_name = "Bob"   ) ) , (  select channel_id from channels where channel_name = "#general"  )  ) ,
( "Message Six" , ( ( select user_id from users where user_name = "Chris"   ) ) , (  select channel_id from channels where channel_name = "#random"  )  ) ,
( "Message Seven" , ( ( select user_id from users where user_name = "Chris"   ) ) , (  select channel_id from channels where channel_name = "#random"  )  ) ,
( "Message Eight" , ( ( select user_id from users where user_name = "Bob"   ) ) , (  select channel_id from channels where channel_name = "#general"  )  ) ,
( "Message Nine" , ( ( select user_id from users where user_name = "Alice"   ) ) , (  select channel_id from channels where channel_name = "#general"  )  ) ,
( "Message Ten" , ( ( select user_id from users where user_name = "Alice"   ) ) , (  select channel_id from channels where channel_name = "#random"  )  )  
;

-- List all organization names. 

select organization_name from organizations ; 

-- List all channel names.

select channel_name from channels ; 

-- List all channels in a specific organization by organization name.

select * from 
channels c left join  organizations o
on o.organization_id = c.organization_id
where o.organization_name = "Lambda School" ;

-- List all messages in a specific channel by channel name #general in order of post_time, descending. (Hint: ORDER BY. Because your INSERTs might have all taken place at the exact same time, this might not return meaningful results. But humor us with the ORDER BY anyway.)

select * from 
message m left join channels c 
on m.channel_id_posted = c.channel_id
where c.channel_name = "#general"
order by m.post_time desc  ;

-- List all channels to which user Alice belongs.

select g.channel_name from 
channel_subscribed_by_users c  
left join  users u
on c.user_id = u.user_id 
left join channels g 
on g.channel_id = c.channel_id
where u.user_name = "Alice" ;

-- List all users that belong to channel #general.

select u.user_name from 
channel_subscribed_by_users c  
left join  users u
on c.user_id = u.user_id 
left join channels g 
on g.channel_id = c.channel_id
where g.channel_name = "#general" ;


-- List all messages in all channels by user Alice.

select * from 
message m  left join users u
on m.user_id_posted = u.user_id 
where u.user_name = "Alice" ;

-- List all messages in #random by user Bob. 
  
select * from 
message m  left join users u
on m.user_id_posted = u.user_id 
left join channels c 
on c.channel_id = m.channel_id_posted 
where u.user_name = "Bob" and c.channel_name = "#random" ;

-- List the count of messages across all channels per user. (Hint: COUNT, GROUP BY.)

select u.user_name , count(*) as message_count  from 
message m  left join users u
on m.user_id_posted = u.user_id 
group by u.user_name  ;
 
-- [Stretch!] List the count of messages per user per channel.

select u.user_name , c.channel_name , count(*) as message_count  from 
message m  left join users u
on m.user_id_posted = u.user_id 
left join channels c 
on c.channel_id = m.channel_id_posted 
group by u.user_name , c.channel_name  ;

-- What SQL keywords or concept would you use if you wanted to automatically delete all messages by a user if that user were deleted from the user table?


/*  We should "ON DELETE CASCADE" as the foreign key contarint to delete the related contents in the database  */ 
 