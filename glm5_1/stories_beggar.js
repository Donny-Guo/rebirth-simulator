/* ========== 丐帮帮主线 ========== */

var STORY_BEGGAR = {
  name: '重生之丐帮帮主',
  emoji: '\uD83E\uDD56',
  tagline: '开局一个碗，结局一个国',
  tags: [{text:'逆袭',color:'green'},{text:'搞笑',color:'gold'},{text:'江湖',color:'purple'}],
  locked: false,
  system: {
    name: '「乞丐模拟器系统」',
    desc: '检测到宿主身无分文，已自动激活乞丐系统。你的任务：从要饭开始，建立地下帝国。失败惩罚：碗都没了，只能用鞋子接钱。',
    skill: '卖惨 Lv.MAX'
  },
  baseStats: { streetwise: 20, survival: 50, reputation: 1, wealth: 0, foodie: 30 },
  baseSkills: ['卖惨 Lv.MAX'],
  startNode: 'start',
  nodes: {

    // ==================== 第一章：碗的觉醒 ====================
    'start': {
      chapter: 1,
      art: '\uD83E\uDD56',
      text: '我叫**张三**，昨天还是世界五百强的CEO，今天醒来发现自己躺在大街上，身上只剩一个**破碗**。\n\n不是吧？我穿越了？！\n\n我的「乞丐模拟器系统」已经激活了——等等，别人的系统都是什么「至尊帝皇系统」「无敌修仙系统」，为什么我的是**乞丐模拟器**？\n\n面前有两条街。左边是「富人街」，右边是「小吃街」。我的肚子在叫。',
      notification: '[系统] 欢迎来到乞丐模拟器！新手任务：用你的碗赚到第一笔钱。奖励：一个更破的碗。',
      statChanges: [{stat: 'reputation', value: -5}],
      choices: [
        { text: '去富人街碰碰运气', hint: '有钱人的钱比较好骗', next: 'rich_street' },
        { text: '先去小吃街填饱肚子', hint: '饭碗饭碗，先有饭再有碗', next: 'food_street' }
      ]
    },

    // ---------- 富人街路线 ----------
    'rich_street': {
      chapter: 1,
      art: '\uD83D\uDCB0',
      text: '富人街，两边都是豪车和奢侈品店。\n\n我端着破碗，走到一个穿金戴银的大妈面前："大姐，行行好……"\n\n大妈看了我一眼，从包里掏出一张**百元大钞**——然后自己买了个冰淇淋。\n\n"小伙子，我看你骨骼清奇，要不要听我一言？"\n\n大妈突然认真起来。她说她叫「王婆」，在这一带很有名。',
      notification: '[系统] 检测到NPC「王婆」——隐藏势力：富人街情报网。',
      statChanges: [{stat: 'streetwise', value: 5}],
      choices: [
        { text: '认真听王婆的话', hint: '有钱大妈的建议，不听白不听', next: 'wangpo_advice' },
        { text: '趁她说话顺走她的钱包', hint: '风险极大但收益极大', next: 'steal_wallet', statChanges: [{stat: 'wealth', value: 10}, {stat: 'reputation', value: -15}] }
      ]
    },

    'wangpo_advice': {
      chapter: 2,
      art: '\uD83D\uDCD6',
      text: '王婆神秘兮兮地凑过来："小伙子，你知道这条街上最赚钱的是什么吗？"\n\n"要饭？"\n\n"错！是**情感要饭**！"\n\n王婆传授了我她的独门绝技——「富人街乞讨三十六计」。核心思想是：**有钱人最缺的不是钱，是情感价值。**\n\n"你要让他们觉得给你钱是一种**灵魂救赎**。"\n\n我悟了。我大彻大悟了。\n\n这就是传说中的——**高端要饭**。',
      notification: '[系统] 习得技能「高端要饭术」！streetwise +10',
      statChanges: [{stat: 'streetwise', value: 10}, {stat: 'reputation', value: 5}],
      gainSkills: ['高端要饭术'],
      achievement: '拜师王婆',
      choices: [
        { text: '立刻实践高端要饭术', hint: '理论结合实践', next: 'rich_begging', statChanges: [{stat: 'wealth', value: 15}] },
        { text: '问王婆还有没有别的门路', hint: '想要更多', next: 'wangpo_secret' }
      ]
    },

    'steal_wallet': {
      chapter: 2,
      art: '\uD83D\uDCB3',
      text: '我的手以迅雷不及掩耳之势伸向王婆的包——\n\n"啪！"\n\n王婆一巴掌拍在我的手上，力道之大，我感觉我的**灵魂都在颤抖**。\n\n"小伙子，我王婆在富人街混了三十年，你这点小伎俩？"\n\n她从包里掏出一张名片：「王婆·富人街情报总管」。\n\n"要学正经本事就跟我走，别搞这些歪门邪道。"\n\n我揉着红肿的手，心想这老太太不好惹。',
      notification: '[系统] 被NPC暴打！reputation -10，但获得隐藏NPC好感。',
      statChanges: [{stat: 'reputation', value: -10}, {stat: 'survival', value: 5}],
      choices: [
        { text: '老老实实跟王婆学艺', hint: '打不过就加入', next: 'wangpo_advice' },
        { text: '趁机逃跑，去小吃街', hint: '三十六计走为上', next: 'food_street', statChanges: [{stat: 'streetwise', value: -5}] }
      ]
    },

    'rich_begging': {
      chapter: 2,
      art: '\uD83C\uDF1F',
      text: '我站到富人街最繁华的路口，深吸一口气——\n\n然后我开始**表演**。\n\n"各位，我曾经也是成功人士！我有过豪车，有过别墅！但一场金融风暴让我失去了一切！"\n\n"现在，我站在你们面前，不是在乞讨——我是在**见证人性的光辉**！"\n\n一个土豪擦着眼泪塞给我五百块："兄弟，加油！"\n\n一个贵妇直接摘下手镯给我："拿着，比我更需要它。"\n\n十五分钟，我的碗里装了**三千多块**。\n\n高端要饭术，恐怖如斯。',
      notification: '[系统] 乞讨收入突破三千！解锁成就「乞讨之王」',
      statChanges: [{stat: 'wealth', value: 25}, {stat: 'reputation', value: 15}],
      achievement: '乞讨之王',
      choices: [
        { text: '用这笔钱开一个乞讨培训班', hint: '授人以渔不如授人以碗', next: 'beggar_empire' },
        { text: '继续在富人街深耕', hint: '贪心是进步的动力', next: 'rich_empire', statChanges: [{stat: 'wealth', value: 10}] },
        { text: '把钱拿去小吃街挥霍', hint: '吃饱了才有力气要饭', next: 'food_street', statChanges: [{stat: 'foodie', value: 10}, {stat: 'wealth', value: -5}] }
      ]
    },

    'wangpo_secret': {
      chapter: 2,
      art: '\uD83D\uDD11',
      text: '王婆左右看了看，压低声音："其实……我背后有人。"\n\n"谁？"\n\n"「丐帮」——真正的丐帮，不是你想的那种。"\n\n王婆说，这个城市的地下世界有一个庞大的**乞丐组织**，控制着整个乞讨产业链。而她，是这个组织在富人街的**联络人**。\n\n"以你的天赋，加入丐帮，三年之内至少是个**分舵主**。"\n\n我吞了口口水。丐帮？分舵主？\n\n这剧本是不是跑偏了？',
      notification: '[系统] 隐藏势力「丐帮」浮出水面！解锁新剧情线。',
      statChanges: [{stat: 'streetwise', value: 15}, {stat: 'reputation', value: 5}],
      achievement: '丐帮秘闻',
      choices: [
        { text: '加入丐帮！', hint: '帮主之路从这里开始', next: 'join_beggar_gang' },
        { text: '我先考虑考虑，先去要饭', hint: '稳一手', next: 'rich_begging' }
      ]
    },

    // ---------- 小吃街路线 ----------
    'food_street': {
      chapter: 1,
      art: '\uD83C\uDF5C',
      text: '小吃街，烟火气十足。\n\n烤串的香味、煎饼的滋滋声、麻辣烫的蒸汽……\n\n我的肚子发出了一声**惊天动地**的咕噜声。\n\n旁边的大叔转过头来："兄弟，你这肚子叫得比我家的喇叭还响。"\n\n我低头看了看我的碗，又看了看满街的美食。\n\n一个大胆的想法浮现在我的脑海：我能不能用「试吃」的名义白嫖一顿？',
      notification: '[系统] 检测到大量食物！foodie本能正在觉醒。',
      statChanges: [{stat: 'foodie', value: 5}],
      choices: [
        { text: '装美食博主试吃白嫖', hint: '我可是有"卖惨 Lv.MAX"的人', next: 'food_blogger' },
        { text: '用碗帮摊主收钱换吃的', hint: '劳动换食物，堂堂正正', next: 'help_stall', statChanges: [{stat: 'survival', value: 5}] }
      ]
    },

    'food_blogger': {
      chapter: 2,
      art: '\uD83D\uDCF1',
      text: '我清了清嗓子，端着碗走到一个煎饼摊前：\n\n"老板！我是**百万粉丝美食博主**，今天来探店！能不能来一个你的招牌煎饼？我给你曝光！"\n\n老板上下打量了我——破碗、脏衣服、乱糟糟的头发。\n\n"你？百万粉丝？"\n\n"不信你看我——"\n\n我掏出手机。没有手机。我穿越了。\n\n"看我的**气场**！"\n\n沉默了三秒后，老板居然被我的**无耻程度**震慑住了，默默地给我摊了一个加蛋加肠的煎饼。\n\n"拿去，别在我门口躺着就行。"\n\n吃货的胜利！',
      notification: '[系统] 美食白嫖成功！习得技能「装腔作势」',
      statChanges: [{stat: 'foodie', value: 15}, {stat: 'streetwise', value: 5}],
      gainSkills: ['装腔作势'],
      choices: [
        { text: '继续白嫖下家', hint: '吃到扶墙出', next: 'food_emperor', statChanges: [{stat: 'foodie', value: 10}] },
        { text: '和煎饼老板混熟', hint: '这个人脉值得经营', next: 'jianbing_boss' }
      ]
    },

    'help_stall': {
      chapter: 2,
      art: '\uD83E\uDDD4',
      text: '我走到一个烧烤摊前："老板，我帮你收碗端盘子，你管饭行不？"\n\n老板叫**老赵**，是个壮汉，看起来不太好惹。但他看了看我手里的碗，突然笑了：\n\n"你这碗不错，专业。行，你帮我收钱，我管你吃到饱。"\n\n就这样，我用一个下午的时间，成为了这条小吃街最勤快的**临时工**。\n\n老赵的烧烤实在太好吃了。我一边干活一边偷吃，老赵装没看见。\n\n"小伙子，你不是普通的乞丐吧？"\n\n"为什么这么说？"\n\n"普通乞丐不会**一边吃串一边优化我的收银流程**。"',
      notification: '[系统] NPC「老赵」好感度上升！解锁隐藏剧情。',
      statChanges: [{stat: 'foodie', value: 10}, {stat: 'survival', value: 10}, {stat: 'streetwise', value: 5}],
      achievement: '吃货临时工',
      choices: [
        { text: '和老赵合伙开店', hint: '打工是不可能打工的，合伙还差不多', next: 'partner_shop' },
        { text: '利用小吃街建立情报网', hint: '哪里有八卦，哪里就有江湖', next: 'food_intel', statChanges: [{stat: 'streetwise', value: 10}] }
      ]
    },

    'food_emperor': {
      chapter: 2,
      art: '\uD83D\uDC51',
      text: '我在小吃街一路白嫖过去——煎饼、烤串、臭豆腐、奶茶、炸鸡……\n\n每到一家，我就使出浑身解数：装美食博主、装投资人、装美食大赛评委、装失忆的富二代……\n\n没有一家能挡住我的**无耻攻势**。\n\n最后，小吃街的摊主们聚在一起开了个紧急会议。\n\n"这人到底是谁？"\n\n"不知道，但他的**要饭技术**是我见过最先进的。"\n\n"要不要让他当我们的**小吃街代言人**？"\n\n等一下，我刚才是不是**不小心征服了整条小吃街**？',
      notification: '[系统] 小吃街征服！reputation +20，习得「美食称霸术」',
      statChanges: [{stat: 'foodie', value: 20}, {stat: 'reputation', value: 20}],
      gainSkills: ['美食称霸术'],
      achievement: '小吃街之王',
      choices: [
        { text: '接受代言，统一小吃街', hint: '餐饮帝国从要饭开始', next: 'food_kingdom' },
        { text: '利用小吃街资源进军富人街', hint: '胃口更大了', next: 'rich_street', statChanges: [{stat: 'wealth', value: 10}] }
      ]
    },

    'jianbing_boss': {
      chapter: 3,
      art: '\uD83E\uDD57',
      text: '煎饼老板叫**阿庆**，原来是个退役的特种兵，因为受伤退役后开了一家煎饼摊。\n\n"我做的不是煎饼，是**艺术品**。"\n\n他一边说一边把面糊甩出一个完美的圆形。\n\n我们聊了一下午，发现彼此都有**不为人知的过去**。他给我讲了他当兵的故事，我给他编了一个我当CEO的故事（反正他也分不清真假）。\n\n"兄弟，我觉得你是个干大事的人。"\n\n"何以见得？"\n\n"因为能**白嫖还能白嫖得这么理直气壮**的人，绝对不简单。"',
      notification: '[系统] 获得强力伙伴「阿庆」！解锁联合技能「煎饼大阵」',
      statChanges: [{stat: 'streetwise', value: 10}, {stat: 'survival', value: 10}],
      gainSkills: ['煎饼大阵'],
      achievement: '特种兵煎饼',
      choices: [
        { text: '和阿庆一起打造煎饼帝国', hint: '战友+煎饼=无敌', next: 'partner_shop' },
        { text: '让阿庆当保镖，去征服富人街', hint: '有保镖的要饭，高端大气', next: 'rich_begging', statChanges: [{stat: 'survival', value: 15}] }
      ]
    },

    // ==================== 第三章：丐帮崛起 ====================
    'join_beggar_gang': {
      chapter: 3,
      art: '\uD83D\uDC68\u200D\uD83E\uDDD4',
      text: '王婆带我来到一条偏僻的巷子，敲了三下门，两下长一下短。\n\n门开了。\n\n里面居然是一个装修豪华的**地下会所**！大理石地板、水晶吊灯、真皮沙发。\n\n"欢迎来到丐帮总部。"\n\n一个穿着破烂外面、里面是阿玛尼的中年男人走了过来。\n\n"我是「丐帮」现任帮主——**苏乞儿第七代传人**，你可以叫我**九袋长老**。"\n\n他拿出九个爱马仕袋子排成一排。\n\n"这就是我的**九袋**。"\n\n我整个人都震惊了。',
      notification: '[系统] 进入丐帮总部！发现丐帮远比想象中强大。',
      statChanges: [{stat: 'reputation', value: 10}, {stat: 'streetwise', value: 10}],
      achievement: '初入丐帮',
      choices: [
        { text: '展示高端要饭术震撼全场', hint: '用实力说话', next: 'impress_gang', condition: {stat: 'streetwise', min: 30} },
        { text: '低调观察，摸清丐帮底细', hint: '城府深才能走得远', next: 'spy_gang', condition: {stat: 'streetwise', min: 20} },
        { text: '直接问能不能当帮主', hint: '年轻人就要有梦想', next: 'ask_leader', statChanges: [{stat: 'reputation', value: -10}] }
      ]
    },

    'impress_gang': {
      chapter: 3,
      art: '\uD83D\uDD25',
      text: '我站在丐帮大堂中央，深吸一口气。\n\n"各位，给我三十秒。"\n\n我使出了**高端要饭术**的精髓——先讲故事，再讲情怀，最后升华到哲学高度。\n\n"各位兄弟姐妹，我们乞讨，不是为了钱——我们是在**丈量这个世界的温度**！每一次伸碗，都是一次灵魂的叩问！"\n\n全场沉默。\n\n然后——\n\n"说得好！！"\n\n"帮主候选人！"\n\n"太有才了！"\n\n九袋长老激动得把九个爱马仕袋子都扔到了空中。\n\n"从今天起，你就是丐帮的**右护法**！"\n\n我本来只是想混口饭吃的啊！',
      notification: '[系统] 晋升丐帮右护法！reputation +25，解锁丐帮管理权限。',
      statChanges: [{stat: 'reputation', value: 25}, {stat: 'wealth', value: 15}, {stat: 'streetwise', value: 10}],
      achievement: '丐帮右护法',
      choices: [
        { text: '利用丐帮资源建立商业帝国', hint: '要饭要出上市公司的境界', next: 'beggar_empire' },
        { text: '发动丐帮政变当帮主', hint: '权力使人疯狂', next: 'gang_coup', condition: {stat: 'streetwise', min: 50} }
      ]
    },

    'spy_gang': {
      chapter: 3,
      art: '\uD83D\uDD0D',
      text: '我没有急着表现自己，而是在丐帮总部里四处溜达。\n\n这一溜达，我发现了一个**惊天大秘密**——\n\n丐帮不仅是一个乞讨组织，它实际上控制着城市的**地下经济**：废品回收、地下情报、灰色物流……甚至还有自己的**财务部门**和**HR部门**。\n\n帮主办公室的门缝里，我看到墙上挂着一幅字：「**以碗治国**」。\n\n这个丐帮，比我想象的要恐怖一万倍。\n\n我悄悄记下了组织架构图，心里已经有了一个**大胆的计划**。',
      notification: '[系统] 洞察丐帮全貌！scheming技能觉醒。',
      statChanges: [{stat: 'streetwise', value: 20}, {stat: 'survival', value: 5}],
      gainSkills: ['城府术'],
      achievement: '丐帮真相',
      choices: [
        { text: '利用情报逐步架空帮主', hint: '权谋路线启动', next: 'gang_coup', condition: {stat: 'streetwise', min: 40} },
        { text: '先立功再上位，稳扎稳打', hint: '不急，先混级别', next: 'impress_gang' }
      ]
    },

    'ask_leader': {
      chapter: 3,
      art: '\uD83D\uDE05',
      text: '"帮主？就你？"九袋长老差点把茶喷出来。\n\n"对啊，我看你这位置挺空的。"\n\n"我坐着的啊！"\n\n"你的心是空的。"\n\n全场再次沉默。\n\n九袋长老盯着我看了十秒钟，然后突然大笑起来：\n\n"好！有胆量！我最欣赏不要脸的人！"\n\n"在我们的丐帮，不要脸是**第一美德**！"\n\n"从今天起，你先当个**九袋长老实习生**。九袋你只有一袋，还是塑料的。"\n\n他丢给我一个白色塑料袋。\n\n"慢慢来，年轻人。"',
      notification: '[系统] 成为丐帮实习生！获得道具「白色塑料袋」',
      statChanges: [{stat: 'reputation', value: 5}, {stat: 'streetwise', value: 5}],
      achievement: '塑料袋长老',
      choices: [
        { text: '努力工作争取升职', hint: '打工人打工魂', next: 'impress_gang', statChanges: [{stat: 'streetwise', value: 5}] },
        { text: '偷学帮主的管理秘籍', hint: '偷师学艺', next: 'spy_gang' }
      ]
    },

    // ==================== 第四章：丐帮帝国 ====================
    'beggar_empire': {
      chapter: 4,
      art: '\uD83C\uDFDB\uFE0F',
      text: '我利用丐帮的情报网和人力，开始了一场前所未有的**商业模式革命**。\n\n第一步：把乞丐们组织起来，按区域分工——有人负责地铁，有人负责商场，有人负责寺庙。\n\n第二步：建立**乞丐数据系统**——记录每个地段的客流量、施舍金额、最佳乞讨时段。\n\n第三步：推出**VIP会员制**——月付五十块，乞丐们保证不在你面前出现。\n\n不到三个月，丐帮的月收入突破了**一百万**。\n\n九袋长老看着财务报表，手里的茶杯都在抖：\n\n"这比我当年卖**保健品**还赚钱啊！"',
      notification: '[系统] 丐帮月入百万！wealth +30，解锁「丐帮帝国」路线。',
      statChanges: [{stat: 'wealth', value: 30}, {stat: 'reputation', value: 20}, {stat: 'streetwise', value: 10}],
      gainSkills: ['商业模式革新'],
      achievement: '丐帮企业家',
      choices: [
        { text: '将丐帮合法化，成立慈善基金会', hint: '洗白才是王道', next: 'charity_king' },
        { text: '利用财富和势力竞选市长', hint: '从乞丐到市长', next: 'mayor_run', condition: {stat: 'wealth', min: 50} },
        { text: '继续当个快乐的乞丐', hint: '有钱了也不想上班', next: 'happy_beggar' }
      ]
    },

    'gang_coup': {
      chapter: 4,
      art: '\uD83D\uDD31',
      text: '经过数月的暗中布局，我终于在一个月黑风高的夜晚，召开了丐帮全体大会。\n\n"各位兄弟姐妹！今天我站在这里，不是为了夺权——"\n\n"那你是为了什么？"\n\n"是为了让每一个乞丐，都能**站着把钱挣了**！"\n\n我展示了我精心制作的PPT——丐帮五年发展规划、乞丐福利体系、退休养老金计划。\n\n九袋长老看完后，沉默了很久。\n\n然后他缓缓站起来，脱下了自己的九个爱马仕袋子。\n\n"帮主之位，传给你了。"\n\n"我老了。丐帮需要**有梦想的年轻人**。"\n\n就这样，我，张三，一个穿越过来的前CEO，成为了丐帮第**一百零八代**帮主。\n\n我的就职典礼，每人发了一个新碗。',
      notification: '[系统] 成为丐帮帮主！全属性大幅提升！',
      statChanges: [{stat: 'wealth', value: 25}, {stat: 'reputation', value: 30}, {stat: 'streetwise', value: 15}, {stat: 'survival', value: 10}],
      gainSkills: ['帮主威压'],
      achievement: '丐帮帮主',
      choices: [
        { text: '带领丐帮征服世界', hint: '帮主的野心', next: 'world_conquest' },
        { text: '用丐帮力量做慈善', hint: '丐帮侠义心肠', next: 'charity_king' },
        { text: '既然当帮主了，那就竞选总统吧', hint: '格局打开', next: 'mayor_run', condition: {stat: 'reputation', min: 50} }
      ]
    },

    'food_kingdom': {
      chapter: 4,
      art: '\uD83C\uDF7D\uFE0F',
      text: '我整合了小吃街的所有资源，创建了一个**小吃帝国**——"碗碗香餐饮集团"。\n\n名字是我的碗起的灵感。\n\n我从一碗开始，到十碗，到一百碗，到现在拥有了**整条小吃街**的特许经营权。\n\n阿庆负责产品研发（他的煎饼已经是招牌），老赵负责供应链（他的烧烤供应链覆盖全市）。\n\n而我？我是集团的**CEO兼首席品鉴师**。\n\n说白了就是**吃白食的最高级别**。\n\n我们的广告语是：**"碗碗香——从乞丐到食神，只差一碗。"**\n\n三个月后，我们开了第一家分店。半年后，我们开了十家。一年后——我们上市了。\n\n我的碗，被放在了公司大厅的玻璃柜里，标签写着：**"创业神器·镇店之宝"**。',
      notification: '[系统] 餐饮帝国崛起！wealth +40，foodie +20',
      statChanges: [{stat: 'wealth', value: 40}, {stat: 'foodie', value: 20}, {stat: 'reputation', value: 20}],
      gainSkills: ['餐饮帝国管理术'],
      achievement: '从碗到帝国',
      choices: [
        { text: '用餐饮帝国的资金进军政界', hint: '商而优则仕', next: 'mayor_run', condition: {stat: 'wealth', min: 60} },
        { text: '开一家丐帮主题餐厅', hint: '不忘初心', next: 'happy_beggar', statChanges: [{stat: 'foodie', value: 10}] }
      ]
    },

    'partner_shop': {
      chapter: 3,
      art: '\uD83C\uDF73',
      text: '我和阿庆、老赵合资开了一家店，名字叫——\n\n**"碗来碗去"**。\n\n阿庆负责煎饼，老赵负责烧烤，我负责——坐在门口**要饭兼揽客**。\n\n你没看错，我的商业策略就是：在门口要饭，路人觉得可怜进来吃东西，吃完发现——这老板就是门口那个乞丐？\n\n**反差萌营销**，直接爆了。\n\n我们的店成了网红打卡地，排队排到了隔壁街。\n\n"这个老板太会玩了！"\n\n"要饭要出商业头脑，这是什么爽文剧本！"\n\n我知道这听起来很离谱。但更离谱的是——它是真的。',
      notification: '[系统] 网红店铺爆火！wealth +20，reputation +15',
      statChanges: [{stat: 'wealth', value: 20}, {stat: 'reputation', value: 15}, {stat: 'foodie', value: 10}],
      achievement: '碗来碗去',
      choices: [
        { text: '扩大规模，征服整条小吃街', hint: '连锁店搞起来', next: 'food_kingdom' },
        { text: '把店开到富人街去', hint: '降维打击', next: 'rich_empire', statChanges: [{stat: 'wealth', value: 10}] }
      ]
    },

    'food_intel': {
      chapter: 3,
      art: '\uD83D\uDCCB',
      text: '我在小吃街混久了，发现了一个秘密——\n\n**小吃街是这个城市最大的情报集散地。**\n\n每一个摊主都认识几百个顾客，每个顾客都有故事。我只需要在各个摊位安插我的"线人"（其实就是多给几个乞丐免费煎饼），就能掌握整个城市的**信息网络**。\n\n三个月后，我手握全城最强大的**情报网**。\n\n市长明天要吃什么早餐？我知道。\n\n哪个富商要破产了？我知道。\n\n隔壁老王家的猫叫什么名字？我也知道。\n\n有人开始叫我——**"碗仙"**。\n\n因为我的碗，好像什么都能装。',
      notification: '[系统] 情报网建成！习得技能「情报之王」',
      statChanges: [{stat: 'streetwise', value: 20}, {stat: 'reputation', value: 15}],
      gainSkills: ['情报之王'],
      achievement: '碗仙',
      choices: [
        { text: '利用情报网加入丐帮', hint: '丐帮最需要情报人才', next: 'join_beggar_gang' },
        { text: '自己组建势力', hint: '为什么要加入别人？', next: 'beggar_empire' },
        { text: '把情报卖给有钱人', hint: '知识就是金钱', next: 'rich_empire', statChanges: [{stat: 'wealth', value: 20}] }
      ]
    },

    'rich_empire': {
      chapter: 4,
      art: '\uD83C\uDFE0',
      text: '我在富人街的生意越做越大，从单纯要饭，发展到——\n\n**情感咨询要饭**：一边要饭一边给有钱人做心理咨询。\n\n**风水要饭**：一边要饭一边看面相（全靠编）。\n\n**高端定制要饭**：根据客户需求，定制乞讨剧本。\n\n最后我居然在富人街开了一家**"体验式要饭中心"**——让有钱人体验一天乞丐生活，收费三千块一位。\n\n预约已经排到明年了。\n\n有个富豪体验完之后哭着说："原来当乞丐这么快乐，我为什么要当有钱人？"\n\n这个世界疯了。还是我疯了？\n\n也许两者都是。',
      notification: '[系统] 富人街帝国建成！wealth +35',
      statChanges: [{stat: 'wealth', value: 35}, {stat: 'reputation', value: 15}, {stat: 'streetwise', value: 10}],
      achievement: '要饭大亨',
      choices: [
        { text: '用财富和声望进军丐帮', hint: '有钱才能任性', next: 'join_beggar_gang' },
        { text: '竞选市长！', hint: '有钱人的终极目标', next: 'mayor_run', condition: {stat: 'wealth', min: 50} },
        { text: '够了，我只想快乐要饭', hint: '不忘初心', next: 'happy_beggar' }
      ]
    },

    // ==================== 第五章：终极抉择 ====================
    'charity_king': {
      chapter: 5,
      art: '\uD83E\uDDF8',
      text: '我用丐帮的资源和我积累的财富，成立了全国最大的**流浪者互助基金会**——"碗碗基金会"。\n\n口号是：**"每一个碗，都值得装满。"**\n\n我建立了流浪者收容所、职业培训中心、心理咨询热线。\n\n全国的新闻都在报道我——\n\n"从乞丐到慈善家，这个男人的故事感动了全中国。"\n\n"他用一个碗，端起了千万人的希望。"\n\n王婆在电视上哭着说："我就知道这孩子有出息！"\n\n九袋长老捐出了他所有的爱马仕袋子做义卖。\n\n我站在基金会大楼前，手里还端着当初那个破碗。\n\n这个碗从来没装满过。但它装下了整个世界。',
      notification: '[系统] 慈善路线达成！终极结局解锁！',
      statChanges: [{stat: 'reputation', value: 30}, {stat: 'wealth', value: -20}],
      achievement: '碗碗大善人',
      choices: [
        { text: '继续慈善之路', hint: '这条路的终点是……', next: 'ending_charity' }
      ]
    },

    'mayor_run': {
      chapter: 5,
      art: '\uD83C\uDFDB\uFE0F',
      text: '我宣布竞选市长的那天，全城轰动。\n\n"一个乞丐要当市长？"\n\n"他的竞选资金是靠要饭攒的！"\n\n我的竞选口号是：**"我当过乞丐，所以我最懂底层。"**\n\n我的竞选策略：丐帮全员出动帮我拉票，小吃街给我免费打广告，王婆在富人街帮我搞定了所有有钱人的支持。\n\n辩论会上，对手嘲笑我："你一个乞丐，凭什么当市长？"\n\n我端起碗，微笑着说：\n\n"因为这个碗装过所有人的故事。你们只看到了富人，**而我看过了所有人。**"\n\n全场起立鼓掌。\n\n我以**百分之八十九**的得票率当选。\n\n宣誓就职那天，我把碗放在了办公桌上。\n\n"这就是我的**权杖**。"',
      notification: '[系统] 市长路线达成！政治巅峰！',
      statChanges: [{stat: 'reputation', value: 30}, {stat: 'wealth', value: 20}, {stat: 'streetwise', value: 15}],
      achievement: '乞丐市长',
      choices: [
        { text: '当个好市长', hint: '从碗开始，以国为终', next: 'ending_mayor' },
        { text: '市长的上面还有什么？', hint: '权力的尽头是……', next: 'world_conquest', condition: {stat: 'reputation', min: 60} }
      ]
    },

    'world_conquest': {
      chapter: 6,
      art: '\uD83C\uDF0D',
      text: '你问我怎么征服世界的？\n\n说来话长。\n\n当了市长之后，我用丐帮的情报网发现了一个秘密——全世界每个城市都有一个**地下丐帮组织**。\n\n我花了三年时间，用一碗泡面的功夫（其实是三年），把全球丐帮全部统一了。\n\n"全球乞丐联合会"，我是**终身理事长**。\n\n然后我发现一个可怕的事实——\n\n乞丐的情报网覆盖了全球每一个角落。没有任何秘密能逃过我们的碗。\n\n各国领导人开始找我喝咖啡。联合国的座上宾是我。\n\n某天，一个国家元首对我说：\n\n"张先生，你虽然没有军队，但你掌控着世界上最强大的**情报网络**。某种程度上，你比任何人都强大。"\n\n我低头看了看手里的破碗。\n\n"是啊。谁能想到呢？"',
      notification: '[系统] 世界征服路线达成！你已经是地下之王了！',
      statChanges: [{stat: 'reputation', value: 25}, {stat: 'streetwise', value: 20}, {stat: 'wealth', value: 30}],
      gainSkills: ['全球情报网'],
      achievement: '地下皇帝',
      choices: [
        { text: '从幕后操控世界', hint: '王者不露面', next: 'ending_world' },
        { text: '公布一切，回归要饭', hint: '巅峰之后是归零', next: 'happy_beggar' }
      ]
    },

    'happy_beggar': {
      chapter: 5,
      art: '\u2600\uFE0F',
      text: '经历了这一切之后，我做出了一个所有人都意想不到的决定——\n\n我什么都不当了。\n\n不当帮主，不当CEO，不当市长。\n\n我端着我的破碗，回到了最初的那条街。\n\n阳光正好，微风不燥。\n\n我在路边一坐，碗往前面一放。\n\n"行行好，给点吧。"\n\n路过的阿庆塞给我一个煎饼："帮主……不，三哥，你这是？"\n\n"在体验生活。"\n\n"你什么时候不是在体验生活了？"\n\n我笑了笑，咬了一口煎饼。\n\n**真的，一个碗，就够了。**\n\n有时候，最简单的快乐，就是坐在路边，晒着太阳，什么也不想。\n\n碗里有饭，心里有光。',
      notification: '[系统] 你找到了最珍贵的答案——快乐本身就是最大的财富。',
      statChanges: [{stat: 'survival', value: 20}, {stat: 'foodie', value: 10}],
      achievement: '看破红尘的乞丐',
      choices: [
        { text: '就这样，一直要下去吧', hint: '最简单也最难的结局', next: 'ending_happy' }
      ]
    },

    // ==================== 结局 ====================
    'ending_charity': {
      chapter: 99,
      art: '\uD83C\uDF1F',
      text: '十年后——\n\n"碗碗基金会"已经帮助了超过**一百万人**重新站起来。\n\n我的故事被拍成了电影，票房五十亿。\n\n电影的名字叫——**「一个碗的奇迹」**。\n\n首映礼上，主持人问我："张先生，您觉得是什么让您走到了今天？"\n\n我端起那个已经补了七次的破碗，笑着说：\n\n"是这个碗。它教会我——**空，才能装下一切。**"\n\n台下掌声雷动。\n\n而我心里知道，这一切的起点，不过是一个穿越过来的倒霉蛋，在大街上醒来，发现自己只剩一个碗。\n\n有时候，人生最伟大的旅程，就是从**一无所有**开始。',
      ending: {
        title: '大爱无疆·碗碗奇迹',
        art: '\uD83C\uDFC6',
        text: '你用一碗之力，改变了百万人的命运。从乞丐到慈善家，你的名字被写进了历史。那个破碗，被收藏在国家博物馆里，标签上写着："这个碗装过整个世界的温暖。"'
      }
    },

    'ending_mayor': {
      chapter: 99,
      art: '\uD83D\uDCDC',
      text: '八年市长任期结束——\n\n我被誉为"**史上最受欢迎的市长**"。\n\n在我任期内，流浪者减少了百分之九十，城市建设投入翻了两倍，市民幸福指数全国第一。\n\n卸任那天，无数市民自发来到市政厅门口，手里都端着一个碗。\n\n"市长，我们用碗来送你！"\n\n我站在台阶上，看着满城的碗，笑得像个孩子。\n\n后来有记者问我："张市长，您退休后打算做什么？"\n\n"要饭啊。"\n\n"……"\n\n"开玩笑的。"\n\n"其实也不是开玩笑。"',
      ending: {
        title: '从碗到城·乞丐市长',
        art: '\uD83C\uDFDB\uFE0F',
        text: '你用一个碗丈量了这座城市的每一个角落，用乞丐的视角看到了所有人看不到的问题。历史会记住这个最离谱的市长——他用最卑微的方式，做了最伟大的事。'
      }
    },

    'ending_world': {
      chapter: 99,
      art: '\uD83C\uDF0E',
      text: '没有人知道我的名字。\n\n在世界领导人峰会上，我坐在最后一排，穿着一件旧外套，手里端着一个碗。\n\n记者们以为我是混进来的乞丐。\n\n但每一个国家的元首，在发言之前，都会偷偷看一眼我的碗——那里面装着他们**最不想被人知道的秘密**。\n\n我是这个世界上最强大的人，也是最透明的人。\n\n因为我什么都没有，所以什么都不怕失去。\n\n一个碗，一张嘴，一颗无耻的心。\n\n足矣。',
      ending: {
        title: '地下之王·碗控全球',
        art: '\uD83D\uDD31',
        text: '你没有军队，没有国家，没有任何正式身份。但你掌控着全球最庞大的地下情报网络。你坐在世界舞台的阴影里，用一只破碗，端起了整个地球。历史上最神秘也最强大的统治者——没有人知道他的名字，但所有人都知道那个碗。'
      }
    },

    'ending_happy': {
      chapter: 99,
      art: '\u2600\uFE0F',
      text: '很多年后——\n\n我还在那条街上。\n\n碗换过几次了，但永远是那个最普通的破碗。\n\n每天早上，阿庆给我送煎饼，老赵给我送烤串。\n\n王婆偶尔来找我聊天，说她又在富人街发掘了新人才。\n\n九袋长老已经退休了，每天在公园打太极，打累了就端着碗要一杯茶。\n\n而我？\n\n我还是坐在老地方，晒着太阳，偶尔要要饭。\n\n有人认出我："你是不是那个……慈善家？那个市长？那个……"\n\n我笑着摇摇头：\n\n"不，我只是个**要饭的**。"\n\n"\uD83E\uDD56"\n\n碗在手里，阳光在脸上。\n\n这就是——\n\n**开局一个碗，结局一个碗。**\n\n但中间装过的那些故事，够我笑一辈子。',
      ending: {
        title: '大道至简·一碗一生',
        art: '\uD83E\uDD56',
        text: '你经历了权力、财富、荣耀，最终选择回到起点。因为你知道，真正的幸福不在于你拥有了什么，而在于你是否还记得自己是谁。你是最富有的乞丐，也是最快乐的穷人。碗还是那个碗，但你已经不是当初的你——或者说，你终于变回了最初的自己。'
      }
    }

  }
};

// 注册到全局故事库
if (typeof STORIES === 'undefined') var STORIES = {};
STORIES.beggar = STORY_BEGGAR;
