#设置编码为utf8
set names utf8;
#丢弃数据库lscgDB如果存在
drop database if exists lscgDB;
#创建数据库lscgDB，同时设置字符编码为utf8
create database lscgDB charset=utf8;
#进入数据库
use lscgDB;

#创建首页轮播图index_img数据表
create table index_img(
	img_id smallint(2) primary key auto_increment,			#由系统生成的唯一标识
	img_src varchar(300)									#首页轮播图路径
);
#插入数据到数据表 index_img
insert into index_img values
(1,'***'),
(2,'***'),
(3,'***'),
(4,'***');

#创建新闻分类new_class数据表
create table new_class(
	class_id int(3) primary key auto_increment,			#由系统生成的唯一标识
	class_title varchar(128)							#新闻的分类标题
);
#插入数据到数据表 new_class
insert into new_class values
(1,'茶文趣事'),
(2,'建党新闻'),
(3,'百名元首'),
(4,'公益活动'),
(5,'小饮茶会');

#创建新闻new_details数据表
create table new_details(
	new_id int(10) primary key auto_increment,					#由系统生成的唯一标识
	class_nid int(3),											#所属新闻分类
	new_title varchar(64),										#新闻标题
	new_pic varchar(300),										#标题页显示的小图片
	new_subtitle varchar(500),									#新闻副标题
	new_content varchar(1000),									#详情页显示的内容
	new_time datetime											#新闻时间
);
insert into new_details values
(1,1,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-21 12:00'),
(2,1,'演出预告‖2021年元旦小短假老舍茶馆演出观看指南','***','不知不觉，2021年即将来临，老舍茶馆在元旦期间，将为广大观众奉献经典演出，快看看节目安排吧！','<div><p>不知不觉，2021年即将来临，老舍茶馆在元旦期间，将为广大观众奉献经典演出，快看看节目安排吧！</p><div><img src="***" /></div></div>','2022-07-22 12:00'),
(3,1,' 新品上市‖2021年老舍茶馆生肖茶 牛转乾坤 扫码购买 ','***','舍茶馆牛年生肖饼《封神演义》中五色神牛主管人间吉凶祸福东岳泰山天齐仁圣大帝黄飞虎的坐骑五色神牛力大无尽，不惧凶兽，可托云行走，趋吉辟邪。祝愿茶友们能够牛气冲天。','<div><div><img src="***" /></div><h4>文化价值</h4><p>老舍茶馆牛年生肖饼《封神演义》中五色神牛主管人间吉凶祸福东岳泰山天齐仁圣大帝黄飞虎的坐骑五色神牛力大无尽，不惧凶兽，可托云行走，趋吉辟邪。祝愿茶友们能够牛气冲天。</p><div><img src="***" /></div><h4>臻品私藏茶——福鼎白茶</h4><p>福鼎白茶款，五色神牛以太极手势怀抱三才盖碗，代表六合。飞然于祥云瑞兽托起的京鼓之上，背靠太师椅，神牛身后光芒四射，似一把展开的京味扇，也暗示了白茶制作时的日光，妙趣横生。原料优选：福鼎磻溪，海拔600米以上的高山茶园常年云雾缭绕，日照充足，四季分明，独特的地理、气候、土壤条件孕育出优质白茶。该产区的白茶由基含量低，黄酮、氨基酸含量高。制作工艺不揉不炒，自然萎凋，低温干燥，成就了高品质白茶。</p><div><img src="***" /></div><p>该茶外形匀整，芽毫连枝显露，叶态自然白绿，饼面平整，松紧适度；汤色浅黄、清澈明亮，汤毫尚显；滋味清鲜、醇爽、回甘；花香香气鲜纯、淡雅、持久；冲泡后叶底黄亮、均匀、鲜活。宜品宜存，年份越久，茶味越是醇厚香浓。</p></div>','2022-07-11 12:00'),
(4,1,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-16 12:00'),
(5,1,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-05-12 12:00'),
(6,1,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-04-21 12:00'),
(null,2,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-11 12:00'),
(null,2,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-19 12:00'),
(null,2,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-13 12:00'),
(null,2,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-14 12:00'),
(null,2,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-12 12:00'),
(null,2,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-17 12:00'),
(null,3,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-21 12:00'),
(null,4,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-21 12:00'),
(null,5,'科学防控,筑牢健康防线 老舍茶馆做好冬季服务保障工作','***','管理措施科学，精准防控到位，在北京疫情有所反复的情况下，老舍茶馆员工牢固树立‘时时防、处处防’的理念，坚持“全覆盖、无死角、无盲区、无空白”原则，严格落实环境消毒消杀防疫要求，疫情防控措施到位，采用科学手段严控客流，为元旦假期游客的游览提供安全保障。','<div><div><img src="***" /></div><p>游客入馆时，老舍茶馆工作人员在入口处提示游客测量体温、并用健康宝扫码登记行程、佩戴口罩、保持社交距离等，现场秩序井然。每日安排卫生消杀人员定时消杀，在消毒过程中，本着认真负责的态度，不留死角，对店内的走廊、公共区域、厕所等区域进行全面喷洒消毒，确保消毒彻底，进一步净化了店内环境，保障市民和游客安全。</p><div><img src="***" /></div><p>同时，老舍茶馆严格加强员工日常管控理，加强对员工的传染病防治知识健康教育，确保每名员工掌握疫情防控期间注意事项和操作规程。员工上班前必须检测体温，工作期间抽测体温，有发热和呼吸道症状者，一律不得上班，并按应急预案处置。员工上班必须全程佩戴口罩。并落实“双责任人”、名册登记、消杀记录、宣传培训、应急处置、专职消杀员6项制度。</p><p>老舍茶馆按照北京市文旅局印发《新冠肺炎流行期间北京市演出场所防控指引》（第六版）通知中要求，演出场所的开放观影人数比例为75%，来开放每场观影座位。在切实做好新冠肺炎疫情常态化防控前提下，有序推进秋冬季旅游景区开放管理。</p></div>','2022-07-21 12:00');

#创建演出分类show_family数据表
create table show_family(
	family_id int(3) primary key auto_increment,			#系统生成的唯一标识
	family_title varchar(128)								#演出分类标题
);
#插入数据到演出分类表 show_family
insert into show_family values
(1,'综艺演出'),
(2,'相声专场'),
(3,'京剧专场'),
(4,'评书专场'),
(null,'鼓曲专场'),
(null,'儿童剧'),
(null,'体验类');

#创建演出详情show_details表
create table show_details(
	show_id int(8) primary key auto_increment,				#系统生成的唯一标识
	family_sid int(3),										#所属演出分类
	show_title varchar(64),									#表演节目名称
	show_star varchar(128),									#表演明星
	show_content varchar(128),								#表演所属门店
	show_address varchar(128),								#门店所属地址
	show_spic varchar(328),									#小图
	show_time datetime,										#演出时间
	show_predict decimal(5,2),								#预估价
	show_surplus int(3),									#剩余票数
	show_sold int(3),										#售出票数
	show_notice varchar(800),								#公告
	show_notes varchar(800),								#观看须知
	introduce varchar(800)									#演员及节目介绍
);
#插入数据到演出详情表 show_details
insert into show_details values
(1,1,'综艺演出《你好星期六》','蔡少芬/何炅/王俊凯...','北京老舍茶馆前门店(总店)','北京市西城区前门西大街正阳市场三号楼老舍茶馆','***','2022-07-02 15:00',239.9,200,0,'<h4>公告</h4><p>因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</p><p>1、观演过程中，请您佩戴好口罩；</p><p>2、到店，入场测试体温及健康宝、行程码扫码；</p><br><p>以上如给您带来不便，敬请谅解，感谢配合！</p><br><span>温馨提示</span><p>1、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</p><p>2、取票方式：老舍茶馆公众号/官网：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；<p><p>3、入场时间：演出开演前， 30分钟；</p><p>4、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</p><p>5、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</p>','<h3>观看须知</h3><p>观看时长</p><span>以现场为准</span><p>入场时间</p><span>开始前30分钟</span><p>儿童购票说明</p><span>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</span><p>寄存说明</p><span>无寄存处，请自行保管携带物品</span><p>禁止携带物品说明</p><span>1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。 2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。</span>','<p>节目及演员介绍：（仅供参考）</p><p>含灯大鼓：</p><span>含灯大鼓起源于清末民初，最初叫“叼灯大鼓”，也叫“衔灯大鼓”。曲调与梅花大鼓完全相同，差别在于演员演唱时须口含灯架。口中灯架橫长近尺，上竖数支点燃的蜡烛，下缀彩色流苏，一场含灯大鼓唱完蜡烛不倒，说唱文化杂耍技艺两者合二为一，可视可听，悦人耳目。</span><p>王玉兰：</p><span>国家一级演员，主要表演形式为梅花大鼓、含灯大鼓。代表作品《梅花的故事》、《两头忙》等。曾获得第三届曲艺牡丹表演奖。</span><p>陈秀敏：</p><span>国家一级演员，优秀的京韵大鼓表演者，曾荣获第二届中国曲艺节牡丹奖、第六届全军文艺会演曲艺表演一等奖。全国曲艺优秀节目观摩演出二等奖。</span><p>手影戏：</p><span>民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。</span><p>许国立</p><span>国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。<span>'),
(2,2,'爆笑二人《阳平关》','程景林/杨光...','北京老舍茶馆前门店(总店)','北京市西城区前门西大街正阳市场三号楼老舍茶馆','***','2022-07-12 13:00',100,200,0,'<h4>公告</h4><p>因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</p><p>1、观演过程中，请您佩戴好口罩；</p><p>2、到店，入场测试体温及健康宝、行程码扫码；</p><br><p>以上如给您带来不便，敬请谅解，感谢配合！</p><br><span>温馨提示</span><p>1、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</p><p>2、取票方式：老舍茶馆公众号/官网：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；<p><p>3、入场时间：演出开演前， 30分钟；</p><p>4、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</p><p>5、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</p>','<h3>观看须知</h3><p>观看时长</p><span>以现场为准</span><p>入场时间</p><span>开始前30分钟</span><p>儿童购票说明</p><span>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</span><p>寄存说明</p><span>无寄存处，请自行保管携带物品</span><p>禁止携带物品说明</p><span>1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。 2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。</span>','<p>节目及演员介绍：（仅供参考）</p><p>《北京老舍茶馆相声专场》</p><span>老舍茶馆相声团队大咖云集，戴九安、魏建洲、夏言、梁显超、佟楠 、臧威等优秀的相声演员，为您演绎精彩佳段，带您领略原汁原味的传统艺术魅力。用相声带给您轻松快乐的午后休闲时光，即满足您对生活品质的高追求，又满足您放松精神，开怀一笑的本意。</span><p>程景林：</p><span>北京老舍茶馆相声演员，代表作:学评戏，捉放曹，出口成戏，疯狂司机，汉字趣谈等。曾参加多次相声作品赛:如2010年包公杯中(瞧这张嘴)获优秀奖，2010年北京曲协创作比赛中(防人之心)(教父)获三等奖。2014年参加沈阳曲协汉萌杯中(老顽童)获二等奖。</span><p>杨光：</p><span>老舍茶馆相声演员；相声作品：《音乐达人》《歌曲达人》综艺 ：相声有新人  欢乐喜剧人  黄金100秒脱口而出 我是大医生</span><p>手影戏：</p><span>民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。</span><p>许国立</p><span>国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。<span>'),
(3,3,'京味演出《传承中国》','孔洁/徐帆/金巧巧/曹云金...','河南开封老舍茶馆960文化创意园','河南开封960创意园区A3、A4栋（龙亭公园广场东侧）','***',20220712,100,200,0,'<h4>公告</h4><p>因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</p><p>1、观演过程中，请您佩戴好口罩；</p><p>2、到店，入场测试体温及健康宝、行程码扫码；</p><br><p>以上如给您带来不便，敬请谅解，感谢配合！</p><br><span>温馨提示</span><p>1、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</p><p>2、取票方式：老舍茶馆公众号/官网：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；<p><p>3、入场时间：演出开演前， 30分钟；</p><p>4、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</p><p>5、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</p>','<h3>观看须知</h3><p>观看时长</p><span>以现场为准</span><p>入场时间</p><span>开始前30分钟</span><p>儿童购票说明</p><span>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</span><p>寄存说明</p><span>无寄存处，请自行保管携带物品</span><p>禁止携带物品说明</p><span>1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。 2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。</span>','<p>节目及演员介绍：（仅供参考）</p><p>含灯大鼓：</p><span>含灯大鼓起源于清末民初，最初叫“叼灯大鼓”，也叫“衔灯大鼓”。曲调与梅花大鼓完全相同，差别在于演员演唱时须口含灯架。口中灯架橫长近尺，上竖数支点燃的蜡烛，下缀彩色流苏，一场含灯大鼓唱完蜡烛不倒，说唱文化杂耍技艺两者合二为一，可视可听，悦人耳目。</span><p>王玉兰：</p><span>国家一级演员，主要表演形式为梅花大鼓、含灯大鼓。代表作品《梅花的故事》、《两头忙》等。曾获得第三届曲艺牡丹表演奖。</span><p>陈秀敏：</p><span>国家一级演员，优秀的京韵大鼓表演者，曾荣获第二届中国曲艺节牡丹奖、第六届全军文艺会演曲艺表演一等奖。全国曲艺优秀节目观摩演出二等奖。</span><p>手影戏：</p><span>民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。</span><p>许国立</p><span>国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。<span>'),
(4,4,'大咖评书《名书天下》','王玥波','湖南长沙黄花国际机场T2航站楼店','湖南长沙黄花国际机场T2航站楼负一楼','***','2022-07-12 13:00',100,200,0,'<h4>公告</h4><p>因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</p><p>1、观演过程中，请您佩戴好口罩；</p><p>2、到店，入场测试体温及健康宝、行程码扫码；</p><br><p>以上如给您带来不便，敬请谅解，感谢配合！</p><br><span>温馨提示</span><p>1、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</p><p>2、取票方式：老舍茶馆公众号/官网：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；<p><p>3、入场时间：演出开演前， 30分钟；</p><p>4、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</p><p>5、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</p>','<h3>观看须知</h3><p>观看时长</p><span>以现场为准</span><p>入场时间</p><span>开始前30分钟</span><p>儿童购票说明</p><span>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</span><p>寄存说明</p><span>无寄存处，请自行保管携带物品</span><p>禁止携带物品说明</p><span>1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。 2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。</span>','<p>节目及演员介绍：（仅供参考）</p><p>含灯大鼓：</p><span>含灯大鼓起源于清末民初，最初叫“叼灯大鼓”，也叫“衔灯大鼓”。曲调与梅花大鼓完全相同，差别在于演员演唱时须口含灯架。口中灯架橫长近尺，上竖数支点燃的蜡烛，下缀彩色流苏，一场含灯大鼓唱完蜡烛不倒，说唱文化杂耍技艺两者合二为一，可视可听，悦人耳目。</span><p>王玉兰：</p><span>国家一级演员，主要表演形式为梅花大鼓、含灯大鼓。代表作品《梅花的故事》、《两头忙》等。曾获得第三届曲艺牡丹表演奖。</span><p>陈秀敏：</p><span>国家一级演员，优秀的京韵大鼓表演者，曾荣获第二届中国曲艺节牡丹奖、第六届全军文艺会演曲艺表演一等奖。全国曲艺优秀节目观摩演出二等奖。</span><p>手影戏：</p><span>民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。</span><p>许国立</p><span>国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。<span>'),
(5,5,'鼓曲专栏《丰碑》','沈铭堂/Simon...','陕西西安老舍茶馆西咸新区诗经里店','陕西省西安市长安区斗门街道沣东新城沣滨水镇诗经里19号楼','***',20220712,100,200,0,'<h4>公告</h4><p>因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</p><p>1、观演过程中，请您佩戴好口罩；</p><p>2、到店，入场测试体温及健康宝、行程码扫码；</p><br><p>以上如给您带来不便，敬请谅解，感谢配合！</p><br><span>温馨提示</span><p>1、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</p><p>2、取票方式：老舍茶馆公众号/官网：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；<p><p>3、入场时间：演出开演前， 30分钟；</p><p>4、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</p><p>5、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</p>','<h3>观看须知</h3><p>观看时长</p><span>以现场为准</span><p>入场时间</p><span>开始前30分钟</span><p>儿童购票说明</p><span>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</span><p>寄存说明</p><span>无寄存处，请自行保管携带物品</span><p>禁止携带物品说明</p><span>1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。 2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。</span>','<p>节目及演员介绍：（仅供参考）</p><p>含灯大鼓：</p><span>含灯大鼓起源于清末民初，最初叫“叼灯大鼓”，也叫“衔灯大鼓”。曲调与梅花大鼓完全相同，差别在于演员演唱时须口含灯架。口中灯架橫长近尺，上竖数支点燃的蜡烛，下缀彩色流苏，一场含灯大鼓唱完蜡烛不倒，说唱文化杂耍技艺两者合二为一，可视可听，悦人耳目。</span><p>王玉兰：</p><span>国家一级演员，主要表演形式为梅花大鼓、含灯大鼓。代表作品《梅花的故事》、《两头忙》等。曾获得第三届曲艺牡丹表演奖。</span><p>陈秀敏：</p><span>国家一级演员，优秀的京韵大鼓表演者，曾荣获第二届中国曲艺节牡丹奖、第六届全军文艺会演曲艺表演一等奖。全国曲艺优秀节目观摩演出二等奖。</span><p>手影戏：</p><span>民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。</span><p>许国立</p><span>国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。<span>'),
(6,6,'儿童剧《新安旅行团》','赵自强/王梓浩...','山东泰安老舍茶馆老街店','泰安老街6号商业楼','***',20220712,100,200,0,'<h4>公告</h4><p>因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</p><p>1、观演过程中，请您佩戴好口罩；</p><p>2、到店，入场测试体温及健康宝、行程码扫码；</p><br><p>以上如给您带来不便，敬请谅解，感谢配合！</p><br><span>温馨提示</span><p>1、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</p><p>2、取票方式：老舍茶馆公众号/官网：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；<p><p>3、入场时间：演出开演前， 30分钟；</p><p>4、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</p><p>5、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</p>','<h3>观看须知</h3><p>观看时长</p><span>以现场为准</span><p>入场时间</p><span>开始前30分钟</span><p>儿童购票说明</p><span>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</span><p>寄存说明</p><span>无寄存处，请自行保管携带物品</span><p>禁止携带物品说明</p><span>1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。 2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。</span>','<p>节目及演员介绍：（仅供参考）</p><p>含灯大鼓：</p><span>含灯大鼓起源于清末民初，最初叫“叼灯大鼓”，也叫“衔灯大鼓”。曲调与梅花大鼓完全相同，差别在于演员演唱时须口含灯架。口中灯架橫长近尺，上竖数支点燃的蜡烛，下缀彩色流苏，一场含灯大鼓唱完蜡烛不倒，说唱文化杂耍技艺两者合二为一，可视可听，悦人耳目。</span><p>王玉兰：</p><span>国家一级演员，主要表演形式为梅花大鼓、含灯大鼓。代表作品《梅花的故事》、《两头忙》等。曾获得第三届曲艺牡丹表演奖。</span><p>陈秀敏：</p><span>国家一级演员，优秀的京韵大鼓表演者，曾荣获第二届中国曲艺节牡丹奖、第六届全军文艺会演曲艺表演一等奖。全国曲艺优秀节目观摩演出二等奖。</span><p>手影戏：</p><span>民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。</span><p>许国立</p><span>国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。<span>'),
(7,7,'特惠体验《四季北京.茶》','王玉兰/陈秀敏...','浙江义乌老舍茶馆店','浙江省金华市义乌市北苑街道秀禾问茶A8','***',20220712,100,200,0,'<h4>公告</h4><p>因各地突发、疫情情况增多，根据防控要求，自2021年7月30日起，老舍茶馆剧场观演要求如下：</p><p>1、观演过程中，请您佩戴好口罩；</p><p>2、到店，入场测试体温及健康宝、行程码扫码；</p><br><p>以上如给您带来不便，敬请谅解，感谢配合！</p><br><span>温馨提示</span><p>1、本演出需实名制购票，一单一证（一单一证只需输入一位顾客身份证信息即可）；</p><p>2、取票方式：老舍茶馆公众号/官网：购票人收取短信，短信内容包含取票码，演出当天到老舍茶馆一层大厅输入取票码取票；<p><p>3、入场时间：演出开演前， 30分钟；</p><p>4、请您下单前仔细核对订单及观演页面内容信息，演出票一经售出，不支持退换及改签，自行处理，敬请谅解；</p><p>5、老舍茶馆官方客服电话：010-63036830（服务时间早10:00—20:00）</p>','<h3>观看须知</h3><p>观看时长</p><span>以现场为准</span><p>入场时间</p><span>开始前30分钟</span><p>儿童购票说明</p><span>1.2米以上儿童凭成人票入场，1.2米以下儿童无座位</span><p>寄存说明</p><span>无寄存处，请自行保管携带物品</span><p>禁止携带物品说明</p><span>1.由于安保和版权的原因，演出禁止携带食品、饮料、专业摄录设备、打火机等物品、请您注意现场工作人员的提示，予以配合。 2.疫情防控期间，请您观演过程中佩戴口罩，到店扫行程轨迹。</span>','<p>节目及演员介绍：（仅供参考）</p><p>含灯大鼓：</p><span>含灯大鼓起源于清末民初，最初叫“叼灯大鼓”，也叫“衔灯大鼓”。曲调与梅花大鼓完全相同，差别在于演员演唱时须口含灯架。口中灯架橫长近尺，上竖数支点燃的蜡烛，下缀彩色流苏，一场含灯大鼓唱完蜡烛不倒，说唱文化杂耍技艺两者合二为一，可视可听，悦人耳目。</span><p>王玉兰：</p><span>国家一级演员，主要表演形式为梅花大鼓、含灯大鼓。代表作品《梅花的故事》、《两头忙》等。曾获得第三届曲艺牡丹表演奖。</span><p>陈秀敏：</p><span>国家一级演员，优秀的京韵大鼓表演者，曾荣获第二届中国曲艺节牡丹奖、第六届全军文艺会演曲艺表演一等奖。全国曲艺优秀节目观摩演出二等奖。</span><p>手影戏：</p><span>民间特有艺术形式，依托手部投影幻化出千百种影像。运用灯光反打技术，把手的造型投到屏幕上，同时配上口技，声影结合，并辅以故事情节进行创新。手影戏用十指灵动，演艺天上飞、地上跑、水里游的万众生灵，口技技艺更是惟妙惟肖，令人惊叹。</span><p>许国立</p><span>国家一级演员，曾为近百部影视剧进行配音，出访多个国家进行文化交流。<span>');

#创建演出规格ticket_specs表
create table ticket_specs(
	spec_id int(8) primary key auto_increment,					#系统生成的唯一标识
	show_sid int(8),												#所属演出
	show_subtitle varchar(64),									#区域介绍
	spec_region varchar(32),									#类型
	spec_price decimal(5,2),									#价格
	spec_big varchar(800)										#下方非常大的图
);
#插入数据到规格表 ticket_specs
insert into ticket_specs values
(1,1,'VIP区——包含产品：盖碗茶 两款小吃 演出纪念品','VIP区',488.8,'***'),
(2,1,'中心票档区——包含产品：盖碗茶 两款小吃 演出纪念品','中心区',388.8,'***'),
(3,1,'优享区——包含产品：盖碗茶 两款小吃','优享区',288.8,'***'),
(4,1,'特惠票——包含产品：盖碗茶 两款小吃','特惠区',188.8,'***'),
(5,1,'体验票——包含产品：盖碗茶','体验票',100,'***'),

(6,2,'VIP区——包含产品：盖碗茶 两款小吃 演出纪念品','VIP区',458.8,'***'),
(7,2,'中心票档区——包含产品：盖碗茶 两款小吃 演出纪念品','中心区',358.8,'***'),
(8,2,'优享区——包含产品：盖碗茶 两款小吃','优享区',258.8,'***'),
(9,2,'特惠票——包含产品：盖碗茶 两款小吃','特惠区',158.8,'***'),
(10,2,'体验票——包含产品：盖碗茶','体验票',90,'***'),

(11,3,'VIP区——包含产品：盖碗茶 两款小吃 演出纪念品','VIP区',488.8,'***'),
(12,3,'中心票档区——包含产品：盖碗茶 两款小吃 演出纪念品','中心区',388.8,'***'),
(13,3,'优享区——包含产品：盖碗茶 两款小吃','优享区',288.8,'***'),
(14,3,'特惠票——包含产品：盖碗茶 两款小吃','特惠区',188.8,'***'),
(15,3,'体验票——包含产品：盖碗茶','体验票',100,'***'),

(16,4,'VIP区——包含产品：盖碗茶 两款小吃 演出纪念品','VIP区',478.8,'***'),
(17,4,'中心票档区——包含产品：盖碗茶 两款小吃 演出纪念品','中心区',378.8,'***'),
(null,4,'优享区——包含产品：盖碗茶 两款小吃','优享区',278.8,'***'),
(null,4,'特惠票——包含产品：盖碗茶 两款小吃','特惠区',178.8,'***'),
(null,4,'体验票——包含产品：盖碗茶','体验票',98,'***'),

(null,5,'VIP区——包含产品：盖碗茶 两款小吃 演出纪念品','VIP区',498.8,'***'),
(null,5,'中心票档区——包含产品：盖碗茶 两款小吃 演出纪念品','中心区',398.8,'***'),
(null,5,'优享区——包含产品：盖碗茶 两款小吃','优享区',298.8,'***'),
(null,5,'特惠票——包含产品：盖碗茶 两款小吃','特惠区',198.8,'***'),
(null,5,'体验票——包含产品：盖碗茶','体验票',120,'***'),

(null,6,'VIP区——包含产品：盖碗茶 两款小吃 演出纪念品','VIP区',488.8,'***'),
(null,6,'中心票档区——包含产品：盖碗茶 两款小吃 演出纪念品','中心区',388.8,'***'),
(null,6,'优享区——包含产品：盖碗茶 两款小吃','优享区',288.8,'***'),
(null,6,'特惠票——包含产品：盖碗茶 两款小吃','特惠区',188.8,'***'),
(null,6,'体验票——包含产品：盖碗茶','体验票',100,'***'),

(null,7,'VIP区——包含产品：盖碗茶 两款小吃 演出纪念品','VIP区',418.8,'***'),
(null,7,'中心票档区——包含产品：盖碗茶 两款小吃','中心区',318.8,'***'),
(null,7,'优享区——包含产品：盖碗茶','优享区',218.8,'***'),
(null,7,'特惠票——包含产品：暂无','特惠区',118.8,'***'),
(null,7,'体验票——包含产品：暂无','体验票',70,'***');

#创建茶分类tea_class数据表
create table tea_class(
	teaclass_id int(2) primary key auto_increment,					#由系统生成的唯一标识
	teaclass_name varchar(32)										#茶分类标题
);
#插入数据到分类表 tea_class
insert into tea_class values
(1,'绿茶'),
(2,'红茶'),
(3,'乌龙茶'),
(4,'白茶'),
(5,'黄茶'),
(6,'黑茶');

#创建茶百科lscg_tea数据表
create table lscg_tea(
	tea_id int(5) primary key auto_increment,					#由系统生成的唯一标识
	teaclass_sid int(2),										#所属茶分类
	tea_name varchar(32),										#茶名称
	tea_subtitle varchar(64),									#茶副标题
	tea_details varchar(800),									#茶详情
	tea_pic varchar(300),										#茶百科小图片
	tea_spic varchar(300),										#详情页图1
	tea_sspic varchar(300),										#详情页图2
	tea_ssspic varchar(300)										#详情页图3
);
#插入数据到茶百科表 lscg_tea
insert into lscg_tea values
(1,1,'西湖龙井','西湖龙井是中国十大名茶之一，属绿茶，其产于浙江省杭州市西湖龙井村周围群山，并因此得名，具有1200多年历史  。清乾隆游览杭州西湖时，盛赞西湖龙井茶，把狮峰山下胡公庙前的十八棵茶树封为“御茶”。西湖龙井按外形和内质的优次分作1～8级。
特级西湖龙井茶扁平光滑挺直，色泽嫩绿光润，香气鲜嫩清高，滋味鲜爽甘醇，叶底细嫩呈朵。清明节前采制的龙井茶简称明前龙井，美称女儿红，“院外风荷西子笑，明前龙井女儿红。”西湖龙井茶与西湖一样，是人、自然、文化三者的完美结晶，是西湖地域文化的重要载体。
','','***','***','***','***'),
(2,1,'峨眉雪芽','峨眉雪芽，四川十大名茶之一 ，盛产于峨眉山海拔800-1200米处，常年云雾空蒙的赤城峰、白岩峰、玉女峰、天池峰、竞月峰下和万年寺一带。茶叶具有扁、平、滑、直、尖的特点，泡之香气清香馥郁，色泽嫩绿油润，汤色嫩绿明亮，口感清醇淡雅，叶底嫩绿均匀。','','***','***','***','***'),
(3,1,'信阳毛尖','信阳毛尖又称豫毛峰，属绿茶类，是中国十大名茶之一，也是河南省著名特产之一；其主要产地在信阳市浉河区（原信阳市）、平桥区（原信阳县）和罗山县。由汉族茶农创制。民国初年，因信阳茶区的五大茶社产出品质上乘的本山毛尖茶，正式命名为“信阳毛尖”。
信阳毛尖具有“细、圆、光、直、多白毫、香高、味浓、汤色绿”的独特风格，具有生津解渴、清心明目、提神醒脑、去腻消食等多种功效。1915年在巴拿马万国博览会上与贵州茅台同获金质奖，1990年信阳毛尖品牌参加国家评比，取得绿茶综合品质第一名。信阳毛尖被誉为“绿茶之王”。信阳毛尖品牌多年位居中国茶叶区域公用品牌价值第3位。2017年，中国茶叶区域品牌价值评比中，信阳毛尖以59.91亿元位居品牌价值排行榜第二名。
','','***','***','***','***'),
(4,2,'小种红茶','','<h2></h2><p></p><p></p>','','***','***','***'),
(5,2,'工夫红茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(6,2,'阿萨姆红茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(7,3,'奇兰茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,3,'大红袍茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,3,'铁罗汉茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,4,'白牡丹茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,4,'天目湖白茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,4,'白毫银针','','','***','***','***','***'),
(null,5,'霍山黄芽','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,5,'鹿苑毛尖','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,5,'海马宫茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,6,'老青茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,6,'边茶','','<h2></h2><p></p><p></p>','***','***','***','***'),
(null,6,'六堡茶','','<h2></h2><p></p><p></p>','***','***','***','***');

#创建茶友圈tea_ring数据表
create table tea_ring(
	ring_id int(8) primary key auto_increment,					#由系统生成的唯一标识
	user_sid int(8) not null,									#所属用户
	ring_details varchar(800),									#发表内容
	ring_prise int(7)											#点赞量
);
insert into tea_ring values
(1,1,'北京老舍茶馆前门店(总店)的茶那叫一个地道!!!兄弟们冲~~~',8000),
(2,1,'山东泰安老舍茶馆老街店的茶才是真的顶!!!全部给我去山东泰安老舍茶馆老街店~~~',7600),
(3,1,'还记得上次去老舍茶馆的时候还是在上次~~~岁月不饶人啊转眼又18岁了',5003),
(4,2,'还记得上次去老舍茶馆的时候还是在上次~~~岁月不饶人啊转眼又18岁了',5003),
(5,2,'还记得上次去老舍茶馆的时候还是在上次~~~岁月不饶人啊转眼又18岁了',5003),
(6,2,'还记得上次去老舍茶馆的时候还是在上次~~~岁月不饶人啊转眼又18岁了',5003);

#创建评论ring_comment数据表
create table ring_comment(
	commen_id int(10) primary key auto_increment,					#由系统生成的唯一标识
	ring_sid int(8) not null,										#所属话题
	comment_cont varchar(200)										#评论内容
);
#插入数据到评论表 ring_comment
insert into ring_comment values
(1,1,'顶顶顶~~~'),
(2,1,'顶顶顶~~~'),
(3,1,'顶顶顶~~~'),
(4,1,'顶顶顶~~~'),
(5,1,'顶顶顶~~~'),

(6,2,'顶顶顶~~~'),
(7,2,'顶顶顶~~~'),

(null,3,'顶顶顶~~~'),
(null,3,'顶顶顶~~~'),

(null,4,'顶顶顶~~~'),
(null,4,'顶顶顶~~~'),

(null,5,'顶顶顶~~~'),
(null,5,'顶顶顶~~~'),

(null,6,'顶顶顶~~~');

#创建用户信息lscg_users数据表
create table lscg_users(
	user_id int(8) primary key auto_increment,					#由系统生成的唯一标识
	user_name varchar(16) not null,								#用户名
	user_pwd varchar(20) not null,								#密码
	user_phone varchar(11) unique,								#电话
	user_email varchar(32),										#邮箱
	user_sex boolean,											#1——男，0——女
	user_birth date,											#生日
	user_photo varchar(300)										#头像
);
insert into lscg_users values
(1,'chenlang','123456789','18626489634','2899463517@qq.com',1,'2000-06-12','***'),
(2,'lanhaoyue','123456789','18965341986','2899493517@qq.com',0,'2000-04-26','***'),
(3,'zhongchuanhu','123456789','18626489635','2899461517@qq.com',1,'1998-08-14','***'),
(4,'mengmeng','123456789','18626489633','2899464517@qq.com',0,'1999-11-18','***'),
(5,'chenlanglang','123456789','18626489694','2899467517@qq.com',1,'2000-10-22','***');

create table lscg_orders(
	order_id int(10) primary key auto_increment,					#由系统生成的唯一标识
	user_oid int(8),												#所属用户
	show_oid int(8),												#所属商品
	show_name varchar(100),											#商品名称
	show_spec varchar(100),											#商品规格
	order_count int(3),												#购买数量
	order_pice decimal(6,2)											#实付价格
);