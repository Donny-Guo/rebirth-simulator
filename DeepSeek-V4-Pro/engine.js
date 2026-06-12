// 重生模拟器 - 游戏引擎
(function() {
  var app = document.getElementById('app');
  var SAVE_KEY = 'rebirth_saves';

  var state = {
    screen: 'title',
    playerStats: {},
    currentScenario: null,
    currentScene: 'start',
    history: [],
    chosenSystem: null,
    completedScenarios: {}
  };

  var STAT_META = {
    wealth: { name: '财富', icon: '💰' },
    power: { name: '权力', icon: '⚡' },
    charm: { name: '魅力', icon: '💖' },
    luck: { name: '幸运', icon: '🍀' },
    sanity: { name: '理智', icon: '🧠' }
  };

  var SYSTEMS = [
    { id: 'sys_mall', name: '万界商城系统', emoji: '🛒', desc: '可以购买任何世界的能力和道具，只要你有足够的积分。开局赠送100积分。', bonus: { points: 100, desc: '初始积分 +100' } },
    { id: 'sys_checkin', name: '签到打卡系统', emoji: '📅', desc: '每天签到获得随机奖励，连续签到奖励翻倍。开局赠送7天签到加速卡。', bonus: { luck: 3, desc: '幸运 +3' } },
    { id: 'sys_cheat', name: '天道修改器', emoji: '🔧', desc: '可以直接修改现实参数。开局赠送1次免费修改机会。', bonus: { power: 5, luck: 5, desc: '权力 +5, 幸运 +5' } }
  ];

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v || 0)); }

  // ==================== SAVE / LOAD ====================

  function getSaves() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || []; }
    catch (e) { return []; }
  }

  function setSaves(saves) {
    localStorage.setItem(SAVE_KEY, JSON.stringify(saves));
  }

  function saveGame(slotIndex) {
    var saves = getSaves();
    var snapshot = {
      slot: slotIndex,
      timestamp: Date.now(),
      label: state.currentScenario ? state.currentScenario.title : '未开始',
      sceneLabel: state.currentScene,
      data: {
        playerStats: JSON.parse(JSON.stringify(state.playerStats)),
        currentScenarioId: state.currentScenario ? state.currentScenario.id : null,
        currentScene: state.currentScene,
        history: state.history.slice(),
        chosenSystem: state.chosenSystem ? JSON.parse(JSON.stringify(state.chosenSystem)) : null,
        completedScenarios: JSON.parse(JSON.stringify(state.completedScenarios))
      }
    };
    saves[slotIndex] = snapshot;
    setSaves(saves);
    return snapshot;
  }

  function loadGame(slotIndex) {
    var saves = getSaves();
    var snap = saves[slotIndex];
    if (!snap || !snap.data) return false;
    var d = snap.data;
    state.playerStats = JSON.parse(JSON.stringify(d.playerStats));
    state.currentScene = d.currentScene;
    state.history = d.history.slice();
    state.chosenSystem = d.chosenSystem;
    state.completedScenarios = d.completedScenarios || {};
    if (d.currentScenarioId) {
      var sc = SCENARIOS.find(function(s) { return s.id === d.currentScenarioId; });
      if (sc) {
        state.currentScenario = sc;
        state.screen = 'scene';
        renderScene(d.currentScene);
        return true;
      }
    }
    return false;
  }

  function deleteSave(slotIndex) {
    var saves = getSaves();
    saves[slotIndex] = null;
    setSaves(saves);
  }

  // ==================== TOAST ====================

  function showToast(msg) {
    var existing = document.getElementById('toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function() { toast.classList.add('show'); }, 10);
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() { if (toast.parentNode) toast.remove(); }, 300);
    }, 2000);
  }

  // ==================== TOOLBAR ====================

  function renderToolbar() {
    if (state.screen === 'title') return '';
    var html = '<div class="toolbar">';
    html += '<button class="tb-btn" onclick="window._gameShowSaveModal()" title="存档">💾</button>';
    html += '<button class="tb-btn" onclick="window._gameShowLoadModal()" title="读档">📂</button>';
    if (state.screen === 'scene') {
      html += '<button class="tb-btn tb-quit" onclick="window._gameQuitScenario()" title="退出">🚪</button>';
    }
    html += '</div>';
    return html;
  }

  window._gameQuitScenario = function() {
    if (!confirm('确定要退出当前剧本吗？未保存的进度将丢失。')) return;
    state.currentScenario = null;
    state.currentScene = 'start';
    state.playerStats = {};
    state.history = [];
    renderScenarioSelect();
  };

  // ==================== MODALS ====================

  function renderSaveModal() {
    var saves = getSaves();
    var html = '<div class="modal-overlay" onclick="window._gameCloseModal()"><div class="modal-content" onclick="event.stopPropagation()">';
    html += '<div class="modal-header">💾 保存游戏</div>';
    html += '<div class="save-slots">';
    for (var i = 0; i < 3; i++) {
      var snap = saves[i];
      if (snap && snap.data) {
        var d = new Date(snap.timestamp);
        var timeStr = (d.getMonth()+1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + String(d.getMinutes()).padStart(2,'0');
        html += '<div class="save-slot" onclick="window._gameDoSave(' + i + ')">';
        html += '<div class="slot-num">存档 ' + (i + 1) + '</div>';
        html += '<div class="slot-info">' + snap.label + ' — ' + snap.sceneLabel + '</div>';
        html += '<div class="slot-time">' + timeStr + '</div>';
        html += '<button class="slot-del" onclick="event.stopPropagation();window._gameDoDelete(' + i + ')">🗑️</button>';
        html += '</div>';
      } else {
        html += '<div class="save-slot empty" onclick="window._gameDoSave(' + i + ')">';
        html += '<div class="slot-num">存档 ' + (i + 1) + '</div>';
        html += '<div class="slot-info empty-text">— 空 —</div>';
        html += '</div>';
      }
    }
    html += '</div>';
    html += '<div class="modal-footer"><button class="btn btn-small btn-secondary" onclick="window._gameCloseModal()">关闭</button></div>';
    html += '</div></div>';
    return html;
  }

  function renderLoadModal() {
    var saves = getSaves();
    var html = '<div class="modal-overlay" onclick="window._gameCloseModal()"><div class="modal-content" onclick="event.stopPropagation()">';
    html += '<div class="modal-header">📂 读取存档</div>';
    html += '<div class="save-slots">';
    var hasAny = false;
    for (var i = 0; i < 3; i++) {
      var snap = saves[i];
      if (snap && snap.data) {
        hasAny = true;
        var d = new Date(snap.timestamp);
        var timeStr = (d.getMonth()+1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + String(d.getMinutes()).padStart(2,'0');
        html += '<div class="save-slot" onclick="window._gameDoLoad(' + i + ')">';
        html += '<div class="slot-num">存档 ' + (i + 1) + '</div>';
        html += '<div class="slot-info">' + snap.label + ' — ' + snap.sceneLabel + '</div>';
        html += '<div class="slot-time">' + timeStr + '</div>';
        html += '<button class="slot-del" onclick="event.stopPropagation();window._gameDoDelete(' + i + ')">🗑️</button>';
        html += '</div>';
      } else {
        html += '<div class="save-slot empty">';
        html += '<div class="slot-num">存档 ' + (i + 1) + '</div>';
        html += '<div class="slot-info empty-text">— 空 —</div>';
        html += '</div>';
      }
    }
    if (!hasAny) {
      html += '<div style="grid-column:1/-1;text-align:center;color:#999;padding:20px">还没有存档记录</div>';
    }
    html += '</div>';
    html += '<div class="modal-footer"><button class="btn btn-small btn-secondary" onclick="window._gameCloseModal()">关闭</button></div>';
    html += '</div></div>';
    return html;
  }

  window._gameShowSaveModal = function() {
    var overlay = document.createElement('div');
    overlay.id = 'modal-container';
    overlay.innerHTML = renderSaveModal();
    app.appendChild(overlay);
  };

  window._gameShowLoadModal = function() {
    var overlay = document.createElement('div');
    overlay.id = 'modal-container';
    overlay.innerHTML = renderLoadModal();
    app.appendChild(overlay);
  };

  window._gameCloseModal = function() {
    var el = document.getElementById('modal-container');
    if (el) el.remove();
  };

  window._gameDoSave = function(slotIndex) {
    var snap = saveGame(slotIndex);
    window._gameCloseModal();
    var d = new Date(snap.timestamp);
    var timeStr = (d.getMonth()+1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + String(d.getMinutes()).padStart(2,'0');
    showToast('✅ 已保存到 存档' + (slotIndex+1) + ' (' + timeStr + ')');
  };

  window._gameDoLoad = function(slotIndex) {
    var ok = loadGame(slotIndex);
    window._gameCloseModal();
    if (ok) {
      showToast('✅ 读档成功');
    } else {
      showToast('❌ 读档失败，存档数据损坏');
    }
  };

  window._gameDoDelete = function(slotIndex) {
    if (!confirm('确定要删除存档 ' + (slotIndex + 1) + ' 吗？')) return;
    deleteSave(slotIndex);
    window._gameCloseModal();
    showToast('🗑️ 存档已删除');
  };


  // ==================== RENDER ====================

  function renderStats() {
    if (!state.playerStats || Object.keys(state.playerStats).length === 0) return '';
    var html = '<div class="stats-bar">';
    for (var key in STAT_META) {
      if (!STAT_META.hasOwnProperty(key)) continue;
      var meta = STAT_META[key];
      var val = state.playerStats[key] || 0;
      var cls = val >= 70 ? 'high' : (val <= 20 ? 'low' : '');
      html += '<div class="stat-item"><span class="stat-icon">' + meta.icon + '</span><span class="stat-name">' + meta.name + '</span><span class="stat-value ' + cls + '">' + val + '</span></div>';
    }
    html += '</div>';
    return html;
  }

  function renderHistory() {
    if (state.history.length === 0) return '';
    var html = '<div class="history-log">';
    html += '<div style="font-weight:bold;margin-bottom:6px;color:var(--ink)">📜 经历回顾</div>';
    for (var i = 0; i < state.history.length; i++) {
      html += '<div class="log-entry">' + state.history[i] + '</div>';
    }
    html += '</div>';
    return html;
  }

  function applyEffect(effect) {
    if (!effect) return;
    for (var key in effect) {
      if (!effect.hasOwnProperty(key)) continue;
      if (state.playerStats[key] !== undefined) {
        state.playerStats[key] = clamp(state.playerStats[key] + effect[key], 0, 100);
      }
    }
  }

  function addHistory(text) {
    state.history.push(text);
    if (state.history.length > 20) state.history.shift();
  }

  function renderTitle() {
    state.screen = 'title';
    state.playerStats = {};
    state.currentScenario = null;
    state.history = [];
    state.chosenSystem = null;

    var html = '<div class="comic-panel animate-in">';
    html += '<div class="game-title"><h1>✨ 重生模拟器 ✨</h1>';
    html += '<div class="subtitle">—— 我在异世界开挂的人生 ——</div></div>';
    html += '<div class="scene-text"><span class="narration">你死了。但死亡不是终点。一道白光闪过，一个声音在你脑海中响起：</span><br><br>';
    html += '<span class="system-msg">"检测到灵魂波动……正在匹配重生系统……匹配成功！请选择你的金手指——"</span></div>';

    html += '<div class="scenario-grid">';
    for (var i = 0; i < SYSTEMS.length; i++) {
      var sys = SYSTEMS[i];
      html += '<div class="scenario-card" onclick="window._gameSelectSystem(\'' + sys.id + '\')">';
      html += '<span class="card-emoji">' + sys.emoji + '</span>';
      html += '<div class="card-title">' + sys.name + '</div>';
      html += '<div class="card-desc">' + sys.desc + '</div>';
      html += '<div class="card-difficulty">' + sys.bonus.desc + '</div>';
      html += '</div>';
    }
    html += '</div>';

    html += '<div class="btn-group">';
    html += '<button class="btn btn-secondary btn-small" onclick="window._gameSkipSystem()">不选金手指，直接开始</button>';
    html += '</div>';

    var saves = getSaves();
    var hasSaves = saves.some(function(s) { return s && s.data; });
    if (hasSaves) {
      html += '<div class="btn-group" style="margin-top:8px">';
      html += '<button class="btn btn-secondary btn-small" onclick="window._gameShowLoadModal()">📂 继续游戏（读档）</button>';
      html += '</div>';
    }

    html += '</div>';
    app.innerHTML = html;
  }

  window._gameSelectSystem = function(sysId) {
    var sys = SYSTEMS.find(function(s) { return s.id === sysId; });
    if (!sys) return;
    state.chosenSystem = sys;
    if (sys.bonus) {
      for (var key in sys.bonus) {
        if (!sys.bonus.hasOwnProperty(key)) continue;
        if (key !== 'desc' && state.playerStats[key] !== undefined) {
          state.playerStats[key] = clamp((state.playerStats[key] || 0) + sys.bonus[key], 0, 100);
        }
      }
    }
    addHistory('🔮 选择了金手指：' + sys.name);
    renderScenarioSelect();
  };

  window._gameSkipSystem = function() {
    state.chosenSystem = null;
    addHistory('🔮 没有选择金手指，凭实力重生！');
    renderScenarioSelect();
  };

  function renderScenarioSelect() {
    state.screen = 'scenario_select';
    var html = '<div class="comic-panel animate-in">';
    html += renderToolbar();
    html += '<div class="game-title"><h1>✨ 选择重生身份 ✨</h1>';
    html += '<div class="subtitle">你想成为谁？</div></div>';

    if (state.chosenSystem) {
      html += '<div class="system-panel"><div class="sys-header">⚡ ' + state.chosenSystem.name + ' 已激活</div>';
      html += '<div class="sys-text">' + state.chosenSystem.desc + '</div></div>';
    }

    html += '<div class="scenario-grid">';
    for (var i = 0; i < SCENARIOS.length; i++) {
      var sc = SCENARIOS[i];
      var completed = state.completedScenarios[sc.id];
      var cls = sc.unlock ? '' : 'locked';
      var click = sc.unlock ? 'onclick="window._gameStartScenario(\'' + sc.id + '\')"' : '';
      html += '<div class="scenario-card ' + cls + '" ' + click + '>';
      html += '<span class="card-emoji">' + sc.emoji + '</span>';
      html += '<div class="card-title">' + sc.title + '</div>';
      html += '<div class="card-desc">' + sc.desc + '</div>';
      html += '<div class="card-difficulty">难度 ' + sc.difficulty + '</div>';
      if (completed) {
        html += '<div style="margin-top:4px;font-size:0.7em;color:var(--gold)">✅ 已完成 (' + completed.rating + ')</div>';
      }
      html += '</div>';
    }
    html += '</div>';

    html += '<div class="btn-group">';
    html += '<button class="btn btn-secondary btn-small" onclick="window._gameRenderTitle()">← 重新选择金手指</button>';
    html += '</div>';

    html += '</div>';
    app.innerHTML = html;
  }

  window._gameRenderTitle = renderTitle;

  window._gameStartScenario = function(scenarioId) {
    var sc = SCENARIOS.find(function(s) { return s.id === scenarioId; });
    if (!sc || !sc.unlock) return;

    state.currentScenario = sc;
    state.currentScene = 'start';
    state.playerStats = JSON.parse(JSON.stringify(sc.stats));

    if (state.chosenSystem && state.chosenSystem.bonus) {
      for (var key in state.chosenSystem.bonus) {
        if (!state.chosenSystem.bonus.hasOwnProperty(key)) continue;
        if (key !== 'desc' && state.playerStats[key] !== undefined) {
          state.playerStats[key] = clamp(state.playerStats[key] + state.chosenSystem.bonus[key], 0, 100);
        }
      }
    }

    addHistory('🎭 开始：' + sc.title);
    renderScene('intro');
  };

  function renderScene(sceneId) {
    var sc = state.currentScenario;
    if (!sc) return;

    if (sceneId === 'intro') {
      state.screen = 'scene';
      var html = '<div class="comic-panel animate-in">';
      html += renderToolbar();
      html += '<div class="game-title"><h1>' + sc.emoji + ' ' + sc.title + '</h1></div>';
      html += renderStats();
      html += '<div class="scene-text"><span class="narration">' + sc.intro + '</span></div>';
      html += '<div class="choices">';
      html += '<button class="choice-btn" onclick="window._gameGoToScene(\'start\')">继续 →</button>';
      html += '</div>';
      html += renderHistory();
      html += '</div>';
      app.innerHTML = html;
      return;
    }

    var sceneData = sc.scenes[sceneId];
    if (!sceneData) {
      console.error('Scene not found:', sceneId);
      return;
    }

    if (sceneData.ending) {
      renderEnding(sceneData);
      return;
    }

    state.currentScene = sceneId;
    state.screen = 'scene';

    var html = '<div class="comic-panel animate-in">';
    html += renderToolbar();
    html += '<div class="game-title"><h1>' + sc.emoji + ' ' + sc.title + '</h1></div>';
    html += renderStats();
    html += '<div class="scene-text"><span class="narration">' + sceneData.text + '</span></div>';

    if (sceneData.choices && sceneData.choices.length > 0) {
      html += '<div class="choices">';
      for (var i = 0; i < sceneData.choices.length; i++) {
        var choice = sceneData.choices[i];
        var effectDesc = choice.effect ? formatEffect(choice.effect) : '';
        html += '<button class="choice-btn" onclick="window._gameMakeChoice(' + i + ')">';
        html += choice.text;
        if (effectDesc) {
          html += '<span class="choice-hint">' + effectDesc + '</span>';
        }
        html += '</button>';
      }
      html += '</div>';
    }

    html += renderHistory();
    html += '</div>';
    app.innerHTML = html;
  }

  function formatEffect(effect) {
    var parts = [];
    for (var key in effect) {
      if (!effect.hasOwnProperty(key)) continue;
      var meta = STAT_META[key];
      if (meta) {
        var sign = effect[key] > 0 ? '+' : '';
        parts.push(meta.icon + meta.name + ' ' + sign + effect[key]);
      }
    }
    return parts.join('  ');
  }

  window._gameGoToScene = function(sceneId) {
    renderScene(sceneId);
  };

  window._gameMakeChoice = function(choiceIndex) {
    var sc = state.currentScenario;
    if (!sc) return;

    var sceneData = sc.scenes[state.currentScene];
    if (!sceneData || !sceneData.choices) return;

    var choice = sceneData.choices[choiceIndex];
    if (!choice) return;

    applyEffect(choice.effect);

    var shortText = choice.text.length > 30 ? choice.text.substring(0, 30) + '...' : choice.text;
    addHistory('👉 ' + shortText);

    renderScene(choice.next);
  };

  function renderEnding(sceneData) {
    var ending = sceneData.ending;
    state.screen = 'ending';

    if (state.currentScenario) {
      state.completedScenarios[state.currentScenario.id] = {
        title: ending.title,
        rating: ending.rating
      };
    }

    var html = '<div class="comic-panel animate-in flash-gold">';
    html += '<div class="ending-screen">';
    html += '<div class="ending-emoji">' + getEndingEmoji(ending.rating) + '</div>';
    html += '<div class="ending-title">结局：' + ending.title + '</div>';
    html += '<div class="ending-rating">评级：' + ending.rating + '</div>';
    html += '<div class="scene-text"><span class="narration">' + sceneData.text + '</span></div>';
    html += '<div class="ending-stats"><strong>' + ending.desc + '</strong></div>';

    html += '<div style="margin-top:16px">';
    html += '<div style="font-weight:bold;margin-bottom:8px;color:var(--ink)">📊 最终属性</div>';
    html += renderStats();
    html += '</div>';

    html += '<div class="btn-group">';
    html += '<button class="btn" onclick="window._gameStartScenario(\'' + state.currentScenario.id + '\')">🔄 重新来过</button>';
    html += '<button class="btn btn-secondary" onclick="window._gameRenderScenarioSelect()">🎭 换个身份</button>';
    html += '</div>';

    html += renderHistory();
    html += '</div></div>';
    app.innerHTML = html;
  }

  function getEndingEmoji(rating) {
    var map = { 'SSS': '👑', 'SS': '🌟', 'S': '✨', 'A': '🎉', 'B': '🤔', 'C': '😅' };
    return map[rating] || '📖';
  }

  window._gameRenderScenarioSelect = renderScenarioSelect;

  renderTitle();
})();
