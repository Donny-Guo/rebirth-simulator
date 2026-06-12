/* ========== 游戏核心引擎 ========== */

// 全局游戏状态
const GameState = {
  currentScenario: null,
  currentNodeId: null,
  stats: {},
  skills: [],
  achievements: [],
  log: [],
  systemName: '',
  systemDesc: '',
  systemSkill: '',
  chapterNum: 0,
};

// ========== 页面管理 ==========
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(screenId);
  if (screen) screen.classList.add('active');
}

// ========== 场景选择页渲染 ==========
function renderScenarioGrid() {
  const grid = document.getElementById('scenario-grid');
  grid.innerHTML = '';
  Object.entries(STORIES).forEach(([key, story]) => {
    const card = document.createElement('div');
    card.className = 'scenario-card' + (story.locked ? ' locked' : '');
    card.innerHTML = `
      <span class="scenario-emoji">${story.emoji}</span>
      <div class="scenario-name">${story.name}</div>
      <div class="scenario-tagline">${story.tagline}</div>
      <div class="scenario-tags">
        ${story.tags.map(t => `<span class="tag ${t.color}">${t.text}</span>`).join('')}
      </div>
    `;
    if (!story.locked) {
      card.onclick = () => selectScenario(key);
    }
    grid.appendChild(card);
  });
}

// ========== 选择场景 ==========
function selectScenario(key) {
  const story = STORIES[key];
  if (!story || story.locked) return;

  GameState.currentScenario = key;
  GameState.stats = { ...story.baseStats };
  GameState.skills = [...story.baseSkills];
  GameState.achievements = [];
  GameState.log = [];
  GameState.chapterNum = 0;
  GameState.systemName = story.system.name;
  GameState.systemDesc = story.system.desc;
  GameState.systemSkill = story.system.skill;

  // 渲染系统觉醒页
  document.getElementById('system-name').textContent = story.system.name;
  document.getElementById('system-desc').textContent = story.system.desc;
  document.getElementById('system-skill').innerHTML = `技能：<strong>${story.system.skill}</strong>`;

  const statsContainer = document.getElementById('initial-stats');
  statsContainer.innerHTML = '';
  Object.entries(story.baseStats).forEach(([stat, val]) => {
    statsContainer.innerHTML += `
      <div class="init-stat">
        <div class="stat-val">${val}</div>
        <div>${STAT_NAMES[stat] || stat}</div>
      </div>
    `;
  });

  showScreen('system-screen');
}

// ========== 开始游戏 ==========
function startGame() {
  const story = STORIES[GameState.currentScenario];
  document.getElementById('player-role').textContent = story.name;
  renderGameNode(story.startNode);
  showScreen('game-screen');
}

// ========== 渲染游戏节点 ==========
function renderGameNode(nodeId) {
  const story = STORIES[GameState.currentScenario];
  const node = story.nodes[nodeId];
  if (!node) {
    console.error('Node not found:', nodeId);
    return;
  }

  GameState.currentNodeId = nodeId;

  // 更新章节
  if (node.chapter) {
    GameState.chapterNum = node.chapter;
  }
  const chapterText = GameState.chapterNum > 0 ? `第${GameState.chapterNum}章` : '序章';
  document.getElementById('chapter-info').textContent = chapterText;

  // 场景图
  document.getElementById('scene-art').textContent = node.art || '';

  // 处理文本（支持模板）
  let text = processText(node.text);

  // 故事文本（带打字效果）
  const storyText = document.getElementById('story-text');
  storyText.innerHTML = '';
  typeWriter(storyText, text, 0);

  // 添加到日志
  GameState.log.push({
    chapter: GameState.chapterNum,
    text: text.replace(/<[^>]*>/g, ''),
    art: node.art || ''
  });

  // 系统通知
  const notif = document.getElementById('system-notification');
  if (node.notification) {
    notif.textContent = node.notification;
    notif.classList.add('show');
  } else {
    notif.classList.remove('show');
  }

  // 处理属性变化
  if (node.statChanges) {
    applyStatChanges(node.statChanges);
  }

  // 处理技能获得
  if (node.gainSkills) {
    node.gainSkills.forEach(s => {
      if (!GameState.skills.includes(s)) {
        GameState.skills.push(s);
        showToast(`获得技能：${s}`, 'success');
      }
    });
  }

  // 处理成就
  if (node.achievement) {
    if (!GameState.achievements.includes(node.achievement)) {
      GameState.achievements.push(node.achievement);
      showToast(`成就解锁：${node.achievement}`, 'warning');
    }
  }

  // 延迟渲染选择（等打字完成）
  setTimeout(() => {
    renderChoices(node.choices);
  }, Math.min(text.length * 25, 1500));

  // 结局检查
  if (node.ending) {
    setTimeout(() => {
      showEnding(node.ending);
    }, 3000);
  }
}

