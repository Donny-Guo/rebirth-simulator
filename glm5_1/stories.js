/* ========== 剧情数据注册中心 ========== */

var STORIES = {};

// 加载霸总剧情
if (typeof STORY_BOSS !== 'undefined') {
  STORIES.boss = STORY_BOSS;
}

// 加载皇帝剧情
if (typeof STORY_EMPEROR !== 'undefined') {
  STORIES.emperor = STORY_EMPEROR;
}

// 加载乞丐剧情
if (typeof STORY_BEGGAR !== 'undefined') {
  STORIES.beggar = STORY_BEGGAR;
}

// 加载修仙者剧情
if (typeof STORY_CULTIVATOR !== 'undefined') {
  STORIES.cultivator = STORY_CULTIVATOR;
}

// 加载杀手剧情
if (typeof STORY_ASSASSIN !== 'undefined') {
  STORIES.assassin = STORY_ASSASSIN;
}
