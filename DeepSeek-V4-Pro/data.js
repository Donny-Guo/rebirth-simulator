// 重生模拟器 - 剧情数据
const SCENARIOS = [
  {
    "id": "ceo",
    "title": "重生之我是霸总",
    "emoji": "👔",
    "desc": "一觉醒来，你成了身价千亿的霸道总裁。前世的996社畜，今生的商业帝王。",
    "difficulty": "⭐",
    "unlock": true,
    "stats": {
      "wealth": 80,
      "power": 70,
      "charm": 60,
      "luck": 50,
      "sanity": 60
    },
    "intro": "你睁开眼，发现自己躺在一张巨大的床上，天花板是一整块水晶吊灯。手机震动——助理发来消息：<span class=\"highlight\">\"李总，今天上午10点收购腾龙集团的签约仪式，下午2点董事会，晚上8点慈善晚宴，王诗龄小姐想约您共进晚餐。\"</span>",
    "scenes": {
      "start": {
        "text": "你站在落地窗前，俯瞰整座城市。前世你只是一个被甲方折磨到秃头的设计师，如今你坐拥万亿商业帝国。这种感觉……<span class=\"highlight\">爽！</span>",
        "choices": [
          {
            "text": "先去公司，把腾龙集团收了再说",
            "next": "acquire",
            "effect": {
              "power": 5,
              "wealth": 10
            }
          },
          {
            "text": "给王诗龄回电话，今晚赴约",
            "next": "date",
            "effect": {
              "charm": 5,
              "sanity": -5
            }
          },
          {
            "text": "先了解一下自己的商业帝国到底有多大",
            "next": "explore",
            "effect": {
              "sanity": 5
            }
          }
        ]
      },
      "acquire": {
        "text": "签约仪式上，腾龙集团董事长跪在你面前，痛哭流涕：\"李总，求您高抬贵手！我们三代人的心血啊！\"你点燃一支雪茄，淡淡地说：<span class=\"highlight\">\"三分钟，我要看到腾龙集团所有的财务报表。\"</span>",
        "choices": [
          {
            "text": "霸气收购，一个不留",
            "next": "acquire_win",
            "effect": {
              "power": 15,
              "wealth": 20,
              "sanity": -10
            }
          },
          {
            "text": "给条活路，让他们做你的子公司",
            "next": "acquire_mercy",
            "effect": {
              "power": 5,
              "charm": 10,
              "sanity": 5
            }
          },
          {
            "text": "突然觉得没意思，放弃收购去度假",
            "next": "vacation",
            "effect": {
              "sanity": 10,
              "wealth": -5
            }
          }
        ]
      },
      "acquire_win": {
        "text": "收购完成！新闻头条：<span class=\"highlight\">\"商业鬼才李总：三分钟吞下百年企业\"</span>。你的身价暴涨500亿。秘书送来一份文件——联合国邀请你去当经济发展顾问。",
        "choices": [
          {
            "text": "接受邀请，走向国际舞台",
            "next": "ending_ceo_global",
            "effect": {
              "power": 20,
              "charm": 10
            }
          },
          {
            "text": "拒绝，继续在国内扩张商业版图",
            "next": "ending_ceo_empire",
            "effect": {
              "wealth": 20,
              "power": 10
            }
          }
        ]
      },
      "acquire_mercy": {
        "text": "你微微一笑：\"跟着我干，不会亏待你们。\"腾龙董事长感激涕零。消息传出，业界纷纷称赞你<span class=\"highlight\">\"既有雷霆手段，又有菩萨心肠\"</span>。各大企业排队求合作。",
        "choices": [
          {
            "text": "趁热打铁，成立商业联盟",
            "next": "ending_ceo_alliance",
            "effect": {
              "power": 15,
              "charm": 15
            }
          },
          {
            "text": "功成身退，转型做投资人",
            "next": "ending_ceo_investor",
            "effect": {
              "wealth": 15,
              "sanity": 10
            }
          }
        ]
      },
      "date": {
        "text": "王诗龄是当红影后，也是前世你只能在屏幕上看到的女神。今晚她穿着一袭红裙，在你面前巧笑嫣然：<span class=\"highlight\">\"李总，听说您一个人就收购了半个娱乐圈的公司？\"</span>",
        "choices": [
          {
            "text": "\"整个娱乐圈都是你的，只要你愿意。\"",
            "next": "date_romance",
            "effect": {
              "charm": 15,
              "sanity": -5
            }
          },
          {
            "text": "\"谈生意可以，谈恋爱免谈。\"",
            "next": "date_business",
            "effect": {
              "power": 10,
              "sanity": 5
            }
          },
          {
            "text": "突然想起前世的初恋，黯然离开",
            "next": "date_sad",
            "effect": {
              "sanity": 15,
              "charm": -5
            }
          }
        ]
      },
      "date_romance": {
        "text": "王诗龄眼睛亮了。第二天，全网热搜：<span class=\"highlight\">\"影后公开表白神秘富豪\"</span>。你的社交账号粉丝一夜暴涨3000万。各大品牌排队送代言。",
        "choices": [
          {
            "text": "顺势而为，进军娱乐圈",
            "next": "ending_ceo_star",
            "effect": {
              "charm": 20,
              "wealth": 10
            }
          },
          {
            "text": "低调处理，专心搞事业",
            "next": "ending_ceo_empire",
            "effect": {
              "power": 10,
              "sanity": 10
            }
          }
        ]
      },
      "date_business": {
        "text": "王诗龄愣了一下，随即大笑：\"李总果然名不虚传，是个工作狂。\"她拿出一份合同——她想投资你的新项目。你发现她不仅漂亮，还是个商业天才。",
        "choices": [
          {
            "text": "强强联手，打造娱乐帝国",
            "next": "ending_ceo_star",
            "effect": {
              "wealth": 15,
              "charm": 10
            }
          },
          {
            "text": "保持距离，专注自己的赛道",
            "next": "ending_ceo_empire",
            "effect": {
              "power": 15,
              "sanity": 5
            }
          }
        ]
      },
      "date_sad": {
        "text": "你一个人走在江边，想起前世那个陪你吃泡面的女孩。突然手机响了——是前世的发小！他也重生了！而且他现在是……<span class=\"highlight\">世界首富？</span>",
        "choices": [
          {
            "text": "兄弟联手，天下无敌",
            "next": "ending_ceo_bros",
            "effect": {
              "wealth": 20,
              "sanity": 15
            }
          },
          {
            "text": "各走各路，互不干扰",
            "next": "ending_ceo_empire",
            "effect": {
              "power": 10,
              "sanity": 5
            }
          }
        ]
      },
      "explore": {
        "text": "你翻看公司资料，发现你的商业帝国涵盖：房地产、互联网、新能源、航天科技……甚至还有一家<span class=\"highlight\">外星人联络中心</span>？秘书说：\"李总，这是您上个月收购的，说要做星际贸易。\"",
        "choices": [
          {
            "text": "外星贸易？太酷了！全力推进！",
            "next": "explore_space",
            "effect": {
              "wealth": 20,
              "sanity": -10
            }
          },
          {
            "text": "太离谱了，卖掉外星人业务",
            "next": "explore_normal",
            "effect": {
              "sanity": 10,
              "wealth": -5
            }
          },
          {
            "text": "先联系外星人看看",
            "next": "explore_contact",
            "effect": {
              "luck": 20,
              "sanity": -15
            }
          }
        ]
      },
      "explore_space": {
        "text": "三个月后，你的星际贸易公司成功与半人马座α星建立了贸易关系。你成为<span class=\"highlight\">地球首位星际贸易商</span>。外星人用反重力技术换你的老干妈辣酱。",
        "choices": [
          {
            "text": "垄断星际贸易，成为银河系首富",
            "next": "ending_ceo_galaxy",
            "effect": {
              "wealth": 30,
              "power": 20
            }
          },
          {
            "text": "公开技术，推动人类文明进步",
            "next": "ending_ceo_savior",
            "effect": {
              "charm": 20,
              "sanity": 15
            }
          }
        ]
      },
      "explore_normal": {
        "text": "你回归正常商业轨道，凭借前世记忆精准投资。一年后，你的财富翻了三倍。但总觉得少了点什么……",
        "choices": [
          {
            "text": "够了，退休享受人生",
            "next": "ending_ceo_retire",
            "effect": {
              "sanity": 20,
              "wealth": 5
            }
          },
          {
            "text": "继续扩张，永无止境",
            "next": "ending_ceo_empire",
            "effect": {
              "wealth": 15,
              "power": 10
            }
          }
        ]
      },
      "explore_contact": {
        "text": "外星人回复了！他们发来一段视频：<span class=\"highlight\">\"地球人你好，我们观察你们很久了。你们的老干妈辣酱在全宇宙都很受欢迎。\"</span>你当场石化。",
        "choices": [
          {
            "text": "签下宇宙独家代理权",
            "next": "ending_ceo_galaxy",
            "effect": {
              "wealth": 25,
              "luck": 10
            }
          },
          {
            "text": "邀请外星人来地球建厂",
            "next": "ending_ceo_savior",
            "effect": {
              "charm": 15,
              "sanity": 10
            }
          }
        ]
      },
      "vacation": {
        "text": "你包下一座私人岛屿。躺在沙滩上，你突然顿悟：<span class=\"highlight\">\"钱是赚不完的，但快乐是可以选择的。\"</span>你决定用财富改变世界。",
        "choices": [
          {
            "text": "成立慈善基金会，帮助穷人",
            "next": "ending_ceo_philanthropy",
            "effect": {
              "charm": 20,
              "sanity": 15
            }
          },
          {
            "text": "投资教育，培养下一代商业领袖",
            "next": "ending_ceo_mentor",
            "effect": {
              "power": 10,
              "sanity": 15
            }
          }
        ]
      },
      "ending_ceo_global": {
        "text": "五年后，你成为联合国秘书长特别顾问。你主导的全球经济改革让贫富差距缩小了40%。《时代周刊》封面标题：<span class=\"highlight\">\"从霸道总裁到世界领袖\"</span>。",
        "ending": {
          "title": "全球领袖",
          "rating": "S",
          "desc": "你不仅征服了商界，还改变了世界。真正的霸道，是为天下人霸道。"
        }
      },
      "ending_ceo_empire": {
        "text": "你的商业帝国横跨108个行业，员工超过500万人。你站在世界最高楼的顶层，俯瞰众生。有人骂你是垄断资本家，但更多人视你为偶像。",
        "ending": {
          "title": "商业帝王",
          "rating": "A",
          "desc": "你建立了前所未有的商业帝国。财富和权力，你都握在手中。"
        }
      },
      "ending_ceo_alliance": {
        "text": "你创立的商业联盟成为全球最大的企业家组织。成员遍布200个国家。你被尊称为\"盟主\"。每年的联盟大会，都是全球经济的风向标。",
        "ending": {
          "title": "商界盟主",
          "rating": "A",
          "desc": "你不是一个人在战斗。你团结了整个商界，成为真正的领袖。"
        }
      },
      "ending_ceo_investor": {
        "text": "你转型为天使投资人，投出了37家独角兽企业。创业者们排队求见你，只为得到你的一句\"我投你\"。你被称为\"点金手\"。",
        "ending": {
          "title": "传奇投资人",
          "rating": "A",
          "desc": "从亲自下场到运筹帷幄，你用资本改变了世界。"
        }
      },
      "ending_ceo_star": {
        "text": "你和王诗龄的恋情轰动全球。你们联手打造的娱乐帝国市值超过好莱坞五大公司总和。你成为全球最受关注的CP。",
        "ending": {
          "title": "娱乐大亨",
          "rating": "S",
          "desc": "事业爱情双丰收，你是所有人羡慕的对象。"
        }
      },
      "ending_ceo_bros": {
        "text": "你和发小联手，一个管国内一个管海外。十年后，你们的公司成为全球市值第一。记者问你们成功的秘诀，你们相视一笑：\"因为我们是兄弟。\"",
        "ending": {
          "title": "兄弟连",
          "rating": "S",
          "desc": "重生最大的幸运，是遇到了同样重生的兄弟。"
        }
      },
      "ending_ceo_galaxy": {
        "text": "你成为银河系首富。外星人排队找你做生意。你甚至在月球上建了一座度假村。地球联合国授予你\"星际大使\"称号。",
        "ending": {
          "title": "银河首富",
          "rating": "SSS",
          "desc": "地球已经容不下你了。星辰大海，才是你的舞台。"
        }
      },
      "ending_ceo_savior": {
        "text": "你公开了外星技术，人类文明进入新时代。癌症被治愈，能源问题解决，星际旅行成为日常。历史书上写着：<span class=\"highlight\">\"李总是人类历史上最伟大的人。\"</span>",
        "ending": {
          "title": "人类救星",
          "rating": "SSS",
          "desc": "你不仅改变了自己的命运，还改变了全人类的命运。"
        }
      },
      "ending_ceo_retire": {
        "text": "你卖掉所有公司，买了一座小岛。每天钓鱼、看书、晒太阳。偶尔有记者来采访，你只说一句：\"人生最大的成功，是按自己的方式活着。\"",
        "ending": {
          "title": "逍遥隐士",
          "rating": "A",
          "desc": "急流勇退，是另一种智慧。你找到了真正的自由。"
        }
      },
      "ending_ceo_philanthropy": {
        "text": "你的慈善基金会帮助了超过1亿人。你捐出了99%的财富。有人说你傻，你说：\"我前世穷过，知道穷的滋味。现在我有能力了，就该帮更多人。\"",
        "ending": {
          "title": "大慈善家",
          "rating": "S",
          "desc": "财富的真正意义，是让更多人过得更好。"
        }
      },
      "ending_ceo_mentor": {
        "text": "你创办的商学院培养了无数商业领袖。你的学生遍布全球500强。你被尊称为\"李校长\"。你说过最骄傲的不是赚了多少钱，而是培养了多少人。",
        "ending": {
          "title": "商界教父",
          "rating": "S",
          "desc": "授人以鱼不如授人以渔。你的影响力通过学生延续。"
        }
      }
    }
  },
  {
    "id": "emperor",
    "title": "重生之我是皇帝",
    "emoji": "👑",
    "desc": "你成了古代皇帝！但发现这个朝代内忧外患，国库空虚，大臣们各怀鬼胎。",
    "difficulty": "⭐⭐",
    "unlock": true,
    "stats": {
      "wealth": 30,
      "power": 90,
      "charm": 50,
      "luck": 40,
      "sanity": 50
    },
    "intro": "你从龙床上惊醒，太监尖声喊道：<span class=\"highlight\">\"陛下！不好了！北方的蛮族打过来了！南方的藩王造反了！户部尚书说国库只剩三两银子了！\"</span>",
    "scenes": {
      "start": {
        "text": "你坐在龙椅上，看着下面跪了一地的大臣。他们嘴里喊着\"万岁\"，但眼神里全是算计。你深吸一口气——前世你是历史系研究生，<span class=\"highlight\">上下五千年的权谋你都学过！</span>",
        "choices": [
          {
            "text": "先整顿朝纲，清除奸臣",
            "next": "purge",
            "effect": {
              "power": 10,
              "sanity": -5
            }
          },
          {
            "text": "御驾亲征，先打蛮族",
            "next": "war",
            "effect": {
              "power": 15,
              "sanity": -10
            }
          },
          {
            "text": "微服私访，先了解民情",
            "next": "travel",
            "effect": {
              "sanity": 10,
              "charm": 5
            }
          }
        ]
      },
      "purge": {
        "text": "你拿出前世学的管理学，三天之内查出贪官污吏127人。朝堂上，你冷冷地说：<span class=\"highlight\">\"朕给你们两个选择：要么交出赃款戴罪立功，要么满门抄斩。\"</span>",
        "choices": [
          {
            "text": "铁血手段，杀一儆百",
            "next": "purge_hard",
            "effect": {
              "power": 20,
              "sanity": -15
            }
          },
          {
            "text": "恩威并施，给条活路",
            "next": "purge_soft",
            "effect": {
              "power": 10,
              "charm": 10
            }
          },
          {
            "text": "抄家充公，充实国库",
            "next": "purge_money",
            "effect": {
              "wealth": 20,
              "power": 5
            }
          }
        ]
      },
      "purge_hard": {
        "text": "午门外，人头滚滚。贪官们哭爹喊娘。百姓们拍手称快。你的铁腕手段震慑了整个朝堂。但你也发现，有些大臣开始联合起来暗中对抗你。",
        "choices": [
          {
            "text": "继续铁腕，彻底清洗",
            "next": "ending_emp_tyrant",
            "effect": {
              "power": 20,
              "sanity": -20
            }
          },
          {
            "text": "适可而止，转为怀柔",
            "next": "ending_emp_balance",
            "effect": {
              "power": 5,
              "sanity": 10
            }
          }
        ]
      },
      "purge_soft": {
        "text": "你给贪官们一个机会：交出赃款，降级留用。朝堂上下一片感恩戴德。但你也知道，这些人只是暂时老实了。",
        "choices": [
          {
            "text": "建立监察制度，防患未然",
            "next": "ending_emp_reform",
            "effect": {
              "power": 15,
              "sanity": 10
            }
          },
          {
            "text": "暗中培养新人，逐步替换",
            "next": "ending_emp_balance",
            "effect": {
              "power": 10,
              "charm": 10
            }
          }
        ]
      },
      "purge_money": {
        "text": "抄家所得：黄金三百万两，白银八千万两，珍宝无数。国库瞬间充盈。你看着账本，笑了：<span class=\"highlight\">\"这些贪官，比朕还会赚钱啊。\"</span>",
        "choices": [
          {
            "text": "用这笔钱强军，统一天下",
            "next": "ending_emp_conquer",
            "effect": {
              "power": 20,
              "wealth": 10
            }
          },
          {
            "text": "用这笔钱改善民生，收买人心",
            "next": "ending_emp_beloved",
            "effect": {
              "charm": 20,
              "sanity": 10
            }
          }
        ]
      },
      "war": {
        "text": "你披上战甲，率领十万大军御驾亲征。前世你玩过无数策略游戏，什么《三国志》《文明》都是骨灰级玩家。<span class=\"highlight\">打仗？你可是理论大师！</span>",
        "choices": [
          {
            "text": "正面决战，以多打少",
            "next": "war_direct",
            "effect": {
              "power": 15,
              "sanity": -10
            }
          },
          {
            "text": "用计谋，火攻水淹离间计",
            "next": "war_strategy",
            "effect": {
              "power": 10,
              "luck": 10
            }
          },
          {
            "text": "派使者谈判，不战而屈人之兵",
            "next": "war_diplomacy",
            "effect": {
              "charm": 15,
              "sanity": 5
            }
          }
        ]
      },
      "war_direct": {
        "text": "你指挥大军如臂使指，蛮族被打得落花流水。俘虏了蛮族首领，他跪在你面前：\"天可汗饶命！我们愿世代为臣！\"",
        "choices": [
          {
            "text": "接受投降，纳入版图",
            "next": "ending_emp_conquer",
            "effect": {
              "power": 15,
              "charm": 10
            }
          },
          {
            "text": "杀无赦，以儆效尤",
            "next": "ending_emp_tyrant",
            "effect": {
              "power": 20,
              "sanity": -15
            }
          }
        ]
      },
      "war_strategy": {
        "text": "你派间谍散布谣言，蛮族内部大乱。你趁夜火攻敌营，蛮族溃不成军。军师跪地高呼：<span class=\"highlight\">\"陛下用兵如神，诸葛再世也不过如此！\"</span>",
        "choices": [
          {
            "text": "乘胜追击，统一草原",
            "next": "ending_emp_conquer",
            "effect": {
              "power": 20,
              "wealth": 10
            }
          },
          {
            "text": "见好就收，稳固边防",
            "next": "ending_emp_balance",
            "effect": {
              "power": 10,
              "sanity": 10
            }
          }
        ]
      },
      "war_diplomacy": {
        "text": "你亲自出使蛮族大营，一番话让蛮族首领心服口服。他不仅退兵，还主动献上宝马千匹、美女百名，请求和亲。",
        "choices": [
          {
            "text": "接受和亲，化敌为友",
            "next": "ending_emp_diplomat",
            "effect": {
              "charm": 20,
              "sanity": 10
            }
          },
          {
            "text": "拒绝和亲，但接受朝贡",
            "next": "ending_emp_balance",
            "effect": {
              "power": 10,
              "wealth": 10
            }
          }
        ]
      },
      "travel": {
        "text": "你换上布衣，带着两个侍卫出了宫。市井之间，你看到了真实的民间疾苦。一个卖菜的老农告诉你：<span class=\"highlight\">\"皇帝老儿在宫里吃香喝辣，哪管我们死活？\"</span>你默默记下了。",
        "choices": [
          {
            "text": "回宫后大刀阔斧改革",
            "next": "travel_reform",
            "effect": {
              "sanity": 10,
              "charm": 10
            }
          },
          {
            "text": "暗中帮助百姓，做无名英雄",
            "next": "travel_hero",
            "effect": {
              "charm": 15,
              "luck": 10
            }
          },
          {
            "text": "微服私访上瘾，继续游历",
            "next": "travel_more",
            "effect": {
              "sanity": 15,
              "luck": 5
            }
          }
        ]
      },
      "travel_reform": {
        "text": "你回宫后颁布了一系列惠民政策：减税、免徭役、开仓放粮。百姓们山呼万岁。但贵族们不干了，他们联合起来要逼你退位。",
        "choices": [
          {
            "text": "武力镇压贵族叛乱",
            "next": "ending_emp_tyrant",
            "effect": {
              "power": 20,
              "sanity": -10
            }
          },
          {
            "text": "与贵族谈判，逐步改革",
            "next": "ending_emp_reform",
            "effect": {
              "power": 10,
              "sanity": 10
            }
          }
        ]
      },
      "travel_hero": {
        "text": "你化名\"李逍遥\"，在民间行侠仗义。你惩治恶霸、救助孤寡、开办学堂。民间流传着<span class=\"highlight\">\"逍遥大侠\"</span>的传说，却不知大侠就是当今圣上。",
        "choices": [
          {
            "text": "继续做逍遥大侠，让太子监国",
            "next": "ending_emp_hermit",
            "effect": {
              "sanity": 20,
              "charm": 10
            }
          },
          {
            "text": "回归朝堂，用侠义精神治国",
            "next": "ending_emp_beloved",
            "effect": {
              "charm": 15,
              "power": 10
            }
          }
        ]
      },
      "travel_more": {
        "text": "你一路游历，遇到了一个神秘道士。他说：<span class=\"highlight\">\"陛下，你身上有龙气，但也有异世之魂。你本不属于这个世界。\"</span>你大惊——他居然看穿了你的重生身份！",
        "choices": [
          {
            "text": "拜道士为师，学习修仙",
            "next": "ending_emp_cultivator",
            "effect": {
              "luck": 20,
              "sanity": -10
            }
          },
          {
            "text": "请道士入朝，做国师",
            "next": "ending_emp_mystic",
            "effect": {
              "luck": 15,
              "power": 10
            }
          }
        ]
      },
      "ending_emp_conquer": {
        "text": "十年征战，你统一了整片大陆。东至大海，西至荒漠，南至雨林，北至冰原，皆为你的领土。史官写下：<span class=\"highlight\">\"千古一帝，功盖三皇，德高五帝。\"</span>",
        "ending": {
          "title": "千古一帝",
          "rating": "SSS",
          "desc": "你建立了前所未有的庞大帝国。你的名字，将永远镌刻在历史中。"
        }
      },
      "ending_emp_tyrant": {
        "text": "你的铁腕统治让所有人噤若寒蝉。没人敢反对你，但也没人真心拥护你。你坐在空荡荡的大殿里，感到前所未有的孤独。但你不后悔——<span class=\"highlight\">\"宁教我负天下人，休教天下人负我。\"</span>",
        "ending": {
          "title": "铁血暴君",
          "rating": "B",
          "desc": "你用恐惧统治天下。虽然强大，但孤独终老。"
        }
      },
      "ending_emp_balance": {
        "text": "你找到了铁腕与怀柔之间的平衡。朝堂清明，百姓安居，边疆稳固。你成为了一代明君，被后世称为\"中兴之主\"。",
        "ending": {
          "title": "中兴之主",
          "rating": "A",
          "desc": "不偏不倚，中庸之道。你让一个濒临崩溃的王朝焕发新生。"
        }
      },
      "ending_emp_reform": {
        "text": "你推行的改革被称为\"千年变法\"。你建立了科举制度、监察制度、土地改革……这些制度影响了后世千年。历史学家说：<span class=\"highlight\">\"如果没有他，中国历史将完全不同。\"</span>",
        "ending": {
          "title": "改革先驱",
          "rating": "S",
          "desc": "你的制度创新超越了时代。千年之后，人们仍在研究你的智慧。"
        }
      },
      "ending_emp_beloved": {
        "text": "你被百姓称为\"圣人皇帝\"。你的画像被供奉在千家万户。你走在街上，百姓自发跪拜，不是出于恐惧，而是出于真心爱戴。",
        "ending": {
          "title": "圣人皇帝",
          "rating": "S",
          "desc": "得民心者得天下。你赢得了最珍贵的东西——人民的爱。"
        }
      },
      "ending_emp_diplomat": {
        "text": "你开创了前所未有的外交格局。周边各国纷纷来朝，称臣纳贡。你建立了\"天下体系\"，各国和平共处。你被尊称为\"天可汗\"。",
        "ending": {
          "title": "天可汗",
          "rating": "S",
          "desc": "不战而屈人之兵，善之善者也。你用智慧赢得了和平。"
        }
      },
      "ending_emp_hermit": {
        "text": "你退位让贤，云游四海。你成了一个传说——有人说在江南见过你钓鱼，有人说在塞北见过你骑马。你终于过上了自由自在的生活。",
        "ending": {
          "title": "逍遥皇帝",
          "rating": "A",
          "desc": "放下皇位，你找到了真正的自己。自由，比权力更珍贵。"
        }
      },
      "ending_emp_cultivator": {
        "text": "你跟随道士修炼，三年后突破金丹期，五十年后飞升成仙。你在仙界遇到了其他重生者，组建了<span class=\"highlight\">\"重生者联盟\"</span>。",
        "ending": {
          "title": "飞升成仙",
          "rating": "SSS",
          "desc": "皇位算什么？你直接飞升了！从此逍遥天地间。"
        }
      },
      "ending_emp_mystic": {
        "text": "道士入朝后，帮你建立了修真与治国相结合的新体制。你的王朝成为修真王朝，国力空前强大。你活了三百年，看着王朝繁荣昌盛。",
        "ending": {
          "title": "修真帝王",
          "rating": "SS",
          "desc": "你开创了修真王朝，将修仙与治国完美结合。"
        }
      }
    }
  },
  {
    "id": "beggar",
    "title": "重生之我是乞丐",
    "emoji": "🥱",
    "desc": "你重生成了一个乞丐！破碗、烂衣、臭水沟。但你发现这个世界的乞丐不简单……",
    "difficulty": "⭐⭐⭐",
    "unlock": true,
    "stats": {
      "wealth": 0,
      "power": 5,
      "charm": 10,
      "luck": 80,
      "sanity": 70
    },
    "intro": "你从臭水沟边醒来，手里攥着一个破碗，身上散发着不可描述的味道。一个老乞丐踢了你一脚：<span class=\"highlight\">\"新来的？去东街口跪着，那里人傻钱多！\"</span>",
    "scenes": {
      "start": {
        "text": "你低头看着自己的破碗，又看看街上人来人往。前世你是月薪三千的打工仔，现在直接变成乞丐——<span class=\"highlight\">好像也没差太多？</span>但你注意到，街角的乞丐头子手腕上戴着一块金表。",
        "choices": [
          {
            "text": "先跟老乞丐混，了解行情",
            "next": "learn",
            "effect": {
              "sanity": 5,
              "luck": 5
            }
          },
          {
            "text": "不干了！我要靠前世记忆翻身",
            "next": "rise",
            "effect": {
              "wealth": 5,
              "sanity": -5
            }
          },
          {
            "text": "观察乞丐头子，他肯定有秘密",
            "next": "investigate",
            "effect": {
              "luck": 10,
              "sanity": -5
            }
          }
        ]
      },
      "learn": {
        "text": "老乞丐叫老黄，干这行二十年了。他告诉你：<span class=\"highlight\">\"小子，别看不起乞丐。城东的丐帮帮主，身家过亿！他白天要饭，晚上住别墅。这叫低调！\"</span>你震惊了。",
        "choices": [
          {
            "text": "拜入丐帮，从基层做起",
            "next": "join_gang",
            "effect": {
              "power": 10,
              "luck": 5
            }
          },
          {
            "text": "偷学老黄的乞讨绝技",
            "next": "learn_skill",
            "effect": {
              "charm": 10,
              "wealth": 5
            }
          },
          {
            "text": "直接去找丐帮帮主毛遂自荐",
            "next": "meet_boss",
            "effect": {
              "luck": 15,
              "sanity": -10
            }
          }
        ]
      },
      "join_gang": {
        "text": "你加入了丐帮，发现这里等级森严：一袋弟子到九袋长老。帮主是个精明的中年人，他看了你一眼：<span class=\"highlight\">\"你眼神不一样，不像普通乞丐。说吧，你是谁？\"</span>",
        "choices": [
          {
            "text": "坦白自己是重生者",
            "next": "reveal",
            "effect": {
              "luck": 20,
              "sanity": -10
            }
          },
          {
            "text": "编一个悲惨身世",
            "next": "lie",
            "effect": {
              "charm": 10,
              "sanity": -5
            }
          },
          {
            "text": "\"我就是个想赚钱的普通人\"",
            "next": "honest",
            "effect": {
              "sanity": 10,
              "charm": 5
            }
          }
        ]
      },
      "reveal": {
        "text": "帮主听完你的故事，沉默了很久。然后他笑了：<span class=\"highlight\">\"巧了，我也是重生者。我前世是世界500强CEO，重生后觉得当乞丐比较自由。\"</span>你彻底懵了。",
        "choices": [
          {
            "text": "强强联手，打造丐帮商业帝国",
            "next": "ending_beg_empire",
            "effect": {
              "wealth": 25,
              "power": 15
            }
          },
          {
            "text": "拜他为师，学习他的处世哲学",
            "next": "ending_beg_mentor",
            "effect": {
              "sanity": 20,
              "luck": 10
            }
          }
        ]
      },
      "lie": {
        "text": "你编了一个催人泪下的故事。帮主听得眼眶都红了，当场提拔你为三袋弟子。但你心里清楚，谎言总有被戳穿的一天。",
        "choices": [
          {
            "text": "趁现在努力立功，用实力证明自己",
            "next": "ending_beg_rise",
            "effect": {
              "power": 15,
              "sanity": 10
            }
          },
          {
            "text": "主动坦白，请求原谅",
            "next": "ending_beg_honest",
            "effect": {
              "sanity": 15,
              "charm": 10
            }
          }
        ]
      },
      "honest": {
        "text": "帮主点点头：\"实在人。我喜欢。\"他安排你负责丐帮的情报网络。原来丐帮表面是乞丐组织，实际上是<span class=\"highlight\">全国最大的地下情报网</span>。",
        "choices": [
          {
            "text": "利用情报网做生意",
            "next": "ending_beg_info",
            "effect": {
              "wealth": 20,
              "power": 10
            }
          },
          {
            "text": "用情报网帮助好人，做侠丐",
            "next": "ending_beg_hero",
            "effect": {
              "charm": 20,
              "sanity": 10
            }
          }
        ]
      },
      "learn_skill": {
        "text": "老黄教你乞讨的终极奥义：<span class=\"highlight\">\"不是装可怜，是让人心甘情愿给你钱。\"</span>你学得很快，三天后日收入突破500元。但你不满足于此。",
        "choices": [
          {
            "text": "把乞讨做成连锁加盟模式",
            "next": "ending_beg_franchise",
            "effect": {
              "wealth": 20,
              "power": 10
            }
          },
          {
            "text": "用赚的钱投资，东山再起",
            "next": "ending_beg_invest",
            "effect": {
              "wealth": 15,
              "sanity": 10
            }
          }
        ]
      },
      "meet_boss": {
        "text": "你直接闯进丐帮总部。帮主正在喝82年的拉菲。他看着你：\"胆子不小。给我一个不把你扔出去的理由。\"",
        "choices": [
          {
            "text": "\"我可以让丐帮的收入翻十倍\"",
            "next": "ending_beg_empire",
            "effect": {
              "wealth": 20,
              "power": 15
            }
          },
          {
            "text": "\"我知道你的秘密——你也是重生者\"",
            "next": "ending_beg_partner",
            "effect": {
              "luck": 20,
              "sanity": -5
            }
          }
        ]
      },
      "rise": {
        "text": "你靠前世记忆，在垃圾堆里翻出一张被丢弃的彩票——正是今晚开奖的头奖号码！但你只有两块钱，而且彩票站还有一小时关门。",
        "choices": [
          {
            "text": "狂奔去买彩票！",
            "next": "lottery",
            "effect": {
              "wealth": 30,
              "luck": 10
            }
          },
          {
            "text": "太不靠谱了，还是脚踏实地",
            "next": "learn",
            "effect": {
              "sanity": 10,
              "luck": -5
            }
          }
        ]
      },
      "lottery": {
        "text": "你赶在最后一分钟买了彩票。当晚开奖——<span class=\"highlight\">中了！五百万！</span>你从一个乞丐瞬间变成百万富翁。但你发现，有钱之后麻烦更多了。",
        "choices": [
          {
            "text": "低调投资，慢慢发展",
            "next": "ending_beg_invest",
            "effect": {
              "wealth": 15,
              "sanity": 10
            }
          },
          {
            "text": "高调炫富，享受人生",
            "next": "ending_beg_rich",
            "effect": {
              "wealth": 10,
              "sanity": -10
            }
          }
        ]
      },
      "investigate": {
        "text": "你跟踪乞丐头子，发现他每天晚上都换上一身名牌，开着保时捷回别墅。你偷偷翻进他家，发现书房里有一本<span class=\"highlight\">《丐帮商业帝国企划书》</span>。",
        "choices": [
          {
            "text": "偷走企划书，自己干",
            "next": "ending_beg_thief",
            "effect": {
              "wealth": 20,
              "sanity": -15
            }
          },
          {
            "text": "留下纸条，约他见面合作",
            "next": "ending_beg_partner",
            "effect": {
              "luck": 15,
              "sanity": 5
            }
          }
        ]
      },
      "ending_beg_empire": {
        "text": "你和帮主联手，把丐帮改造成了商业帝国。你们收购了全国最大的连锁餐饮、物流公司、安保公司。十年后，丐帮集团上市，市值千亿。",
        "ending": {
          "title": "丐帮CEO",
          "rating": "SS",
          "desc": "从乞丐到千亿富豪，你证明了出身不代表一切。"
        }
      },
      "ending_beg_mentor": {
        "text": "帮主教你一个道理：\"人生就像乞讨，重要的不是碗里有多少，而是你用什么心态去面对。\"你顿悟了，从此不再执着于财富，而是追求内心的平静。",
        "ending": {
          "title": "丐帮智者",
          "rating": "A",
          "desc": "你找到了比财富更重要的东西——智慧和平静。"
        }
      },
      "ending_beg_rise": {
        "text": "你凭借努力和才智，一步步从三袋弟子升到九袋长老。你改革了丐帮的运营模式，让每个乞丐都能有尊严地生活。",
        "ending": {
          "title": "九袋长老",
          "rating": "A",
          "desc": "你用实力证明了自己。从底层到高层，每一步都走得踏实。"
        }
      },
      "ending_beg_honest": {
        "text": "你主动坦白后，帮主不但没有怪你，反而更加信任你。他说：\"敢于承认错误的人，才值得托付重任。\"你成为了他的左膀右臂。",
        "ending": {
          "title": "坦诚相待",
          "rating": "A",
          "desc": "诚实是最好的策略。你赢得了真正的信任。"
        }
      },
      "ending_beg_info": {
        "text": "你利用丐帮的情报网，做起了信息咨询生意。政商名流的秘密都在你手中。你成了地下世界的\"信息之王\"。",
        "ending": {
          "title": "信息之王",
          "rating": "S",
          "desc": "信息就是力量。你掌握了所有人的秘密。"
        }
      },
      "ending_beg_hero": {
        "text": "你用情报网帮助被欺压的百姓，惩治贪官污吏。你成了都市传说中的\"丐侠\"。人们不知道你的真面目，但都知道有一个乞丐在守护着这座城市的正义。",
        "ending": {
          "title": "丐侠传说",
          "rating": "S",
          "desc": "能力越大，责任越大。你选择了用力量帮助他人。"
        }
      },
      "ending_beg_franchise": {
        "text": "你创立了\"丐帮连锁乞讨有限公司\"，统一培训、统一服装、统一话术。加盟费只要998！一年内开了300家分店。你被称为\"乞讨界的麦当劳\"。",
        "ending": {
          "title": "乞讨连锁王",
          "rating": "S",
          "desc": "把乞讨做成商业模式，你是第一个。离谱但有效。"
        }
      },
      "ending_beg_invest": {
        "text": "你凭借前世记忆精准投资，三年内资产过亿。你买回了前世梦想中的房子，但选择继续穿着朴素的衣服。你说：\"真正的富有，是内心的从容。\"",
        "ending": {
          "title": "隐形富豪",
          "rating": "A",
          "desc": "从乞丐到富豪，你经历了人生的大起大落，终于找到了平衡。"
        }
      },
      "ending_beg_rich": {
        "text": "你高调炫富，买豪车、泡美女、上综艺。你成了网红\"乞丐哥\"。但有一天你醒来，发现账户被黑客清空。你又变回了乞丐。",
        "ending": {
          "title": "昙花一现",
          "rating": "C",
          "desc": "来得快去得也快。炫富的代价，是重新回到原点。"
        }
      },
      "ending_beg_thief": {
        "text": "你偷了企划书自己创业，很快赚到了第一桶金。但丐帮的人找上门来，你不得不离开这座城市。虽然有钱了，但你失去了所有朋友。",
        "ending": {
          "title": "孤独富翁",
          "rating": "B",
          "desc": "不义之财带来的只有孤独。钱买不到真正的快乐。"
        }
      },
      "ending_beg_partner": {
        "text": "帮主看到你的纸条，哈哈大笑。两人一见如故，联手打造了横跨黑白两道的商业帝国。你们被称为\"乞丐双雄\"。",
        "ending": {
          "title": "乞丐双雄",
          "rating": "SS",
          "desc": "两个重生者的联手，改变了整个世界的格局。"
        }
      }
    }
  },
  {
    "id": "cultivator",
    "title": "重生之我是修仙废柴",
    "emoji": "🧘",
    "desc": "你重生到修仙世界，却是人人嘲笑的废灵根。但你的金手指是——能看到所有人的属性面板。",
    "difficulty": "⭐⭐",
    "unlock": true,
    "stats": {
      "wealth": 5,
      "power": 5,
      "charm": 20,
      "luck": 90,
      "sanity": 60
    },
    "intro": "你从宗门杂物房的柴堆上醒来。外面传来嘲笑声：<span class=\"highlight\">\"那个废灵根还在睡？今天宗门大比，他连参加的资格都没有！\"</span>你揉了揉眼睛——眼前突然浮现出一块半透明的面板。",
    "scenes": {
      "start": {
        "text": "你盯着眼前的面板：<span class=\"highlight\">【天道修改器已激活】【当前权限：初级】【可查看他人属性】【可修改自身属性（每日1次）】</span>。你倒吸一口凉气——这不是废柴，这是挂逼！",
        "choices": [
          {
            "text": "先查看宗门里谁最强",
            "next": "scan",
            "effect": {
              "luck": 5,
              "sanity": 5
            }
          },
          {
            "text": "给自己加点力量，去参加大比",
            "next": "buff",
            "effect": {
              "power": 15,
              "sanity": -5
            }
          },
          {
            "text": "低调发育，先了解这个世界",
            "next": "explore",
            "effect": {
              "sanity": 10,
              "luck": 5
            }
          }
        ]
      },
      "scan": {
        "text": "你扫描了整个宗门。大师兄是金丹期，但面板显示他有<span class=\"highlight\">【隐藏弱点：怕老婆】</span>。宗主是元婴期，但面板显示<span class=\"highlight\">【隐藏秘密：年轻时偷过隔壁宗门的鸡】</span>。你忍不住笑出了声。",
        "choices": [
          {
            "text": "利用这些秘密获取资源",
            "next": "blackmail",
            "effect": {
              "wealth": 15,
              "sanity": -15
            }
          },
          {
            "text": "保守秘密，用真诚交朋友",
            "next": "friend",
            "effect": {
              "charm": 15,
              "sanity": 10
            }
          },
          {
            "text": "去找宗主，告诉他你知道他的秘密",
            "next": "confront",
            "effect": {
              "luck": 20,
              "sanity": -10
            }
          }
        ]
      },
      "blackmail": {
        "text": "你找到大师兄：\"师兄，嫂子最近还好吗？\"大师兄脸色大变，塞给你一瓶筑基丹。你又找到宗主：\"宗主，隔壁宗门的鸡……味道不错吧？\"宗主差点从椅子上摔下来。",
        "choices": [
          {
            "text": "见好就收，用资源修炼",
            "next": "ending_cult_power",
            "effect": {
              "power": 20,
              "wealth": 10
            }
          },
          {
            "text": "继续勒索，贪得无厌",
            "next": "ending_cult_greedy",
            "effect": {
              "wealth": 20,
              "sanity": -20
            }
          }
        ]
      },
      "friend": {
        "text": "你没有利用这些秘密，而是主动帮助大师兄解决夫妻矛盾，帮宗主找回了当年偷鸡的证据并销毁。他们对你感激涕零，收你为亲传弟子。",
        "choices": [
          {
            "text": "努力修炼，不负期望",
            "next": "ending_cult_hero",
            "effect": {
              "power": 20,
              "charm": 10
            }
          },
          {
            "text": "用面板能力辅助宗门发展",
            "next": "ending_cult_leader",
            "effect": {
              "power": 15,
              "charm": 15
            }
          }
        ]
      },
      "confront": {
        "text": "你直接找到宗主：\"我知道你的秘密。但我不是来威胁你的，我是来帮你的。\"宗主愣了三秒，然后大笑：<span class=\"highlight\">\"有意思！你是第一个敢这么跟我说话的炼气期弟子。\"</span>",
        "choices": [
          {
            "text": "请求宗主收你为徒",
            "next": "ending_cult_hero",
            "effect": {
              "power": 15,
              "luck": 10
            }
          },
          {
            "text": "请求宗主帮你开启隐藏灵根",
            "next": "ending_cult_hidden",
            "effect": {
              "power": 25,
              "luck": 15
            }
          }
        ]
      },
      "buff": {
        "text": "你打开修改器，给自己加了50点力量。瞬间，你感觉体内涌出一股洪荒之力。你冲上擂台，一拳把筑基期师兄打飞出去。<span class=\"highlight\">全场寂静。</span>",
        "choices": [
          {
            "text": "继续战斗，拿下大比冠军",
            "next": "buff_win",
            "effect": {
              "power": 20,
              "charm": 10
            }
          },
          {
            "text": "见好就收，隐藏实力",
            "next": "buff_hide",
            "effect": {
              "sanity": 10,
              "luck": 10
            }
          }
        ]
      },
      "buff_win": {
        "text": "你一路碾压，拿下宗门大比冠军。所有人都傻了——废柴变天才？长老们争着要收你为徒。但你心里清楚，这都是修改器的功劳。",
        "choices": [
          {
            "text": "接受最好的资源，努力修炼",
            "next": "ending_cult_power",
            "effect": {
              "power": 20,
              "wealth": 10
            }
          },
          {
            "text": "公开修改器的秘密",
            "next": "ending_cult_share",
            "effect": {
              "charm": 20,
              "sanity": 10
            }
          }
        ]
      },
      "buff_hide": {
        "text": "你假装体力不支退赛。但你的表现已经引起了注意。一个神秘黑衣人找到你：<span class=\"highlight\">\"小子，你身上有天道的气息。跟我们走吧。\"</span>",
        "choices": [
          {
            "text": "跟随黑衣人，探索真相",
            "next": "ending_cult_mystery",
            "effect": {
              "luck": 20,
              "sanity": -10
            }
          },
          {
            "text": "拒绝，继续留在宗门",
            "next": "ending_cult_hero",
            "effect": {
              "sanity": 10,
              "power": 10
            }
          }
        ]
      },
      "explore": {
        "text": "你花了一个月时间了解这个世界。原来修仙界分为九大宗门、三大圣地、一个魔教。而你的修改器，据说是<span class=\"highlight\">天道意志的碎片</span>，拥有者被称为\"天道之子\"。",
        "choices": [
          {
            "text": "以天道之子身份行走天下",
            "next": "ending_cult_chosen",
            "effect": {
              "power": 20,
              "luck": 15
            }
          },
          {
            "text": "隐藏身份，默默发育",
            "next": "ending_cult_hero",
            "effect": {
              "sanity": 10,
              "power": 15
            }
          }
        ]
      },
      "ending_cult_power": {
        "text": "凭借修改器和海量资源，你三年结丹、五年化婴、十年飞升。你成为修仙界有史以来修炼最快的人。仙界大门为你敞开。",
        "ending": {
          "title": "最快飞升",
          "rating": "SS",
          "desc": "挂逼的人生不需要解释。你用最短的时间走到了别人一生都走不到的高度。"
        }
      },
      "ending_cult_greedy": {
        "text": "你的勒索行为终于被揭发。整个修仙界都在追杀你。你逃到了魔教的地盘，投靠了魔教教主。从此走上了一条不归路。",
        "ending": {
          "title": "堕入魔道",
          "rating": "B",
          "desc": "贪得无厌的代价是众叛亲离。但魔道……也许更适合你？"
        }
      },
      "ending_cult_hero": {
        "text": "你凭借面板能力和勤奋修炼，成为了修仙界的传奇。你帮助弱小宗门、惩治邪修、维护正义。人们尊称你为\"天道真人\"。",
        "ending": {
          "title": "天道真人",
          "rating": "S",
          "desc": "能力越大，责任越大。你用天道的力量守护了这个世界。"
        }
      },
      "ending_cult_leader": {
        "text": "你成为了宗门的掌门。你利用面板能力优化宗门管理，让宗门在十年内成为天下第一宗。你被尊为\"修仙界第一掌门\"。",
        "ending": {
          "title": "第一掌门",
          "rating": "S",
          "desc": "你不仅自己强大，还带领整个宗门走向巅峰。"
        }
      },
      "ending_cult_hidden": {
        "text": "宗主帮你开启了隐藏的混沌灵根——万古无一的最强灵根。你的修炼速度暴涨百倍。三年后，你已经是化神期大能，连宗主都要叫你一声\"前辈\"。",
        "ending": {
          "title": "混沌灵根",
          "rating": "SSS",
          "desc": "废柴变天才，而且是万古第一天才。命运跟你开了个玩笑，然后给了你最好的补偿。"
        }
      },
      "ending_cult_share": {
        "text": "你公开了修改器的秘密。整个修仙界震惊了。你决定把修改器共享给所有人——从此，修仙不再是少数人的特权，每个人都能修炼。你被称为\"修仙革命者\"。",
        "ending": {
          "title": "修仙革命者",
          "rating": "SS",
          "desc": "你改变了整个修仙界的规则。人人如龙，这才是真正的天道。"
        }
      },
      "ending_cult_mystery": {
        "text": "黑衣人带你来到了一个隐藏的世界——天道管理局。原来每个世界都有天道意志，而你是被选中的\"天道管理员\"。你的任务是维护世界平衡。",
        "ending": {
          "title": "天道管理员",
          "rating": "SSS",
          "desc": "你以为自己是挂逼，其实你是管理员。整个世界的规则，由你来定。"
        }
      },
      "ending_cult_chosen": {
        "text": "你以天道之子的身份行走天下。九大宗门奉你为主，三大圣地请你做圣主，连魔教教主都亲自来拜见你。你统一了修仙界，建立了新的秩序。",
        "ending": {
          "title": "天道之子",
          "rating": "SSS",
          "desc": "你是被天道选中的人。整个世界，都在你的掌控之中。"
        }
      }
    }
  },
  {
    "id": "star",
    "title": "重生之我是顶流明星",
    "emoji": "🌟",
    "desc": "你重生成了当红顶流！但黑粉遍地、对家挖坑、经纪人跑路……娱乐圈的水，比马里亚纳海沟还深。",
    "difficulty": "⭐⭐",
    "unlock": true,
    "stats": {
      "wealth": 60,
      "power": 30,
      "charm": 90,
      "luck": 50,
      "sanity": 40
    },
    "intro": "你从保姆车里醒来，外面是山呼海啸的粉丝尖叫声。经纪人递来今天的行程：<span class=\"highlight\">\"早上6点综艺录制，9点广告拍摄，12点新剧发布会，下午3点被黑上热搜需要公关，晚上8点颁奖典礼……\"</span>",
    "scenes": {
      "start": {
        "text": "你看着镜子里那张帅到犯规的脸，又看看手机上99+的黑粉私信。前世你是娱乐圈打工人，深知这个圈子的残酷。但现在——<span class=\"highlight\">你是站在金字塔尖的那个人。</span>",
        "choices": [
          {
            "text": "好好营业，稳固人气",
            "next": "work",
            "effect": {
              "charm": 10,
              "wealth": 5
            }
          },
          {
            "text": "调查是谁在黑你",
            "next": "investigate",
            "effect": {
              "power": 10,
              "sanity": -5
            }
          },
          {
            "text": "不管了，先享受明星生活",
            "next": "enjoy",
            "effect": {
              "sanity": 10,
              "charm": 5
            }
          }
        ]
      },
      "work": {
        "text": "你拿出前世做打工人的专业精神，认真对待每一个通告。导演夸你敬业，品牌方追加代言，粉丝感动落泪。但你的对家坐不住了。",
        "choices": [
          {
            "text": "用实力说话，不理会黑子",
            "next": "ending_star_actor",
            "effect": {
              "charm": 15,
              "sanity": 10
            }
          },
          {
            "text": "反击！收集对家黑料",
            "next": "ending_star_war",
            "effect": {
              "power": 15,
              "sanity": -10
            }
          }
        ]
      },
      "investigate": {
        "text": "你动用前世的人脉调查黑粉来源。结果发现幕后黑手是你的经纪人！他收了竞争对手的钱，一直在暗中搞你。<span class=\"highlight\">难怪你总是莫名其妙上黑热搜。</span>",
        "choices": [
          {
            "text": "当面揭穿，让他身败名裂",
            "next": "ending_star_revenge",
            "effect": {
              "power": 20,
              "sanity": -10
            }
          },
          {
            "text": "收集证据，交给警方",
            "next": "ending_star_justice",
            "effect": {
              "sanity": 10,
              "charm": 10
            }
          },
          {
            "text": "将计就计，反向利用他",
            "next": "ending_star_spy",
            "effect": {
              "power": 15,
              "luck": 10
            }
          }
        ]
      },
      "enjoy": {
        "text": "你决定先享受一下明星生活。私人飞机、米其林餐厅、限量版跑车……前世想都不敢想的东西，现在唾手可得。但你在派对上遇到了一个神秘人。",
        "choices": [
          {
            "text": "神秘人说可以让你更红",
            "next": "ending_star_deal",
            "effect": {
              "charm": 20,
              "sanity": -15
            }
          },
          {
            "text": "拒绝诱惑，回归正轨",
            "next": "ending_star_actor",
            "effect": {
              "sanity": 15,
              "charm": 5
            }
          }
        ]
      },
      "ending_star_actor": {
        "text": "你凭借实力拿下了影帝。颁奖典礼上，你说：\"我前世是一个打工人，今生成为了演员。我想告诉所有人——梦想是可以实现的。\"全场起立鼓掌。",
        "ending": {
          "title": "实力影帝",
          "rating": "S",
          "desc": "用实力说话，用作品证明。你成为了真正的艺术家。"
        }
      },
      "ending_star_war": {
        "text": "你和对家展开了旷日持久的娱乐圈大战。双方互爆黑料、粉丝互撕、热搜天天见。最终两败俱伤，但你的名字永远留在了娱乐圈历史上。",
        "ending": {
          "title": "娱乐圈战神",
          "rating": "B",
          "desc": "你赢了战争，但输了人心。娱乐圈的战争，从来没有真正的赢家。"
        }
      },
      "ending_star_revenge": {
        "text": "你当众揭穿了经纪人的阴谋。他身败名裂，锒铛入狱。你成为了娱乐圈的\"复仇者\"，所有人都怕你三分。但你也发现，身边的人开始疏远你。",
        "ending": {
          "title": "复仇者",
          "rating": "B",
          "desc": "复仇的快感是短暂的。当你赢了之后，才发现自己失去了更多。"
        }
      },
      "ending_star_justice": {
        "text": "你把证据交给警方，经纪人被判刑。你没有借此炒作，而是低调处理。媒体称赞你是\"娱乐圈的清流\"。你的口碑达到了顶峰。",
        "ending": {
          "title": "正义之星",
          "rating": "S",
          "desc": "用正确的方式做正确的事。你赢得了所有人的尊重。"
        }
      },
      "ending_star_spy": {
        "text": "你将计就计，通过经纪人向对手传递假消息。对手中计，自毁长城。你不仅除掉了内鬼，还顺便扳倒了竞争对手。一箭双雕。",
        "ending": {
          "title": "谋略之王",
          "rating": "S",
          "desc": "娱乐圈的权谋，你玩得比谁都溜。智慧，是最好的武器。"
        }
      },
      "ending_star_deal": {
        "text": "神秘人是娱乐圈最大的资本大佬。他帮你拿到了好莱坞的资源。你成为了国际巨星，但代价是失去了自由——你的一切都被资本控制。",
        "ending": {
          "title": "国际巨星",
          "rating": "A",
          "desc": "你站在了世界的舞台上，但舞台的幕后，有人在操控一切。"
        }
      }
    }
  },
  {
    "id": "apocalypse",
    "title": "重生之我是末世幸存者",
    "emoji": "🧟",
    "desc": "你重生到了丧尸爆发的末世！但你有一个特殊能力——可以和丧尸沟通。",
    "difficulty": "⭐⭐⭐",
    "unlock": true,
    "stats": {
      "wealth": 0,
      "power": 20,
      "charm": 10,
      "luck": 70,
      "sanity": 50
    },
    "intro": "你从废墟中醒来，外面传来丧尸的嘶吼声。你低头一看——手臂上有一个咬痕，但你没有变成丧尸。反而，你听到丧尸在说话：<span class=\"highlight\">\"饿……想吃……螺蛳粉……\"</span>",
    "scenes": {
      "start": {
        "text": "你震惊地发现，你能听懂丧尸的语言。而且丧尸们似乎把你当成了同类。一只丧尸走过来，递给你一罐可乐：<span class=\"highlight\">\"兄弟，喝吗？刚从便利店拿的。\"</span>",
        "choices": [
          {
            "text": "接受丧尸的友谊，建立丧尸军团",
            "next": "army",
            "effect": {
              "power": 20,
              "sanity": -15
            }
          },
          {
            "text": "利用这个能力帮助人类幸存者",
            "next": "help",
            "effect": {
              "charm": 15,
              "sanity": 10
            }
          },
          {
            "text": "研究丧尸，找出病毒的解药",
            "next": "research",
            "effect": {
              "luck": 15,
              "sanity": 5
            }
          }
        ]
      },
      "army": {
        "text": "你成为了丧尸之王。你发现丧尸其实保留了部分人类意识，只是被病毒控制了身体。你教会丧尸们种田、盖房、甚至跳广场舞。<span class=\"highlight\">丧尸文明诞生了。</span>",
        "choices": [
          {
            "text": "带领丧尸和人类和平共处",
            "next": "ending_apo_peace",
            "effect": {
              "charm": 20,
              "sanity": 15
            }
          },
          {
            "text": "用丧尸军团征服世界",
            "next": "ending_apo_conquer",
            "effect": {
              "power": 25,
              "sanity": -20
            }
          }
        ]
      },
      "help": {
        "text": "你回到人类幸存者基地，告诉他们你能和丧尸沟通。没人相信你，直到你带着一只丧尸走进基地，丧尸开口说：<span class=\"highlight\">\"大家好，我叫张三，生前是程序员，变成丧尸后还在写代码。\"</span>",
        "choices": [
          {
            "text": "建立人尸共存的新社会",
            "next": "ending_apo_peace",
            "effect": {
              "charm": 20,
              "sanity": 10
            }
          },
          {
            "text": "成为人类和丧尸之间的翻译官",
            "next": "ending_apo_diplomat",
            "effect": {
              "charm": 15,
              "luck": 10
            }
          }
        ]
      },
      "research": {
        "text": "你发现丧尸病毒其实是一种纳米机器人，是某个疯狂科学家制造的。你利用丧尸的沟通能力，找到了病毒的源代码。<span class=\"highlight\">你可以改写病毒！</span>",
        "choices": [
          {
            "text": "改写病毒，让丧尸恢复人性",
            "next": "ending_apo_cure",
            "effect": {
              "sanity": 20,
              "charm": 15
            }
          },
          {
            "text": "强化病毒，创造超级丧尸军团",
            "next": "ending_apo_conquer",
            "effect": {
              "power": 25,
              "sanity": -20
            }
          }
        ]
      },
      "ending_apo_peace": {
        "text": "你建立了人类和丧尸共存的新社会。丧尸负责体力劳动，人类负责脑力劳动。十年后，文明重建完成。你被尊称为\"新世界的缔造者\"。",
        "ending": {
          "title": "新世界缔造者",
          "rating": "SS",
          "desc": "你不仅拯救了人类，还给了丧尸第二次生命。真正的和平，是所有人共存。"
        }
      },
      "ending_apo_conquer": {
        "text": "你率领丧尸军团征服了所有幸存者基地。你成为了末世的独裁者。所有人都怕你，但没人敢反抗你。你坐在尸骨堆成的王座上，感到前所未有的空虚。",
        "ending": {
          "title": "末世暴君",
          "rating": "B",
          "desc": "你征服了世界，但世界只剩你一个人。权力，有时候是最孤独的东西。"
        }
      },
      "ending_apo_diplomat": {
        "text": "你成为了人类和丧尸之间的桥梁。你促成了史上第一份《人尸和平协议》。丧尸们获得了公民权，人类获得了劳动力。双赢。",
        "ending": {
          "title": "和平使者",
          "rating": "S",
          "desc": "沟通是解决问题的关键。你用语言而不是武力，创造了和平。"
        }
      },
      "ending_apo_cure": {
        "text": "你改写了纳米病毒，所有丧尸恢复了人性。他们变回了人类，但保留了丧尸时期的记忆。世界开始重建，你成为了人类历史上最伟大的科学家。",
        "ending": {
          "title": "救世主",
          "rating": "SSS",
          "desc": "你终结了末世。数十亿丧尸变回人类。你的名字将被永远铭记。"
        }
      }
    }
  }
];