// ========== 文本处理 ==========
function processText(text) {
  // 替换属性引用
  text = text.replace(/\{(\w+)\}/g, (m, stat) => {
    return GameState.stats[stat] || 0;
  });
  // 高亮标记
  text = text.replace(/\*\*(.*?)\*\*/g, '<span class="highlight-text">$1</span>');
  text = text.replace(/\[系统\](.*?)(?=\n|$)/g, '<span class="system-text">[系统]$1</span>');
  text = text.replace(/「(.*?)」/g, '<span class="golden-text">「$1」</span>');
  return text;
}

// ========== 打字机效果 ==========
function typeWriter(element, html, delay) {
  // 简单分字输出（处理HTML标签）
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const plainText = tempDiv.textContent;

  let index = 0;
  const speed = 25;
  element.innerHTML = '';

  // 直接设置全部内容，用渐显效果
  element.innerHTML = html;
  element.style.opacity = '0';
  element.style.transition = 'opacity 0.5s';
  requestAnimationFrame(() => {
    element.style.opacity = '1';
  });
}

// ========== 渲染选择 ==========
function renderChoices(choices) {
  const panel = document.getElementById('choices-panel');
  panel.innerHTML = '';

  if (!choices || choices.length === 0) return;

  choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';

    let conditionMet = true;
    let conditionText = '';

    if (choice.condition) {
      const result = checkCondition(choice.condition);
      conditionMet = result.met;
      conditionText = result.text;
    }

    if (!conditionMet) {
      btn.classList.add('disabled');
    }

    btn.innerHTML = `
      <span class="choice-index">${String.fromCharCode(65 + i)}</span>
      ${choice.text}
      ${conditionText ? `<span class="choice-hint ${conditionMet ? 'condition-met' : 'condition-not-met'}">${conditionText}</span>` : ''}
      ${choice.hint ? `<span class="choice-hint">${choice.hint}</span>` : ''}
    `;

    if (conditionMet) {
      btn.onclick = () => makeChoice(choice, btn);
    }

    panel.appendChild(btn);
  });
}

// ========== 条件检查 ==========
function checkCondition(cond) {
  if (cond.stat) {
    const val = GameState.stats[cond.stat] || 0;
    const met = val >= (cond.min || 0);
    return {
      met,
      text: cond.hideText ? '' : `需要${STAT_NAMES[cond.stat] || cond.stat}${cond.min ? '≥' + cond.min : ''}（当前：${val}）`
    };
  }
  if (cond.skill) {
    const met = GameState.skills.includes(cond.skill);
    return {
      met,
      text: met ? `已拥有：${cond.skill}` : `需要技能：${cond.skill}`
    };
  }
  return { met: true, text: '' };
}

// ========== 做出选择 ==========
function makeChoice(choice, btnElement) {
  // 视觉反馈
  document.querySelectorAll('.choice-btn').forEach(b => {
    if (b === btnElement) {
      b.classList.add('selected');
    } else {
      b.classList.add('fade-out');
    }
  });

  // 延迟跳转
  setTimeout(() => {
    // 处理选择触发的属性变化
    if (choice.statChanges) {
      applyStatChanges(choice.statChanges);
    }

    // 跳转到下一个节点
    if (choice.next) {
      renderGameNode(choice.next);
    }
  }, 600);
}

// ========== 属性变化 ==========
function applyStatChanges(changes) {
  changes.forEach(change => {
    const stat = change.stat;
    const val = change.value;
    const oldVal = GameState.stats[stat] || 0;
    GameState.stats[stat] = Math.max(0, Math.min(100, oldVal + val));

    // 浮动文字效果
    showStatChange(STAT_NAMES[stat] || stat, val);

    // 更新属性面板
    updateStatsPanel();
  });
}

