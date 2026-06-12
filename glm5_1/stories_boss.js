var STORY_BOSS = {
  name: '重生之我是千亿霸总',
  emoji: '💼',
  tagline: '上一秒还在搬砖，下一秒坐拥千亿帝国',
  tags: [{text:'都市',color:'blue'},{text:'爽文',color:'red'},{text:'商战',color:'gold'}],
  locked: false,
  system: {
    name: '「霸总养成系统」',
    desc: '检测到宿主具备"面瘫"天赋，已激活霸总系统。任务：成为全宇宙最霸道总裁。失败惩罚：永远只会说"女人你成功引起了我的注意"。',
    skill: '壁咚 Lv.1'
  },
  baseStats: { charm: 70, wealth: 10, eloquence: 30, shamelessness: 50, reputation: 5 },
  baseSkills: ['壁咚 Lv.1'],
  startNode: 'start',
  nodes: {
    'start': {
      chapter: 1,
      art: '🏢',
      text: '我叫**李大柱**，昨天还在工地上搬砖，今天一睁眼——我居然躺在一张大到可以在上面翻跟头的**纯金大床**上！\n\n一个穿西装的秃头男人冲进来，九十度鞠躬：「少爷，您终于醒了！您父亲——也就是**全球首富李首富**——昨夜突发奇想，把名下**九千九百九十九亿**的资产全部转到了您的名下，然后他和太太去环游宇宙了。」\n\n我的大脑宕机了三秒钟。\n\n「叮——」脑海中突然响起一个机械音：「「霸总养成系统」已绑定。检测到宿主天赋——**面瘫脸**，评价：SSR级霸总潜质！」\n\n秃头管家递过来一张**黑卡**：「少爷，今天有一个紧急董事会，各路商业大佬都在等您。」',
      notification: '[系统] 欢迎来到霸总世界！你当前的「无耻值」高达50，已经超越99%的地球人。',
      statChanges: [{stat: 'wealth', value: 999}],
      gainSkills: ['面瘫气场 Lv.1'],
      achievement: '天降横财',
      choices: [
        {
          text: '冷静地穿上西装，用冷酷的眼神扫视管家："说。"',
          hint: '霸总基本功——装冷静',
          next: 'board_meeting',
          statChanges: [{stat: 'charm', value: 5}, {stat: 'reputation', value: 3}]
        },
        {
          text: '在金床上打滚尖叫："我是千亿富翁啦哈哈哈哈！"',
          hint: '……你真的适合当霸总吗？',
          next: 'board_meeting_noob',
          statChanges: [{stat: 'shamelessness', value: 10}, {stat: 'reputation', value: -5}]
        },
        {
          text: '对系统说："先教我怎么壁咚。"',
          hint: '把持住！先学核心技能',
          next: 'learn_bidong',
          statChanges: [{stat: 'charm', value: 3}, {stat: 'eloquence', value: 2}]
        }
      ]
    },

    'learn_bidong': {
      chapter: 1,
      art: '💪',
      text: '系统沉默了零点三秒，然后发出一声叹息：\n\n「宿主，你的好学精神令本系统感动。」「壁咚」教程已加载——\n\n脑海中瞬间涌入海量信息：角度、力度、风速计算、眼神配合……我惊讶地发现，**壁咚**竟然是一门结合了物理学、心理学和表演艺术的综合学科！\n\n管家在旁边看得目瞪口呆，因为我正对着墙壁反复练习，嘴里还念叨着："力道……不够霸道……再来！"\n\n「叮——」「壁咚 Lv.1」已升级为**壁咚 Lv.2**！\n\n系统提示：「建议宿主尽快前往董事会，否则公司可能会被你的竞争对手**王二狗**抢走。」',
      notification: '[系统] 壁咚Lv.2解锁！现在你的壁咚可以产生小型气流，令目标心率加速15%。',
      statChanges: [{stat: 'charm', value: 8}],
      gainSkills: ['壁咚 Lv.2'],
      choices: [
        {
          text: '整理西装，冷酷地前往董事会。',
          next: 'board_meeting',
          statChanges: [{stat: 'reputation', value: 2}]
        }
      ]
    },

    'board_meeting': {
      chapter: 2,
      art: '👔',
      text: '我踏进会议室的一瞬间，所有人都安静了。\n\n长长的会议桌两旁坐满了西装革履的大佬们。他们的眼神里写着同一个字：**不服**。\n\n坐在主位的，是一个头发梳得比我的未来还亮的男人——**王二狗**，我父亲的前助理，现在自封为代理总裁。\n\n王二狗推了推金丝眼镜："各位，这位就是传说中的**李家少爷**。听说他昨天还在搬砖？"会议室里响起一阵嗤笑。\n\n我面无表情地走到他面前，用**面瘫气场 Lv.1**，冷冷说了一个字：\n\n"让。"\n\n王二狗愣住了。周围的人也愣住了。根据系统提示，我的面瘫程度已经达到了**98.7%**，堪称行走的冰山。\n\n这时，会议室的门突然被推开了——',
      notification: '[系统] 面瘫气场判定成功！威慑力+200%。',
      statChanges: [{stat: 'reputation', value: 10}, {stat: 'eloquence', value: 5}],
      achievement: '初次亮相',
      choices: [
        {
          text: '不管谁进来，继续用冷酷脸压制全场。',
          next: 'meet_female_lead',
          statChanges: [{stat: 'charm', value: 5}]
        },
        {
          text: '回头看看到底是谁进来了。',
          next: 'meet_female_lead_surprise',
          statChanges: [{stat: 'shamelessness', value: 3}]
        }
      ]
    },

    'board_meeting_noob': {
      chapter: 2,
      art: '😅',
      text: '我在金床上疯狂打滚的事不知怎的被直播到了会议室的大屏幕上。\n\n全世界都知道了新任千亿富翁是个**在金床上打滚的傻子**。\n\n管家欲哭无泪："少爷……您的一举一动都已经被记者拍到了……"\n\n王二狗在会议室里笑得前仰后合："这就是李首富的继承人？哈哈哈哈！"\n\n「叮——」系统提示：「宿主，你的「无耻值」已经突破天际。不过没关系，在霸总的世界里，**不要脸**也是一种实力。」\n\n"特殊技能解锁——**死猪不怕开水烫**！"\n\n我擦了擦嘴角，深呼吸一口气。不就是丢人吗？我搬了十年砖，什么丢人的事没干过！\n\n我整理了一下衣领，大步走向会议室。',
      notification: '[系统] 虽然你丢人丢到全世界了，但无耻值爆表反而触发了隐藏天赋！',
      statChanges: [{stat: 'shamelessness', value: 15}, {stat: 'reputation', value: -15}, {stat: 'wealth', value: -50}],
      gainSkills: ['死猪不怕开水烫 Lv.1'],
      achievement: '社死出道',
      choices: [
        {
          text: '用无耻的精神强行镇住场面："笑什么笑？这是本少爷的快乐疗法！"',
          next: 'meet_female_lead',
          statChanges: [{stat: 'shamelessness', value: 5}, {stat: 'eloquence', value: 5}]
        },
        {
          text: '认怂，乖乖坐到角落里旁听。',
          next: 'meet_female_lead_weak',
          statChanges: [{stat: 'reputation', value: -5}]
        }
      ]
    },

    'meet_female_lead': {
      chapter: 2,
      art: '👠',
      text: '门被推开的那一刻，一道刺眼的光芒闪过。\n\n一个穿着红色高跟鞋的女人走了进来。她踩着**十厘米的恨天高**，每一步都像踩在我的心跳上。\n\n她叫**苏小小**——据系统情报显示，她是「全宇宙第一美人」兼「商业天才」兼「格斗冠军」兼「米其林三星厨师」。\n\n没错，这就是爽文世界的女主角设定。\n\n苏小小冷冷扫了我一眼："你就是新来的**千年搬砖工**？"她的声音像冰块撞击玻璃杯。\n\n王二狗立刻站起来谄媚道："苏总，您怎么来了？"\n\n苏小小理都没理他，直直走到我面前，居高临下地看着我。\n\n"听说你是**李首富**的儿子？我不管你是谁，**城南那块地**，我要了。"\n\n系统疯狂弹窗：「叮叮叮——检测到「女主角」好感度系统已激活！当前好感度：-999」',
      notification: '[系统] 女主角登场！当前好感度：-999。系统建议：先不要死。',
      statChanges: [{stat: 'charm', value: -3}],
      choices: [
        {
          text: '用壁咚！直接把她按在墙上！',
          hint: '需要壁咚Lv.2',
          next: 'bidong_success',
          statChanges: [{stat: 'charm', value: 10}, {stat: 'shamelessness', value: 5}],
          condition: {stat: 'charm', min: 75, hideText: false}
        },
        {
          text: '"这块地我不卖。但我可以请你喝咖啡。"',
          hint: '温柔路线',
          next: 'coffee_date',
          statChanges: [{stat: 'eloquence', value: 8}, {stat: 'charm', value: 3}]
        },
        {
          text: '"地？什么地？我连公司在哪条街都不知道。"',
          next: 'honest_confession',
          statChanges: [{stat: 'shamelessness', value: 5}, {stat: 'reputation', value: -3}]
        }
      ]
    },

    'meet_female_lead_surprise': {
      chapter: 2,
      art: '👠',
      text: '我回头看去——\n\n门口站着一个女人，她的美丽让整个会议室的空气质量都提升了三个档次。\n\n系统弹出警告：「警告！检测到SSR级美少女生物！宿主请做好准备，你的心脏即将承受**999点暴击**！」\n\n她叫**苏小小**，据说是**全宇宙第一美人**。\n\n她端着一杯咖啡走进来，看了我一眼，然后对王二狗说："这就是你们说的新总裁？长得倒是不赖，就是看着有点……**欠揍**。"\n\n我："……"\n\n因为我回头了，我的**面瘫气场**被中断了。王二狗趁机站起来："苏总说得对！这种搬砖工怎么能当总裁！"\n\n局面开始失控……',
      notification: '[系统] 提示：霸总不应该轻易回头看任何人！气场-50%。',
      statChanges: [{stat: 'charm', value: 2}, {stat: 'reputation', value: -3}],
      choices: [
        {
          text: '立刻恢复面瘫脸，冷冷道："说完了吗？"',
          next: 'coffee_date',
          statChanges: [{stat: 'reputation', value: 5}, {stat: 'eloquence', value: 3}]
        },
        {
          text: '"你说谁欠揍？信不信我壁咚你？"',
          next: 'bidong_risky',
          statChanges: [{stat: 'shamelessness', value: 10}, {stat: 'charm', value: -5}]
        }
      ]
    },

    'meet_female_lead_weak': {
      chapter: 2,
      art: '🪑',
      text: '我灰溜溜地坐到了会议室最角落的椅子上。\n\n王二狗得意洋洋地站在主位上发号施令。各路大佬对他点头哈腰，对我视而不见。\n\n这时，会议室的门被推开了。\n\n一个气场强大的女人走了进来——**苏小小**，全宇宙第一美人。\n\n她扫了一眼会议室，目光最后落在了角落里的我身上。\n\n"你，角落里那个，你就是李首富的儿子？"\n\n所有人哄堂大笑。\n\n苏小小却没笑。她走到我面前，弯下腰，在我耳边轻声说："**搬砖工也有搬砖工的尊严**。你要不要跟我合作？"\n\n系统疯狂提示：「叮叮叮！女主角好感度异常！当前好感度：+1！这是历史性的一刻！」',
      notification: '[系统] 你的示弱反而触发了女主角的"同情心"被动技能！好感度+1！',
      statChanges: [{stat: 'eloquence', value: 5}],
      choices: [
        {
          text: '"合作？说说看。"',
          next: 'business_alliance',
          statChanges: [{stat: 'eloquence', value: 5}, {stat: 'wealth', value: 20}]
        },
        {
          text: '"我不要同情！我要靠自己站起来！"',
          next: 'solo_path',
          statChanges: [{stat: 'charm', value: 8}, {stat: 'shamelessness', value: 5}]
        }
      ]
    },

    'bidong_success': {
      chapter: 3,
      art: '💕',
      text: '说时迟那时快，我一步上前，以迅雷不及掩耳之势将苏小小按在了会议室的墙上！\n\n**"砰！"**\n\n我的手掌精准地落在她耳侧三厘米处，力道不轻不重，角度堪称完美。\n\n**壁咚 Lv.2**——发动！\n\n整个会议室鸦雀无声。所有人都石化了。\n\n苏小小的脸涨得通红，她瞪大了眼睛看着我，嘴唇微微颤抖："你……你这个……"\n\n我低下头，用气声在她耳边说："苏总，在商业谈判中，**气势**很重要。"\n\n「叮——」系统疯狂弹窗：\n「壁咚成功！」「女主角好感度变化：-999 → -500」「评价：虽然还是负的，但已经是奇迹般的进步了！」\n\n苏小小推开我，整理了一下衣领，冷冷地说："李大柱，你**成功引起了我的注意**。"\n\n等等，这不是我失败后的惩罚台词吗？怎么她说出来了？？',
      notification: '[系统] 壁咚大成功！好感度暴涨499点！虽然还是负的。',
      statChanges: [{stat: 'charm', value: 15}, {stat: 'reputation', value: 10}, {stat: 'shamelessness', value: 5}],
      gainSkills: ['霸道气场 Lv.1'],
      achievement: '壁咚宗师',
      choices: [
        {
          text: '趁热打铁，提出商业合作。',
          next: 'business_alliance',
          statChanges: [{stat: 'eloquence', value: 5}, {stat: 'wealth', value: 30}]
        },
        {
          text: '"女人，你成功引起了我的注意。"（用系统的惩罚台词反击）',
          next: 'bidong_counter',
          statChanges: [{stat: 'shamelessness', value: 15}, {stat: 'charm', value: 5}]
        }
      ]
    },

    'bidong_risky': {
      chapter: 3,
      art: '😱',
      text: '我指着苏小小的鼻子喊出了那句话。\n\n整个会议室的温度骤降了十度。\n\n苏小小眯起了眼睛。她的嘴角微微上扬，但这绝对不是微笑——这是**杀意**。\n\n"你要壁咚我？"她的声音平静得可怕。\n\n下一秒，我感觉到一只手掐住了我的脖子。\n\n苏小小——**格斗冠军**——单手把我提了起来。\n\n"知道我为什么叫苏小小吗？"她微笑着说，"因为我下手的时候，对手剩下的时间**小小**的。"\n\n系统弹出红色警告：「宿主生命值急速下降！建议立即认怂！」\n\n我被掐得翻白眼，但脑海中只有一个想法：**不愧是女主角，真强。**',
      notification: '[系统] 警告！作死行为已触发！建议立即使用「死猪不怕开水烫」技能求生！',
      statChanges: [{stat: 'charm', value: -10}, {stat: 'reputation', value: -10}],
      choices: [
        {
          text: '疯狂道歉："对不起对不起我嘴欠！"',
          next: 'honest_confession',
          statChanges: [{stat: 'shamelessness', value: 5}]
        },
        {
          text: '用「死猪不怕开水烫」硬扛！',
          hint: '需要无耻值60以上',
          next: 'shameless_survive',
          statChanges: [{stat: 'shamelessness', value: 10}, {stat: 'charm', value: 5}],
          condition: {stat: 'shamelessness', min: 60, hideText: false}
        }
      ]
    },

    'bidong_counter': {
      chapter: 3,
      art: '😏',
      text: '我看着苏小小的眼睛，缓缓开口：\n\n**"女人，你成功引起了我的注意。"**\n\n全场再次石化。\n\n苏小小愣了整整三秒钟，然后——\n\n"噗——"\n\n她笑了。\n\n堂堂**全宇宙第一美人**，在千人会议室里，被我逗笑了。\n\n"李大柱，"她擦了擦笑出来的眼泪，"你是我见过最**离谱**的人。"\n\n系统提示：「叮——好感度变化：-500 → 50！」「触发隐藏成就：**让冰山女王笑了**！」\n\n王二狗在旁边看得下巴都快掉了。他万万没想到，这个搬砖工竟然用系统惩罚台词打动了女主角。\n\n苏小小收起笑容，正色道："行了，不闹了。李大柱，我有一个商业提案，你有没有兴趣听？"\n\n我面无表情地整理了一下西装领带："说。"',
      notification: '[系统] 你用最不要脸的方式创造了最大的奇迹。系统对你肃然起敬。',
      statChanges: [{stat: 'charm', value: 20}, {stat: 'shamelessness', value: 10}, {stat: 'reputation', value: 15}],
      gainSkills: ['反向操作 Lv.1'],
      achievement: '让冰山笑了',
      choices: [
        {
          text: '"洗耳恭听。"',
          next: 'business_alliance',
          statChanges: [{stat: 'eloquence', value: 5}]
        }
      ]
    },

    'shameless_survive': {
      chapter: 3,
      art: '🐷',
      text: '被苏小小掐着脖子的时候，我启动了**死猪不怕开水烫**技能。\n\n我翻着白眼，嘴角居然还挂着微笑。我用残存的力气竖起大拇指，用沙哑的声音说：\n\n"苏总……力气……真大……我喜欢……"\n\n苏小小手一抖，把我扔到了地上。\n\n"你……你有病吧？！"她脸红得像个番茄。\n\n我趴在地上，大口喘气，但系统弹出了提示：\n\n「叮——你的无耻行为成功降低了对方的攻击欲望！好感度变化：-999 → -200！」「评价：你是第一个被掐着脖子还敢调戏对方的人。勇气可嘉（主要是不要脸）。」\n\n王二狗看了看苏小小的脸，又看了看趴在地上的我，默默给自己倒了杯水。\n\n"今天的董事会……真精彩。"他喃喃道。',
      notification: '[系统] 「死猪不怕开水烫」技能发动成功！你的脸皮厚度已突破系统测量上限！',
      statChanges: [{stat: 'shamelessness', value: 20}, {stat: 'charm', value: 5}, {stat: 'reputation', value: -5}],
      gainSkills: ['脸皮防御 Lv.2'],
      achievement: '死里逃生',
      choices: [
        {
          text: '从地上爬起来，若无其事地谈生意。',
          next: 'business_alliance',
          statChanges: [{stat: 'shamelessness', value: 5}, {stat: 'reputation', value: 3}]
        }
      ]
    },

    'coffee_date': {
      chapter: 3,
      art: '☕',
      text: '苏小小挑了挑眉："喝咖啡？你请得起吗？"\n\n我面无表情地掏出了管家给的黑卡，在她眼前晃了晃。\n\n她嘴角微微上扬："有点意思。"\n\n十五分钟后，我们坐在了大厦顶层的私人咖啡厅里。\n\n苏小小端着咖啡，直入主题："李大柱，你知道**城南那块地**值多少钱吗？"\n\n"不知道。"我诚实地回答。\n\n"**三千亿。**"她放下咖啡杯，"王二狗已经开出了两千五百亿的价码。我的条件很简单——如果你把地让给我，我帮你搞定王二狗。"\n\n系统弹窗：「叮——商业大战触发！」「提示：这块地的真实价值是**一万亿**，因为地下埋着远古外星人的飞船。但全世界只有你一个人知道。」\n\n等等，系统你早说啊！',
      notification: '[系统] 秘密情报解锁：城南地下有外星科技！价值远超三千亿！',
      statChanges: [{stat: 'eloquence', value: 10}],
      achievement: '商业嗅觉',
      choices: [
        {
          text: '"这块地，我不卖。但我们可以合作开发。"',
          next: 'business_alliance',
          statChanges: [{stat: 'eloquence', value: 8}, {stat: 'wealth', value: 50}]
        },
        {
          text: '"三千亿？太少。我要五千亿。而且你要请我吃一个月的饭。"',
          next: 'business_alliance',
          statChanges: [{stat: 'shamelessness', value: 8}, {stat: 'wealth', value: 100}]
        },
        {
          text: '"地底下有外星飞船你知道吗？"',
          hint: '把底牌亮出来……你确定？',
          next: 'reveal_secret',
          statChanges: [{stat: 'eloquence', value: -5}, {stat: 'shamelessness', value: 10}]
        }
      ]
    },

    'honest_confession': {
      chapter: 3,
      art: '🤷',
      text: '我摊了摊手，实话实说：\n\n"我确实不知道公司在哪条街。我昨天还在搬砖，今天就成千亿富翁了。什么地啊、商业啊，我一窍不通。"\n\n苏小小看着我，表情从惊讶变成了……赞赏？\n\n"你倒是很诚实。"她放下咖啡，"在这个圈子里，**诚实比聪明更稀缺**。"\n\n「叮——」系统提示：「宿主的诚实触发了女主角的**真性情**评价！好感度+50！」\n\n苏小小站起身："这样吧，我给你三个月。三个月内，如果你能让公司市值翻倍，我跟你合作。如果做不到——"\n\n她凑近我的耳朵："——你就给我当一辈子**私人助理**。"\n\n系统疯狂弹窗：「这是机会还是陷阱？系统也无法判断！但无论如何，这条线的剧情很刺激！」',
      notification: '[系统] 诚实路线触发！有时候，笨办法反而是最好的办法。',
      statChanges: [{stat: 'eloquence', value: 10}, {stat: 'charm', value: 5}],
      choices: [
        {
          text: '"三个月？给我三个月零一天。最后一天我要用来庆祝。"',
          next: 'business_alliance',
          statChanges: [{stat: 'charm', value: 8}, {stat: 'eloquence', value: 5}]
        }
      ]
    },

    'solo_path': {
      chapter: 3,
      art: '🔥',
      text: '我站了起来，目光坚定。\n\n"谢谢你的好意，苏总。但我李大柱虽然是个搬砖的，**也有搬砖的骄傲**！"\n\n苏小小退后一步，眼中闪过一丝异彩。\n\n"有意思。"\n\n我转身走出会议室，身后传来王二狗的嘲笑声，但我没有回头。\n\n系统提示：「叮——独立路线已开启！难度：**地狱级**。没有女主角的帮助，你需要独自面对所有商业挑战。」\n\n「但奖励也更丰厚——如果成功，你将获得隐藏称号：**从搬砖到霸总的传说**。」\n\n我回到办公室，打开电脑。虽然我什么都不懂，但系统提供了一键式「**商业天才模拟器**」。\n\n"来吧。"我活动了一下手指，"搬了十年砖，我的手速可不是盖的。"',
      notification: '[系统] 地狱模式开启！系统偷偷告诉你：模拟器每天只能用三次，省着点。',
      statChanges: [{stat: 'charm', value: 10}, {stat: 'reputation', value: 5}],
      gainSkills: ['搬砖手速 Lv.MAX'],
      achievement: '独立宣言',
      choices: [
        {
          text: '疯狂使用商业模拟器学习！',
          next: 'business_war',
          statChanges: [{stat: 'eloquence', value: 15}, {stat: 'wealth', value: 30}]
        }
      ]
    },

    'reveal_secret': {
      chapter: 3,
      art: '🛸',
      text: '我压低声音："苏总，你知道吗？城南那块地底下，埋着一艘**外星飞船**。"\n\n苏小小端咖啡的手停住了。\n\n"……你说什么？"\n\n"外星飞船。远古的。系统告诉我的。"\n\n沉默了五秒钟。\n\n苏小小放下咖啡杯，认真地看着我："李大柱，你有两个选择。第一，你带我去看看。第二，我把你当成精神病送去**第七人民医院**。"\n\n「叮——」系统：「建议选择第一个。第七人民医院的伙食不好。」\n\n我带着苏小小来到了城南。系统指引我找到了一个隐藏的地下入口。\n\n当我们走进那个巨大的地下空间时，两个人都呆住了——\n\n一艘**银色巨型飞船**静静地停在地底，散发着幽蓝色的光芒。飞船的外壳上刻着一行文字。\n\n系统翻译：「此处停车，违者罚款**五百万光年币**。」\n\n……外星人也会贴罚单？',
      notification: '[系统] 外星飞船确认！评估价值：无价。但停车罚单可能也很贵。',
      statChanges: [{stat: 'wealth', value: 200}, {stat: 'reputation', value: 15}],
      gainSkills: ['外星科技理解 Lv.1'],
      achievement: '火星来客',
      choices: [
        {
          text: '研究飞船，启动外星科技！',
          next: 'alien_tech',
          statChanges: [{stat: 'wealth', value: 100}, {stat: 'eloquence', value: 10}]
        },
        {
          text: '"苏总，这艘飞船我们一人一半。"',
          next: 'business_alliance',
          statChanges: [{stat: 'shamelessness', value: 5}, {stat: 'wealth', value: 150}]
        }
      ]
    },

    'business_alliance': {
      chapter: 4,
      art: '🤝',
      text: '苏小小和我达成了战略合作协议。\n\n她说："李大柱，你是我见过最奇特的商业伙伴。"\n\n我说："你也是我见过最能打的商业伙伴。"\n\n我们相视一笑。空气中弥漫着一种微妙的氛围。\n\n但好景不长——第二天，**王二狗**发动了商业战争！\n\n他联合了**十八家上市公司**，同时对李氏集团发起了恶意收购！股票暴跌！新闻铺天盖地！\n\n"李家少爷不学无术！李氏集团即将易主！"——这是头条新闻。\n\n系统弹出紧急任务：\n「叮——「商战：王二狗的逆袭」已触发！」「任务目标：在72小时内保住公司控制权。」「奖励：称号「商战之神」。失败惩罚：公司归王二狗，你回去搬砖。」',
      notification: '[系统] 紧急商战任务！你的对手是十八家上市公司的联合军团。建议不要怂！',
      statChanges: [{stat: 'wealth', value: -100}, {stat: 'reputation', value: -10}],
      choices: [
        {
          text: '正面硬刚！用资本碾压回去！',
          hint: '需要财力值200以上',
          next: 'business_war',
          statChanges: [{stat: 'wealth', value: -50}, {stat: 'reputation', value: 10}],
          condition: {stat: 'wealth', min: 200, hideText: false}
        },
        {
          text: '暗中调查王二狗的黑料，釜底抽薪！',
          next: 'investigate',
          statChanges: [{stat: 'eloquence', value: 10}, {stat: 'shamelessness', value: 5}]
        },
        {
          text: '直接去找王二狗，壁咚他！',
          hint: '……认真的吗？',
          next: 'business_war',
          statChanges: [{stat: 'shamelessness', value: 15}, {stat: 'charm', value: 5}]
        }
      ]
    },

    'investigate': {
      chapter: 4,
      art: '🔍',
      text: '我派出了系统的**情报网络**（其实就是系统黑进了王二狗的电脑）。\n\n三天后，一份震惊全城的报告摆在了我的桌上：\n\n王二狗，真实身份——**隔壁老王**。他根本不是什么商业天才，他的所有资产都是**偷税漏税**来的！而且他还养了三条狗，分别叫"大柱一号""大柱二号""大柱三号"——据他日记记载，这是为了**诅咒我**。\n\n我看着这份报告，沉默了很久。\n\n"……给狗取我的名字，这是有多恨我？"\n\n苏小小在旁边笑得快断气了："哈哈哈哈！李大柱，你被三条狗代替了！"\n\n系统：「叮——关键证据已获取！现在你有两个选择。」\n\n但时间不多了——明天就是股东大会，王二狗准备在会上正式夺权！',
      notification: '[系统] 情报收集完成！王二狗的黑料足以让他坐牢到下辈子。',
      statChanges: [{stat: 'eloquence', value: 15}, {stat: 'reputation', value: 5}],
      gainSkills: ['情报战 Lv.2'],
      choices: [
        {
          text: '在股东大会上公开王二狗的黑料，一击致命！',
          next: 'final_showdown',
          statChanges: [{stat: 'eloquence', value: 10}, {stat: 'reputation', value: 15}]
        },
        {
          text: '先威胁王二狗让他退兵，留他一条狗命。',
          next: 'final_showdown',
          statChanges: [{stat: 'shamelessness', value: 10}, {stat: 'charm', value: 5}]
        }
      ]
    },

    'business_war': {
      chapter: 4,
      art: '⚔️',
      text: '商战全面爆发！\n\n王二狗联合十八家公司发起总攻，但我有**苏小小**作为盟友，有**系统**作为外挂。\n\n第一回合：王二狗做空李氏股票。我启动**外星科技逆向工程**，发布了一款能让人用意念控制手机的产品。全球轰动。股票暴涨**3000%**。\n\n第二回合：王二狗收买媒体抹黑我。苏小小直接收购了那家媒体，改名为"**大柱日报**"，头版头条：「李大柱：从搬砖到首富的传奇」。\n\n第三回合：王二狗请了国际律师团起诉我。我在法庭上用**面瘫气场 Lv.MAX**凝视了对方律师三小时，律师当庭认输，表示"无法在这种压迫感下思考"。\n\n王二狗的联盟土崩瓦解。\n\n最后一战——股东大会！',
      notification: '[系统] 商战三连胜！王二狗的十八路诸侯已经溃散。最终决战即将开始！',
      statChanges: [{stat: 'wealth', value: 200}, {stat: 'reputation', value: 30}, {stat: 'eloquence', value: 15}],
      gainSkills: ['商战之神 Lv.1'],
      achievement: '三战封神',
      choices: [
        {
          text: '在股东大会上彻底终结王二狗！',
          next: 'final_showdown',
          statChanges: [{stat: 'reputation', value: 10}]
        }
      ]
    },

    'alien_tech': {
      chapter: 4,
      art: '👽',
      text: '我启动了飞船的控制台。系统充当翻译器，帮我理解外星文字。\n\n原来这艘飞船是**三万年前**坠毁的，属于一个叫"「霸道星」"的文明。他们整个星球的文化就是——**霸道**。\n\n飞船的核心科技是一台**"霸道能量转换器"**，可以将一个人的霸道值转化为实际生产力！\n\n"也就是说……"我倒吸一口冷气，"我的**无耻值**越高，创造的财富就越多？"\n\n系统：「理论上是的。但有个副作用——使用过度的话，你会变得越来越像**王二狗**。」\n\n我犹豫了零点三秒。\n\n"启动！"\n\n一道绿光笼罩了我的全身。当我再次睁开眼睛时，系统显示：\n「霸道能量转化率：**999%**」「当前资产增值速度：每秒**一个亿**」\n\n苏小小在旁边看得目瞪口呆："李大柱，你到底……是什么人？"',
      notification: '[系统] 外星霸道科技已激活！你现在每秒赚一个亿。建议不要飘。',
      statChanges: [{stat: 'wealth', value: 500}, {stat: 'shamelessness', value: 10}, {stat: 'reputation', value: 20}],
      gainSkills: ['霸道能量 Lv.MAX'],
      achievement: '霸道星传承者',
      choices: [
        {
          text: '用外星科技的财富碾压王二狗！',
          next: 'final_showdown',
          statChanges: [{stat: 'wealth', value: 100}, {stat: 'reputation', value: 10}]
        },
        {
          text: '财富太多不知怎么花，先买下月球吧。',
          next: 'final_showdown',
          statChanges: [{stat: 'shamelessness', value: 15}, {stat: 'wealth', value: -200}]
        }
      ]
    },

    'final_showdown': {
      chapter: 5,
      art: '🏆',
      text: '股东大会，万人瞩目。\n\n王二狗站在台上，信心满满地准备宣布接管公司。他身后的屏幕上写着"**王氏集团**"。\n\n"各位股东——"他刚开口。\n\n"砰！"会议室的大门被我踹开了。\n\n我穿着一套**全宇宙限量版**西装（系统用外星材料合成的），面瘫脸拉到了极致，身后跟着苏小小和一队律师。\n\n"王二狗。"我的声音不大，但整个会场的人都听见了。\n\n"你偷税漏税的证据，收买股东的录音，还有——你给三条狗取名叫**大柱一号二号三号**的事实，都在这份文件里。"\n\n全场哗然。\n\n王二狗脸色惨白："你……你怎么知道——"\n\n"因为我是**李大柱**。"我走到他面前，用**壁咚**的手法把文件拍在了他胸口。\n\n"从今天起，**李氏集团**不姓王。"\n\n系统弹出了最终评价：\n「叮——恭喜宿主完成主线任务：**成为全宇宙最霸道总裁**！」「评价：SSS级！你从一个搬砖工成长为一代霸总，期间使用了壁咚、面瘫、不要脸等多种战术，堪称**多元化发展**的典范。」',
      notification: '[系统] 主线任务完成！最终决战胜利！',
      statChanges: [{stat: 'reputation', value: 50}, {stat: 'wealth', value: 300}, {stat: 'charm', value: 20}],
      achievement: '霸总之路',
      choices: [
        {
          text: '"苏小小，做我的合伙人吧。"（商业帝国结局）',
          hint: '需要口才值50以上',
          next: 'ending_empire',
          statChanges: [{stat: 'eloquence', value: 5}],
          condition: {stat: 'eloquence', min: 50, hideText: false}
        },
        {
          text: '"女人，你成功引起了我的注意。嫁给我。"（霸道爱情结局）',
          hint: '需要魅力值90以上',
          next: 'ending_love',
          statChanges: [{stat: 'charm', value: 5}],
          condition: {stat: 'charm', min: 90, hideText: false}
        },
        {
          text: '"这一切太无聊了，我要回去搬砖。"（回归初心结局）',
          next: 'ending_bricks',
          statChanges: [{stat: 'shamelessness', value: 5}]
        },
        {
          text: '"我要用外星科技征服宇宙！"（宇宙霸主结局）',
          hint: '需要财力值800以上',
          next: 'ending_universe',
          statChanges: [{stat: 'wealth', value: -100}],
          condition: {stat: 'wealth', min: 800, hideText: false}
        }
      ]
    },

    'ending_empire': {
      chapter: 6,
      art: '👑',
      text: '',
      ending: {
        title: '商业帝国：万亿王朝',
        art: '👑',
        text: '苏小小接受了我的合作邀请。\n\n我们联手打造了**「大柱帝国集团」**，将业务拓展到了全球每一个角落。\n\n苏小小负责实际运营，我负责——**面瘫**和**壁咚竞争对手**。\n\n三年后，大柱帝国集团成为了**全宇宙第一大企业**，市值超过**一百万亿**。\n\n苏小小在庆功宴上端着红酒走到我面前："李大柱，当初那个在金床上打滚的傻子，居然真的成了宇宙首富。"\n\n我面无表情地看着她："我从没在金床上打过滚。"\n\n"你打了。全球直播。"\n\n"……删掉。"\n\n"不删。"\n\n系统最终评价：「**SSS级结局：商业帝国**。宿主从一个搬砖工成长为宇宙首富，证明了面瘫和无耻才是成功的关键。本系统感到无比欣慰（和一点点恶心）。」'
      }
    },

    'ending_love': {
      chapter: 6,
      art: '💒',
      text: '',
      ending: {
        title: '霸道爱情：她是我的',
        art: '💒',
        text: '我对苏小小说出了那句话。\n\n全场的空气都凝固了。\n\n苏小小看着我，沉默了十秒钟。这十秒钟比我在工地上搬十年砖还要漫长。\n\n然后她走到我面前，踮起脚尖，在我脸上留下了一个吻。\n\n"李大柱，你知道吗？"她微笑着说，"你是唯一一个敢壁咚我、敢掐着脖子调戏我、敢用系统惩罚台词向我求婚的人。"\n\n"所以？"\n\n"所以我**勉为其难**地答应了。"\n\n全场爆发出了震耳欲聋的欢呼声。\n\n我们的婚礼在月球上举行（我确实买了月球），全球**一百亿人**通过直播观看了这场世纪婚礼。\n\n在婚礼上，我用了一首自己写的诗作为誓词：\n"**搬砖十年无人问，一朝面瘫天下知。壁咚天下有情人，从此霸总不独行。**"\n\n苏小小笑得停不下来。\n\n系统最终评价：「**SS级结局：霸道爱情**。恭喜宿主同时征服了商业世界和女主角的心。本系统单方面宣布，这是本系统运营以来最肉麻的结局。」'
      }
    },

    'ending_bricks': {
      chapter: 6,
      art: '🧱',
      text: '',
      ending: {
        title: '回归初心：搬砖之王',
        art: '🧱',
        text: '所有人都在庆祝胜利的时候，我站在落地窗前，看着远处的天际线。\n\n"系统。"\n\n「在的，宿主。」\n\n"我有点想搬砖了。"\n\n「……你说什么？」\n\n我把西装脱掉，换上了那件破旧的工作服。\n\n"这几个月太刺激了，我有点想念那种每天搬一百块砖、赚两百块钱的简单生活。"\n\n我把公司的所有股份转给了苏小小，把黑卡还给了管家。\n\n"少爷！您这是——"管家惊呆了。\n\n"我要回去搬砖了。"我拍了拍他的肩膀，"帮我照顾好苏小小。"\n\n第二天，新闻头条：「**千亿富翁抛弃一切，重回工地搬砖！是精神失常还是人生大智慧？**」\n\n网友评论分为两派：一派说我疯了，另一派说我才是真正看透了人生。\n\n我站在工地上，阳光照在脸上，搬起了第一块砖。\n\n"这才是生活啊。"我满足地笑了。\n\n系统最终评价：「**???级结局：回归初心**。本系统运营了三万年，第一次遇到放着万亿资产不要回去搬砖的宿主。你赢了，你比霸道星人还离谱。本系统决定退休，跟你去搬砖。」\n\n于是，**全宇宙最富有的搬砖工**和他的退休系统，过上了快乐的日子。'
      }
    },

    'ending_universe': {
      chapter: 6,
      art: '🚀',
      text: '',
      ending: {
        title: '宇宙霸主：霸道星人的继承者',
        art: '🚀',
        text: '我启动了外星飞船，飞向了宇宙深处。\n\n苏小小坐在副驾驶座上，一脸不可思议："李大柱，你真的要去征服宇宙？"\n\n"当然。"我面无表情地操控着飞船，"地球上已经没有对手了。"\n\n经过三个月的星际旅行，我们到达了**霸道星**。\n\n这颗星球上的人全员面瘫，问候方式是互相壁咚，最高的礼仪是**霸道总裁式冷笑**。\n\n我简直如鱼得水。\n\n霸道星的国王接见了我，他看了我一眼，说道："你的面瘫程度……达到了**99.99%**。在我们星球，这叫**传说级**。"\n\n"你们国王的面瘫程度是多少？"我问。\n\n"99.98%。"\n\n"那从今天起，我才是国王。"\n\n整个霸道星的人单膝跪地。\n\n从此，**李大柱**成为了地球和霸道星的双料霸主，管理着横跨两个星系的**大柱宇宙帝国**。\n\n系统最终评价：「**SSS+级结局：宇宙霸主**。宿主超越了地球的极限，成为了星际级别的霸道总裁。本系统即将升级为**宇宙级霸总养成系统**。下一站：征服银河系！」'
      }
    }
  }
};
