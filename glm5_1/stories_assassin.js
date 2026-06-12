var STORY_ASSASSIN = {
  name: '重生之暗影刺客',
  emoji: '🗡️',
  tagline: '别人杀人用刀，我杀人用尴尬',
  tags: [{text:'暗杀',color:'red'},{text:'搞笑',color:'gold'},{text:'逆袭',color:'green'}],
  locked: false,
  system: {
    name: '「社死暗杀系统」',
    desc: '检测到宿主毫无暗杀天赋，但社死能力爆表。系统已将"暗杀"重新定义为"让目标社死到原地去世"。每个目标都有不同的社死弱点。',
    skill: '百分百被空耳'
  },
  baseStats: { assassination: 10, chill: 40, creativity: 50, popularity: 5, luck: 30 },
  baseSkills: ['百分百被空耳'],
  startNode: 'start',
  nodes: {
    'start': {
      chapter: 1, art: '🌙',
      text: '我叫林小刀，上一世是鼎鼎大名的暗影刺客——的手下败将。没错，我连当炮灰都不够格，被自家组织开除了。开除理由写的是：**"此人暗杀手法过于离谱，严重影响组织声誉。"**\n\n我怎么离谱了？不就是上次暗杀目标的时候，把毒药换成泻药，结果泻药还没起效，我自己先紧张到当场拉裤子了吗？\n\n然后我就死了。被一辆外卖电动车撞死了。\n\n但现在，我重生了。脑海中响起一个冰冷的机械音——\n\n「社死暗杀系统已绑定。宿主当前暗杀等级：负无穷。但社死天赋……满分。」',
      notification: '[系统] 欢迎回来，史上最废刺客。本次轮回你的任务是：让目标社死到灵魂出窍。准备好丢人了吗？',
      statChanges: [{stat:'luck', value:5}],
      choices: [
        {text:'"等等，社死也算暗杀？"', hint:'这算哪门子暗杀啊！', next:'tutorial', statChanges:[]},
        {text:'"我拒绝！我要当正经刺客！"', hint:'你有那个本事吗？', next:'refuse_system', statChanges:[{stat:'chill', value:5}]}
      ]
    },

    'refuse_system': {
      chapter: 1, art: '💀',
      text: '我义正言辞地拒绝了系统。\n\n系统沉默了三秒钟，然后在我脑海里播放了我上一世的死亡回放——被外卖小哥的电动车以时速二十公里撞飞，翻了三个滚，脸朝下摔进了一个还没来得及盖上盖子的化粪池里。\n\n我的死因鉴定书上写的是：**溺亡于有机物混合液体中。**\n\n翻译成人话就是：被屎淹死的。\n\n系统：「现在，你还想当正经刺客吗？」\n\n我：「……社死暗杀是什么，听起来好酷啊。」',
      notification: '[系统] 系统检测到宿主已认清现实。社死暗杀教程即将开启。',
      statChanges: [{stat:'chill', value:10}],
      choices: [
        {text:'"含泪接受社死刺客的身份"', hint:'认清现实是成长的第一步', next:'tutorial', statChanges:[{stat:'chill', value:5}]}
      ]
    },

    'tutorial': {
      chapter: 1, art: '📖',
      text: '系统给我发了一份《社死暗杀入门指南》，封面是一只被画了乌龟的背影。\n\n「社死暗杀原理：每个人都有不想被公开的秘密。你的任务就是找到这个秘密，然后在最不恰当的场合，以最不留情面的方式，让全世界都知道。」\n\n我翻到第一页，上面写着：**新手试炼任务——让隔壁班的校霸王大壮社死。**\n\n王大壮，身高一米九，体重两百斤，仗着他爹是校董，在学校横行霸道，上周刚抢了我的午饭钱。\n\n系统：「目标已锁定。建议先收集情报。请问宿主要如何展开调查？」',
      notification: '[系统] 新手任务已发布！目标：王大壮。弱点：未知。请在24小时内完成社死暗杀。',
      statChanges: [{stat:'creativity', value:5}],
      choices: [
        {text:'跟踪王大壮，摸清他的底细', hint:'经典刺客操作', next:'stalk_bully', statChanges:[{stat:'assassination', value:5}]},
        {text:'直接去找王大壮当面挑衅', hint:'你是勇士还是莽夫？', next:'confront_bully', statChanges:[{stat:'chill', value:10}]},
        {text:'在校园论坛匿名发帖收集情报', hint:'用智商碾压对手', next:'forum_intel', statChanges:[{stat:'creativity', value:10},{stat:'popularity', value:5}]}
      ]
    },

    'stalk_bully': {
      chapter: 2, art: '🔍',
      text: '我决定用最传统的方式——跟踪。\n\n刺客嘛，跟踪是基本功。我穿上全黑的衣服，戴上鸭舌帽，像个影子一样悄悄跟在王大壮身后。\n\n跟了半小时，我发现了惊天大秘密——\n\n王大壮放学后居然去了……**舞蹈培训班。**\n\n不是街舞，不是 Breaking。是芭蕾舞。\n\n一米九两百斤的王大壮，穿着紧身裤，在镜子前面踮着脚尖旋转，嘴里还念念有词：**"一二三，转，优雅，我是天鹅，我是美丽的天鹅……"**\n\n我躲在门缝后面，眼泪都笑出来了。系统说得对，我的武器不是刀，是尴尬。\n\n但我突然打了个喷嚏。\n\n王大壮猛地转过头来——',
      notification: '[系统] 情报获取成功！目标弱点：秘密学习芭蕾舞。社死素材质量：SSS级。',
      statChanges: [{stat:'assassination', value:10},{stat:'creativity', value:5}],
      gainSkills: ['情报收集·偷窥版'],
      choices: [
        {text:'录下来发到学校大群', hint:'简单粗暴，一击必杀', next:'expose_ballet_basic', statChanges:[{stat:'popularity', value:10}]},
        {text:'策划一个更大的社死方案', hint:'让暴风雨来得更猛烈些', next:'grand_ballet_plan', statChanges:[{stat:'creativity', value:15}]},
        {text:'以此为要挟，让王大壮当我的小弟', hint:'以德……不，以黑料服人', next:'blackmail_bully', statChanges:[{stat:'chill', value:15}]}
      ]
    },

    'confront_bully': {
      chapter: 2, art: '💥',
      text: '我脑子一热，直接走到王大壮面前。\n\n"王大壮！把你抢我的午饭钱还给我！"\n\n王大壮愣了一秒，然后仰天大笑。他身后的小弟们也跟着笑。\n\n"就你？哈哈哈！来来来，你自己来拿啊！"\n\n他拍了拍自己鼓鼓的肚子。周围的同学都安静了，没人敢说话。\n\n但我突然注意到一个细节——王大壮的手机壳上印着一个卡通图案。\n\n那是一只粉红色的小猪佩奇。\n\n一米九两百斤的校霸王大壮，手机壳是小猪佩奇。\n\n我立刻掏出手机，咔嚓一声拍了张照片。\n\n"所有人看过来！王大壮的手机壳是小猪佩奇！"\n\n王大壮的脸瞬间变成了猪肝色。',
      notification: '[系统] 即兴社死攻击！效果评估中……目标面部温度急剧上升，社死倒计时开始。',
      statChanges: [{stat:'chill', value:10},{stat:'luck', value:10}],
      choices: [
        {text:'乘胜追击，把照片发到班级群', hint:'不给对手喘息的机会', next:'expose_ballet_basic', statChanges:[{stat:'popularity', value:10}]},
        {text:'得意忘形，开始跳舞嘲讽', hint:'你是不是飘了？', next:'overconfidence', statChanges:[{stat:'chill', value:5}]}
      ]
    },

    'forum_intel': {
      chapter: 2, art: '💻',
      text: '我在校园论坛匿名发了个帖子：**"求助：有没有人知道王大壮有什么不为人知的秘密？在线等，挺急的。"**\n\n帖子的回复速度超乎想象。看来王大壮在学校得罪的人不少。\n\n五分钟内我收到了十几条回复——\n\n"他每天午休都偷偷去图书馆看言情小说。"\n"他书包里有一张和班主任的合影，背后写着'最爱的老师'。"\n"他考试的时候会在草稿纸上画小猫咪。"\n"他加入了一个叫'彩虹少女团'的QQ群。"\n\n但最致命的一条是——\n\n**"他放学后去学芭蕾舞，我亲眼看到的。他管自己叫'钢铁天鹅'。"**\n\n系统：「情报已充分。目标已经可以说是裸奔状态了。」',
      notification: '[系统] 群众力量是无穷的！目标弱点已全部暴露。社死弹药充足，请选择开火方式。',
      statChanges: [{stat:'creativity', value:15},{stat:'popularity', value:10}],
      gainSkills: ['网络情报大师'],
      choices: [
        {text:'整理所有黑料，制作成校园纪实纪录片', hint:'做大事的人', next:'grand_ballet_plan', statChanges:[{stat:'creativity', value:10}]},
        {text:'用这些信息直接在全校大会上爆料', hint:'公开处刑', next:'school_assembly', statChanges:[{stat:'chill', value:10},{stat:'popularity', value:5}]}
      ]
    },

    'overconfidence': {
      chapter: 2, art: '🕺',
      text: '我居然在现场开始跳舞嘲讽王大壮。\n\n我跳的是一首土味神曲，配上了极其夸张的动作。我甚至来了一个地板动作旋转。\n\n旋转的过程中，我的裤子裂了。\n\n从后面裂到了前面。\n\n我穿的是我妈逼我穿的大红色棉毛裤。\n\n现场一片死寂，然后——\n\n**"哈哈哈哈哈哈！！！"** 全校的人都笑疯了。\n\n王大壮指着我笑得直不起腰："你这还来暗杀我？你自己先死了吧！"\n\n系统：「警告！宿主社死值已超过目标！本末倒置！」\n\n我捂着屁股狂奔出校园，身后是经久不息的笑声。',
      notification: '[系统] 任务失败！宿主反被社死！扣除社会性生命值100点。建议宿主好好反省。',
      statChanges: [{stat:'chill', value:-20},{stat:'popularity', value:15},{stat:'assassination', value:-5}],
      choices: [
        {text:'"我……我不会放弃的！"', hint:'从哪里跌倒就从哪里爬起来', next:'redemption_round', statChanges:[{stat:'chill', value:10}]},
        {text:'"算了，也许我不适合当刺客"', hint:'真的要放弃吗？', next:'give_up_early', statChanges:[]}
      ]
    },

    'expose_ballet_basic': {
      chapter: 3, art: '🩰',
      text: '我把王大壮跳芭蕾的视频发到了学校五百人的大群里。\n\n视频里，一米九的王大壮踮着脚尖旋转，嘴里喊着"我是天鹅"，画面极其震撼。\n\n三分钟后，群消息炸了。\n\n"哈哈哈哈我眼花了吗？？？"\n"钢铁天鹅？？？这是哪来的梗？？？"\n"已截图，这将是我这辈子最珍贵的收藏。"\n"大壮哥，你还有这才艺呢？元旦晚会必须表演一个！"\n\n王大壮在群里疯狂发消息：**"谁发的！给我站出来！我要弄死你！"**\n但没人理他，所有人都在分享截图和制作表情包。\n\n到了第二天，"钢铁天鹅"已经成了全校最火的梗。王大壮走到哪里都有人踮着脚尖旋转。\n\n他再也不敢欺负人了——因为每次他一瞪眼，对方就踮起脚尖转个圈。\n\n系统：「目标社死完成。**战斗力归零。**」',
      notification: '[系统] 恭喜宿主完成首次社死暗杀！目标「王大壮」社会性死亡。获得称号：天鹅猎人。',
      statChanges: [{stat:'popularity', value:20},{stat:'assassination', value:15},{stat:'creativity', value:10}],
      achievement: '天鹅猎人',
      gainSkills: ['一击社死'],
      choices: [
        {text:'接受系统的新任务', hint:'更大的挑战在等着你', next:'second_target', statChanges:[{stat:'chill', value:5}]},
        {text:'享受当校园风云人物的感觉', hint:'先把名气刷够再说', next:'enjoy_fame', statChanges:[{stat:'popularity', value:10}]}
      ]
    },

    'grand_ballet_plan': {
      chapter: 3, art: '🎭',
      text: '我决定不满足于简单的曝光。我要搞一票大的。\n\n我花了一个星期，做了以下准备——\n\n1. 剪辑了一段王大壮跳芭蕾的鬼畜视频，配上了《天鹅湖》的音乐\n2. 在学校贴吧发起了"钢铁天鹅杯"表情包大赛\n3. 联系了元旦晚会的主持人，把王大壮的节目单偷偷改成了"芭蕾独舞——钢铁天鹅"\n4. 做了一面横幅，上面写着：**"热烈祝贺王大壮同学荣获'年度最佳天鹅'称号"**\n\n元旦晚会那天，主持人念到："下面请欣赏——王大壮同学带来的芭蕾独舞！"\n\n王大壮在台下脸色惨白，拼命摇头。\n\n但他的小弟们已经把他抬上了舞台。\n\n全校师生一千多人，掌声雷动。\n\n那一刻，王大壮社死到了灵魂深处。\n\n但——他居然真的跳了。而且……跳得还不错？\n\n**台下反而爆发出了真心的掌声。**\n\n这不按剧本来啊！',
      notification: '[系统] 社死攻击被目标化解！目标利用社死反向圈粉！宿主反而帮他成名了！什么情况！',
      statChanges: [{stat:'creativity', value:20},{stat:'assassination', value:10},{stat:'popularity', value:5}],
      choices: [
        {text:'"可恶，被他反将一军了！"', hint:'这个对手不简单', next:'second_target', statChanges:[{stat:'assassination', value:5}]},
        {text:'"等等……我好像领悟了什么"', hint:'社死的最高境界是……', next:'epiphany', statChanges:[{stat:'creativity', value:15}], condition:{stat:'creativity', min:60}}
      ]
    },

    'blackmail_bully': {
      chapter: 3, art: '🤝',
      text: '我找到了王大壮，把芭蕾舞的事摊牌了。\n\n"大壮啊，咱们做个交易。你以后别欺负人了，特别是别欺负我。不然……全校都会知道钢铁天鹅的故事。"\n\n王大壮的脸涨得通红，拳头攥紧又松开，松开又攥紧。\n\n最后他咬着牙说了一句："行。但你得答应我一件事。"\n\n"什么事？"\n\n"……教我怎么跳好那个旋转。我练了三个月还是转不好。"\n\n我愣住了。\n\n系统：「宿主，你好像误打误撞……把暗杀变成了外交？」\n\n我看着王大壮认真的表情，突然觉得这个一米九的大块头跳起芭蕾来……还挺可爱的？\n\n就这样，校霸王大壮成了我第一个"社死失败但意外收获友谊"的案例。',
      notification: '[系统] 特殊结局触发！目标未被社死，反而成为盟友。系统表示很困惑。', statChanges: [{stat:'chill', value:20},{stat:'luck', value:15},{stat:'assassination', value:5}],
      gainSkills: ['以黑料服人'],
      choices: [
        {text:'带着新的小弟接受下一个任务', hint:'暗杀事业上正轨了', next:'second_target', statChanges:[{stat:'chill', value:5}]}
      ]
    },

    'school_assembly': {
      chapter: 3, art: '📢',
      text: '周一全校大会上，校长正在台上念安全须知。\n\n我趁没人注意，溜到了广播室。拿起话筒，用我最低沉的声音说——\n\n"同学们，我有一个重要消息要宣布。我们的校霸王大壮同学，有一个不为人知的身份。"\n\n全场安静了。\n\n"他——就是本校地下芭蕾舞团的团长，代号：**钢铁天鹅。**"\n\n我先描述了他跳芭蕾的画面，然后把他在论坛上被曝光的所有黑料一口气全念了出来。言情小说、小猪佩奇手机壳、彩虹少女团QQ群……\n\n王大壮在台下从脸红到脖子，从脖子红到脚后跟。\n\n**整个操场三千人，鸦雀无声了三秒，然后集体爆发出了惊天动地的笑声。**\n\n连校长都笑到扶着讲台。\n\n王大壮当场社死，此后在学校的绰号永远变成了"天鹅"。',
      notification: '[系统] 公开处刑！完美社死！目标社会性生命值归零！宿主获得"处刑人"称号！',
      statChanges: [{stat:'popularity', value:25},{stat:'assassination', value:20},{stat:'chill', value:5}],
      achievement: '处刑人',
      choices: [
        {text:'准备迎接下一个更难的目标', hint:'初出茅庐的任务已经完成', next:'second_target', statChanges:[{stat:'assassination', value:5}]}
      ]
    },

    'give_up_early': {
      chapter: 2, art: '🏳️',
      text: '我选择了放弃。\n\n系统沉默了很久，然后说：「宿主，你知道上一世你放弃后发生了什么吗？」\n\n"被电动车撞了？"\n\n「不，被电动车撞了之后，你在化粪池里又挣扎了三分钟。」\n\n"…………"\n\n「这三分钟里你的内心独白是：如果再给我一次机会，我一定不会再因为害怕尴尬而放弃。」\n\n我沉默了。\n\n系统：「宿主，你已经死过一次了。**比起死在化粪池里，被笑话算什么？**」\n\n这个系统说话真的好扎心。\n\n但……好像有点道理。',
      notification: '[系统] 检测到宿主意志动摇。进行中二热血演讲激励中……演讲完毕。请宿主重新做出选择。',
      statChanges: [{stat:'chill', value:15}],
      choices: [
        {text:'"好吧，我再试一次！"', hint:'化粪池之仇不共戴天', next:'redemption_round', statChanges:[{stat:'chill', value:10},{stat:'luck', value:5}]}
      ]
    },

    'redemption_round': {
      chapter: 3, art: '🔥',
      text: '我重新振作起来。\n\n虽然上次因为裤子裂了被全校笑话，但系统告诉我一个好消息——那个画面也被拍下来传遍了全校，而大家给我起了一个绰号：**"红色旋风"。**\n\n据说是因为我穿着红棉毛裤狂奔的画面太过震撼，已经在隔壁学校传开了。\n\n"你就是那个红色旋风？"食堂打饭的时候，一个女生居然认出了我。\n\n我捂着脸想逃，她却竖起了大拇指："太有勇气了，我respect。"\n\n……等等，我社死居然还圈粉了？\n\n系统：「宿主，这就是社死的最高境界——**先社死自己，让所有人放下防备，然后再社死别人。**这叫什么？这叫置之死地而后生！」\n\n我觉得这个系统有病。\n\n但它说得好像又有道理。',
      notification: '[系统] 宿主领悟"自损八百，伤敌一千"之术！社死刺客等级提升！',
      statChanges: [{stat:'popularity', value:15},{stat:'creativity', value:10},{stat:'chill', value:10}],
      gainSkills: ['自爆社死术'],
      choices: [
        {text:'"好，让我用新方法重新对付王大壮！"', hint:'红色旋风卷土重来', next:'expose_ballet_basic', statChanges:[{stat:'assassination', value:10}]}
      ]
    },

    'enjoy_fame': {
      chapter: 3, art: '😎',
      text: '我决定先享受一下当名人的感觉。\n\n走到食堂，打饭阿姨居然多给我加了一个鸡腿：**"你就是那个社死王大壮的林小刀？来来来，阿姨奖励你。"**\n\n走到教学楼，低年级的学弟学妹追着我要签名：**"学长！你是我的偶像！能不能教我怎么社死别人？"**\n\n甚至有人在校门口摆了个摊，卖印着"社死刺客"的T恤，背面还印着王大壮踮脚尖的剪影。\n\n我正沉浸在名利的喜悦中，系统突然发出警报——\n\n「警告！宿主沉迷虚名，刺客本能正在退化！距离变成"网红废物"还有48小时！」\n\n好吧好吧，我继续干活还不行吗？\n\n但说实话，被人崇拜的感觉……真的挺上瘾的。',
      notification: '[系统] 提醒宿主：你是刺客，不是网红。虽然目前两者的界限确实有点模糊。',
      statChanges: [{stat:'popularity', value:20},{stat:'chill', value:-5},{stat:'assassination', value:-5}],
      choices: [
        {text:'收敛心神，认真对待下一个任务', hint:'不能飘', next:'second_target', statChanges:[{stat:'assassination', value:10}]},
        {text:'管他呢，先出名再说', hint:'你确定？', next:'internet_fame_path', statChanges:[{stat:'popularity', value:15},{stat:'assassination', value:-10}]}
      ]
    },

    'epiphany': {
      chapter: 3, art: '💡',
      text: '我突然明白了一件事。\n\n王大壮被社死之后，他真的跳了芭蕾，而且收获了掌声。这说明——**社死不是终点，是转折点。**\n\n真正的暗杀不是让对方社死然后消失。\n\n是让对方**在社死中重生**，变成一个更好的人。\n\n王大壮以前仗势欺人，现在他被全校接纳了，不需要再靠拳头证明自己。他可以光明正大地跳他喜欢的芭蕾，不需要再躲在舞蹈教室偷偷练。\n\n我望向天空，感觉自己领悟了社死的真谛。\n\n系统：「宿主……你在发什么呆？还有四个目标等你去社死呢。」\n\n好吧，感悟先放一放。干正事要紧。',
      notification: '[系统] 宿主领悟"社死禅意"！刺客等级大幅提升！但你真的想太多了。',
      statChanges: [{stat:'creativity', value:25},{stat:'assassination', value:15},{stat:'chill', value:10}],
      gainSkills: ['社死禅意'],
      achievement: '顿悟者',
      choices: [
        {text:'带着新的领悟迎接下一个目标', hint:'哲学刺客上线', next:'second_target', statChanges:[]}
      ]
    },

    'second_target': {
      chapter: 4, art: '🏢',
      text: '系统发布了第二个任务——\n\n**目标：钱多多，本市知名房地产老板。人称"钱扒皮"。**\n\n这人有多黑呢？他开发的楼盘，墙壁薄到能听见隔壁打呼噜，地下车库一下雨就变成游泳池，而业主维权的时候他直接叫保安把人轰出去，还嚣张地说："嫌不好你别住啊，有的是人排队买。"\n\n更可恶的是，他还经常在上电视的时候表演慈善家的戏码，捐款摆拍完就把钱收回去了。\n\n系统：「目标等级：高难度。此人脸皮厚度堪比城墙，普通社死手段可能无效。建议宿主做好充分准备。」\n\n我看了看自己的社死武器库，嘴角露出了邪恶的微笑。\n\n"钱多多？准备好接受社会主义的社死吧。"',
      notification: '[系统] 第二个目标已锁定：钱多多。危险等级：★★★★☆。建议宿主提升社死技能后再行动。',
      statChanges: [{stat:'assassination', value:5}],
      choices: [
        {text:'潜入钱多多的公司收集黑料', hint:'商业间谍模式启动', next:'infiltrate_company', statChanges:[{stat:'assassination', value:10}]},
        {text:'在网上发起业主联合维权行动', hint:'发动群众力量', next:'online_protest', statChanges:[{stat:'popularity', value:10},{stat:'creativity', value:5}]},
        {text:'直接去钱多多的发布会搞事', hint:'正面硬刚', next:'crash_press_conference', statChanges:[{stat:'chill', value:15}], condition:{stat:'chill', min:50}}
      ]
    },

    'internet_fame_path': {
      chapter: 4, art: '📱',
      text: '我注册了一个短视频账号，ID叫"社死刺客"，开始在网上发布各种社死挑战视频。\n\n第一个视频：在图书馆大声朗读言情小说，声情并茂地配上了悲壮的背景音乐。播放量：十万。\n\n第二个视频：穿着芭蕾舞裙在操场上跳舞（对，我买了裙子，为了艺术献身）。播放量：五十万。\n\n第三个视频：在学校食堂当众表演"用筷子吃面条但面条甩到了校长头上"。播放量：**两百万。**\n\n一周之内，我从一个默默无闻的高中生变成了全网最火的"社死博主"。\n\n系统每天都在疯狂发警报：「宿主！你已经偏离刺客路线了！你这是在当网红！」\n\n但我看着不断上涨的粉丝数，根本停不下来。\n\n直到有一天——我妈看到了我的视频。\n\n**她拿着拖鞋站在我房间门口，脸上的表情比任何暗杀目标都可怕。**\n\n"林小刀！你在网上干什么！！！"',
      notification: '[系统] 宿主已被终极BOSS（宿主母亲）锁定。建议立即投降。逃跑成功率：0%。',
      statChanges: [{stat:'popularity', value:30},{stat:'chill', value:-30},{stat:'assassination', value:-15}],
      choices: [
        {text:'"妈我错了！我好好当刺客行了吧！"', hint:'在母上大人面前一切反抗都是徒劳的', next:'second_target', statChanges:[{stat:'chill', value:20}]},
        {text:'继续当网红，跟全世界分享社死的快乐', hint:'你已经无药可救了', next:'internet_celebrity_ending', statChanges:[{stat:'popularity', value:20}]}
      ]
    },

    'infiltrate_company': {
      chapter: 5, art: '🕵️',
      text: '我假扮成外卖小哥，混进了钱多多的公司大楼。\n\n别问我一个高中生怎么假扮的外卖小哥——系统给我发了一套"外卖小哥完美伪装包"，连电动车和保温箱都有。\n\n我在大楼里转了一圈，听到了惊天大秘密——\n\n钱多多的秘书正在打电话："对，老板说那批建材用最便宜的，反正业主看不出来。什么？你问质检报告？造假就行了，反正之前也这么干的……"\n\n我躲在茶水间里录了音。\n\n然后我又潜入了钱多多的办公室。桌上放着一份文件，标题是：**《如何让业主闭嘴的100种方法》。** 翻开一看，从"雇水军骂"到"假装停电让他们没精力维权"应有尽有。\n\n更绝的是，我还发现了他的浏览器历史记录——\n\n**"如何在镜头前表演得像好人" "慈善捐款后如何把钱拿回来" "面对业主维权的标准耍赖话术"**\n\n我把所有证据都存进了手机。这弹药够炸翻一座城了。',
      notification: '[系统] 情报获取完成！目标黑料库存量：可炸翻整个房地产行业。建议宿主谨慎使用。',
      statChanges: [{stat:'assassination', value:20},{stat:'creativity', value:10}],
      gainSkills: ['商业渗透术'],
      choices: [
        {text:'把证据整理好发给媒体', hint:'让专业人士来放大伤害', next:'media_expose', statChanges:[{stat:'creativity', value:10}]},
        {text:'在钱多多的慈善发布会上当面揭穿', hint:'公开处刑·豪华版', next:'crash_press_conference', statChanges:[{stat:'chill', value:15},{stat:'popularity', value:10}]}
      ]
    },

    'online_protest': {
      chapter: 5, art: '✊',
      text: '我在网上发起了一个话题：**#钱多多楼盘受害者联盟#**\n\n号召所有被坑过的业主在网上分享自己的遭遇。\n\n效果远超预期——\n\n三天之内，话题阅读量突破五千万。业主们纷纷站出来爆料：\n\n"我家墙壁薄到能听见隔壁夫妻吵架的内容，现在他们要离婚了，我要不要负责？"\n"地下车库变游泳池就算了，上次还游出来一条鱼，不知道从哪里来的。"\n"交房三年了，电梯从没正常工作过。我家住十八楼，腿都快断了。"\n"钱多多在电视上哭穷说亏本了，但他上周刚提了一辆劳斯莱斯。"\n\n舆论一发不可收拾。记者们蜂拥而至，有关部门也开始调查。\n\n钱多多急了，发了律师函说要告我诽谤。\n\n我看着律师函，回复了一条消息：**"来告啊，我在法院等你。到时候大家一起来直播庭审。"**\n\n这条回复被转发了十万次。',
      notification: '[系统] 群众社死战术发动成功！目标已被舆论包围！但宿主也暴露了，注意自身安全。',
      statChanges: [{stat:'popularity', value:25},{stat:'creativity', value:15},{stat:'chill', value:10}],
      gainSkills: ['群众动员术'],
      choices: [
        {text:'趁热打铁，直接去找钱多多当面刚', hint:'他现在最虚弱', next:'crash_press_conference', statChanges:[{stat:'chill', value:10}]},
        {text:'继续在网上发酵，等他自己倒', hint:'静观其变', next:'media_expose', statChanges:[{stat:'creativity', value:5}]}
      ]
    },

    'crash_press_conference': {
      chapter: 5, art: '🎤',
      text: '钱多多召开了一场新闻发布会，声称要"澄清谣言"。\n\n他穿着一身定制西装，头发梳得油光锃亮，面对镜头一脸委屈地说："我只是一个普通的商人，不知道为什么有人要这样中伤我……"\n\n他眼角甚至挤出了一滴泪。\n\n就在这个感人的瞬间——我冲了进去。\n\n"钱多多先生！"我举着手机，声音响彻整个会场。"你说你是普通商人？那请问你那份《如何让业主闭嘴的100种方法》是什么？你在浏览器搜'慈善捐款后如何把钱拿回来'又是什么？"\n\n全场记者的镜头瞬间转向了我。\n\n钱多多的脸僵住了。那滴眼泪挂在脸上，滑稽得像一幅抽象画。\n\n我打开手机，把录音、截图、文件照片全部投屏到了会场的投影仪上。\n\n**三百个记者，五十个摄像机，全网直播。**\n\n钱多多的社死，是一场公开的、不可逆的、史诗级的处刑。',
      notification: '[系统] 史诗级社死暗杀完成！目标已被当场揭穿！全场社死效果MAX！宿主获得传说称号！',
      statChanges: [{stat:'popularity', value:30},{stat:'assassination', value:25},{stat:'chill', value:20},{stat:'creativity', value:15}],
      achievement: '社死传说',
      gainSkills: ['公开处刑·终极奥义'],
      choices: [
        {text:'功成身退，等待下一个目标', hint:'传奇还在继续', next:'third_target', statChanges:[{stat:'assassination', value:5}]},
        {text:'对着镜头摆个Pose再说一句骚话', hint:'不给这波操作画上句号吗', next:'legendary_quote', statChanges:[{stat:'popularity', value:10},{stat:'chill', value:5}]}
      ]
    },

    'media_expose': {
      chapter: 5, art: '📰',
      text: '我把收集到的所有证据整理好，发给了一个知名调查记者。\n\n记者看完材料后说了一句："小伙子，这料太猛了，你确定？"\n\n"确定。"\n\n三天后，一篇深度调查报道横空出世，标题是：**《钱多多：当慈善家外衣被扒下之后》**\n\n文章详细揭露了钱多多偷工减料、欺诈业主、虚假慈善的种种劣迹，配有铁证如山的文件、录音和截图。\n\n报道发出后四小时，阅读量破亿。钱多多的公司股票直接跌停，有关部门介入调查。\n\n钱多多发了一条微博：**"一切都是误会，我会给大家一个交代。"**\n\n网友的回复是：**"交代就是你什么时候进去？"**——这条回复被点赞了两百万次。\n\n钱多多，社会性死亡。而且这次不仅仅是社死，可能还要吃牢饭。\n\n系统：「宿主，你这次不是社死刺客，你是社死核弹。」',
      notification: '[系统] 间接社死完成！目标已被舆论和正义双重制裁！宿主战术评级：S级。',
      statChanges: [{stat:'creativity', value:20},{stat:'popularity', value:20},{stat:'assassination', value:20}],
      gainSkills: ['媒体操控术'],
      choices: [
        {text:'继续执行下一个任务', hint:'更大的舞台在等着你', next:'third_target', statChanges:[]}
      ]
    },

    'legendary_quote': {
      chapter: 5, art: '😎',
      text: '我对着镜头整理了一下衣领，用最深沉的声音说——\n\n"钱多多先生，你偷工减料的房子可能经不起风雨，但你的谎言，**更经不起真相。**"\n\n全场掌声雷动。\n\n然后我回头看了一眼钱多多，补充道——\n\n"对了，你下次再演慈善家，记得把浏览器历史记录清一下。那个'如何在镜头前表演得像好人'的搜索记录……**真的很扣分。**"\n\n记者们笑疯了。钱多多当场被急救人员抬走了——不是装的，是真的气到血压飙升。\n\n这段视频在网上播放了三亿次，被网友称为**"年度最帅社死现场"**。\n\n我的粉丝一夜之间从五千涨到了五百万。系统也没话说了。',
      notification: '[系统] 宿主……你刚才那段话说得确实挺帅的。系统承认，有点佩服。',
      statChanges: [{stat:'popularity', value:35},{stat:'chill', value:25},{stat:'assassination', value:10}],
      gainSkills: ['骚话连篇'],
      achievement: '金句王',
      choices: [
        {text:'带着五百万粉丝的期待继续下一个任务', hint:'你已经不是普通人了', next:'third_target', statChanges:[]}
      ]
    },

    'third_target': {
      chapter: 6, art: '🏫',
      text: '系统发布了第三个任务，但这次有点不一样——\n\n**目标：赵铁面，本市教育局长。**\n\n这个人表面上是个正直的官员，实际上利用职权给亲戚开后门入学，收受贿赂，还打压举报他的老师。最可恨的是，他居然把教育经费挪用来给自己修别墅。\n\n系统：「警告：此目标背景深厚，拥有强大的舆论控制能力和公关团队。正面社死风险极高。」\n\n「建议宿主联合之前的盟友一起行动。」\n\n我想了想自己的盟友名单——王大壮（校霸转行的芭蕾舞者）、网上五百万粉丝、还有一群热心的业主网友。\n\n嗯，阵容还不错。\n\n"赵铁面是吧？你以为铁面就能挡住社死吗？"',
      notification: '[系统] 高难度任务发布！目标：赵铁面。等级：★★★★★。本次任务可能涉及……政治社死。宿主准备好了吗？',
      statChanges: [{stat:'assassination', value:5}],
      choices: [
        {text:'联合王大壮和网友力量一起行动', hint:'团结就是力量', next:'unite_allies', statChanges:[{stat:'popularity', value:10},{stat:'creativity', value:5}]},
        {text:'独自深入虎穴收集证据', hint:'独狼行动', next:'solo_investigation', statChanges:[{stat:'assassination', value:15}], condition:{stat:'assassination', min:40}},
        {text:'利用网红身份在网上曝光', hint:'舆论战', next:'influencer_expose', statChanges:[{stat:'popularity', value:15}], condition:{stat:'popularity', min:40}}
      ]
    },

    'unite_allies': {
      chapter: 7, art: '🤜🤛',
      text: '我召集了我的"社死军团"。\n\n首先是王大壮，这位昔日的校霸现在的芭蕾爱好者，已经成为了学校里的正面网红。他负责在校内收集情报——赵铁面的侄子就在我们学校，仗着叔叔的权势横行霸道。\n\n然后是我的五百万粉丝。我在网上发了一条暗示性的消息：**"下一个社死目标，是一个让你孩子上不了好学校的坏人。敬请期待。"** 评论区的网友们已经猜到了方向。\n\n最后是之前认识的调查记者，他表示愿意继续合作，但提醒我要小心——赵铁面可不像钱多多那么好对付。\n\n我制定了一个计划：\n\n**第一步**：收集赵铁面以权谋私的证据\n**第二步**：在网上制造舆论压力\n**第三步**：在他主持的教育工作会议上，当众社死\n\n系统：「计划不错。但宿主，你有没有考虑过一个问题？」\n\n"什么问题？"\n\n「万一他也跳芭蕾怎么办？」\n\n"……系统你能不能正经点？"',
      notification: '[系统] 社死军团集结完毕！团队战斗力评估：社死值爆表。但系统的冷笑话也很让人社死。',
      statChanges: [{stat:'creativity', value:15},{stat:'popularity', value:10},{stat:'assassination', value:10}],
      gainSkills: ['团队社死战术'],
      choices: [
        {text:'开始执行第一步：收集证据', hint:'兵贵神速', next:'final_mission', statChanges:[]}
      ]
    },

    'solo_investigation': {
      chapter: 7, art: '🔦',
      text: '我决定单干。\n\n一个刺客，最好的搭档就是自己。我趁着周末，一路跟踪赵铁面，记录他的行踪。\n\n跟踪了三天，我发现了几个关键信息——\n\n第一，赵铁面每周三晚上都会去一个私人会所，和几个商人密会。\n\n第二，他的别墅最近在装修，用的全是进口建材——这和他的合法收入完全不符。\n\n第三，他有一个秘密的银行保险箱，地点在市中心的建设银行。\n\n最关键的发现是——我在他扔掉的垃圾里翻到了一张撕碎的纸条。拼起来一看，是一份学生入学名单，每个名字后面都标注了金额。\n\n**这就是他卖学位的证据。**\n\n系统：「宿主，你的翻垃圾桶技术已经超越了专业水平。」\n\n"在刺客界，这叫'情报搜集'。"',
      notification: '[系统] 独狼行动成功！关键证据已获取。宿主的暗杀能力已经从"废"进化到了"有点东西"。',
      statChanges: [{stat:'assassination', value:20},{stat:'creativity', value:10},{stat:'luck', value:10}],
      gainSkills: ['翻垃圾桶之术'],
      choices: [
        {text:'带着证据发起总攻', hint:'是时候了', next:'final_mission', statChanges:[{stat:'chill', value:10}]}
      ]
    },

    'influencer_expose': {
      chapter: 7, art: '📱',
      text: '我在网上发了一条视频。\n\n没有直接点名，但内容足够让知情人对号入座——\n\n"大家知道吗？有些人的孩子不用考试就能上重点学校，而你的孩子拼了命也挤不进去。不是因为他们的孩子更优秀，而是因为他们的家长……'投资'到位。"\n\n视频发出后，评论区炸了。家长们纷纷讲述自己被"关系户"挤掉名额的经历。\n\n话题热度持续飙升。赵铁面的公关团队开始反击，雇水军攻击我是在造谣生事。\n\n但我不慌。\n\n我又发了第二条视频：**"有人说我在造谣。没关系，真相不怕检验。给监管部门三天时间，如果他们不查，我就公布所有证据。"**\n\n这条视频被转发了五百万次。\n\n赵铁面坐不住了。他让人给我发了消息：**"小伙子，不要不识抬举。"**\n\n我回复：**"赵局长，不要做贼心虚。"',
      notification: '[系统] 舆论战已打响！目标开始反击！宿主进入高危状态！请做好防护措施！',
      statChanges: [{stat:'popularity', value:25},{stat:'chill', value:15},{stat:'creativity', value:10}],
      gainSkills: ['舆论操控术'],
      choices: [
        {text:'在约定时间公布所有证据', hint:'决战的号角已经吹响', next:'final_mission', statChanges:[{stat:'assassination', value:10}]}
      ]
    },

    'final_mission': {
      chapter: 8, art: '⚡',
      text: '决战时刻到了。\n\n赵铁面正在主持全市教育工作会议，会场里坐满了人，还有媒体在直播。\n\n我穿着西装（系统送的社死战袍），大摇大摆走进了会场。\n\n保安拦住我："你谁啊？"\n\n我亮出手机："我是全网粉丝五百万的'社死刺客'，赵局长应该认识我。"\n\n赵铁面在主席台上看到我，脸色瞬间变了。他给保安使了个眼色。\n\n但——我身后跟着王大壮和十个记者。保安们看着一米九的王大壮，选择了明智地让开。\n\n我走上台，拿起话筒：\n\n"赵局长，在您继续发表'教育公平'的演讲之前，我想让全场看看一份文件。"\n\n我打开投影——赵铁面的卖学位名单、银行流水、与商人的密会照片、以及他的豪华别墅装修清单，全部呈现在大屏幕上。\n\n**全场死寂。**\n\n赵铁面的嘴唇在发抖。他试图抢话筒，但王大壮一把拦住了他。\n\n"赵局长，"我说，"您说您是'铁面'，但铁面之下——是豆腐渣。"',
      notification: '[系统] 最终社死暗杀启动！目标防御系统已崩溃！宿主正在书写社死刺客的传说！',
      statChanges: [{stat:'assassination', value:30},{stat:'popularity', value:25},{stat:'chill', value:20},{stat:'creativity', value:20}],
      choices: [
        {text:'一鼓作气，完成终极社死', hint:'传说即将诞生', next:'legendary_assassin_ending', statChanges:[{stat:'assassination', value:10}], condition:{stat:'assassination', min:60}},
        {text:'等等，我选择宽恕他', hint:'以德报怨？', next:'mercy_ending', statChanges:[{stat:'chill', value:20}]},
        {text:'在社死的关键时刻……我妈打来了电话', hint:'终极BOSS登场', next:'mom_interrupt_ending', statChanges:[{stat:'luck', value:-20}]}
      ]
    },

    'legendary_assassin_ending': {
      chapter: 9, art: '🏆',
      text: '赵铁面当场被带走调查。教育系统的毒瘤被拔除，数十个被坑的家庭得到了公正。\n\n我的事迹在网上疯传——**"社死刺客一人单挑腐败局长"** 成为了年度最热门话题。\n\n王大壮的芭蕾舞视频也因此再次翻红，他后来真的考上了舞蹈学院，实现了梦想。\n\n钱多多的楼盘被责令整改，业主们终于有了正常的家。\n\n而我——林小刀，前世被电动车撞死在化粪池旁边的废柴刺客，这一世成了都市传说中的**"社死之影"**。\n\n没有人知道我的真实身份，但每当有不义之人在公众面前耀武扬威的时候，人们都会说——\n\n**"小心点，别被社死刺客盯上了。"**\n\n系统：「宿主，恭喜你。从一个连毒药都能自己喝错的废物，成为了传说级的社死刺客。你的名字，将被刻在尴尬名人堂上，永垂不朽。」\n\n我："……能不能换个说法？'尴尬名人堂'听起来不太威风啊。"\n\n系统：「那叫'社死殿堂'？」\n\n我："好多了。"',
      notification: '[系统] 传说结局达成！宿主成为"社死之影"，都市传说中的暗杀者！',
      statChanges: [{stat:'assassination', value:50},{stat:'popularity', value:50},{stat:'chill', value:50},{stat:'creativity', value:50}],
      ending: {
        title: '社死之影',
        art: '🏆',
        text: '你成为了都市传说中的社死刺客。没有人知道你是谁，但每个做坏事的人都活在被你社死的恐惧中。前世的化粪池之仇，终于得报。'
      }
    },

    'mercy_ending': {
      chapter: 9, art: '🙏',
      text: '就在赵铁面即将被社死的瞬间，我放下了手机。\n\n"赵局长，我给你一个选择。"\n\n全场屏息。\n\n"你可以继续被社死，从此万劫不复。或者——你主动坦白，退还不义之财，补偿那些被你坑害的家庭。"\n\n"如果你选择后者，我不会公开这些材料。但你必须做到。"\n\n赵铁面瘫坐在椅子上，沉默了整整一分钟。\n\n然后，他颤抖着站起来，对着全场鞠了一躬：**"对不起。"**\n\n我不知道他是不是真心悔过，但至少——那天之后，教育经费回到了正轨，被坑的家庭得到了补偿。\n\n系统：「宿主，你放弃了完美社死的机会。」\n\n"有时候，**最好的社死，是让对手自己社死自己。**"\n\n系统：「……这话说得，系统都要感动了。」',
      notification: '[系统] 仁慈结局达成！宿主展现了社死刺客的人性光辉。虽然少了一点爽感，但多了一点温度。',
      statChanges: [{stat:'chill', value:30},{stat:'creativity', value:20}],
      ending: {
        title: '社死仁者',
        art: '🕊️',
        text: '你选择了宽恕，给了对手一个改过自新的机会。社死的最高境界不是让对方万劫不复，而是让他在羞愧中重生。也许你不是一个好刺客，但你是一个好人。'
      }
    },

    'internet_celebrity_ending': {
      chapter: 9, art: '🌟',
      text: '我没有继续当刺客。\n\n我全身心投入了网红事业，"社死刺客"成了全网最火的IP。我出了书，上了综艺，还拍了自己的电影——《社死刺客：尴尬崛起》。\n\n王大壮在电影里扮演他自己，那场芭蕾舞的戏份成为了全片最高潮，观众每次看到这里都笑到岔气。\n\n钱多多被调查之后，我用他的故事做了系列纪录片，播放量破十亿。\n\n赵铁面？后来也被其他网友扒出来了，不需要我出手。\n\n系统每天都在叹气：「宿主，你本来可以成为传说级刺客的……」\n\n"系统啊，你想想看——一个刺客，被几百万人认识，这不就是**最高等级的社死**吗？"\n\n系统：「……」\n\n"我把自己社死给了全世界。**我就是自己的终极目标。**"\n\n系统：「……系统选择沉默。」',
      notification: '[系统] 网红结局达成！系统对宿主的选择表示：虽然偏题了，但好像也说得通？',
      statChanges: [{stat:'popularity', value:100},{stat:'chill', value:-50}],
      ending: {
        title: '社死网红',
        art: '🌟',
        text: '你没有成为传说中的刺客，而是成了全网最火的社死博主。你把自己活成了一个笑话，但这个笑话让几百万人笑了出来。也许这也是一种刺客——用快乐暗杀悲伤。'
      }
    },

    'mom_interrupt_ending': {
      chapter: 8, art: '📱',
      text: '就在我即将完成史诗级社死的关键时刻——\n\n我的手机响了。\n\n铃声是我妈设的，不能改，不能静音，不能拒接。\n\n是《小苹果》。\n\n**"你是我的小呀小苹果——"**\n\n这个铃声在庄严的会议厅里炸开，三百多人齐刷刷看向我。\n\n我手忙脚乱地接起电话：\n\n"妈！我在忙——"\n\n我妈的声音通过话筒传遍了整个会场：**"林小刀！你这次月考数学又不及格！你给我马上回来！考不上大学你去当什么刺客！你爸说要把你腿打断你知不知道！"**\n\n全场沉默了。\n\n然后，赵铁面笑了。记者们笑了。连保安都笑了。\n\n我是谁？我是社死刺客。\n\n但在我妈面前，我只是一个**数学不及格的倒霉孩子**。\n\n系统：「宿主……被终极BOSS一击秒杀。社死刺客……阵亡。」\n\n我的传说，终结在了我妈的一通电话里。',
      notification: '[系统] 妈妈来电！社死刺客的终极克星！宿主已阵亡！但至少……回家的晚饭应该很好吃。',
      statChanges: [{stat:'chill', value:-50},{stat:'luck', value:-30},{stat:'popularity', value:30}],
      ending: {
        title: '被妈制裁',
        art: '📱',
        text: '你的社死刺客生涯终结在了一通妈妈的电话里。在所有人面前被亲妈数落数学不及格，这是你经历过的最彻底的社死。但至少你不用当刺客了——你妈让你回家做作业。'
      }
    }
  }
};