function showStatChange(statName, val) {
  const el = document.createElement('div');
  el.className = 'stat-change ' + (val > 0 ? 'positive' : 'negative');
  el.textContent = `${statName} ${val > 0 ? '+' : ''}${val}`;
  el.style.left = (Math.random() * 200 + 100) + 'px';
  el.style.top = (Math.random() * 100 + 100) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

// ========== 属性面板 ==========
function toggleStats() {
  const panel = document.getElementById('stats-panel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    updateStatsPanel();
    // 关闭log面板
    document.getElementById('log-panel').classList.remove('open');
  }
}

function updateStatsPanel() {
  const body = document.getElementById('stats-body');
  const colors = {
    charm: 'red', wisdom: 'blue', force: 'gold',
    luck: 'green', wealth: 'gold', reputation: 'purple',
    hp: 'red', mp: 'blue', karma: 'green',
    madness: 'purple', aura: 'gold', cooking: 'red',
    eloquence: 'blue', immortality: 'purple', cultivation: 'green',
    spirit: 'blue', angerness: 'red', shamelessness: 'purple',
    deterrence: 'red', scheming: 'purple', survival: 'green',
    madness_v: 'purple', popularity: 'gold', creativity: 'green',
    chill: 'blue', assassination: 'red', underworld: 'purple',
    streetwise: 'green', foodie: 'gold', military: 'red',
    governance: 'blue', harem: 'red', treachery: 'purple',
    dragonAura: 'gold', celestialFavor: 'purple',
  };

  body.innerHTML = '';
  Object.entries(GameState.stats).forEach(([stat, val]) => {
    const color = colors[stat] || 'blue';
    body.innerHTML += `
      <div class="stat-row">
        <div class="stat-label">
          <span>${STAT_NAMES[stat] || stat}</span>
          <span>${val}</span>
        </div>
        <div class="stat-bar-outer">
          <div class="stat-bar-inner ${color}" style="width: ${val}%"></div>
        </div>
      </div>
    `;
  });

  // 技能
  const skillsSection = document.getElementById('skills-section');
  skillsSection.innerHTML = `<h4>已获技能</h4>`;
  GameState.skills.forEach(s => {
    skillsSection.innerHTML += `<div class="skill-item">${s}</div>`;
  });

  // 成就
  const achieveSection = document.getElementById('achievements-section');
  achieveSection.innerHTML = `<h4>成就</h4>`;
  GameState.achievements.forEach(a => {
    achieveSection.innerHTML += `<div class="achievement-item">🏆 ${a}</div>`;
  });
  if (GameState.achievements.length === 0) {
    achieveSection.innerHTML += `<div style="font-size:0.8rem;color:#999">暂无成就</div>`;
  }
}

// ========== 剧情回顾 ==========
function toggleLog() {
  const panel = document.getElementById('log-panel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    renderLog();
    // 关闭stats面板
    document.getElementById('stats-panel').classList.remove('open');
  }
}

function renderLog() {
  const body = document.getElementById('log-body');
  body.innerHTML = '';
  GameState.log.forEach((entry, i) => {
    body.innerHTML += `
      <div style="margin-bottom:1rem;padding-bottom:0.8rem;border-bottom:1px dashed #ddd;">
        <div style="font-size:0.8rem;color:#999;">${entry.chapter > 0 ? '第' + entry.chapter + '章' : '序章'}</div>
        <div style="font-size:1.1rem;margin-top:0.3rem;">${entry.art} ${entry.text}</div>
      </div>
    `;
  });
  body.scrollTop = body.scrollHeight;
}

// ========== 结局 ==========
function showEnding(ending) {
  document.getElementById('ending-title').textContent = ending.title;
  document.getElementById('ending-art').textContent = ending.art || '';
  document.getElementById('ending-text').textContent = ending.text;

  const statsDiv = document.getElementById('ending-stats');
  statsDiv.innerHTML = '';
  Object.entries(GameState.stats).forEach(([stat, val]) => {
    statsDiv.innerHTML += `<div class="ending-stat">${STAT_NAMES[stat] || stat}: ${val}</div>`;
  });

  showScreen('ending-screen');
}

// ========== 存档/读档 ==========
function saveGame() {
  const data = JSON.stringify(GameState);
  localStorage.setItem('rebirth_save', data);
  showToast('存档成功！', 'success');
}

function loadGame() {
  const data = localStorage.getItem('rebirth_save');
  if (!data) {
    showToast('没有找到存档', 'warning');
    return;
  }
  try {
    const parsed = JSON.parse(data);
    Object.assign(GameState, parsed);
    showScreen('game-screen');
    renderGameNode(GameState.currentNodeId);
    showToast('读档成功！', 'success');
  } catch (e) {
    showToast('存档数据损坏', 'warning');
  }
}

function resetGame() {
  GameState.currentScenario = null;
  GameState.currentNodeId = null;
  GameState.stats = {};
  GameState.skills = [];
  GameState.achievements = [];
  GameState.log = [];
}

// ========== Toast ==========
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ========== 属性名称映射 ==========
const STAT_NAMES = {
  charm: '魅力',
  wisdom: '智慧',
  force: '武力',
  luck: '运气',
  wealth: '财富',
  reputation: '声望',
  hp: '气血',
  mp: '灵力',
  karma: '因果',
  madness: '癫狂',
  aura: '气场',
  cooking: '厨艺',
  eloquence: '口才',
  immortality: '仙缘',
  cultivation: '修为',
  spirit: '神识',
  angerness: '怒气',
  shamelessness: '无耻度',
  deterrence: '威慑',
  scheming: '城府',
  survival: '生存',
  madness_v: '疯魔',
  popularity: '人气',
  creativity: '创意',
  chill: '淡定',
  assassination: '暗杀',
  underworld: '江湖',
  streetwise: '街头智慧',
  foodie: '吃货值',
  military: '军事',
  governance: '治国',
  harem: '后宫',
  treachery: '奸诈',
  dragonAura: '龙气',
  celestialFavor: '天命',
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
  renderScenarioGrid();
});
