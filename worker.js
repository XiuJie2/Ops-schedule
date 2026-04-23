// 訂閱续期和排班管理系統 - 完整優化版
// 功能：訂閱管理、排班管理、排除日期、機房檢核、多用户權限、响應式UI

/**
 * 通用导航栏生成函數 (前端用)
 * @param {string} activePage 当前頁面標識
 * @param {string} role 用户角色 'admin' | 'user'
 */

// ==========================================
// 1. 导航栏生成函數 (现代化版本)
// ==========================================
const getNavHtml = (activePage, role) => `
  <nav class="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="window.location.href='/dashboard'">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mr-2">
              <i class="ph ph-server text-white text-lg"></i>
            </div>
            <span class="font-bold text-xl text-slate-900 hidden md:block">運維管理系統</span>
            <span class="font-bold text-xl text-slate-900 block md:hidden">運維系統</span>
          </div>
          <div class="hidden md:ml-8 md:flex md:space-x-6">
            <a href="/dashboard" class="nav-link ${activePage === 'dashboard' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-gauge mr-1.5"></i>控制台</a>
            <a href="/checklist" class="nav-link ${activePage === 'checklist' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-check-square mr-1.5"></i>檢核清單</a>
            <a href="/checklist/history" class="nav-link ${activePage === 'history' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-clock-counter-clockwise mr-1.5"></i>檢核記錄</a>
            ${role === 'admin' ? `
            <a href="/subscriptions" class="nav-link ${activePage === 'subscriptions' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-bell-simple mr-1.5"></i>訂閱管理</a>
            <a href="/schedule" class="nav-link ${activePage === 'schedule' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-users-three mr-1.5"></i>排班管理</a>
            <a href="/checklist/manage" class="nav-link ${activePage === 'manage-checklist' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-list-dashes mr-1.5"></i>清單管理</a>
            <a href="/exclusions" class="nav-link ${activePage === 'exclusions' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-calendar-x mr-1.5"></i>日期排除</a>
            <a href="/config" class="nav-link ${activePage === 'config' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"><i class="ph ph-gear mr-1.5"></i>系統配置</a>
            ` : ''}
          </div>
        </div>
        <div class="flex items-center">
          <div class="hidden md:flex items-center">
            <span class="text-sm text-slate-500 mr-4 flex items-center">
              <i class="ph ph-user-circle mr-1.5 text-lg"></i>
              ${role === 'admin' ? '管理員' : '員工'}
            </span>
            <a href="/api/logout" class="text-slate-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
              <i class="ph ph-sign-out mr-1.5"></i>退出
            </a>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button type="button" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="bg-white/50 inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <i class="ph ph-list text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 手機端菜單 -->
    <div class="hidden md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
        <a href="/dashboard" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">控制台</a>
        <a href="/checklist" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">檢核清單</a>
        <a href="/checklist/history" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">檢核記錄</a>
        ${role === 'admin' ? `
        <a href="/subscriptions" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">訂閱管理</a>
        <a href="/schedule" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">排班管理</a>
        <a href="/checklist/manage" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">清單管理</a>
        <a href="/exclusions" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">日期排除</a>
        <a href="/config" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600">系統配置</a>
        ` : ''}
        <a href="/api/logout" class="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50">退出登錄</a>
      </div>
    </div>
  </nav>
`;

// 定义HTML模板 - 登錄頁面
const loginPage = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>登錄 - 運維管理系統</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
            },
            slate: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
            },
          },
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
          },
          boxShadow: {
            'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07)',
            'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
          },
        },
      },
    }
  </script>
  <style>
    body {
      background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%);
      min-height: 100vh;
    }

    .login-card {
      backdrop-filter: blur(20px);
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.8);
    }

    .btn-primary {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.3);
      transition: all 0.2s ease;
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px 0 rgba(59, 130, 246, 0.4);
    }

    .input:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
      animation: fadeIn 0.3s ease-out;
    }
  </style>
</head>
<body class="flex items-center justify-center px-4 py-8">
  <div class="w-full max-w-md fade-in">
    <div class="login-card p-8 rounded-2xl shadow-soft">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-glow">
          <i class="ph ph-server text-3xl"></i>
        </div>
        <h1 class="text-2xl font-bold text-slate-900 mt-4 tracking-tight">運維管理系統</h1>
        <p class="text-slate-500 mt-1 text-sm">歡迎回來，請登錄您的賬戶</p>
      </div>

      <form id="loginForm" class="space-y-5">
        <div>
          <label for="username" class="block text-sm font-medium text-slate-700 mb-2">
            <i class="ph ph-user mr-2 text-slate-400"></i>用户名
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            class="input bg-white border-slate-200 rounded-lg focus:border-primary-500 focus:ring-primary-500"
            placeholder="請輸入用户名"
            autocomplete="username"
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-slate-700 mb-2">
            <i class="ph ph-lock-key mr-2 text-slate-400"></i>密碼
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="input bg-white border-slate-200 rounded-lg focus:border-primary-500 focus:ring-primary-500"
            placeholder="請輸入密碼"
            autocomplete="current-password"
          >
        </div>

        <button type="submit" class="btn btn-primary w-full py-3 text-base font-medium">
          <i class="ph ph-sign-in text-xl"></i>
          <span id="loginBtnText">登錄</span>
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-slate-500">
          還沒有賬號？
          <a href="/register" class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
            立即註冊
          </a>
        </p>
      </div>

      <div id="errorMsg" class="mt-4 hidden">
        <div class="rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm flex items-center fade-in">
          <i class="ph ph-warning-circle mr-2 text-lg"></i>
          <span id="errorText"></span>
        </div>
      </div>
    </div>

    <p class="text-center text-xs text-slate-400 mt-6">
      安全登錄 · 您的數據受加密保護
    </p>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('loginForm');
      const btnText = document.getElementById('loginBtnText');
      const errorMsg = document.getElementById('errorMsg');
      const errorText = document.getElementById('errorText');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const button = form.querySelector('button');

        if (!username || !password) {
          showError('請填寫完整信息');
          return;
        }

        button.disabled = true;
        const originalContent = btnText.textContent;
        btnText.textContent = '登錄中...';
        errorMsg.classList.add('hidden');

        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
          });

          const result = await response.json();

          if (result.success) {
            window.location.href = '/dashboard';
          } else {
            showError(result.message || '登錄失敗，請檢查用戶名和密碼');
            button.disabled = false;
            btnText.textContent = originalContent;
          }
        } catch (error) {
          showError('網路錯誤，請稍後再試');
          button.disabled = false;
          btnText.textContent = originalContent;
        }
      });

      function showError(message) {
        errorText.textContent = message;
        errorMsg.classList.remove('hidden');
        errorMsg.classList.add('fade-in');
      }

      document.getElementById('username').focus();
    });
  </script>
</body>
</html>
`;

// 註冊頁面
const registerPage = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>註冊 - 運維管理系統</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
            },
            slate: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
            },
          },
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
          },
          boxShadow: {
            'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07)',
            'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
          },
        },
      },
    }
  </script>
  <style>
    body {
      background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%);
      min-height: 100vh;
    }

    .login-card {
      backdrop-filter: blur(20px);
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.8);
    }

    .btn-primary {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.3);
      transition: all 0.2s ease;
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px 0 rgba(59, 130, 246, 0.4);
    }

    .input:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
      animation: fadeIn 0.3s ease-out;
    }
  </style>
</head>
<body class="flex items-center justify-center px-4 py-8">
  <div class="w-full max-w-md fade-in">
    <div class="login-card p-8 rounded-2xl shadow-soft">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4">
          <i class="ph ph-user-plus text-3xl"></i>
        </div>
        <h1 class="text-2xl font-bold text-slate-900 mt-4 tracking-tight">創建賬號</h1>
        <p class="text-slate-500 mt-1 text-sm">加入運維管理系統</p>
      </div>

      <form id="registerForm" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-slate-700 mb-2">
            <i class="ph ph-user mr-2 text-slate-400"></i>用户名 <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            class="input bg-white border-slate-200 rounded-lg focus:border-primary-500 focus:ring-primary-500"
            placeholder="請輸入用户名"
            autocomplete="username"
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-slate-700 mb-2">
            <i class="ph ph-lock-key mr-2 text-slate-400"></i>密碼 <span class="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="input bg-white border-slate-200 rounded-lg focus:border-primary-500 focus:ring-primary-500"
            placeholder="請輸入密碼"
            autocomplete="new-password"
          >
        </div>

        <div>
          <label for="inviteCode" class="block text-sm font-medium text-slate-700 mb-2">
            <i class="ph ph-key mr-2 text-slate-400"></i>邀請碼 (可選)
          </label>
          <input
            type="text"
            id="inviteCode"
            name="inviteCode"
            class="input bg-white border-slate-200 rounded-lg focus:border-primary-500 focus:ring-primary-500"
            placeholder="填寫可獲取管理員權限"
            autocomplete="off"
          >
        </div>

        <button type="submit" class="btn btn-primary w-full py-3 text-base font-medium mt-4">
          <i class="ph ph-check-circle text-xl"></i>
          <span id="registerBtnText">註冊</span>
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-slate-500">
          已有賬號？
          <a href="/" class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
            立即登錄
          </a>
        </p>
      </div>

      <div id="msg" class="mt-4 text-sm text-center"></div>
    </div>

    <p class="text-center text-xs text-slate-400 mt-6">
      安全註冊 · 您的信息受加密保護
    </p>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('registerForm');
      const btnText = document.getElementById('registerBtnText');
      const msgDiv = document.getElementById('msg');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const inviteCode = document.getElementById('inviteCode').value.trim();
        const button = form.querySelector('button');

        if (!username || !password) {
          showMessage('請填寫必填字段', 'error');
          return;
        }

        if (password.length < 6) {
          showMessage('密碼長度至少 6 位', 'error');
          return;
        }

        button.disabled = true;
        const originalText = btnText.textContent;
        btnText.textContent = '註冊中...';

        try {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, inviteCode })
          });

          const result = await response.json();

          if (result.success) {
            showMessage('註冊成功！正在跳轉...', 'success');
            setTimeout(() => window.location.href = '/', 1500);
          } else {
            showMessage(result.message || '註冊失敗', 'error');
            button.disabled = false;
            btnText.textContent = originalText;
          }
        } catch (error) {
          showMessage('網路錯誤，請稍後再試', 'error');
          button.disabled = false;
          btnText.textContent = originalText;
        }
      });

      function showMessage(text, type) {
        msgDiv.textContent = text;
        msgDiv.className = type === 'success'
          ? 'text-green-600 mt-2 text-sm fade-in'
          : 'text-red-500 mt-2 text-sm fade-in';
      }

      document.getElementById('username').focus();
    });
  </script>
</body>
</html>
`;

// 控制台頁面 (支持動態角色)
// 控制台頁面 (修復權限顯示與計數邏輯)
// 控制台頁面 (修正版：提交後重置也能正確顯示「已完成」)
const dashboardPage = (role) => `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>控制台</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
            },
            slate: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
            },
          },
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
          },
          boxShadow: {
            'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07)',
            'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
          },
        },
      },
    }
  </script>
  <style>
    /* Dashboard 特定样式 */
    .stat-card {
      position: relative;
      padding: 1.5rem;
      background: white;
      border-radius: 0.75rem;
      border: 1px solid var(--slate-200);
      box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
      transition: all 0.2s ease;
      overflow: hidden;
    }

    .stat-card:hover {
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), #60a5fa);
    }

    .stat-card.warning::before { background: linear-gradient(90deg, #fbbf24, #f59e0b); }
    .stat-card.danger::before { background: linear-gradient(90deg, #f87171, #ef4444); }
    .stat-card.success::before { background: linear-gradient(90deg, #34d399, #10b981); }

    .card {
      background: white;
      border-radius: 0.75rem;
      border: 1px solid var(--slate-200);
      box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
      transition: all 0.2s ease;
    }

    .card:hover {
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
      animation: fadeIn 0.3s ease-out;
    }
  </style>
</head>
<body class="bg-slate-50 min-h-screen">
  ${getNavHtml('dashboard', role)}
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8 flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-bold text-slate-900" id="greeting">早安</h1>
        <p class="text-slate-500 mt-1">今日系統運行概況</p>
      </div>
      <div class="text-right text-sm text-slate-400">
        最後更新: <span id="lastUpdate">-</span>
      </div>
    </div>

    <!-- 1. 核心指標卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 fade-in">
      
      <!-- 今日排班 -->
      <div class="stat-card">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-slate-500">今日排班</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-1 truncate" id="todayStaff">-</h3>
          </div>
          <div class="p-2 bg-primary-100 rounded-lg text-primary-600"><i class="ph ph-calendar-day text-xl"></i></div>
        </div>
        <p class="text-xs text-slate-500 mt-2" id="scheduleStatus">加載中...</p>
      </div>

      <!-- 排除日期統計 -->
      <div class="stat-card warning">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-slate-500">排除日期</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-1" id="exclusionCount">0</h3>
          </div>
          <div class="p-2 bg-red-100 rounded-lg text-red-600"><i class="ph ph-calendar-x text-xl"></i></div>
        </div>
        <p class="text-xs text-slate-500 mt-2">生效中的特殊日期</p>
      </div>

      <!-- 員工總數 -->
      <div class="stat-card success">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-slate-500">員工總數</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-1" id="staffCount">0</h3>
          </div>
          <div class="p-2 bg-green-100 rounded-lg text-green-600"><i class="ph ph-users text-xl"></i></div>
        </div>
        <p class="text-xs text-slate-500 mt-2">活躍員工</p>
      </div>

      <!-- 訂閱統計 -->
      <div class="stat-card danger">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-slate-500">訂閱狀態</p>
            <div class="flex items-baseline mt-1">
                <h3 class="text-2xl font-bold text-slate-900" id="totalSubsCount">0</h3>
                <span class="text-xs text-slate-500 ml-2">總數</span>
            </div>
          </div>
          <div class="p-2 bg-yellow-100 rounded-lg text-yellow-600"><i class="ph ph-bell text-xl"></i></div>
        </div>
        <p class="text-xs text-red-500 mt-2 font-bold" id="expiringText">0 項即將到期</p>
      </div>
    </div>

    <!-- 2. 主要功能區塊 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 fade-in">
      <!-- 左側：今日檢核 -->
      <div class="card lg:col-span-2 flex flex-col">
        <div class="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-xl">
          <h3 class="text-lg font-bold text-slate-900"><i class="ph ph-check-circle mr-2 text-primary-500"></i>今日機房檢核</h3>
          <a href="/checklist" class="text-sm text-primary-600 hover:text-primary-700 font-medium">進入檢核 &rarr;</a>
        </div>
        <div class="p-6 flex-grow" id="todayChecklist">
          <div class="flex flex-col items-center justify-center py-8 text-slate-400">
            <i class="ph ph-spinner ph-spin text-3xl mb-3"></i>
            <p class="text-sm">正在同步數據...</p>
          </div>
        </div>
      </div>
      
      <!-- 右側：最近排除日期 -->
      <div class="card flex flex-col">
        <div class="px-6 py-4 border-b border-slate-200 bg-slate-50 rounded-t-xl flex justify-between items-center">
          <h3 class="text-lg font-bold text-slate-900"><i class="ph ph-calendar-slash mr-2 text-red-500"></i>最近排除日期</h3>
          <a href="/exclusions" class="${role === 'admin' ? '' : 'hidden'} text-sm text-primary-600 hover:text-primary-700 font-medium">日期管理 &rarr;</a>
        </div>
        <div class="p-4 flex-grow overflow-y-auto max-h-64" id="recentExclusionsList">
          <div class="text-center py-4 text-slate-400 text-sm">加載中...</div>
        </div>
      </div>
    </div>

    <!-- 3. 即將到期訂閱 -->
    <div class="card mb-8">
        <div class="px-6 py-4 border-b border-slate-200 bg-slate-50 rounded-t-xl flex justify-between items-center">
          <h3 class="text-lg font-bold text-slate-900"><i class="ph ph-warning mr-2 text-yellow-500"></i>即將到期訂閱</h3>
          <a href="/subscriptions" class="${role === 'admin' ? '' : 'hidden'} text-sm text-primary-600 hover:text-primary-700 font-medium">管理訂閱 &rarr;</a>
        </div>
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="expiringSubscriptionsList">
                <div class="text-center py-4 text-slate-400 col-span-full">加載中...</div>
            </div>
        </div>
    </div>
  </div>

  <script>
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return "早安";
        if (hour < 18) return "午安";
        return "晚安";
    }
    document.getElementById('greeting').innerText = getGreeting() + "，${role === 'admin' ? '管理員' : '夥伴'}";

    async function loadData() {
        try {
            // [關鍵修改] 同時獲取統計、今日單、以及歷史記錄
            const [stats, checklist, history] = await Promise.all([
                (await fetch('/api/dashboard/stats')).json(),
                (await fetch('/api/checklists/today')).json(),
                (await fetch('/api/checklists/history')).json()
            ]);

            document.getElementById('lastUpdate').innerText = new Date().toLocaleTimeString();
            
            // 1. 更新統計數字
            document.getElementById('todayStaff').textContent = stats.todayStaff || '無';
            document.getElementById('staffCount').textContent = stats.totalStaff || 0;
            document.getElementById('exclusionCount').textContent = stats.activeFutureExclusions || 0;
            document.getElementById('totalSubsCount').textContent = stats.totalSubscriptions || 0;
            const expCount = stats.expiringSubscriptions || 0;
            document.getElementById('expiringText').innerHTML = expCount > 0 
                ? \`<i class="fas fa-exclamation-circle mr-1"></i>\${expCount} 項即將到期\` 
                : '<span class="text-green-500"><i class="fas fa-check-circle mr-1"></i>目前狀態良好</span>';

            // 2. 更新排班狀態
            const scheduleData = stats.scheduleData || {};
            const statusEl = document.getElementById('scheduleStatus');
            if (scheduleData.isWorkDay && !scheduleData.isExcluded && scheduleData.staff) {
                statusEl.textContent = '今日正常值班';
                statusEl.className = 'text-xs text-green-600 mt-2 font-medium';
            } else {
                statusEl.textContent = scheduleData.isExcluded ? '排除日期 (休息)' : '非工作日';
                statusEl.className = 'text-xs text-gray-500 mt-2 font-medium';
            }

            // 3. [重點邏輯] 更新今日檢核區塊
            const checkDiv = document.getElementById('todayChecklist');
            
            if (checklist && checklist.items) {
                // 檢查歷史記錄中是否有「今天」的完成記錄
                const todayStr = checklist.date; // e.g. "2023-10-27"
                const todayHistory = history.find(h => h.date === todayStr);

                // 情況 A: 今天已經有人提交過了 (查歷史) -> 顯示已完成
                if (todayHistory) {
                    const isAbnormal = todayHistory.overallStatus === 'reported';
                    const submitTime = new Date(todayHistory.submittedAt).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
                    
                    checkDiv.innerHTML = \`
                        <div class="flex flex-col items-center justify-center h-full">
                            <div class="w-16 h-16 rounded-full \${isAbnormal?'bg-red-100 text-red-500':'bg-green-100 text-green-500'} flex items-center justify-center mb-4">
                                <i class="fas \${isAbnormal?'fa-exclamation-triangle':'fa-check'} text-3xl"></i>
                            </div>
                            <h4 class="text-xl font-bold text-gray-800">\${isAbnormal?'今日已提交 (有異常)':'檢核已完成'}</h4>
                            <p class="text-gray-500 mt-2 text-sm">由 \${todayHistory.staffName} 於 \${submitTime} 提交</p>
                            <div class="mt-4 text-xs">
                                <a href="/checklist" class="text-indigo-600 hover:underline mr-3">填寫新單</a>
                                <a href="/checklist/history" class="text-gray-500 hover:underline">查看記錄</a>
                            </div>
                        </div>
                    \`;
                } 
                // 情況 B: 今天沒人提交過 (顯示進度條或開始按鈕)
                else {
                    const done = checklist.items.filter(i => i.status !== 'pending').length;
                    const total = checklist.items.length;
                    const pct = Math.round((done/total)*100);

                    checkDiv.innerHTML = \`
                        <div class="space-y-6">
                            <div>
                                <div class="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>檢核進度</span>
                                    <span class="font-bold text-indigo-600">\${pct}%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-indigo-600 h-2 rounded-full transition-all duration-500" style="width: \${pct}%"></div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                \${checklist.items.slice(0, 4).map(item => \`
                                    <div class="flex items-center p-3 rounded bg-white border border-gray-100 shadow-sm">
                                        <div class="w-2 h-2 rounded-full mr-3 \${item.status==='normal'?'bg-green-500':item.status==='abnormal'?'bg-red-500':'bg-gray-300'}"></div>
                                        <span class="text-sm text-gray-700 truncate">\${item.title}</span>
                                    </div>
                                \`).join('')}
                                \${total > 4 ? \`<div class="text-center text-xs text-gray-400 py-2">還有 \${total-4} 項...</div>\` : ''}
                            </div>
                            <div class="text-center">
                                <a href="/checklist" class="inline-block w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition font-medium">
                                    \${done > 0 ? '繼續填寫檢核單' : '開始今日檢核'}
                                </a>
                            </div>
                        </div>
                    \`;
                }
            } else {
                checkDiv.innerHTML = '<div class="flex flex-col items-center justify-center h-full text-gray-400"><i class="fas fa-clipboard text-4xl mb-3 text-gray-200"></i><p>今日暫無檢核任務</p></div>';
            }

            // 4. 排除日期與訂閱列表 (保持原樣)
            const exclusionsList = document.getElementById('recentExclusionsList');
            if (stats.recentExclusions && stats.recentExclusions.length > 0) {
                exclusionsList.innerHTML = stats.recentExclusions.map(ex => \`
                    <div class="list-item flex justify-between items-center p-3 mb-2 rounded-lg border border-gray-100">
                        <div>
                            <p class="text-sm font-bold text-gray-800">\${ex.date}</p>
                            <p class="text-xs text-gray-500">\${ex.reason || '無備註'}</p>
                        </div>
                        <span class="px-2 py-1 text-xs rounded bg-red-100 text-red-600">\${ex.type === 'holiday' ? '節假' : '特殊'}</span>
                    </div>
                \`).join('');
            } else {
                exclusionsList.innerHTML = '<div class="text-center py-8 text-gray-400 text-sm"><i class="fas fa-check-circle text-2xl mb-2 text-green-100"></i><br>近期無排除日期</div>';
            }

            const subList = document.getElementById('expiringSubscriptionsList');
            if (subList && stats.expiringList) {
                if (stats.expiringList.length > 0) {
                    subList.innerHTML = stats.expiringList.map(sub => {
                        const isExpired = sub.daysDiff < 0;
                        return \`
                        <div class="list-item border \${isExpired ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'} rounded-lg p-4 relative overflow-hidden">
                            <div class="absolute top-0 right-0 px-2 py-1 text-xs font-bold \${isExpired ? 'bg-red-500 text-white' : 'bg-yellow-400 text-white'} rounded-bl-lg">
                                \${isExpired ? '已過期' : '剩 ' + sub.daysDiff + ' 天'}
                            </div>
                            <h4 class="font-bold text-gray-800 mb-1 truncate pr-16">\${sub.name}</h4>
                            <p class="text-xs text-gray-600 mb-2">\${sub.customType || '其他'}</p>
                            <div class="flex justify-between items-center text-xs text-gray-500 mt-2 border-t \${isExpired ? 'border-red-200' : 'border-yellow-200'} pt-2">
                                <span>\${new Date(sub.expiryDate).toLocaleDateString()}</span>
                                \${sub.autoRenew ? '<span class="text-blue-600"><i class="fas fa-sync-alt"></i> 自動</span>' : '<span>手動</span>'}
                            </div>
                        </div>
                        \`;
                    }).join('');
                } else {
                    subList.innerHTML = '<div class="col-span-full text-center py-8 text-gray-400"><i class="fas fa-thumbs-up text-3xl mb-2 text-gray-200"></i><br>所有訂閱狀態良好</div>';
                }
            }

        } catch(e) { console.error('Error loading dashboard data:', e); }
    }
    window.onload = loadData;
  </script>
</body>
</html>
`;

// 訂閱管理頁面
const subscriptionsPage = (role) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>訂閱管理 - 訂閱与排班管理系統</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-danger { background: linear-gradient(135deg, #f87171 0%, #dc2626 100%); transition: all 0.3s; }
    .btn-danger:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-success { background: linear-gradient(135deg, #34d399 0%, #059669 100%); transition: all 0.3s; }
    .btn-success:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-warning { background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%); transition: all 0.3s; }
    .btn-warning:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-info { background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%); transition: all 0.3s; }
    .btn-info:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    
    .table-container { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .modal-container { backdrop-filter: blur(8px); }
    .readonly-input { background-color: #f8fafc; border-color: #e2e8f0; cursor: not-allowed; }
    
    .hover-container { position: relative; }
    .hover-text { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
    .hover-text:hover { color: #3b82f6; }
    .hover-tooltip {
      position: fixed; z-index: 9999; background: #1f2937; color: white; padding: 10px 14px; border-radius: 8px;
      font-size: 0.875rem; max-width: 320px; word-wrap: break-word; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      opacity: 0; visibility: hidden; transition: all 0.3s ease; transform: translateY(-10px); white-space: normal;
      pointer-events: none; line-height: 1.4;
    }
    .hover-tooltip.show { opacity: 1; visibility: visible; transform: translateY(0); }
    .hover-tooltip::before {
      content: ''; position: absolute; top: -6px; left: 20px; border-left: 6px solid transparent;
      border-right: 6px solid transparent; border-bottom: 6px solid #1f2937;
    }
    
    .toast {
      position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px;
      color: white; font-weight: 500; z-index: 1000; transform: translateX(400px);
      transition: all 0.3s ease-in-out; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .toast.show { transform: translateX(0); }
    .toast.success { background-color: #10b981; }
    .toast.error { background-color: #ef4444; }
    .toast.info { background-color: #3b82f6; }
    .toast.warning { background-color: #f59e0b; }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  ${getNavHtml('subscriptions', role)} <!-- 这里替换了旧的导航栏 -->
  <div id="toast-container"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">訂閱管理</h2>
      <button id="addSubscriptionBtn" class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
        <i class="fas fa-plus mr-2"></i>添加新訂閱
      </button>
    </div>
    
    <div class="bg-white rounded-lg shadow-md mb-6">
      <div class="p-4 border-b border-gray-200">
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center">
            <label class="flex items-center">
              <input type="checkbox" id="filterActive" checked class="form-checkbox h-4 w-4 text-indigo-600 rounded">
              <span class="ml-2 text-sm text-gray-700">僅顯示启用</span>
            </label>
          </div>
          <div class="flex items-center">
            <label class="flex items-center">
              <input type="checkbox" id="filterExpiring" class="form-checkbox h-4 w-4 text-indigo-600 rounded">
              <span class="ml-2 text-sm text-gray-700">僅顯示即将到期</span>
            </label>
          </div>
          <div class="flex items-center">
            <select id="filterType" class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">所有類型</option>
              <option value="流媒體">流媒體</option>
              <option value="雲服務">雲服務</option>
              <option value="憑證">憑證</option>
              <option value="軟件">軟件</option>
              <option value="其他">其他</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
    <div class="table-container bg-white rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width: 25%;">名稱</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width: 15%;">類型</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width: 20%;">到期時間</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width: 15%;">提醒設置</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width: 10%;">狀態</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width: 15%;">操作</th>
            </tr>
          </thead>
          <tbody id="subscriptionsBody" class="bg-white divide-y divide-gray-200">
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 添加/編輯訂閱的模態框 -->
  <div id="subscriptionModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 modal-container hidden flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center justify-between">
          <h3 id="modalTitle" class="text-lg font-medium text-gray-900">添加新訂閱</h3>
          <button id="closeModal" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
      
      <form id="subscriptionForm" class="p-6 space-y-6">
        <input type="hidden" id="subscriptionId">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">訂閱名稱 *</label>
            <input type="text" id="name" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          
          <div>
            <label for="customType" class="block text-sm font-medium text-gray-700 mb-1">訂閱類型</label>
            <select id="customType" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">選擇類型</option>
              <option value="流媒體">流媒體</option>
              <option value="雲服務">雲服務</option>
              <option value="憑證">憑證</option>
              <option value="軟件">軟件</option>
              <option value="其他">其他</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label for="startDate" class="block text-sm font-medium text-gray-700 mb-1">開始日期</label>
            <input type="date" id="startDate"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          
          <div>
            <label for="periodValue" class="block text-sm font-medium text-gray-700 mb-1">週期數值 *</label>
            <input type="number" id="periodValue" min="1" value="1" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          
          <div>
            <label for="periodUnit" class="block text-sm font-medium text-gray-700 mb-1">週期單位 *</label>
            <select id="periodUnit" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="day">天</option>
              <option value="month" selected>月</option>
              <option value="year">年</option>
            </select>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="expiryDate" class="block text-sm font-medium text-gray-700 mb-1">到期日期 *</label>
            <input type="date" id="expiryDate" required
              class="readonly-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none">
          </div>
          
          <div class="flex items-end">
            <button type="button" id="calculateExpiryBtn" 
              class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium h-10">
              <i class="fas fa-calculator mr-2"></i>自動計算到期日期
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="reminderDays" class="block text-sm font-medium text-gray-700 mb-1">提前提醒天數</label>
            <input type="number" id="reminderDays" min="0" value="7"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <p class="text-xs text-gray-500 mt-1">0 = 僅到期日当天提醒，1+ = 提前N天開始提醒</p>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">選項設置</label>
            <div class="space-y-2">
              <label class="inline-flex items-center">
                <input type="checkbox" id="isActive" checked 
                  class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">启用訂閱</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" id="autoRenew" checked 
                  class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">自動續訂</span>
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">備註</label>
          <textarea id="notes" rows="3" placeholder="可添加相關備註信息..."
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        
        <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button type="button" id="cancelBtn" 
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            取消
          </button>
          <button type="submit" 
            class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-save mr-2"></i>保存
          </button>
        </div>
      </form>
    </div>
  </div>

  <script>
    function showToast(message, type = 'success', duration = 3000) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast ' + type;
      
      const icon = type === 'success' ? 'check-circle' :
                   type === 'error' ? 'exclamation-circle' :
                   type === 'warning' ? 'exclamation-triangle' : 'info-circle';
      
      toast.innerHTML = '<div class="flex items-center"><i class="fas fa-' + icon + ' mr-2"></i><span>' + message + '</span></div>';
      
      container.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          if (container.contains(toast)) {
            container.removeChild(toast);
          }
        }, 300);
      }, duration);
    }

    function createHoverText(text, maxLength = 30, className = 'text-sm text-gray-900') {
      if (!text || text.length <= maxLength) {
        return '<div class="' + className + '">' + text + '</div>';
      }

      const truncated = text.substring(0, maxLength) + '...';
      return '<div class="hover-container">' +
        '<div class="hover-text ' + className + '" data-full-text="' + text.replace(/"/g, '&quot;') + '">' +
          truncated +
        '</div>' +
        '<div class="hover-tooltip"></div>' +
      '</div>';
    }

    // 獲取所有訂閱
    async function loadSubscriptions() {
      try {
        const tbody = document.getElementById('subscriptionsBody');
        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4"><i class="fas fa-spinner fa-spin mr-2"></i>加载中...</td></tr>';

        const response = await fetch('/api/subscriptions');
        let data = await response.json();
        
        // 應用過滤器
        const filterActive = document.getElementById('filterActive').checked;
        const filterExpiring = document.getElementById('filterExpiring').checked;
        const filterType = document.getElementById('filterType').value;
        
        if (filterActive) {
          data = data.filter(sub => sub.isActive !== false);
        }
        
        if (filterExpiring) {
          const now = new Date();
          data = data.filter(sub => {
            const expiryDate = new Date(sub.expiryDate);
            const daysDiff = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
            return daysDiff <= (sub.reminderDays || 7) && daysDiff >= 0;
          });
        }
        
        if (filterType) {
          data = data.filter(sub => sub.customType === filterType);
        }
        
        tbody.innerHTML = '';
        
        if (data.length === 0) {
          tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-gray-500">没有訂閱數据</td></tr>';
          return;
        }
        
        // 按到期時間升序排序
        data.sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
        
        data.forEach(subscription => {
          const row = document.createElement('tr');
          row.className = subscription.isActive === false ? 'hover:bg-gray-50 bg-gray-100' : 'hover:bg-gray-50';
          
          const expiryDate = new Date(subscription.expiryDate);
          const now = new Date();
          const daysDiff = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
          
          let statusHtml = '';
          if (!subscription.isActive) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-gray-500"><i class="fas fa-pause-circle mr-1"></i>已停用</span>';
          } else if (daysDiff < 0) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-red-500"><i class="fas fa-exclamation-circle mr-1"></i>已過期</span>';
          } else if (daysDiff <= (subscription.reminderDays || 7)) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-yellow-500"><i class="fas fa-exclamation-triangle mr-1"></i>即将到期</span>';
          } else {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-green-500"><i class="fas fa-check-circle mr-1"></i>正常</span>';
          }
          
          let periodText = '';
          if (subscription.periodValue && subscription.periodUnit) {
            const unitMap = { day: '天', month: '月', year: '年' };
            periodText = subscription.periodValue + ' ' + (unitMap[subscription.periodUnit] || subscription.periodUnit);
          }
          
          const autoRenewIcon = subscription.autoRenew !== false ? 
            '<i class="fas fa-sync-alt text-blue-500 ml-1" title="自動續訂"></i>' : 
            '<i class="fas fa-ban text-gray-400 ml-1" title="不自動續訂"></i>';
          
          // 處理備註顯示
          let notesHtml = '';
          if (subscription.notes) {
            const notes = subscription.notes;
            if (notes.length > 50) {
              const truncatedNotes = notes.substring(0, 50) + '...';
              notesHtml = '<div class="notes-container">' +
                '<div class="notes-text text-xs text-gray-500" data-full-notes="' + notes.replace(/"/g, '&quot;') + '">' +
                  truncatedNotes +
                '</div>' +
                '<div class="notes-tooltip"></div>' +
              '</div>';
            } else {
              notesHtml = '<div class="text-xs text-gray-500">' + notes + '</div>';
            }
          }

          // 生成各列内容
          const nameHtml = createHoverText(subscription.name, 20, 'text-sm font-medium text-gray-900');
          const typeHtml = createHoverText((subscription.customType || '其他'), 15, 'text-sm text-gray-900');
          const periodHtml = periodText ? createHoverText('週期: ' + periodText, 20, 'text-xs text-gray-500 mt-1') : '';

          // 到期時間相關信息
          const expiryDateText = new Date(subscription.expiryDate).toLocaleDateString();
          const daysLeftText = daysDiff < 0 ? '已過期' + Math.abs(daysDiff) + '天' : '还剩' + daysDiff + '天';
          const startDateText = subscription.startDate ?
            '開始: ' + new Date(subscription.startDate).toLocaleDateString() : '';
          const startDateHtml = startDateText ? createHoverText(startDateText, 30, 'text-xs text-gray-500 mt-1') : '';

          row.innerHTML =
            '<td class="px-4 py-3">' +
              nameHtml +
              notesHtml +
            '</td>' +
            '<td class="px-4 py-3">' +
              '<div class="flex items-center"><i class="fas fa-tag mr-1"></i><span>' + typeHtml + '</span></div>' +
              (periodHtml ? '<div class="flex items-center">' + periodHtml + autoRenewIcon + '</div>' : '') +
            '</td>' +
            '<td class="px-4 py-3">' +
              '<div class="text-sm text-gray-900">' + expiryDateText + '</div>' +
              '<div class="text-xs text-gray-500 mt-1">' + daysLeftText + '</div>' +
              startDateHtml +
            '</td>' +
            '<td class="px-4 py-3 text-sm text-gray-900">' +
              '<div><i class="fas fa-bell mr-1"></i>提前' + (subscription.reminderDays || 0) + '天</div>' +
              (subscription.reminderDays === 0 ? '<div class="text-xs text-gray-500 mt-1">僅到期日提醒</div>' : '') +
            '</td>' +
            '<td class="px-4 py-3">' + statusHtml + '</td>' +
            '<td class="px-4 py-3 text-sm font-medium">' +
              '<div class="flex flex-col gap-1 lg:flex-row lg:flex-wrap">' +
                '<button class="edit btn-primary text-white px-2 py-1 rounded text-xs whitespace-nowrap" data-id="' + subscription.id + '"><i class="fas fa-edit mr-1"></i>編輯</button>' +
                '<button class="test-notify btn-info text-white px-2 py-1 rounded text-xs whitespace-nowrap" data-id="' + subscription.id + '"><i class="fas fa-paper-plane mr-1"></i>測試</button>' +
                '<button class="delete btn-danger text-white px-2 py-1 rounded text-xs whitespace-nowrap" data-id="' + subscription.id + '"><i class="fas fa-trash-alt mr-1"></i>删除</button>' +
                (subscription.isActive ?
                  '<button class="toggle-status btn-warning text-white px-2 py-1 rounded text-xs whitespace-nowrap" data-id="' + subscription.id + '" data-action="deactivate"><i class="fas fa-pause-circle mr-1"></i>停用</button>' :
                  '<button class="toggle-status btn-success text-white px-2 py-1 rounded text-xs whitespace-nowrap" data-id="' + subscription.id + '" data-action="activate"><i class="fas fa-play-circle mr-1"></i>启用</button>') +
              '</div>' +
            '</td>';
          
          tbody.appendChild(row);
        });
        
        document.querySelectorAll('.edit').forEach(button => {
          button.addEventListener('click', editSubscription);
        });
        
        document.querySelectorAll('.delete').forEach(button => {
          button.addEventListener('click', deleteSubscription);
        });
        
        document.querySelectorAll('.toggle-status').forEach(button => {
          button.addEventListener('click', toggleSubscriptionStatus);
        });

        document.querySelectorAll('.test-notify').forEach(button => {
          button.addEventListener('click', testSubscriptionNotification);
        });

        // 添加悬停功能
        addHoverListeners();
        
      } catch (error) {
        console.error('加载訂閱失敗:', error);
        const tbody = document.getElementById('subscriptionsBody');
        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-red-500"><i class="fas fa-exclamation-circle mr-2"></i>加载失敗，請刷新頁面重試</td></tr>';
        showToast('加载訂閱列表失敗', 'error');
      }
    }

    function addHoverListeners() {
      function positionTooltip(element, tooltip) {
        const rect = element.getBoundingClientRect();
        const tooltipHeight = 100;
        const viewportHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        let top = rect.bottom + scrollTop + 8;
        let left = rect.left;

        if (rect.bottom + tooltipHeight > viewportHeight) {
          top = rect.top + scrollTop - tooltipHeight - 8;
          tooltip.style.transform = 'translateY(10px)';
          tooltip.classList.add('tooltip-above');
        } else {
          tooltip.style.transform = 'translateY(-10px)';
          tooltip.classList.remove('tooltip-above');
        }

        const maxLeft = window.innerWidth - 320 - 20;
        if (left > maxLeft) {
          left = maxLeft;
        }

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
      }

      document.querySelectorAll('.hover-text').forEach(hoverElement => {
        const fullText = hoverElement.getAttribute('data-full-text');
        const tooltip = hoverElement.parentElement.querySelector('.hover-tooltip');

        if (fullText && tooltip) {
          hoverElement.addEventListener('mouseenter', () => {
            tooltip.textContent = fullText;
            positionTooltip(hoverElement, tooltip);
            tooltip.classList.add('show');
          });

          hoverElement.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
          });

          window.addEventListener('scroll', () => {
            if (tooltip.classList.contains('show')) {
              tooltip.classList.remove('show');
            }
          }, { passive: true });
        }
      });
    }
    
    async function testSubscriptionNotification(e) {
        const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
        const id = button.dataset.id;
        const originalContent = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i>';
        button.disabled = true;

        try {
            const response = await fetch('/api/subscriptions/' + id + '/test-notify', { method: 'POST' });
            const result = await response.json();
            if (result.success) {
                showToast(result.message || '測試通知已發送', 'success');
            } else {
                showToast(result.message || '測試通知發送失敗', 'error');
            }
        } catch (error) {
            console.error('測試通知失敗:', error);
            showToast('發送測試通知時發生錯誤', 'error');
        } finally {
            button.innerHTML = originalContent;
            button.disabled = false;
        }
    }
    
    async function toggleSubscriptionStatus(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      const action = e.target.dataset.action || e.target.parentElement.dataset.action;
      const isActivate = action === 'activate';
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (isActivate ? '启用中...' : '停用中...');
      button.disabled = true;
      
      try {
        const response = await fetch('/api/subscriptions/' + id + '/toggle-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isActive: isActivate })
        });
        
        if (response.ok) {
          showToast((isActivate ? '启用' : '停用') + '成功', 'success');
          loadSubscriptions();
        } else {
          const error = await response.json();
          showToast((isActivate ? '启用' : '停用') + '失敗: ' + (error.message || '未知錯誤'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error((isActivate ? '启用' : '停用') + '訂閱失敗:', error);
        showToast((isActivate ? '启用' : '停用') + '失敗，請稍後再試', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }
    
    document.getElementById('addSubscriptionBtn').addEventListener('click', () => {
      document.getElementById('modalTitle').textContent = '添加新訂閱';
      document.getElementById('subscriptionModal').classList.remove('hidden');

      document.getElementById('subscriptionForm').reset();
      document.getElementById('subscriptionId').value = '';

      const today = new Date().toISOString().split('T')[0];
      document.getElementById('startDate').value = today;
      document.getElementById('reminderDays').value = '7';
      document.getElementById('isActive').checked = true;
      document.getElementById('autoRenew').checked = true;

      calculateExpiryDate();
      setupModalEventListeners();
    });
    
    function setupModalEventListeners() {
      document.getElementById('calculateExpiryBtn').removeEventListener('click', calculateExpiryDate);
      document.getElementById('calculateExpiryBtn').addEventListener('click', calculateExpiryDate);

      ['startDate', 'periodValue', 'periodUnit'].forEach(id => {
        const element = document.getElementById(id);
        element.removeEventListener('change', calculateExpiryDate);
        element.addEventListener('change', calculateExpiryDate);
      });

      document.getElementById('cancelBtn').addEventListener('click', () => {
        document.getElementById('subscriptionModal').classList.add('hidden');
      });
    }
    
    function calculateExpiryDate() {
      const startDate = document.getElementById('startDate').value;
      const periodValue = parseInt(document.getElementById('periodValue').value);
      const periodUnit = document.getElementById('periodUnit').value;

      if (!startDate || !periodValue || !periodUnit) {
        return;
      }

      const start = new Date(startDate);
      const expiry = new Date(start);

      if (periodUnit === 'day') {
        expiry.setDate(start.getDate() + periodValue);
      } else if (periodUnit === 'month') {
        expiry.setMonth(start.getMonth() + periodValue);
      } else if (periodUnit === 'year') {
        expiry.setFullYear(start.getFullYear() + periodValue);
      }

      document.getElementById('expiryDate').value = expiry.toISOString().split('T')[0];
    }
    
    document.getElementById('closeModal').addEventListener('click', () => {
      document.getElementById('subscriptionModal').classList.add('hidden');
    });
    
    document.getElementById('subscriptionForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const id = document.getElementById('subscriptionId').value;
      const subscription = {
        name: document.getElementById('name').value.trim(),
        customType: document.getElementById('customType').value.trim(),
        notes: document.getElementById('notes').value.trim() || '',
        isActive: document.getElementById('isActive').checked,
        autoRenew: document.getElementById('autoRenew').checked,
        startDate: document.getElementById('startDate').value,
        expiryDate: document.getElementById('expiryDate').value,
        periodValue: parseInt(document.getElementById('periodValue').value),
        periodUnit: document.getElementById('periodUnit').value,
        reminderDays: parseInt(document.getElementById('reminderDays').value) || 0
      };
      
      const submitButton = e.target.querySelector('button[type="submit"]');
      const originalContent = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (id ? '更新中...' : '保存中...');
      submitButton.disabled = true;
      
      try {
        const url = id ? '/api/subscriptions/' + id : '/api/subscriptions';
        const method = id ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(subscription)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showToast((id ? '更新' : '添加') + '訂閱成功', 'success');
          document.getElementById('subscriptionModal').classList.add('hidden');
          loadSubscriptions();
        } else {
          showToast((id ? '更新' : '添加') + '訂閱失敗: ' + (result.message || '未知錯誤'), 'error');
        }
      } catch (error) {
        console.error((id ? '更新' : '添加') + '訂閱失敗:', error);
        showToast((id ? '更新' : '添加') + '訂閱失敗，請稍後再試', 'error');
      } finally {
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
      }
    });
    
    async function editSubscription(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      try {
        const response = await fetch('/api/subscriptions/' + id);
        const subscription = await response.json();
        
        if (subscription) {
          document.getElementById('modalTitle').textContent = '編輯訂閱';
          document.getElementById('subscriptionId').value = subscription.id;
          document.getElementById('name').value = subscription.name;
          document.getElementById('customType').value = subscription.customType || '';
          document.getElementById('notes').value = subscription.notes || '';
          document.getElementById('isActive').checked = subscription.isActive !== false;
          document.getElementById('autoRenew').checked = subscription.autoRenew !== false;
          document.getElementById('startDate').value = subscription.startDate ? subscription.startDate.split('T')[0] : '';
          document.getElementById('expiryDate').value = subscription.expiryDate ? subscription.expiryDate.split('T')[0] : '';
          document.getElementById('periodValue').value = subscription.periodValue || 1;
          document.getElementById('periodUnit').value = subscription.periodUnit || 'month';
          document.getElementById('reminderDays').value = subscription.reminderDays !== undefined ? subscription.reminderDays : 7;
          
          document.getElementById('subscriptionModal').classList.remove('hidden');
          setupModalEventListeners();
        }
      } catch (error) {
        console.error('獲取訂閱信息失敗:', error);
        showToast('獲取訂閱信息失敗', 'error');
      }
    }
    
    async function deleteSubscription(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      if (!confirm('确定要删除这个訂閱吗？此操作不可恢复。')) {
        return;
      }
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>删除中...';
      button.disabled = true;
      
      try {
        const response = await fetch('/api/subscriptions/' + id, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          showToast('删除成功', 'success');
          loadSubscriptions();
        } else {
          const error = await response.json();
          showToast('删除失敗: ' + (error.message || '未知錯誤'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error('删除訂閱失敗:', error);
        showToast('删除失敗，請稍後再試', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }

    // 過滤器事件监听
    document.getElementById('filterActive').addEventListener('change', loadSubscriptions);
    document.getElementById('filterExpiring').addEventListener('change', loadSubscriptions);
    document.getElementById('filterType').addEventListener('change', loadSubscriptions);
    
    window.addEventListener('load', loadSubscriptions);
  </script>
</body>
</html>
`;

// 排班管理頁面 - 已優化响應式导航和權限
const schedulePage = (role) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>排班管理 - 訂閱与排班管理系統</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-danger { background: linear-gradient(135deg, #f87171 0%, #dc2626 100%); transition: all 0.3s; }
    .btn-danger:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-success { background: linear-gradient(135deg, #34d399 0%, #059669 100%); transition: all 0.3s; }
    .btn-success:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-warning { background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%); transition: all 0.3s; }
    .btn-warning:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-info { background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%); transition: all 0.3s; }
    .btn-info:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    
    .table-container { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .modal-container { backdrop-filter: blur(8px); }
    
    .toast {
      position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px;
      color: white; font-weight: 500; z-index: 1000; transform: translateX(400px);
      transition: all 0.3s ease-in-out; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .toast.show { transform: translateX(0); }
    .toast.success { background-color: #10b981; }
    .toast.error { background-color: #ef4444; }
    .toast.info { background-color: #3b82f6; }
    .toast.warning { background-color: #f59e0b; }
    
    .schedule-preview { background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%); }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  ${getNavHtml('schedule', role)} <!-- 这里替换了旧的导航栏 -->
  <div id="toast-container"></div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">排班管理</h2>
      <div class="flex space-x-3">
        <button id="addStaffBtn" class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <i class="fas fa-user-plus mr-2"></i>添加員工
        </button>
        <button id="testScheduleBtn" class="btn-info text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <i class="fas fa-paper-plane mr-2"></i>測試排班通知
        </button>
      </div>
    </div>
    
    <!-- 排班設置 -->
    <div class="bg-white rounded-lg shadow-md mb-6">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">排班設置</h3>
      </div>
      <div class="p-6">
        <form id="scheduleConfigForm" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">工作日設置</label>
            <div class="flex flex-wrap gap-4">
              <label class="inline-flex items-center">
                <input type="checkbox" name="workDays" value="1" class="form-checkbox h-5 w-5 text-indigo-600 rounded">
                <span class="ml-2 text-sm text-gray-700">週一</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" name="workDays" value="2" class="form-checkbox h-5 w-5 text-indigo-600 rounded">
                <span class="ml-2 text-sm text-gray-700">週二</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" name="workDays" value="3" class="form-checkbox h-5 w-5 text-indigo-600 rounded">
                <span class="ml-2 text-sm text-gray-700">週三</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" name="workDays" value="4" class="form-checkbox h-5 w-5 text-indigo-600 rounded">
                <span class="ml-2 text-sm text-gray-700">週四</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" name="workDays" value="5" class="form-checkbox h-5 w-5 text-indigo-600 rounded">
                <span class="ml-2 text-sm text-gray-700">週五</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" name="workDays" value="6" class="form-checkbox h-5 w-5 text-indigo-600 rounded">
                <span class="ml-2 text-sm text-gray-700">週六</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" name="workDays" value="0" class="form-checkbox h-5 w-5 text-indigo-600 rounded">
                <span class="ml-2 text-sm text-gray-700">週日</span>
              </label>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="notificationTime" class="block text-sm font-medium text-gray-700 mb-1">通知時間</label>
              <input type="time" id="notificationTime" value="08:00"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <p class="text-xs text-gray-500 mt-1">每天發送排班通知的時間</p>
            </div>
            
            <div>
              <label for="currentPointer" class="block text-sm font-medium text-gray-700 mb-1">当前排班指針</label>
              <input type="number" id="currentPointer" min="0" value="0"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <p class="text-xs text-gray-500 mt-1">下一个要排班的員工索引（0-based）</p>
            </div>
          </div>
          
          <div class="flex justify-end">
            <button type="submit" class="btn-primary text-white px-6 py-2 rounded-md text-sm font-medium">
              <i class="fas fa-save mr-2"></i>保存設置
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- 員工列表 -->
    <div class="bg-white rounded-lg shadow-md mb-6">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">員工列表</h3>
      </div>
      <div class="p-6">
        <div class="table-container bg-white rounded-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">联系方式</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">備註</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody id="staffBody" class="bg-white divide-y divide-gray-200">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 排班預覽 -->
    <div class="bg-white rounded-lg shadow-md">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">本週排班預覽</h3>
      </div>
      <div class="p-6">
        <div id="schedulePreview" class="schedule-preview rounded-lg p-6">
          <div class="text-center py-4 text-gray-500">
            <i class="fas fa-spinner fa-spin mr-2"></i>加载中...
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 添加/編輯員工的模態框 -->
  <div id="staffModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 modal-container hidden flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center justify-between">
          <h3 id="staffModalTitle" class="text-lg font-medium text-gray-900">添加員工</h3>
          <button id="closeStaffModal" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
      
      <form id="staffForm" class="p-6 space-y-6">
        <input type="hidden" id="staffId">
        
        <div>
          <label for="staffName" class="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
          <input type="text" id="staffName" required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="staffContact" class="block text-sm font-medium text-gray-700 mb-1">联系方式</label>
          <input type="text" id="staffContact" placeholder="电话、邮箱等"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="staffNotes" class="block text-sm font-medium text-gray-700 mb-1">備註</label>
          <textarea id="staffNotes" rows="3" placeholder="可添加員工相關備註"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" id="staffActive" checked 
              class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
            <span class="ml-2 text-sm text-gray-700">启用该員工</span>
          </label>
        </div>
        
        <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button type="button" id="cancelStaffBtn" 
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            取消
          </button>
          <button type="submit" 
            class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-save mr-2"></i>保存
          </button>
        </div>
      </form>
    </div>
  </div>

  <script>
    function showToast(message, type = 'success', duration = 3000) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast ' + type;
      
      const icon = type === 'success' ? 'check-circle' :
                   type === 'error' ? 'exclamation-circle' :
                   type === 'warning' ? 'exclamation-triangle' : 'info-circle';
      
      toast.innerHTML = '<div class="flex items-center"><i class="fas fa-' + icon + ' mr-2"></i><span>' + message + '</span></div>';
      
      container.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          if (container.contains(toast)) {
            container.removeChild(toast);
          }
        }, 300);
      }, duration);
    }

    // 加载排班配置
    async function loadScheduleConfig() {
      try {
        const response = await fetch('/api/schedule/config');
        const config = await response.json();
        
        // 設置工作日
        document.querySelectorAll('input[name="workDays"]').forEach(checkbox => {
          checkbox.checked = config.workDays.includes(parseInt(checkbox.value));
        });
        
        // 設置通知時間和指針
        document.getElementById('notificationTime').value = config.notificationTime || '08:00';
        document.getElementById('currentPointer').value = config.currentPointer || 0;
        
      } catch (error) {
        console.error('加载排班配置失敗:', error);
        showToast('加载排班配置失敗', 'error');
      }
    }

    // 加载員工列表
    async function loadStaff() {
      try {
        const tbody = document.getElementById('staffBody');
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4"><i class="fas fa-spinner fa-spin mr-2"></i>加载中...</td></tr>';

        const response = await fetch('/api/staff');
        const staff = await response.json();
        
        tbody.innerHTML = '';
        
        if (staff.length === 0) {
          tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-gray-500">暂無員工數据</td></tr>';
          return;
        }
        
        staff.forEach(person => {
          const row = document.createElement('tr');
          row.className = person.isActive === false ? 'hover:bg-gray-50 bg-gray-100' : 'hover:bg-gray-50';
          
          const statusHtml = person.isActive === false ? 
            '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-gray-500">已停用</span>' :
            '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-green-500">启用</span>';
          
          row.innerHTML =
            '<td class="px-4 py-3 text-sm font-medium text-gray-900">' + person.name + '</td>' +
            '<td class="px-4 py-3 text-sm text-gray-900">' + (person.contact || '-') + '</td>' +
            '<td class="px-4 py-3 text-sm text-gray-900">' + (person.notes || '-') + '</td>' +
            '<td class="px-4 py-3">' + statusHtml + '</td>' +
            '<td class="px-4 py-3 text-sm font-medium">' +
              '<div class="flex space-x-2">' +
                '<button class="edit-staff btn-primary text-white px-2 py-1 rounded text-xs" data-id="' + person.id + '"><i class="fas fa-edit mr-1"></i>編輯</button>' +
                '<button class="delete-staff btn-danger text-white px-2 py-1 rounded text-xs" data-id="' + person.id + '"><i class="fas fa-trash-alt mr-1"></i>删除</button>' +
                (person.isActive ?
                  '<button class="toggle-staff btn-warning text-white px-2 py-1 rounded text-xs" data-id="' + person.id + '" data-action="deactivate"><i class="fas fa-pause-circle mr-1"></i>停用</button>' :
                  '<button class="toggle-staff btn-success text-white px-2 py-1 rounded text-xs" data-id="' + person.id + '" data-action="activate"><i class="fas fa-play-circle mr-1"></i>启用</button>') +
              '</div>' +
            '</td>';
          
          tbody.appendChild(row);
        });
        
        // 添加事件监听
        document.querySelectorAll('.edit-staff').forEach(button => {
          button.addEventListener('click', editStaff);
        });
        
        document.querySelectorAll('.delete-staff').forEach(button => {
          button.addEventListener('click', deleteStaff);
        });
        
        document.querySelectorAll('.toggle-staff').forEach(button => {
          button.addEventListener('click', toggleStaffStatus);
        });
        
      } catch (error) {
        console.error('加载員工列表失敗:', error);
        const tbody = document.getElementById('staffBody');
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-red-500"><i class="fas fa-exclamation-circle mr-2"></i>加载失敗，請刷新頁面重試</td></tr>';
        showToast('加载員工列表失敗', 'error');
      }
    }

    // 加载排班預覽
    async function loadSchedulePreview() {
      try {
        const preview = document.getElementById('schedulePreview');
        
        const response = await fetch('/api/schedule/preview');
        const previewData = await response.json();
        
        let html = '<div class="grid grid-cols-1 md:grid-cols-7 gap-4">';
        
        const days = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
        const today = new Date().getDay();
        
        previewData.forEach((day, index) => {
          const isToday = index === today;
          const dayClass = isToday ? 'bg-indigo-100 border-indigo-300' : 'bg-white border-gray-200';
          
          html += '<div class="border rounded-lg p-4 text-center ' + dayClass + '">';
          html += '<div class="font-medium text-gray-900 mb-2">' + days[index] + '</div>';
          
          if (day.isWorkDay && !day.isExcluded) {
            html += '<div class="text-sm text-green-600 font-medium">' + day.staff + '</div>';
            html += '<div class="text-xs text-gray-500 mt-1">值班</div>';
          } else if (day.isExcluded) {
            html += '<div class="text-sm text-blue-600"><i class="fas fa-umbrella-beach mr-1"></i>休息</div>';
            html += '<div class="text-xs text-gray-500 mt-1">排除日期</div>';
          } else {
            html += '<div class="text-sm text-gray-500">休息</div>';
            html += '<div class="text-xs text-gray-500 mt-1">非工作日</div>';
          }
          
          html += '</div>';
        });
        
        html += '</div>';
        preview.innerHTML = html;
        
      } catch (error) {
        console.error('加载排班預覽失敗:', error);
        document.getElementById('schedulePreview').innerHTML = 
          '<div class="text-center py-4 text-red-500"><i class="fas fa-exclamation-circle mr-2"></i>加载失敗</div>';
      }
    }

    // 保存排班配置
    document.getElementById('scheduleConfigForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const workDays = Array.from(document.querySelectorAll('input[name="workDays"]:checked'))
        .map(checkbox => parseInt(checkbox.value));
      
      const config = {
        workDays: workDays,
        notificationTime: document.getElementById('notificationTime').value,
        currentPointer: parseInt(document.getElementById('currentPointer').value)
      };
      
      const submitButton = e.target.querySelector('button[type="submit"]');
      const originalContent = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>保存中...';
      submitButton.disabled = true;
      
      try {
        const response = await fetch('/api/schedule/config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(config)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showToast('排班配置保存成功', 'success');
          loadSchedulePreview(); // 刷新預覽
        } else {
          showToast('保存失敗: ' + (result.message || '未知錯誤'), 'error');
        }
      } catch (error) {
        console.error('保存排班配置失敗:', error);
        showToast('保存失敗，請稍後再試', 'error');
      } finally {
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
      }
    });

    // 員工管理功能
    document.getElementById('addStaffBtn').addEventListener('click', () => {
      document.getElementById('staffModalTitle').textContent = '添加員工';
      document.getElementById('staffModal').classList.remove('hidden');
      document.getElementById('staffForm').reset();
      document.getElementById('staffId').value = '';
      document.getElementById('staffActive').checked = true;
    });
    
    document.getElementById('closeStaffModal').addEventListener('click', () => {
      document.getElementById('staffModal').classList.add('hidden');
    });
    
    document.getElementById('cancelStaffBtn').addEventListener('click', () => {
      document.getElementById('staffModal').classList.add('hidden');
    });
    
    document.getElementById('staffForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const id = document.getElementById('staffId').value;
      const staff = {
        name: document.getElementById('staffName').value.trim(),
        contact: document.getElementById('staffContact').value.trim(),
        notes: document.getElementById('staffNotes').value.trim(),
        isActive: document.getElementById('staffActive').checked
      };
      
      const submitButton = e.target.querySelector('button[type="submit"]');
      const originalContent = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (id ? '更新中...' : '保存中...');
      submitButton.disabled = true;
      
      try {
        const url = id ? '/api/staff/' + id : '/api/staff';
        const method = id ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(staff)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showToast((id ? '更新' : '添加') + '員工成功', 'success');
          document.getElementById('staffModal').classList.add('hidden');
          loadStaff();
          loadSchedulePreview();
        } else {
          showToast((id ? '更新' : '添加') + '員工失敗: ' + (result.message || '未知錯誤'), 'error');
        }
      } catch (error) {
        console.error((id ? '更新' : '添加') + '員工失敗:', error);
        showToast((id ? '更新' : '添加') + '員工失敗，請稍後再試', 'error');
      } finally {
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
      }
    });
    
    async function editStaff(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      try {
        const response = await fetch('/api/staff/' + id);
        const staff = await response.json();
        
        if (staff) {
          document.getElementById('staffModalTitle').textContent = '編輯員工';
          document.getElementById('staffId').value = staff.id;
          document.getElementById('staffName').value = staff.name;
          document.getElementById('staffContact').value = staff.contact || '';
          document.getElementById('staffNotes').value = staff.notes || '';
          document.getElementById('staffActive').checked = staff.isActive !== false;
          
          document.getElementById('staffModal').classList.remove('hidden');
        }
      } catch (error) {
        console.error('獲取員工信息失敗:', error);
        showToast('獲取員工信息失敗', 'error');
      }
    }
    
    async function deleteStaff(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      if (!confirm('确定要删除这个員工吗？此操作不可恢复。')) {
        return;
      }
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>删除中...';
      button.disabled = true;
      
      try {
        const response = await fetch('/api/staff/' + id, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          showToast('删除成功', 'success');
          loadStaff();
          loadSchedulePreview();
        } else {
          const error = await response.json();
          showToast('删除失敗: ' + (error.message || '未知錯誤'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error('删除員工失敗:', error);
        showToast('删除失敗，請稍後再試', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }
    
    async function toggleStaffStatus(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      const action = e.target.dataset.action || e.target.parentElement.dataset.action;
      const isActivate = action === 'activate';
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (isActivate ? '启用中...' : '停用中...');
      button.disabled = true;
      
      try {
        const response = await fetch('/api/staff/' + id + '/toggle-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isActive: isActivate })
        });
        
        if (response.ok) {
          showToast((isActivate ? '启用' : '停用') + '成功', 'success');
          loadStaff();
          loadSchedulePreview();
        } else {
          const error = await response.json();
          showToast((isActivate ? '启用' : '停用') + '失敗: ' + (error.message || '未知錯誤'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error((isActivate ? '启用' : '停用') + '員工失敗:', error);
        showToast((isActivate ? '启用' : '停用') + '失敗，請稍後再試', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }

    // 測試排班通知
    document.getElementById('testScheduleBtn').addEventListener('click', async () => {
      const button = document.getElementById('testScheduleBtn');
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>測試中...';
      button.disabled = true;
      
      try {
        const response = await fetch('/api/schedule/test-notify', { method: 'POST' });
        const result = await response.json();
        
        if (result.success) {
          showToast(result.message || '測試通知已發送', 'success');
        } else {
          showToast(result.message || '測試通知發送失敗', 'error');
        }
      } catch (error) {
        console.error('測試排班通知失敗:', error);
        showToast('發送測試通知時發生錯誤', 'error');
      } finally {
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    });

    // 初始化加载
    window.addEventListener('load', () => {
      loadScheduleConfig();
      loadStaff();
      loadSchedulePreview();
    });
  </script>
</body>
</html>
`;


// 排除日期頁面
const exclusionsPage = (role) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>排除日期 - 訂閱与排班管理系統</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-danger { background: linear-gradient(135deg, #f87171 0%, #dc2626 100%); transition: all 0.3s; }
    .btn-danger:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-success { background: linear-gradient(135deg, #34d399 0%, #059669 100%); transition: all 0.3s; }
    .btn-success:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    
    .table-container { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .modal-container { backdrop-filter: blur(8px); }
    
    .toast {
      position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px;
      color: white; font-weight: 500; z-index: 1000; transform: translateX(400px);
      transition: all 0.3s ease-in-out; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .toast.show { transform: translateX(0); }
    .toast.success { background-color: #10b981; }
    .toast.error { background-color: #ef4444; }
    .toast.info { background-color: #3b82f6; }
    .toast.warning { background-color: #f59e0b; }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  ${getNavHtml('exclusions', role)} <!-- 这里替换了旧的导航栏 -->
  <div id="toast-container"></div>

  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">排除日期管理</h2>
      <button id="addExclusionBtn" class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
        <i class="fas fa-plus mr-2"></i>添加排除日期
      </button>
    </div>
    
    <div class="bg-white rounded-lg shadow-md mb-6">
      <div class="p-4 border-b border-gray-200">
        <p class="text-sm text-gray-600">
          <i class="fas fa-info-circle mr-2"></i>
          排除日期用於標記特殊日期（如节假日），在这些日期将不会發送排班通知。
        </p>
      </div>
    </div>
    
    <div class="table-container bg-white rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">原因</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">類型</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody id="exclusionsBody" class="bg-white divide-y divide-gray-200">
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 添加/編輯排除日期的模態框 -->
  <div id="exclusionModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 modal-container hidden flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center justify-between">
          <h3 id="exclusionModalTitle" class="text-lg font-medium text-gray-900">添加排除日期</h3>
          <button id="closeExclusionModal" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
      
      <form id="exclusionForm" class="p-6 space-y-6">
        <input type="hidden" id="exclusionId">
        
        <div>
          <label for="exclusionDate" class="block text-sm font-medium text-gray-700 mb-1">日期 *</label>
          <input type="date" id="exclusionDate" required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="exclusionReason" class="block text-sm font-medium text-gray-700 mb-1">原因</label>
          <input type="text" id="exclusionReason" placeholder="如：国庆节、春节等"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div>
          <label for="exclusionType" class="block text-sm font-medium text-gray-700 mb-1">類型</label>
          <select id="exclusionType" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="holiday">节假日</option>
            <option value="special">特殊日期</option>
            <option value="other">其他</option>
          </select>
        </div>
        
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" id="exclusionActive" checked 
              class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
            <span class="ml-2 text-sm text-gray-700">启用该排除日期</span>
          </label>
        </div>
        
        <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button type="button" id="cancelExclusionBtn" 
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            取消
          </button>
          <button type="submit" 
            class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-save mr-2"></i>保存
          </button>
        </div>
      </form>
    </div>
  </div>

  <script>
    function showToast(message, type = 'success', duration = 3000) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast ' + type;
      
      const icon = type === 'success' ? 'check-circle' :
                   type === 'error' ? 'exclamation-circle' :
                   type === 'warning' ? 'exclamation-triangle' : 'info-circle';
      
      toast.innerHTML = '<div class="flex items-center"><i class="fas fa-' + icon + ' mr-2"></i><span>' + message + '</span></div>';
      
      container.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          if (container.contains(toast)) {
            container.removeChild(toast);
          }
        }, 300);
      }, duration);
    }

    // 加载排除日期列表
    async function loadExclusions() {
      try {
        const tbody = document.getElementById('exclusionsBody');
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4"><i class="fas fa-spinner fa-spin mr-2"></i>加载中...</td></tr>';

        const response = await fetch('/api/exclusions');
        const exclusions = await response.json();
        
        tbody.innerHTML = '';
        
        if (exclusions.length === 0) {
          tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-gray-500">暂無排除日期</td></tr>';
          return;
        }
        
        // 按日期排序（最近的在前）
        exclusions.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        exclusions.forEach(exclusion => {
          const row = document.createElement('tr');
          row.className = exclusion.isActive === false ? 'hover:bg-gray-50 bg-gray-100' : 'hover:bg-gray-50';
          
          const date = new Date(exclusion.date);
          const today = new Date();
          const daysDiff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
          
          let typeText = '';
          let typeColor = '';
          switch (exclusion.type) {
            case 'holiday':
              typeText = '节假日';
              typeColor = 'bg-red-100 text-red-800';
              break;
            case 'special':
              typeText = '特殊日期';
              typeColor = 'bg-blue-100 text-blue-800';
              break;
            default:
              typeText = '其他';
              typeColor = 'bg-gray-100 text-gray-800';
          }
          
          let statusHtml = '';
          if (exclusion.isActive === false) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-gray-500">已停用</span>';
          } else if (daysDiff < 0) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-yellow-500">已過期</span>';
          } else {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-green-500">生效中</span>';
          }
          
          row.innerHTML =
            '<td class="px-4 py-3 text-sm font-medium text-gray-900">' + date.toLocaleDateString() + '</td>' +
            '<td class="px-4 py-3 text-sm text-gray-900">' + (exclusion.reason || '-') + '</td>' +
            '<td class="px-4 py-3"><span class="px-2 py-1 text-xs font-medium rounded-full ' + typeColor + '">' + typeText + '</span></td>' +
            '<td class="px-4 py-3">' + statusHtml + '</td>' +
            '<td class="px-4 py-3 text-sm font-medium">' +
              '<div class="flex space-x-2">' +
                '<button class="edit-exclusion btn-primary text-white px-2 py-1 rounded text-xs" data-id="' + exclusion.id + '"><i class="fas fa-edit mr-1"></i>編輯</button>' +
                '<button class="delete-exclusion btn-danger text-white px-2 py-1 rounded text-xs" data-id="' + exclusion.id + '"><i class="fas fa-trash-alt mr-1"></i>删除</button>' +
                (exclusion.isActive ?
                  '<button class="toggle-exclusion btn-warning text-white px-2 py-1 rounded text-xs" data-id="' + exclusion.id + '" data-action="deactivate"><i class="fas fa-pause-circle mr-1"></i>停用</button>' :
                  '<button class="toggle-exclusion btn-success text-white px-2 py-1 rounded text-xs" data-id="' + exclusion.id + '" data-action="activate"><i class="fas fa-play-circle mr-1"></i>启用</button>') +
              '</div>' +
            '</td>';
          
          tbody.appendChild(row);
        });
        
        // 添加事件监听
        document.querySelectorAll('.edit-exclusion').forEach(button => {
          button.addEventListener('click', editExclusion);
        });
        
        document.querySelectorAll('.delete-exclusion').forEach(button => {
          button.addEventListener('click', deleteExclusion);
        });
        
        document.querySelectorAll('.toggle-exclusion').forEach(button => {
          button.addEventListener('click', toggleExclusionStatus);
        });
        
      } catch (error) {
        console.error('加载排除日期失敗:', error);
        const tbody = document.getElementById('exclusionsBody');
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-red-500"><i class="fas fa-exclamation-circle mr-2"></i>加载失敗，請刷新頁面重試</td></tr>';
        showToast('加载排除日期失敗', 'error');
      }
    }

    // 添加排除日期
    document.getElementById('addExclusionBtn').addEventListener('click', () => {
      document.getElementById('exclusionModalTitle').textContent = '添加排除日期';
      document.getElementById('exclusionModal').classList.remove('hidden');
      document.getElementById('exclusionForm').reset();
      document.getElementById('exclusionId').value = '';
      document.getElementById('exclusionActive').checked = true;
      
      // 設置默认日期為今天
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('exclusionDate').value = today;
    });
    
    document.getElementById('closeExclusionModal').addEventListener('click', () => {
      document.getElementById('exclusionModal').classList.add('hidden');
    });
    
    document.getElementById('cancelExclusionBtn').addEventListener('click', () => {
      document.getElementById('exclusionModal').classList.add('hidden');
    });
    
    document.getElementById('exclusionForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const id = document.getElementById('exclusionId').value;
      const exclusion = {
        date: document.getElementById('exclusionDate').value,
        reason: document.getElementById('exclusionReason').value.trim(),
        type: document.getElementById('exclusionType').value,
        isActive: document.getElementById('exclusionActive').checked
      };
      
      const submitButton = e.target.querySelector('button[type="submit"]');
      const originalContent = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (id ? '更新中...' : '保存中...');
      submitButton.disabled = true;
      
      try {
        const url = id ? '/api/exclusions/' + id : '/api/exclusions';
        const method = id ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(exclusion)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showToast((id ? '更新' : '添加') + '排除日期成功', 'success');
          document.getElementById('exclusionModal').classList.add('hidden');
          loadExclusions();
        } else {
          showToast((id ? '更新' : '添加') + '排除日期失敗: ' + (result.message || '未知錯誤'), 'error');
        }
      } catch (error) {
        console.error((id ? '更新' : '添加') + '排除日期失敗:', error);
        showToast((id ? '更新' : '添加') + '排除日期失敗，請稍後再試', 'error');
      } finally {
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
      }
    });
    
    async function editExclusion(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      try {
        const response = await fetch('/api/exclusions/' + id);
        const exclusion = await response.json();
        
        if (exclusion) {
          document.getElementById('exclusionModalTitle').textContent = '編輯排除日期';
          document.getElementById('exclusionId').value = exclusion.id;
          document.getElementById('exclusionDate').value = exclusion.date.split('T')[0];
          document.getElementById('exclusionReason').value = exclusion.reason || '';
          document.getElementById('exclusionType').value = exclusion.type || 'holiday';
          document.getElementById('exclusionActive').checked = exclusion.isActive !== false;
          
          document.getElementById('exclusionModal').classList.remove('hidden');
        }
      } catch (error) {
        console.error('獲取排除日期信息失敗:', error);
        showToast('獲取排除日期信息失敗', 'error');
      }
    }
    
    async function deleteExclusion(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      if (!confirm('确定要删除这个排除日期吗？此操作不可恢复。')) {
        return;
      }
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>删除中...';
      button.disabled = true;
      
      try {
        const response = await fetch('/api/exclusions/' + id, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          showToast('删除成功', 'success');
          loadExclusions();
        } else {
          const error = await response.json();
          showToast('删除失敗: ' + (error.message || '未知錯誤'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error('删除排除日期失敗:', error);
        showToast('删除失敗，請稍後再試', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }
    
    async function toggleExclusionStatus(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      const action = e.target.dataset.action || e.target.parentElement.dataset.action;
      const isActivate = action === 'activate';
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (isActivate ? '启用中...' : '停用中...');
      button.disabled = true;
      
      try {
        const response = await fetch('/api/exclusions/' + id + '/toggle-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isActive: isActivate })
        });
        
        if (response.ok) {
          showToast((isActivate ? '启用' : '停用') + '成功', 'success');
          loadExclusions();
        } else {
          const error = await response.json();
          showToast((isActivate ? '启用' : '停用') + '失敗: ' + (error.message || '未知錯誤'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error((isActivate ? '启用' : '停用') + '排除日期失敗:', error);
        showToast((isActivate ? '启用' : '停用') + '失敗，請稍後再試', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }

    window.addEventListener('load', loadExclusions);
  </script>
</body>
</html>
`;

const checklistTemplatePage = (role) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>檢核清單模板管理</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .modal-container { backdrop-filter: blur(4px); }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  ${getNavHtml('manage-checklist', role)}
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">檢核清單模板管理</h2>
        <p class="text-sm text-gray-500 mt-1">此處修改將即時同步至今日及未來的檢核表</p>
      </div>
      <button onclick="openModal()" class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
        <i class="fas fa-plus mr-2"></i>添加檢核項目
      </button>
    </div>
    
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">標題</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述/備註</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
        </thead>
        <tbody id="templateBody" class="bg-white divide-y divide-gray-200">
          <tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">加載中...</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 編輯/添加模態框 -->
  <div id="itemModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 modal-container hidden flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 rounded-t-lg flex justify-between items-center">
        <h3 id="modalTitle" class="text-lg font-medium text-gray-900">添加項目</h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times"></i></button>
      </div>
      <form id="itemForm" class="p-6 space-y-4">
        <input type="hidden" id="itemId">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">標題 *</label>
          <input type="text" id="itemTitle" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">描述</label>
          <textarea id="itemDesc" rows="3" class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
        </div>
        <div class="flex justify-end pt-2">
          <button type="button" onclick="closeModal()" class="mr-3 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">取消</button>
          <button type="submit" class="btn-primary text-white px-4 py-2 rounded-md">保存</button>
        </div>
      </form>
    </div>
  </div>

  <script>
    let templateData = [];

    async function loadTemplate() {
        const res = await fetch('/api/checklist/template');
        templateData = await res.json();
        renderTable();
    }

    function renderTable() {
        const tbody = document.getElementById('templateBody');
        tbody.innerHTML = '';
        if(templateData.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">暫無項目</td></tr>';
            return;
        }
        templateData.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = \`
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">\${item.id}</td>
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">\${item.title}</td>
                <td class="px-6 py-4 text-gray-500">\${item.description || '-'}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onclick="openModal(\${index})" class="text-indigo-600 hover:text-indigo-900 mr-3"><i class="fas fa-edit"></i> 編輯</button>
                    <button onclick="deleteItem(\${index})" class="text-red-600 hover:text-red-900"><i class="fas fa-trash"></i> 刪除</button>
                </td>
            \`;
            tbody.appendChild(tr);
        });
    }

    function openModal(index = null) {
        document.getElementById('itemModal').classList.remove('hidden');
        if (index !== null) {
            const item = templateData[index];
            document.getElementById('modalTitle').innerText = '編輯項目';
            document.getElementById('itemId').value = item.id;
            document.getElementById('itemTitle').value = item.title;
            document.getElementById('itemDesc').value = item.description;
        } else {
            document.getElementById('modalTitle').innerText = '添加項目';
            document.getElementById('itemId').value = '';
            document.getElementById('itemTitle').value = '';
            document.getElementById('itemDesc').value = '';
        }
    }

    function closeModal() {
        document.getElementById('itemModal').classList.add('hidden');
    }

    async function deleteItem(index) {
        if(!confirm('確定刪除此項目嗎？')) return;
        templateData.splice(index, 1);
        await saveChanges();
    }

    document.getElementById('itemForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('itemId').value;
        const title = document.getElementById('itemTitle').value;
        const desc = document.getElementById('itemDesc').value;

        if (id) {
            // Edit
            const item = templateData.find(i => i.id == id);
            if(item) { item.title = title; item.description = desc; }
        } else {
            // Add (Auto generate ID based on max existing ID)
            const newId = templateData.length > 0 ? Math.max(...templateData.map(i => i.id)) + 1 : 1;
            templateData.push({ id: newId, title, description: desc });
        }
        
        await saveChanges();
        closeModal();
    });

    async function saveChanges() {
        try {
            await fetch('/api/checklist/template', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(templateData)
            });
            renderTable();
            // Optional: Show toast
        } catch(e) {
            alert('保存失敗');
        }
    }

    window.onload = loadTemplate;
  </script>
</body>
</html>
`;

// 系統配置頁面（与之前類似，略作调整）
const configPage = (role) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>系統配置</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  ${getNavHtml('config', role)}
  <div id="toast-container"></div>
  
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-4"><i class="fas fa-cogs mr-2"></i>系統參數配置</h2>
      
      <form id="configForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">管理員用戶名</label>
              <input type="text" id="adminUsername" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">修改密碼 (留空則不修改)</label>
              <input type="password" id="adminPassword" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            </div>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 class="text-md font-bold text-blue-800 mb-3"><i class="fab fa-telegram-plane mr-2"></i>Telegram 通知設置</h3>
            <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Bot Token</label>
                  <input type="text" id="tgBotToken" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Chat ID</label>
                  <input type="text" id="tgChatId" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white">
                </div>
            </div>
        </div>

        <div class="flex justify-end pt-4 space-x-4">
            <button type="button" id="testTelegramBtn" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"><i class="fas fa-paper-plane mr-2"></i>測試通知</button>
            <button type="submit" class="btn-primary px-8 py-2 text-white rounded-lg font-medium"><i class="fas fa-save mr-2"></i>保存配置</button>
        </div>
      </form>
    </div>
  </div>

  <script>
    async function loadConfig() {
      const config = await (await fetch('/api/config')).json();
      document.getElementById('adminUsername').value = config.ADMIN_USERNAME || '';
      document.getElementById('tgBotToken').value = config.TG_BOT_TOKEN || '';
      document.getElementById('tgChatId').value = config.TG_CHAT_ID || '';
    }

    document.getElementById('configForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const oldTxt = btn.innerHTML;
        btn.innerHTML = '保存中...'; btn.disabled = true;

        const data = {
            ADMIN_USERNAME: document.getElementById('adminUsername').value,
            TG_BOT_TOKEN: document.getElementById('tgBotToken').value,
            TG_CHAT_ID: document.getElementById('tgChatId').value,
        };
        const pwd = document.getElementById('adminPassword').value;
        if(pwd) data.ADMIN_PASSWORD = pwd;
        
        try {
            await fetch('/api/config', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) });
            alert('配置已保存');
        } catch(e) { alert('保存失敗'); }
        btn.innerHTML = oldTxt; btn.disabled = false;
    });

    document.getElementById('testTelegramBtn').addEventListener('click', async () => {
        const res = await fetch('/api/test-notification', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                type: 'telegram',
                TG_BOT_TOKEN: document.getElementById('tgBotToken').value,
                TG_CHAT_ID: document.getElementById('tgChatId').value
            })
        });
        const d = await res.json();
        alert(d.success ? '發送成功' : '發送失敗: ' + d.message);
    });

    window.onload = loadConfig;
  </script>
</body>
</html>
`;

// 檢核清單頁面HTML
// 檢核清單頁面HTML (Home小按鈕 + 提交後跳轉歷史)
const checklistPage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>機房檢核清單</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    /* 精簡的CSS變數 */
    :root {
      --primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      --warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      --success: linear-gradient(135deg, #10b981 0%, #059669 100%);
      --danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
    /* 更精簡的按鈕樣式 */
    .btn-primary { 
      background: var(--primary);
      transition: all 0.2s;
    }
    
    .btn-warning { 
      background: var(--warning);
      transition: all 0.2s;
    }
    
    .checklist-item { 
      transition: all 0.2s ease;
      border-left-width: 4px;
    }
    
    .checklist-item.pending { border-left-color: #9ca3af; }
    .checklist-item.normal { border-left-color: #10b981; }
    .checklist-item.abnormal { border-left-color: #ef4444; }
    
    .btn-action { 
      transition: all 0.15s;
    }
    
    .btn-action:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    
    /* 更好的觸摸體驗 */
    @media (max-width: 640px) {
      .mobile-padding {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      .btn-action {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }
    
    /* 進度條動畫 */
    .progress-transition {
      transition: width 0.3s ease;
    }
  </style>
</head>
<body class="bg-gray-50 min-h-screen font-sans">
  <div class="max-w-4xl mx-auto mobile-padding py-4 sm:py-6">
    <!-- 頂部控制區塊 - 更緊湊 -->
    <div class="bg-white rounded-lg shadow-sm p-4 sm:p-5 mb-4 sm:mb-6">
      <!-- 標題與操作按鈕 -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div class="flex-1 min-w-0">
          <div class="flex items-center mb-1">
            <h1 class="text-lg sm:text-xl font-semibold text-gray-800 truncate">機房檢核清單</h1>
            <a href="/dashboard" class="ml-2 p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0" title="返回控制台">
              <i class="fas fa-home text-base"></i>
            </a>
          </div>
          <p class="text-sm text-gray-500 truncate" id="checklistDate">載入中...</p>
        </div>
        
        <!-- 主要操作按鈕 - 更小尺寸 -->
        <div class="flex flex-col xs:flex-row gap-2 mt-1">
          <button id="submitChecklistBtn" class="btn-primary text-white px-3 sm:px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center opacity-50 cursor-not-allowed flex-shrink-0">
            <i class="fas fa-paper-plane text-xs sm:text-sm mr-1.5"></i>
            <span class="whitespace-nowrap text-xs sm:text-sm">提交</span>
          </button>
          <button id="resetChecklistBtn" class="btn-warning text-white px-3 sm:px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center flex-shrink-0">
            <i class="fas fa-redo text-xs sm:text-sm mr-1.5"></i>
            <span class="whitespace-nowrap text-xs sm:text-sm">重置</span>
          </button>
        </div>
      </div>
      
      <!-- 進度條 - 更細緻 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs font-medium text-gray-600">檢核進度</span>
          <span id="progressPercentage" class="text-xs font-semibold text-indigo-600">0%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1.5">
          <div id="progressBar" class="bg-indigo-500 h-1.5 rounded-full progress-transition" style="width: 0%"></div>
        </div>
      </div>
      
      <!-- 整體備註區 - 更緊湊 -->
      <div>
        <label class="block text-xs font-medium text-gray-600 mb-1.5">整體異常報告</label>
        <textarea id="overallNotes" rows="2" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-300 focus:border-indigo-400 transition-all placeholder-gray-400" placeholder="輸入整體異常情況..."></textarea>
      </div>
    </div>
    
    <!-- 檢核項目列表 -->
    <div id="checklistItemsContainer" class="space-y-3">
      <div class="text-center py-8 text-gray-500">
        <i class="fas fa-spinner fa-spin text-base mb-2"></i>
        <p class="text-sm">正在載入檢核項目...</p>
      </div>
    </div>
  </div>

  <!-- 異常視窗 - 更緊湊 -->
  <div id="abnormalModal" class="fixed inset-0 bg-black bg-opacity-40 hidden flex items-center justify-center z-50 p-3 sm:p-4">
    <div class="bg-white rounded-lg shadow-lg max-w-sm w-full p-4 sm:p-5 mx-auto">
      <div class="flex items-center mb-3">
        <i class="fas fa-exclamation-triangle text-red-500 text-lg mr-2"></i>
        <h3 class="text-base font-semibold text-gray-800">異常報告</h3>
      </div>
      <div id="abnormalItemTitle" class="mb-3 p-2.5 bg-gray-50 rounded text-sm text-gray-700 font-medium"></div>
      <textarea id="abnormalNotes" rows="3" class="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-red-300 focus:border-red-400 transition-all" placeholder="描述異常..."></textarea>
      <div class="flex justify-end gap-2 mt-4">
        <button onclick="document.getElementById('abnormalModal').classList.add('hidden')" class="px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
          取消
        </button>
        <button id="saveAbnormalBtn" class="px-3 py-1.5 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
          保存
        </button>
      </div>
    </div>
  </div>

  <script>
    let currentChecklist = null;
    let currentAbnormalItemId = null;

    // 初始化
    async function loadChecklist() {
      try {
        const res = await fetch('/api/checklists/today');
        if (!res.ok) throw new Error('API Error');
        const data = await res.json();
        
        if (data && data.id) {
          currentChecklist = data;
          renderUI();
        } else {
          document.getElementById('checklistItemsContainer').innerHTML = \`
            <div class="text-center py-8 text-gray-500">
              <p class="text-sm">今日無需檢核 (非工作日或已完成排除)</p>
            </div>\`;
          disableButtons();
        }
      } catch (e) {
        console.error(e);
        document.getElementById('checklistItemsContainer').innerHTML = \`
          <div class="text-center py-8 text-red-500">
            <p class="text-sm">載入失敗，請重新整理頁面。</p>
          </div>\`;
        disableButtons();
      }
    }

    function disableButtons() {
      document.getElementById('submitChecklistBtn').disabled = true;
      document.getElementById('resetChecklistBtn').disabled = true;
      document.getElementById('submitChecklistBtn').classList.add('opacity-50');
      document.getElementById('resetChecklistBtn').classList.add('opacity-50');
    }

    function renderUI() {
      if (!currentChecklist) return;
      
      // 格式化日期顯示
      const date = new Date(currentChecklist.date);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      document.getElementById('checklistDate').textContent = date.toLocaleDateString('zh-TW', options);
      
      const done = currentChecklist.items.filter(i => i.status !== 'pending').length;
      const total = currentChecklist.items.length;
      const pct = total === 0 ? 0 : Math.round((done / total) * 100);
      
      document.getElementById('progressPercentage').innerText = pct + '%';
      document.getElementById('progressBar').style.width = pct + '%';
      
      // 控制提交按鈕狀態
      const submitBtn = document.getElementById('submitChecklistBtn');
      if (pct === 100) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }

      // 設置整體備註
      document.getElementById('overallNotes').value = currentChecklist.overallNotes || '';

      // 渲染項目列表
      const container = document.getElementById('checklistItemsContainer');
      container.innerHTML = '';
      
      if (currentChecklist.items.length === 0) {
        container.innerHTML = \`
          <div class="text-center py-8 text-gray-500">
            <p class="text-sm">暫無檢核項目</p>
          </div>\`;
        return;
      }
      
      currentChecklist.items.forEach(item => {
        const div = document.createElement('div');
        div.className = \`checklist-item bg-white rounded-lg shadow-sm p-3 sm:p-4 \${item.status}\`;
        
        // 狀態標籤 - 更小尺寸
        let statusClass = 'bg-gray-100 text-gray-600';
        let statusText = '待檢核';
        let statusIcon = 'fa-clock';
        
        if (item.status === 'normal') {
          statusClass = 'bg-green-50 text-green-700 border border-green-100';
          statusText = '正常';
          statusIcon = 'fa-check';
        } else if (item.status === 'abnormal') {
          statusClass = 'bg-red-50 text-red-700 border border-red-100';
          statusText = '異常';
          statusIcon = 'fa-exclamation';
        }

        div.innerHTML = \`
          <div class="flex justify-between items-start mb-2">
            <div class="flex-1 min-w-0 mr-2">
              <h3 class="font-medium text-gray-800 text-sm mb-0.5 line-clamp-2">\${item.title}</h3>
              \${item.description ? \`<p class="text-xs text-gray-500 line-clamp-2">\${item.description}</p>\` : ''}
            </div>
            <span class="flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded-full \${statusClass}">
              <i class="fas \${statusIcon} mr-0.5"></i>
              \${statusText}
            </span>
          </div>
          
          \${item.notes ? \`
            <div class="mb-2 p-2 bg-red-50 border border-red-100 rounded text-xs text-red-600">
              <i class="fas fa-info-circle mr-1"></i>
              \${item.notes}
            </div>
          \` : ''}
          
          <div class="flex gap-2">
            <button onclick="updateItem(\${item.id}, 'normal')" class="btn-action flex-1 py-2 text-xs font-medium bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center">
              <i class="fas fa-check mr-1 text-xs"></i>
              <span>正常</span>
            </button>
            <button onclick="openAbnormal(\${item.id})" class="btn-action flex-1 py-2 text-xs font-medium bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center">
              <i class="fas fa-exclamation mr-1 text-xs"></i>
              <span>異常</span>
            </button>
          </div>
        \`;
        container.appendChild(div);
      });
    }

    async function updateItem(id, status, notes = '') {
      try {
        const res = await fetch(\`/api/checklists/\${currentChecklist.id}/items/\${id}\`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status, notes })
        });
        
        const d = await res.json();
        if (d.success) {
          currentChecklist = d.checklist;
          renderUI();
        }
      } catch (error) {
        console.error('更新項目失敗:', error);
      }
    }

    // 提交檢核
    document.getElementById('submitChecklistBtn').onclick = async () => {
      if (!confirm('確認提交檢核結果？')) return;
      
      const btn = document.getElementById('submitChecklistBtn');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1.5"></i>提交中...';
      btn.disabled = true;
      
      try {
        const res = await fetch(\`/api/checklists/\${currentChecklist.id}/submit\`, { method: 'POST' });
        const d = await res.json();
        
        if (d.success) {
          setTimeout(() => {
            window.location.href = '/checklist/history';
          }, 300);
        } else {
          alert('提交失敗: ' + d.message);
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
      } catch (e) {
        alert('網絡錯誤');
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    };

    // 重新開始
    document.getElementById('resetChecklistBtn').onclick = async () => {
      if (!currentChecklist) return;
      if (!confirm('確定要重置所有檢核結果？')) return;
      
      try {
        const res = await fetch(\`/api/checklists/\${currentChecklist.id}/reset\`, { method: 'POST' });
        const d = await res.json();
        
        if (d.success) {
          currentChecklist = d.checklist;
          renderUI();
        }
      } catch (error) {
        console.error('重置失敗:', error);
      }
    };

    // 異常處理
    function openAbnormal(id) {
      currentAbnormalItemId = id;
      const item = currentChecklist.items.find(i => i.id === id);
      document.getElementById('abnormalItemTitle').innerText = item.title;
      document.getElementById('abnormalNotes').value = item.notes || '';
      document.getElementById('abnormalModal').classList.remove('hidden');
    }

    document.getElementById('saveAbnormalBtn').onclick = () => {
      updateItem(currentAbnormalItemId, 'abnormal', document.getElementById('abnormalNotes').value);
      document.getElementById('abnormalModal').classList.add('hidden');
    };

    // 整體備註自動保存（使用防抖）
    let saveTimeout;
    document.getElementById('overallNotes').addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(async () => {
        if (!currentChecklist) return;
        
        try {
          await fetch(\`/api/checklists/\${currentChecklist.id}/report\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notes: document.getElementById('overallNotes').value })
          });
        } catch (error) {
          console.error('保存備註失敗:', error);
        }
      }, 800);
    });

    // 加載完成後初始化
    window.addEventListener('DOMContentLoaded', loadChecklist);
  </script>
</body>
</html>`;

// 檢核記錄历史頁面 (新增)
// 檢核記錄历史頁面 (手機端響應式優化版)
const historyPage = (role) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>檢核記錄</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .modal { transition: opacity 0.25s ease; }
    
    /* 自定義滾動條 */
    .overflow-x-auto::-webkit-scrollbar { height: 4px; }
    .overflow-x-auto::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    
    /* 優化模態框滾動 */
    .modal-container {
      max-height: 90vh;
      overflow: hidden;
    }
    
    .modal-content-scroll {
      max-height: calc(90vh - 140px);
      overflow-y: auto;
    }
    
    /* 自定義滾動條樣式 */
    .modal-content-scroll::-webkit-scrollbar {
      width: 6px;
    }
    
    .modal-content-scroll::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    
    .modal-content-scroll::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 10px;
    }
    
    .modal-content-scroll::-webkit-scrollbar-thumb:hover {
      background: #a1a1a1;
    }
    
    /* 響應式調整 */
    @media (max-width: 640px) {
      .modal-container {
        max-height: 85vh;
        margin: 1rem;
      }
      
      .modal-content-scroll {
        max-height: calc(85vh - 120px);
      }
    }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  ${getNavHtml('history', role)}
  
  <div class="max-w-7xl mx-auto px-4 py-6 sm:py-8">
    <div class="flex justify-between items-center mb-6">
       <h2 class="text-xl sm:text-2xl font-bold text-gray-800">歷史檢核記錄</h2>
       <span class="text-xs sm:text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">最近 30 天</span>
    </div>
    
    <!-- 1. 電腦版表格視圖 (hidden on mobile) -->
    <div class="hidden sm:block bg-white shadow rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交人</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交時間</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
        </thead>
        <tbody id="desktopHistoryBody" class="bg-white divide-y divide-gray-200">
          <tr><td colspan="5" class="px-6 py-8 text-center text-gray-500"><i class="fas fa-spinner fa-spin mr-2"></i>加載中...</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 2. 手機版卡片視圖 (visible on mobile only) -->
    <div class="sm:hidden space-y-4" id="mobileHistoryList">
        <div class="text-center py-10 text-gray-400">
            <i class="fas fa-circle-notch fa-spin text-2xl mb-2"></i>
            <p class="text-sm">載入中...</p>
        </div>
    </div>

  </div>

  <!-- 詳情彈窗 (已優化滾動功能) -->
  <div id="detailModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 hidden items-center justify-center z-50 p-4 backdrop-blur-sm">
    <div class="modal-container bg-white rounded-xl shadow-2xl w-full max-w-lg flex flex-col transform transition-all scale-100">
        <!-- 模態框頭部 -->
        <div class="px-5 py-4 border-b flex justify-between items-center bg-gray-50 rounded-t-xl sticky top-0 z-10">
            <h3 class="text-lg font-bold text-gray-800">檢核詳情</h3>
            <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 p-1 transition">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>
        
        <!-- 可滾動的內容區域 -->
        <div class="modal-content-scroll p-5" id="modalContent">
            <!-- JS 填充 -->
        </div>
        
        <!-- 底部操作按鈕 -->
        <div class="px-5 py-4 border-t bg-gray-50 rounded-b-xl flex justify-end sticky bottom-0 z-10">
            <button onclick="closeModal()" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                關閉
            </button>
        </div>
    </div>
  </div>

  <script>
    let historyData = [];

    async function loadHistory() {
      try {
        const res = await fetch('/api/checklists/history');
        historyData = await res.json();
        
        renderDesktopTable();
        renderMobileCards();
        
      } catch (e) {
        console.error(e);
        document.getElementById('desktopHistoryBody').innerHTML = '<tr><td colspan="5" class="p-4 text-center text-red-500">載入失敗</td></tr>';
        document.getElementById('mobileHistoryList').innerHTML = '<div class="p-4 text-center text-red-500">載入失敗</div>';
      }
    }

    function getStatusBadge(status) {
        if (status === 'completed') return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><i class="fas fa-check-circle mr-1"></i>正常</span>';
        if (status === 'reported') return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><i class="fas fa-exclamation-triangle mr-1"></i>異常</span>';
        return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">進行中</span>';
    }

    function renderDesktopTable() {
        const tbody = document.getElementById('desktopHistoryBody');
        if (!historyData.length) {
            tbody.innerHTML = '<tr><td colspan="5" class="px-6 py-8 text-center text-gray-500">暫無記錄</td></tr>';
            return;
        }
        tbody.innerHTML = historyData.map((item, index) => \`
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">\${item.date}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">\${item.staffName || '未知'}</td>
                <td class="px-6 py-4 whitespace-nowrap">\${getStatusBadge(item.overallStatus)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\${item.submittedAt ? new Date(item.submittedAt).toLocaleString() : '-'}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                   <button onclick="showDetail(\${index})" class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded transition">查看</button>
                </td>
            </tr>
        \`).join('');
    }

    function renderMobileCards() {
        const container = document.getElementById('mobileHistoryList');
        if (!historyData.length) {
            container.innerHTML = '<div class="bg-white p-8 text-center rounded-lg text-gray-500 shadow-sm">暫無記錄</div>';
            return;
        }
        container.innerHTML = historyData.map((item, index) => \`
            <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 active:bg-gray-50 transition" onclick="showDetail(\${index})">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <div class="text-lg font-bold text-gray-800">\${item.date}</div>
                        <div class="text-xs text-gray-500 mt-0.5">\${item.submittedAt ? new Date(item.submittedAt).toLocaleString() : '-'}</div>
                    </div>
                    \${getStatusBadge(item.overallStatus)}
                </div>
                <div class="flex justify-between items-center mt-3 pt-3 border-t border-gray-50">
                    <div class="flex items-center text-sm text-gray-600">
                        <i class="fas fa-user-circle mr-2 text-gray-400"></i>\${item.staffName || '未知'}
                    </div>
                    <button class="text-indigo-600 text-sm font-medium flex items-center">
                        詳情 <i class="fas fa-chevron-right ml-1 text-xs"></i>
                    </button>
                </div>
            </div>
        \`).join('');
    }

    function showDetail(index) {
        const item = historyData[index];
        const content = document.getElementById('modalContent');
        
        let itemsHtml = '';
        if (item.items && item.items.length > 0) {
            itemsHtml = item.items.map(check => \`
                <div class="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
                    <div class="pr-2 flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-800 mb-1">\${check.title}</p>
                        \${check.status === 'abnormal' && check.notes ? \`
                            <div class="mt-1 p-2 bg-red-50 border border-red-100 rounded">
                                <p class="text-xs text-red-600 flex items-start">
                                    <i class="fas fa-exclamation-circle mr-1.5 mt-0.5 flex-shrink-0"></i>
                                    <span>\${check.notes}</span>
                                </p>
                            </div>
                        \` : ''}
                    </div>
                    <div class="flex-shrink-0 ml-2">
                        \${check.status === 'normal' 
                            ? '<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><i class="fas fa-check mr-1"></i>正常</span>' 
                            : check.status === 'abnormal' 
                                ? '<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"><i class="fas fa-times mr-1"></i>異常</span>'
                                : '<span class="text-gray-400 text-sm">未檢核</span>'}
                    </div>
                </div>
            \`).join('');
        } else {
            itemsHtml = \`
                <div class="text-center py-8 text-gray-400">
                    <i class="fas fa-clipboard-list text-3xl mb-3"></i>
                    <p class="text-sm">無檢核項目記錄</p>
                </div>
            \`;
        }

        content.innerHTML = \`
            <!-- 檢核概況 -->
            <div class="bg-gray-50 p-4 rounded-lg mb-5 border border-gray-100">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm">
                    <div>
                        <span class="text-gray-500 block text-xs mb-0.5 font-medium">提交人</span>
                        <div class="flex items-center">
                            <i class="fas fa-user-circle text-gray-400 mr-2"></i>
                            <span class="font-semibold text-gray-800">\${item.staffName || '未記錄'}</span>
                        </div>
                    </div>
                    <div>
                        <span class="text-gray-500 block text-xs mb-0.5 font-medium">檢核日期</span>
                        <div class="flex items-center">
                            <i class="fas fa-calendar-alt text-gray-400 mr-2"></i>
                            <span class="font-semibold text-gray-800">\${item.date}</span>
                        </div>
                    </div>
                    <div class="sm:col-span-2 border-t border-gray-200 pt-3 mt-2">
                        <span class="text-gray-500 block text-xs mb-1 font-medium">整體狀況</span>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-700">\${getStatusText(item.overallStatus)}</span>
                            \${getStatusBadge(item.overallStatus)}
                        </div>
                    </div>
                    <div class="sm:col-span-2 border-t border-gray-200 pt-3 mt-2">
                        <span class="text-gray-500 block text-xs mb-1 font-medium">整體備註</span>
                        <div class="bg-white p-3 rounded border border-gray-200 mt-1">
                            <p class="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">\${item.overallNotes || '無備註'}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 檢核項目 -->
            <div class="mb-2">
                <h4 class="font-bold text-gray-700 text-sm uppercase tracking-wide mb-3 flex items-center">
                    <i class="fas fa-list-check mr-2 text-indigo-500"></i>
                    檢核項目詳情
                    <span class="ml-2 text-xs font-normal bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">\${item.items ? item.items.length : 0} 項</span>
                </h4>
            </div>
            <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
                \${itemsHtml}
            </div>
        \`;
        
        const modal = document.getElementById('detailModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // 滾動到頂部
        content.scrollTop = 0;
    }

    function getStatusText(status) {
        switch(status) {
            case 'completed': return '全部正常';
            case 'reported': return '存在異常';
            default: return '未完成';
        }
    }

    function closeModal() {
        const modal = document.getElementById('detailModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    // 點擊模態框背景關閉
    document.addEventListener('click', function(event) {
        const modal = document.getElementById('detailModal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // ESC 鍵關閉
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    window.onload = loadHistory;
  </script>
</body>
</html>
`;

// ==========================================
// 創建每日檢核清單 (動態模板版)
// ==========================================
async function createDailyChecklist(date, staffId, env) {
  try {
    const checklistId = `checklist_${date.replace(/-/g, '')}_${Date.now()}`;
    
    // 從 KV 獲取最新的模板
    const template = await DB.getChecklistTemplate(env);
    
    const checklist = {
      id: checklistId,
      date: date,
      staffId: staffId,
      // 使用動態模板生成今日項目
      items: template.map(item => ({
        ...item,
        status: 'pending', // pending, normal, abnormal
        notes: '',
        checkedAt: null
      })),
      overallStatus: 'pending',
      overallNotes: '',
      submittedAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put(`checklist:${checklistId}`, JSON.stringify(checklist));
    await env.BIRC_SUBSCRIPTIONS_KV.put(`checklist_by_date:${date}`, checklistId);
    
    return { success: true, checklist };
  } catch (error) {
    console.error('創建檢核清單失敗:', error);
    return { success: false, message: '創建檢核清單失敗' };
  }
}

async function getChecklist(id, env) {
  try {
    const data = await env.BIRC_SUBSCRIPTIONS_KV.get(`checklist:${id}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('獲取檢核清單失敗:', error);
    return null;
  }
}

async function getTodayChecklist(env) {
  try {
    // 獲取台北時間
    const now = new Date();
    const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const today = taipeiTime.toISOString().split('T')[0];
    
    const checklistId = await env.BIRC_SUBSCRIPTIONS_KV.get(`checklist_by_date:${today}`);
    
    if (checklistId) {
      return await getChecklist(checklistId, env);
    }
    
    // 如果沒有今天的檢核清單，檢查是否需要創建
    const todaySchedule = await getTodaySchedule(env);
    if (todaySchedule.isWorkDay && !todaySchedule.isExcluded && todaySchedule.staff) {
      const result = await createDailyChecklist(today, todaySchedule.staff.id, env);
      return result.checklist;
    }
    
    return null;
  } catch (error) {
    console.error('獲取今日檢核清單失敗:', error);
    return null;
  }
}

async function updateChecklistItem(checklistId, itemId, status, notes = '', env) {
  try {
    const checklist = await getChecklist(checklistId, env);
    if (!checklist) {
      return { success: false, message: '檢核清單不存在' };
    }

    const itemIndex = checklist.items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) {
      return { success: false, message: '檢核項目不存在' };
    }

    checklist.items[itemIndex] = {
      ...checklist.items[itemIndex],
      status: status,
      notes: notes,
      checkedAt: new Date().toISOString()
    };

    // 更新整體狀態
    const allCompleted = checklist.items.every(item => item.status !== 'pending');
    const anyAbnormal = checklist.items.some(item => item.status === 'abnormal');
    
    if (allCompleted) {
      checklist.overallStatus = anyAbnormal ? 'reported' : 'completed';
    }

    checklist.updatedAt = new Date().toISOString();

    await env.BIRC_SUBSCRIPTIONS_KV.put(`checklist:${checklistId}`, JSON.stringify(checklist));

    return { success: true, checklist };
  } catch (error) {
    console.error('更新檢核項目失敗:', error);
    return { success: false, message: '更新檢核項目失敗' };
  }
}

async function updateOverallChecklist(checklistId, overallNotes, env) {
  try {
    const checklist = await getChecklist(checklistId, env);
    if (!checklist) {
      return { success: false, message: '檢核清單不存在' };
    }

    checklist.overallNotes = overallNotes;
    checklist.overallStatus = 'reported';
    checklist.updatedAt = new Date().toISOString();

    await env.BIRC_SUBSCRIPTIONS_KV.put(`checklist:${checklistId}`, JSON.stringify(checklist));

    return { success: true, checklist };
  } catch (error) {
    console.error('更新整體檢核失敗:', error);
    return { success: false, message: '更新整體檢核失敗' };
  }
}

async function submitChecklist(checklistId, env) {
  try {
    const checklist = await getChecklist(checklistId, env);
    if (!checklist) return { success: false, message: '檢核清單不存在' };

    const pendingItems = checklist.items.filter(item => item.status === 'pending');
    if (pendingItems.length > 0) return { success: false, message: '還有未完成的檢核項目' };

    checklist.submittedAt = new Date().toISOString();
    
    // 1. [核心] 存檔到歷史記錄 (保持新版邏輯)
    const staff = await getStaff(checklist.staffId, env);
    const historyRecord = {
        ...checklist,
        staffName: staff ? staff.name : '未知',
        overallStatus: checklist.items.some(i => i.status === 'abnormal') ? 'reported' : 'completed'
    };
    await DB.addHistory(env, historyRecord);

    // 2. 發送通知 (已修改為您喜歡的舊版詳細格式)
    const config = await getConfig(env);
    
    // --- 舊版格式生成開始 ---
    // 統計數據
    const normalCount = checklist.items.filter(item => item.status === 'normal').length;
    const abnormalCount = checklist.items.filter(item => item.status === 'abnormal').length;
    const hasAbnormal = abnormalCount > 0;

    // 格式化時間 (YYYY-MM-DD HH:mm:ss)
    const submitDate = new Date();
    const taipeiTime = new Date(submitDate.getTime() + 8 * 60 * 60 * 1000);
    const timeStr = taipeiTime.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '');

    // 構建詳細消息
    let message = hasAbnormal 
      ? `🚨 *機房檢核報告 (發現異常)*\n\n` 
      : `✅ *機房檢核報告 (正常完成)*\n\n`;

    message += `👤 *人員:* ${staff?.name || '未知'}\n`;
    message += `🕒 *時間:* ${timeStr}\n\n`;
    
    message += `📊 *檢核結果:*\n`;
    message += `✅ 正常: ${normalCount} 項\n`;
    if (hasAbnormal) {
        message += `❌ 異常: ${abnormalCount} 項\n`;
    }

    // 整體備註
    if (checklist.overallNotes) {
      message += `\n📝 *整體備註:*\n\`${checklist.overallNotes}\`\n`;
    }
    
    // 異常詳情 (優化排版)
    const abnormalItems = checklist.items.filter(item => item.status === 'abnormal');
    if (abnormalItems.length > 0) {
      message += `\n⚠️ *異常項目詳情:*\n`;
      message += `━━━━━━━━━━━━━━\n`;
      abnormalItems.forEach(item => {
        message += `*× ${item.title}*\n`;
        if (item.notes) {
          message += `   📝 \`${item.notes}\`\n`;
        } else {
          message += `   📝 \`無詳細描述\`\n`;
        }
        message += `\n`; 
      });
    }
    // --- 舊版格式生成結束 ---

    await sendTelegramNotification(message, config);

    // 3. [核心] 重置當前表單，供下一位使用 (保持新版邏輯)
    checklist.items = checklist.items.map(item => ({
      ...item, status: 'pending', notes: '', checkedAt: null
    }));
    checklist.overallStatus = 'pending';
    checklist.overallNotes = '';
    checklist.submittedAt = null;

    // 寫回 KV (此時 KV 裡的是空白單，但歷史記錄裡已經有一份備份了)
    await env.BIRC_SUBSCRIPTIONS_KV.put(`checklist:${checklistId}`, JSON.stringify(checklist));

    return { success: true, checklist };
  } catch (error) {
    console.error('Submit Error:', error);
    return { success: false, message: '提交失敗' };
  }
}

async function resetChecklist(checklistId, env) {
  try {
    const checklist = await getChecklist(checklistId, env);
    if (!checklist) {
      return { success: false, message: '檢核清單不存在' };
    }

    // 重置所有項目
    checklist.items = checklist.items.map(item => ({
      ...item,
      status: 'pending',
      notes: '',
      checkedAt: null
    }));
    
    checklist.overallStatus = 'pending';
    checklist.overallNotes = '';
    checklist.submittedAt = null;
    checklist.updatedAt = new Date().toISOString();

    await env.BIRC_SUBSCRIPTIONS_KV.put(`checklist:${checklistId}`, JSON.stringify(checklist));

    return { success: true, checklist };
  } catch (error) {
    console.error('重置檢核清單失敗:', error);
    return { success: false, message: '重置檢核清單失敗' };
  }
}

// Telegram 互動按鈕處理函數
async function handleTelegramCallback(callbackQuery, env) {
  try {
    const { id, data, from, message } = callbackQuery;
    const config = await getConfig(env);
    
    // 解析回調數據
    const params = new URLSearchParams(data);
    const action = params.get('action');
    const checklistId = params.get('checklistId');
    const itemId = params.get('itemId');
    const status = params.get('status');
    
    console.log('處理Telegram回調:', { action, checklistId, itemId, status });
    
    let responseText = '';
    let showAlert = false;
    
    switch (action) {
      case 'check_item':
        if (checklistId && itemId && status) {
          const result = await updateChecklistItem(checklistId, parseInt(itemId), status, '', env);
          if (result.success) {
            responseText = `已標記為${status === 'normal' ? '✅ 正常' : '❌ 異常'}`;
            
            // 更新消息中的按鈕狀態
            await updateChecklistMessage(checklistId, message.message_id, env, config);
          } else {
            responseText = '更新失敗，請重試';
          }
        }
        break;
        
      case 'report_abnormal':
        responseText = '請回覆此消息，輸入異常描述：';
        showAlert = true;
        break;
        
      case 'submit_checklist':
        const submitResult = await submitChecklist(checklistId, env);
        responseText = submitResult.success ? '檢核清單已提交！' : submitResult.message;
        showAlert = true;
        break;
        
      case 'reset_checklist':
        const resetResult = await resetChecklist(checklistId, env);
        responseText = resetResult.success ? '檢核清單已重置！' : resetResult.message;
        showAlert = true;
        
        if (resetResult.success) {
          // 更新消息
          await updateChecklistMessage(checklistId, message.message_id, env, config);
        }
        break;
    }
    
    // 回覆Telegram回調
    await answerTelegramCallback(id, responseText, showAlert, config);
    
  } catch (error) {
    console.error('處理Telegram回調失敗:', error);
  }
}

async function answerTelegramCallback(callbackQueryId, text, showAlert, config) {
  try {
    const url = `https://api.telegram.org/bot${config.TG_BOT_TOKEN}/answerCallbackQuery`;
    
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        callback_query_id: callbackQueryId,
        text: text,
        show_alert: showAlert
      })
    });
  } catch (error) {
    console.error('回覆Telegram回調失敗:', error);
  }
}

async function updateChecklistMessage(checklistId, messageId, env, config) {
  try {
    const checklist = await getChecklist(checklistId, env);
    if (!checklist) return;
    
    const url = `https://api.telegram.org/bot${config.TG_BOT_TOKEN}/editMessageText`;
    
    // 重新生成消息內容
    const message = generateChecklistMessage(checklist, env);
    
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: config.TG_CHAT_ID,
        message_id: messageId,
        text: message.text,
        parse_mode: 'Markdown',
        reply_markup: message.reply_markup
      })
    });
  } catch (error) {
    console.error('更新Telegram消息失敗:', error);
  }
}

function generateChecklistMessage(checklist, env) {
  let message = `*機房檢核清單*\n\n`;
  message += `日期: ${new Date(checklist.date).toLocaleDateString()}\n`;
  message += `檢核人員: <待獲取人員資訊>\n\n`;
  
  // 添加檢核項目
  checklist.items.forEach((item, index) => {
    const statusIcon = item.status === 'normal' ? '✅' : 
                      item.status === 'abnormal' ? '❌' : '⏳';
    message += `${index + 1}. ${item.title} ${statusIcon}\n`;
  });
  
  message += `\n*狀態: ${checklist.overallStatus === 'completed' ? '已完成' : 
                            checklist.overallStatus === 'reported' ? '已報告異常' : '進行中'}*`;
  
  if (checklist.submittedAt) {
    message += `\n提交時間: ${new Date(checklist.submittedAt).toLocaleString()}`;
  }
  
  // 生成內聯鍵盤
  const inlineKeyboard = generateChecklistKeyboard(checklist);
  
  return {
    text: message,
    reply_markup: { inline_keyboard: inlineKeyboard }
  };
}

function generateChecklistKeyboard(checklist) {
  const keyboard = [];
  
  // 每兩個項目一行
  for (let i = 0; i < checklist.items.length; i += 2) {
    const row = [];
    const item1 = checklist.items[i];
    const item2 = checklist.items[i + 1];
    
    row.push({
      text: `${i + 1}. ${item1.status === 'normal' ? '✅' : 
                         item1.status === 'abnormal' ? '❌' : '⏳'}`,
      callback_data: `action=view_item&checklistId=${checklist.id}&itemId=${item1.id}`
    });
    
    if (item2) {
      row.push({
        text: `${i + 2}. ${item2.status === 'normal' ? '✅' : 
                           item2.status === 'abnormal' ? '❌' : '⏳'}`,
        callback_data: `action=view_item&checklistId=${checklist.id}&itemId=${item2.id}`
      });
    }
    
    keyboard.push(row);
  }
  
  // 操作按鈕行
  keyboard.push([
    { text: '📤 提交', callback_data: `action=submit_checklist&checklistId=${checklist.id}` },
    { text: '⚠️ 報告異常', callback_data: `action=report_abnormal&checklistId=${checklist.id}` }
  ]);
  
  keyboard.push([
    { text: '🔄 重新開始', callback_data: `action=reset_checklist&checklistId=${checklist.id}` }
  ]);
  
  return keyboard;
}

// ==========================================
// 密碼雜湊工具函數 (使用 SHA-256)
// ==========================================
async function hashPassword(password) {
  // 將密碼轉換為 ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  
  // 使用 SHA-256 進行雜湊
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  
  // 將 ArrayBuffer 轉換為十六進制字符串
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}

async function verifyPassword(password, hashedPassword) {
  // 雜湊輸入的密碼並比較
  const inputHash = await hashPassword(password);
  return inputHash === hashedPassword;
}

// 工具函數
function generateRandomSecret() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let result = '';
  for (let i = 0; i < 64; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function getConfig(env) {
  try {
    if (!env.BIRC_SUBSCRIPTIONS_KV) {
      throw new Error('KV存储未綁定');
    }

    const data = await env.BIRC_SUBSCRIPTIONS_KV.get('config');
    const config = data ? JSON.parse(data) : {};

    let jwtSecret = config.JWT_SECRET;
    if (!jwtSecret || jwtSecret === 'your-secret-key') {
      jwtSecret = generateRandomSecret();
      const updatedConfig = { ...config, JWT_SECRET: jwtSecret };
      await env.BIRC_SUBSCRIPTIONS_KV.put('config', JSON.stringify(updatedConfig));
    }

    const finalConfig = {
      ADMIN_USERNAME: config.ADMIN_USERNAME || 'admin',
      ADMIN_PASSWORD: config.ADMIN_PASSWORD || 'password',
      JWT_SECRET: jwtSecret,
      TG_BOT_TOKEN: config.TG_BOT_TOKEN || '',
      TG_CHAT_ID: config.TG_CHAT_ID || ''
    };

    return finalConfig;
  } catch (error) {
    console.error('[配置] 獲取配置失敗:', error);
    const defaultJwtSecret = generateRandomSecret();

    return {
      ADMIN_USERNAME: 'admin',
      ADMIN_PASSWORD: 'password',
      JWT_SECRET: defaultJwtSecret,
      TG_BOT_TOKEN: '',
      TG_CHAT_ID: ''
    };
  }
}

// ==========================================
// 修复後的 JWT 工具函數 (放在代碼最底部)
// ==========================================

async function generateJWT(payloadData, secret) {
  const header = { alg: 'HS256', typ: 'JWT' };
  
  // 核心修复：兼容處理。如果傳入的是對象(包含role)，直接展開；如果只是用户名字符串，封装成對象
  let payload;
  if (typeof payloadData === 'object') {
      payload = { ...payloadData, iat: Math.floor(Date.now() / 1000) };
  } else {
      payload = { username: payloadData, iat: Math.floor(Date.now() / 1000) };
  }

  const headerBase64 = btoa(JSON.stringify(header)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const payloadBase64 = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const signatureInput = headerBase64 + '.' + payloadBase64;
  const signature = await CryptoJS.HmacSHA256(signatureInput, secret);

  return headerBase64 + '.' + payloadBase64 + '.' + signature;
}

async function verifyJWT(token, secret) {
  try {
    if (!token || !secret) return null;

    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [headerBase64, payloadBase64, signature] = parts;
    const signatureInput = headerBase64 + '.' + payloadBase64;
    const expectedSignature = await CryptoJS.HmacSHA256(signatureInput, secret);

    if (signature !== expectedSignature) {
      return null;
    }

    // Base64Url 解碼兼容
    const base64 = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

// 訂閱管理函數
async function getAllSubscriptions(env) {
  try {
    const data = await env.BIRC_SUBSCRIPTIONS_KV.get('subscriptions');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

async function getSubscription(id, env) {
  const subscriptions = await getAllSubscriptions(env);
  return subscriptions.find(s => s.id === id);
}

async function createSubscription(subscription, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);

    if (!subscription.name || !subscription.expiryDate) {
      return { success: false, message: '缺少必填字段' };
    }

    let expiryDate = new Date(subscription.expiryDate);
    const now = new Date();

    // 修复：使用getTime()进行日期比较
    if (expiryDate.getTime() < now.getTime() && subscription.periodValue && subscription.periodUnit) {
      while (expiryDate.getTime() < now.getTime()) {
        if (subscription.periodUnit === 'day') {
          expiryDate.setDate(expiryDate.getDate() + subscription.periodValue);
        } else if (subscription.periodUnit === 'month') {
          expiryDate.setMonth(expiryDate.getMonth() + subscription.periodValue);
        } else if (subscription.periodUnit === 'year') {
          expiryDate.setFullYear(expiryDate.getFullYear() + subscription.periodValue);
        }
      }
      subscription.expiryDate = expiryDate.toISOString();
    }

    const newSubscription = {
      id: Date.now().toString(),
      name: subscription.name,
      customType: subscription.customType || '',
      startDate: subscription.startDate || null,
      expiryDate: subscription.expiryDate,
      periodValue: subscription.periodValue || 1,
      periodUnit: subscription.periodUnit || 'month',
      reminderDays: subscription.reminderDays !== undefined ? subscription.reminderDays : 7,
      notes: subscription.notes || '',
      isActive: subscription.isActive !== false,
      autoRenew: subscription.autoRenew !== false,
      createdAt: new Date().toISOString()
    };

    subscriptions.push(newSubscription);

    await env.BIRC_SUBSCRIPTIONS_KV.put('subscriptions', JSON.stringify(subscriptions));

    return { success: true, subscription: newSubscription };
  } catch (error) {
    return { success: false, message: '创建訂閱失敗' };
  }
}

async function updateSubscription(id, subscription, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);
    const index = subscriptions.findIndex(s => s.id === id);

    if (index === -1) {
      return { success: false, message: '訂閱不存在' };
    }

    if (!subscription.name || !subscription.expiryDate) {
      return { success: false, message: '缺少必填字段' };
    }

    let expiryDate = new Date(subscription.expiryDate);
    const now = new Date();

    // 修复：使用getTime()进行日期比较
    if (expiryDate.getTime() < now.getTime() && subscription.periodValue && subscription.periodUnit) {
      while (expiryDate.getTime() < now.getTime()) {
        if (subscription.periodUnit === 'day') {
          expiryDate.setDate(expiryDate.getDate() + subscription.periodValue);
        } else if (subscription.periodUnit === 'month') {
          expiryDate.setMonth(expiryDate.getMonth() + subscription.periodValue);
        } else if (subscription.periodUnit === 'year') {
          expiryDate.setFullYear(expiryDate.getFullYear() + subscription.periodValue);
        }
      }
      subscription.expiryDate = expiryDate.toISOString();
    }

    subscriptions[index] = {
      ...subscriptions[index],
      name: subscription.name,
      customType: subscription.customType || subscriptions[index].customType || '',
      startDate: subscription.startDate || subscriptions[index].startDate,
      expiryDate: subscription.expiryDate,
      periodValue: subscription.periodValue || subscriptions[index].periodValue || 1,
      periodUnit: subscription.periodUnit || subscriptions[index].periodUnit || 'month',
      reminderDays: subscription.reminderDays !== undefined ? subscription.reminderDays : (subscriptions[index].reminderDays !== undefined ? subscriptions[index].reminderDays : 7),
      notes: subscription.notes || '',
      isActive: subscription.isActive !== undefined ? subscription.isActive : subscriptions[index].isActive,
      autoRenew: subscription.autoRenew !== undefined ? subscription.autoRenew : (subscriptions[index].autoRenew !== undefined ? subscriptions[index].autoRenew : true),
      updatedAt: new Date().toISOString()
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put('subscriptions', JSON.stringify(subscriptions));

    return { success: true, subscription: subscriptions[index] };
  } catch (error) {
    return { success: false, message: '更新訂閱失敗' };
  }
}

async function deleteSubscription(id, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);
    const filteredSubscriptions = subscriptions.filter(s => s.id !== id);

    if (filteredSubscriptions.length === subscriptions.length) {
      return { success: false, message: '訂閱不存在' };
    }

    await env.BIRC_SUBSCRIPTIONS_KV.put('subscriptions', JSON.stringify(filteredSubscriptions));

    return { success: true };
  } catch (error) {
    return { success: false, message: '删除訂閱失敗' };
  }
}

async function toggleSubscriptionStatus(id, isActive, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);
    const index = subscriptions.findIndex(s => s.id === id);

    if (index === -1) {
      return { success: false, message: '訂閱不存在' };
    }

    subscriptions[index] = {
      ...subscriptions[index],
      isActive: isActive,
      updatedAt: new Date().toISOString()
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put('subscriptions', JSON.stringify(subscriptions));

    return { success: true, subscription: subscriptions[index] };
  } catch (error) {
    return { success: false, message: '更新訂閱狀態失敗' };
  }
}

async function testSingleSubscriptionNotification(id, env) {
  try {
    const subscription = await getSubscription(id, env);
    if (!subscription) {
      return { success: false, message: '未找到该訂閱' };
    }
    const config = await getConfig(env);

    const title = `手動測試通知: ${subscription.name}`;
    const commonContent = `**訂閱详情**:\n- **類型**: ${subscription.customType || '其他'}\n- **到期日**: ${new Date(subscription.expiryDate).toLocaleDateString()}\n- **備註**: ${subscription.notes || '無'}`;

    await sendTelegramNotification(`*${title}*\n\n${commonContent}`, config);

    return { success: true, message: '測試通知已發送到Telegram' };

  } catch (error) {
    console.error('[手動測試] 發送失敗:', error);
    return { success: false, message: '發送時發生錯誤: ' + error.message };
  }
}

// 員工管理函數
async function getAllStaff(env) {
  try {
    const data = await env.BIRC_SUBSCRIPTIONS_KV.get('staff');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

async function getStaff(id, env) {
  const staff = await getAllStaff(env);
  return staff.find(s => s.id === id);
}

async function createStaff(staff, env) {
  try {
    const allStaff = await getAllStaff(env);

    if (!staff.name) {
      return { success: false, message: '員工姓名不能為空' };
    }

    const newStaff = {
      id: Date.now().toString(),
      name: staff.name,
      contact: staff.contact || '',
      notes: staff.notes || '',
      isActive: staff.isActive !== false,
      createdAt: new Date().toISOString()
    };

    allStaff.push(newStaff);

    await env.BIRC_SUBSCRIPTIONS_KV.put('staff', JSON.stringify(allStaff));

    return { success: true, staff: newStaff };
  } catch (error) {
    return { success: false, message: '添加員工失敗' };
  }
}

async function updateStaff(id, staff, env) {
  try {
    const allStaff = await getAllStaff(env);
    const index = allStaff.findIndex(s => s.id === id);

    if (index === -1) {
      return { success: false, message: '員工不存在' };
    }

    if (!staff.name) {
      return { success: false, message: '員工姓名不能為空' };
    }

    allStaff[index] = {
      ...allStaff[index],
      name: staff.name,
      contact: staff.contact || allStaff[index].contact,
      notes: staff.notes || allStaff[index].notes,
      isActive: staff.isActive !== undefined ? staff.isActive : allStaff[index].isActive,
      updatedAt: new Date().toISOString()
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put('staff', JSON.stringify(allStaff));

    return { success: true, staff: allStaff[index] };
  } catch (error) {
    return { success: false, message: '更新員工失敗' };
  }
}

async function deleteStaff(id, env) {
  try {
    const allStaff = await getAllStaff(env);
    const filteredStaff = allStaff.filter(s => s.id !== id);

    if (filteredStaff.length === allStaff.length) {
      return { success: false, message: '員工不存在' };
    }

    await env.BIRC_SUBSCRIPTIONS_KV.put('staff', JSON.stringify(filteredStaff));

    return { success: true };
  } catch (error) {
    return { success: false, message: '删除員工失敗' };
  }
}

async function toggleStaffStatus(id, isActive, env) {
  try {
    const allStaff = await getAllStaff(env);
    const index = allStaff.findIndex(s => s.id === id);

    if (index === -1) {
      return { success: false, message: '員工不存在' };
    }

    allStaff[index] = {
      ...allStaff[index],
      isActive: isActive,
      updatedAt: new Date().toISOString()
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put('staff', JSON.stringify(allStaff));

    return { success: true, staff: allStaff[index] };
  } catch (error) {
    return { success: false, message: '更新員工狀態失敗' };
  }
}

// 排班配置函數
async function getScheduleConfig(env) {
  try {
    const data = await env.BIRC_SUBSCRIPTIONS_KV.get('schedule_config');
    const defaultConfig = {
      workDays: [1, 2, 3, 4, 5], // 週一至週五
      notificationTime: '08:00',
      currentPointer: 0,
      lastNotificationDate: null // 新增：記錄最後發送通知的日期
    };
    return data ? JSON.parse(data) : defaultConfig;
  } catch (error) {
    return {
      workDays: [1, 2, 3, 4, 5],
      notificationTime: '08:00',
      currentPointer: 0,
      lastNotificationDate: null
    };
  }
}

async function updateScheduleConfig(config, env) {
  try {
    const currentConfig = await getScheduleConfig(env);
    const updatedConfig = {
      ...currentConfig,
      workDays: config.workDays || currentConfig.workDays,
      notificationTime: config.notificationTime || currentConfig.notificationTime,
      currentPointer: config.currentPointer !== undefined ? config.currentPointer : currentConfig.currentPointer
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put('schedule_config', JSON.stringify(updatedConfig));

    return { success: true, config: updatedConfig };
  } catch (error) {
    return { success: false, message: '更新排班配置失敗' };
  }
}

// 排除日期函數
async function getAllExclusions(env) {
  try {
    const data = await env.BIRC_SUBSCRIPTIONS_KV.get('exclusions');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

async function getExclusion(id, env) {
  const exclusions = await getAllExclusions(env);
  return exclusions.find(e => e.id === id);
}

async function createExclusion(exclusion, env) {
  try {
    const allExclusions = await getAllExclusions(env);

    if (!exclusion.date) {
      return { success: false, message: '日期不能為空' };
    }

    const newExclusion = {
      id: Date.now().toString(),
      date: exclusion.date,
      reason: exclusion.reason || '',
      type: exclusion.type || 'holiday',
      isActive: exclusion.isActive !== false,
      createdAt: new Date().toISOString()
    };

    allExclusions.push(newExclusion);

    await env.BIRC_SUBSCRIPTIONS_KV.put('exclusions', JSON.stringify(allExclusions));

    return { success: true, exclusion: newExclusion };
  } catch (error) {
    return { success: false, message: '添加排除日期失敗' };
  }
}

async function updateExclusion(id, exclusion, env) {
  try {
    const allExclusions = await getAllExclusions(env);
    const index = allExclusions.findIndex(e => e.id === id);

    if (index === -1) {
      return { success: false, message: '排除日期不存在' };
    }

    if (!exclusion.date) {
      return { success: false, message: '日期不能為空' };
    }

    allExclusions[index] = {
      ...allExclusions[index],
      date: exclusion.date,
      reason: exclusion.reason || allExclusions[index].reason,
      type: exclusion.type || allExclusions[index].type,
      isActive: exclusion.isActive !== undefined ? exclusion.isActive : allExclusions[index].isActive,
      updatedAt: new Date().toISOString()
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put('exclusions', JSON.stringify(allExclusions));

    return { success: true, exclusion: allExclusions[index] };
  } catch (error) {
    return { success: false, message: '更新排除日期失敗' };
  }
}

async function deleteExclusion(id, env) {
  try {
    const allExclusions = await getAllExclusions(env);
    const filteredExclusions = allExclusions.filter(e => e.id !== id);

    if (filteredExclusions.length === allExclusions.length) {
      return { success: false, message: '排除日期不存在' };
    }

    await env.BIRC_SUBSCRIPTIONS_KV.put('exclusions', JSON.stringify(filteredExclusions));

    return { success: true };
  } catch (error) {
    return { success: false, message: '删除排除日期失敗' };
  }
}

async function toggleExclusionStatus(id, isActive, env) {
  try {
    const allExclusions = await getAllExclusions(env);
    const index = allExclusions.findIndex(e => e.id === id);

    if (index === -1) {
      return { success: false, message: '排除日期不存在' };
    }

    allExclusions[index] = {
      ...allExclusions[index],
      isActive: isActive,
      updatedAt: new Date().toISOString()
    };

    await env.BIRC_SUBSCRIPTIONS_KV.put('exclusions', JSON.stringify(allExclusions));

    return { success: true, exclusion: allExclusions[index] };
  } catch (error) {
    return { success: false, message: '更新排除日期狀態失敗' };
  }
}

// ==========================================
// 1. 排班核心計算邏輯 (徹底修复時區与日期偏差)
// ==========================================
async function calculateScheduledStaff(targetDate, env) {
  try {
    const scheduleConfig = await DB.getScheduleConfig(env);
    const staff = await getAllStaff(env);
    const exclusions = await getAllExclusions(env);
    
    const activeStaff = staff.filter(s => s.isActive !== false);
    const activeExclusions = exclusions.filter(e => e.isActive !== false);
    
    if (activeStaff.length === 0) return null;
    
    // 步骤 A: 獲取目標日期的台北時間字符串 (YYYY-MM-DD)
    // 無論傳入的是幾點，統一轉為台北当天的日期
    const taipeiOffset = 8 * 60 * 60 * 1000;
    const taipeiTime = new Date(targetDate.getTime() + taipeiOffset);
    const targetDateStr = taipeiTime.toISOString().split('T')[0];
    
    // 步骤 B: 确定目標是週幾 (0-6)
    // 注意：toISOString 後的日期是標準的，可以直接構建 Date 對象来獲取 getDay
    // 这里使用 targetDateStr 重新構建一个 UTC 0點的時間對象来獲取星期，保证準确
    const targetDayObj = new Date(targetDateStr + 'T00:00:00Z');
    const targetDay = targetDayObj.getUTCDay();

    // 1. 檢查是否是排除日期
    const isExcluded = activeExclusions.some(e => e.date === targetDateStr);
    
    // 2. 檢查是否是工作日
    // 容錯處理：确保 workDays 里的數字類型匹配
    const isWorkDay = scheduleConfig.workDays.map(d => parseInt(d)).includes(targetDay);
    
    if (!isWorkDay || isExcluded) {
      return null;
    }
    
    // 3. 計算从錨點日期 (2024-01-01) 到目標日期共有多少个"有效工作日"
    const anchorDateStr = '2024-01-01';
    const anchorTime = new Date(anchorDateStr + 'T00:00:00Z').getTime();
    const targetTime = targetDayObj.getTime();
    
    // 計算自然天數差
    const oneDayMs = 86400000;
    const dayDiff = Math.round((targetTime - anchorTime) / oneDayMs);
    
    let workDaysCount = 0;
    
    // 循環每一天，判斷是否為有效工作日
    for (let i = 0; i <= dayDiff; i++) {
      const currentMs = anchorTime + (i * oneDayMs);
      const currentObj = new Date(currentMs);
      const currentWeekDay = currentObj.getUTCDay();
      const currentStr = currentObj.toISOString().split('T')[0];
      
      const isCurWork = scheduleConfig.workDays.map(d => parseInt(d)).includes(currentWeekDay);
      const isCurExcl = activeExclusions.some(e => e.date === currentStr);
      
      if (isCurWork && !isCurExcl) {
        workDaysCount++;
      }
    }
    
    // 4. 計算指針
    // (当前指針 + 累計工作日 - 1) % 人數
    // 减 1 是因為 workDaysCount 包含了"今天"，如果不减，今天就会变成下一个人
    let staffIndex = (scheduleConfig.currentPointer + workDaysCount - 1) % activeStaff.length;
    
    // 防止負數索引 (防禦性)
    if (staffIndex < 0) staffIndex += activeStaff.length;
    
    return activeStaff[staffIndex];
  } catch (error) {
    console.error('計算排班失敗:', error);
    return null;
  }
}

// ==========================================
// 2. 發送排班通知 (自動任務版 - 格式已美化)
// ==========================================
async function sendScheduleNotification(env) {
  try {
    const todaySchedule = await getTodaySchedule(env);
    const config = await getConfig(env);
    const scheduleConfig = await DB.getScheduleConfig(env);
    
    // 台北時間
    const now = new Date();
    const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const todayStr = taipeiTime.toISOString().split('T')[0];
    
    // 檢查是否已發送過 (防止重复)
    //if (scheduleConfig.lastNotificationDate === todayStr) {
    //  console.log('今日已發送過通知，跳過');
    //  return;
    //}

    if (todaySchedule.isWorkDay && !todaySchedule.isExcluded && todaySchedule.staff) {
      // 1. 创建今日檢核清單
      const checklistResult = await createDailyChecklist(todayStr, todaySchedule.staff.id, env);
      
      // 2. 構建美化後的消息
      const checklistUrl = `https://birc.clouda.dpdns.org/checklist`; // 您指定的域名
      const weekDayMap = ['日', '一', '二', '三', '四', '五', '六'];
      const weekDay = weekDayMap[taipeiTime.getDay()];

      let message = `🔔 *排班任務通知*\n\n`;
      message += `📅 *日期:* ${todayStr} (週${weekDay})\n`;
      message += `👤 *值班人員:* ${todaySchedule.staff.name}\n`;
      
      if (todaySchedule.staff.contact) {
        message += `📞 *聯繫方式:* ${todaySchedule.staff.contact}\n`;
      }
      
      message += `\n📋 *今日任務:* 機房檢核\n`;
      message += `請完成今日機房環境與設備檢核項目。\n\n`;
      
      message += `🔗 [點擊此處開始檢核](${checklistUrl})\n`;
      // 备用纯链接，防止 Markdown 解析失敗無法點击
      message += `\`${checklistUrl}\`\n\n`; 
      
      message += `⚠️ *請盡快完成任務*`;

      // 3. 發送
      const success = await sendTelegramNotification(message, config);
      
      if (success) {
        // 更新最後通知日期
        scheduleConfig.lastNotificationDate = todayStr;
        await env.BIRC_SUBSCRIPTIONS_KV.put('schedule_config', JSON.stringify(scheduleConfig));
      }
    } else {
        console.log('今日無需發送通知:', todaySchedule);
    }
  } catch (error) {
    console.error('發送排班通知失敗:', error);
  }
}

// ==========================================
// 3. 測試排班通知 (手動按鈕版 - 格式已優化)
// ==========================================
async function testScheduleNotification(env) {
  try {
    const todaySchedule = await getTodaySchedule(env);
    const config = await getConfig(env);
    
    if (!todaySchedule.isWorkDay || todaySchedule.isExcluded || !todaySchedule.staff) {
      return { success: false, message: '今日無需值班或已排除，無法測試' };
    }
    
    // 强制创建清單用於測試链接檢查消防系統狀態
    const now = new Date();
    const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const todayStr = taipeiTime.toISOString().split('T')[0];
    const timeStr = taipeiTime.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '');
    await createDailyChecklist(todayStr, todaySchedule.staff.id, env);
    
    // 構建美化消息
    const checklistUrl = `https://birc.clouda.dpdns.org/checklist`;

    let message = `🧪 *排班通知測試*\n\n`;
    message += `今日值班人員: *${todaySchedule.staff.name}*\n\n`;
    message += `請完成機房檢核清單。\n\n`;
    message += `\n請點擊下方連結開始檢核:\n`;
    message += `[檢核清單連結](${checklistUrl})\n\n`;
    message += `發送時間: ${timeStr}`;
    
    const success = await sendTelegramNotification(message, config);
    
    return {
      success: success,
      message: success ? '測試通知已發送' : '發送失敗，請檢查 Telegram 配置'
    };
  } catch (error) {
    return { success: false, message: '測試失敗: ' + error.message };
  }
}

// ==========================================
// 獲取今日排班 (統一時間邏輯)
// ==========================================
async function getTodaySchedule(env) {
  try {
    const now = new Date();
    // 强制轉為台北日期字符串
    const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const todayStr = taipeiTime.toISOString().split('T')[0];
    
    // 使用核心函數計算，邏輯統一
    const staff = await calculateScheduledStaff(now, env);
    
    // 輔助狀態判斷 (僅用於前端顯示 "休息" 还是 "排除")
    const scheduleConfig = await DB.getScheduleConfig(env);
    const exclusions = await getAllExclusions(env);
    const targetDayObj = new Date(todayStr + 'T00:00:00Z');
    const todayDay = targetDayObj.getUTCDay();
    
    const isExcluded = exclusions.some(e => e.isActive !== false && e.date === todayStr);
    const isWorkDay = scheduleConfig.workDays.map(d => parseInt(d)).includes(todayDay);

    return {
      isWorkDay,
      isExcluded,
      staff: staff // 如果是非工作日，staff 自動為 null
    };
  } catch (error) {
    console.error('獲取今日排班失敗:', error);
    return { isWorkDay: false, isExcluded: false, staff: null };
  }
}

// ==========================================
// 獲取排班預覽 (修复預覽不顯示名字的問題)
// ==========================================
async function getSchedulePreview(env) {
  try {
    const scheduleConfig = await DB.getScheduleConfig(env);
    const exclusions = await getAllExclusions(env);
    const activeExclusions = exclusions.filter(e => e.isActive !== false);
    
    const preview = [];
    
    // 1. 獲取台北時間的"今天"
    const now = new Date();
    const taipeiNow = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    
    // 2. 計算本週日 (Start of Week)
    // getDay: 0是週日。如果今天是週二(2)，我们要减去2天回到週日
    const dayOfWeek = taipeiNow.getDay(); 
    const startOfWeek = new Date(taipeiNow);
    startOfWeek.setDate(taipeiNow.getDate() - dayOfWeek);
    // 重置時間到 00:00:00 避免偏移
    startOfWeek.setHours(0,0,0,0);

    // 3. 循環 7 天
    for (let i = 0; i < 7; i++) {
      const loopDate = new Date(startOfWeek);
      loopDate.setDate(startOfWeek.getDate() + i);
      
      // 轉回 UTC 格式的 ISO String 用於比對
      // 注意：loopDate 是基於台北時間構造的 Date 對象
      // 这里我们要獲取它代表的那个 YYYY-MM-DD
      const dateStr = loopDate.toISOString().split('T')[0];
      const dayIndex = loopDate.getDay();
      
      const isWorkDay = scheduleConfig.workDays.map(d => parseInt(d)).includes(dayIndex);
      const isExcluded = activeExclusions.some(e => e.date === dateStr);
      
      let staffName = '';
      
      if (isWorkDay && !isExcluded) {
        // 傳入 loopDate 之前，减去8小時offset？
        // 不，calculateScheduledStaff 内部会 +8。
        // 因為 loopDate 已经是台北時間的 0 點。
        // 為了配合 calculateScheduledStaff 的邏輯 (Input UTC -> +8 -> Taipei)，
        // 我们需要傳入一个 "UTC時間"，使得 "UTC + 8 = loopDate"。
        // 所以傳入 loopDate.getTime() - 8小時
        const queryDate = new Date(loopDate.getTime() - 8 * 60 * 60 * 1000);
        
        const scheduledStaff = await calculateScheduledStaff(queryDate, env);
        staffName = scheduledStaff ? scheduledStaff.name : '';
      }
      
      preview.push({
        day: dayIndex,
        date: dateStr,
        isWorkDay,
        isExcluded,
        staff: staffName
      });
    }
    
    return preview;
  } catch (error) {
    console.error('生成排班預覽失敗:', error);
    return [];
  }
}


// 通知函數
async function sendTelegramNotification(message, config) {
  try {
    if (!config.TG_BOT_TOKEN || !config.TG_CHAT_ID) {
      console.error('[Telegram] 通知未配置，缺少Bot Token或Chat ID');
      return false;
    }

    const url = 'https://api.telegram.org/bot' + config.TG_BOT_TOKEN + '/sendMessage';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: config.TG_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('[Telegram] 發送通知失敗:', error);
    return false;
  }
}


// 定時檢查函數 - 修复版本
// 修改 checkExpiringSubscriptions 函數，使用台北時間
async function checkExpiringSubscriptions(env) {
  try {
    console.log('[定時任務] 開始檢查即將到期的訂閱: ' + new Date().toISOString());

    const subscriptions = await getAllSubscriptions(env);
    const config = await getConfig(env);
    
    // 使用台北時間
    const now = new Date();
    const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const expiringSubscriptions = [];
    const updatedSubscriptions = [];
    let hasUpdates = false;

    // --- 核心計算邏輯 (保持不變) ---
    for (const subscription of subscriptions) {
      if (subscription.isActive === false) {
        continue;
      }

      const expiryDate = new Date(subscription.expiryDate);
      // 使用台北時間計算天數差
      const daysDiff = Math.ceil((expiryDate.getTime() - taipeiTime.getTime()) / (1000 * 60 * 60 * 24));

      const reminderDays = subscription.reminderDays !== undefined ? subscription.reminderDays : 7;
      let shouldRemind = false;

      if (reminderDays === 0) {
        shouldRemind = daysDiff === 0;
      } else {
        shouldRemind = daysDiff >= 0 && daysDiff <= reminderDays;
      }

      // 自動續訂邏輯
      if (daysDiff < 0 && subscription.periodValue && subscription.periodUnit && subscription.autoRenew !== false) {
        const newExpiryDate = new Date(expiryDate);

        if (subscription.periodUnit === 'day') {
          newExpiryDate.setDate(expiryDate.getDate() + subscription.periodValue);
        } else if (subscription.periodUnit === 'month') {
          newExpiryDate.setMonth(expiryDate.getMonth() + subscription.periodValue);
        } else if (subscription.periodUnit === 'year') {
          newExpiryDate.setFullYear(expiryDate.getFullYear() + subscription.periodValue);
        }

        // 如果加上一週期還是過期，持續累加直到未來
        while (newExpiryDate.getTime() < taipeiTime.getTime()) {
          if (subscription.periodUnit === 'day') {
            newExpiryDate.setDate(newExpiryDate.getDate() + subscription.periodValue);
          } else if (subscription.periodUnit === 'month') {
            newExpiryDate.setMonth(newExpiryDate.getMonth() + subscription.periodValue);
          } else if (subscription.periodUnit === 'year') {
            newExpiryDate.setFullYear(newExpiryDate.getFullYear() + subscription.periodValue);
          }
        }

        const updatedSubscription = { ...subscription, expiryDate: newExpiryDate.toISOString() };
        updatedSubscriptions.push(updatedSubscription);
        hasUpdates = true;

        // 續訂後重新計算是否需要提醒
        const newDaysDiff = Math.ceil((newExpiryDate.getTime() - taipeiTime.getTime()) / (1000 * 60 * 60 * 24));

        let shouldRemindAfterRenewal = false;
        if (reminderDays === 0) {
          shouldRemindAfterRenewal = newDaysDiff === 0;
        } else {
          shouldRemindAfterRenewal = newDaysDiff >= 0 && newDaysDiff <= reminderDays;
        }

        if (shouldRemindAfterRenewal) {
          expiringSubscriptions.push({
            ...updatedSubscription,
            daysRemaining: newDaysDiff,
            justRenewed: true // 標記：剛自動續訂過
          });
        }
      } else if (daysDiff < 0 && subscription.autoRenew === false) {
        // 過期且不自動續訂
        expiringSubscriptions.push({
          ...subscription,
          daysRemaining: daysDiff
        });
      } else if (shouldRemind) {
        // 正常提醒期內
        expiringSubscriptions.push({
          ...subscription,
          daysRemaining: daysDiff
        });
      }
    }

    // 更新資料庫
    if (hasUpdates) {
      const mergedSubscriptions = subscriptions.map(sub => {
        const updated = updatedSubscriptions.find(u => u.id === sub.id);
        return updated || sub;
      });
      await env.BIRC_SUBSCRIPTIONS_KV.put('subscriptions', JSON.stringify(mergedSubscriptions));
    }

    // --- 發送通知 (UI 優化版) ---
    if (expiringSubscriptions.length > 0) {
      // 排序：先顯示過期的，再顯示即將到期的
      expiringSubscriptions.sort((a, b) => a.daysRemaining - b.daysRemaining);

      // 格式化當前時間
      const timeStr = taipeiTime.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '');

      let message = `🔔 *訂閱到期與續期提醒*\n\n`;
      message += `🕒 *檢查時間:* ${timeStr}\n`;
      message += `📊 *待關注項目:* ${expiringSubscriptions.length} 項\n\n`;
      message += `━━━━━━━━━━━━━━\n`;

      for (const sub of expiringSubscriptions) {
        // 1. 狀態圖標與文字
        let statusIcon = '📅';
        let statusText = '';
        
        if (sub.daysRemaining < 0) {
            statusIcon = '🚨';
            statusText = `*已過期 ${Math.abs(sub.daysRemaining)} 天*`;
        } else if (sub.daysRemaining === 0) {
            statusIcon = '⚠️';
            statusText = `*今天到期*`;
        } else {
            statusIcon = '⏳';
            statusText = `剩餘 ${sub.daysRemaining} 天`;
        }

        // 2. 標題行
        message += `${statusIcon} *${sub.name}*\n`;

        // 3. 詳細資訊 (日期與狀態)
        const expiryDateStr = new Date(sub.expiryDate).toLocaleDateString();
        message += `   📅 期限: ${expiryDateStr} (${statusText})\n`;
        
        // 4. 類型與續訂設置
        const typeStr = sub.customType || '其他';
        let renewStr = sub.autoRenew ? '🔄 自動續訂' : '👤 手動續訂';
        if (sub.justRenewed) renewStr += ' (剛執行)';
        
        message += `   🏷️ 資訊: ${typeStr} | ${renewStr}\n`;

        // 5. 備註 (如果有)
        if (sub.notes) {
          message += `   📝 \`${sub.notes}\`\n`;
        }
        
        message += `\n`; // 項目間空一行
      }

      await sendTelegramNotification(message, config);

    } else {
      console.log('[定時任務] 没有需要提醒的訂閱');
    }

    console.log('[定時任務] 檢查完成');
  } catch (error) {
    console.error('[定時任務] 檢查即將到期的訂閱失敗:', error);
  }
}


function getCookieValue(cookieString, key) {
  if (!cookieString) return null;

  const match = cookieString.match(new RegExp('(^| )' + key + '=([^;]+)'));
  return match ? match[2] : null;
}


const CryptoJS = {
  HmacSHA256: function(message, key) {
    const keyData = new TextEncoder().encode(key);
    const messageData = new TextEncoder().encode(message);

    return Promise.resolve().then(() => {
      return crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: {name: "SHA-256"} },
        false,
        ["sign"]
      );
    }).then(cryptoKey => {
      return crypto.subtle.sign(
        "HMAC",
        cryptoKey,
        messageData
      );
    }).then(buffer => {
      const hashArray = Array.from(new Uint8Array(buffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    });
  }
};

// ==========================================
// 用戶註冊和登入處理函數 (已更新為使用密碼雜湊)
// ==========================================
async function handleRegister(body, env) {
  try {
    const { username, password, inviteCode } = body;
    
    if (!username || !password) {
      return new Response(JSON.stringify({success: false, message: '用戶名和密碼不能為空'}), {
        headers: {'Content-Type': 'application/json'}
      });
    }
    
    // 雜湊密碼
    const passwordHash = await hashPassword(password);
    const role = inviteCode === 'admin888' ? 'admin' : 'user';
    
    const users = await DB.getUsers(env);
    
    // 檢查用戶是否已存在
    if (users.find(u => u.username === username)) {
      return new Response(JSON.stringify({success: false, message: '用戶名已存在'}), {
        headers: {'Content-Type': 'application/json'}
      });
    }
    
    // 創建用戶對象 (不存儲原始密碼)
    const newUser = {
      username,
      passwordHash,  // 存儲雜湊後的密碼
      role,
      createdAt: new Date().toISOString()
    };
    
    // 保存用戶
    users.push(newUser);
    await env.BIRC_SUBSCRIPTIONS_KV.put('users', JSON.stringify(users));
    
    return new Response(JSON.stringify({ success: true }), {
      headers: {'Content-Type': 'application/json'}
    });
  } catch (error) {
    console.error('註冊錯誤:', error);
    return new Response(JSON.stringify({ success: false, message: '註冊失敗' }), {
      headers: {'Content-Type': 'application/json'}
    });
  }
}

async function handleLogin(body, env) {
  try {
    const { username, password } = body;
    const config = await getConfig(env);
    
    // 1. 先檢查是否是配置的管理員帳號
    if (username === config.ADMIN_USERNAME) {
      // 這裡仍然使用明文比較配置密碼
      if (password === config.ADMIN_PASSWORD) {
        const token = await generateJWT({ username: username, role: 'admin' }, config.JWT_SECRET);
        return new Response(JSON.stringify({ success: true }), {
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=86400`
          }
        });
      }
    }
    
    // 2. 檢查普通用戶
    const users = await DB.getUsers(env);
    const target = users.find(u => u.username === username);
    
    if (target) {
      // 驗證雜湊密碼
      const passwordValid = await verifyPassword(password, target.passwordHash);
      
      if (passwordValid) {
        const token = await generateJWT({ username: target.username, role: target.role }, config.JWT_SECRET);
        return new Response(JSON.stringify({ success: true }), {
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=86400`
          }
        });
      }
    }
    
    return new Response(JSON.stringify({ success: false, message: '用戶名或密碼錯誤' }), {
      status: 401,
      headers: {'Content-Type': 'application/json'}
    });
  } catch (error) {
    console.error('登入錯誤:', error);
    return new Response(JSON.stringify({ success: false, message: '登入失敗' }), {
      status: 500,
      headers: {'Content-Type': 'application/json'}
    });
  }
}

// ==========================================
// 3. API 业務邏輯對象 (api)
// ==========================================
const api = {
  async handleRequest(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.slice(4); 
    const method = request.method;
    const config = await getConfig(env);

    // 1. 控制台統計數據 (修復計數邏輯)
    if (path === '/dashboard/stats' && method === 'GET') {
      try {
        const subscriptions = await getAllSubscriptions(env);
        const staff = await getAllStaff(env);
        const exclusions = await getAllExclusions(env);
        
        const now = new Date();
        const taipeiOffset = 8 * 60 * 60 * 1000;
        const todayStr = new Date(now.getTime() + taipeiOffset).toISOString().split('T')[0];

        // 1. 計算訂閱數據
        const activeSubscriptions = subscriptions.filter(sub => sub.isActive !== false);
        const expiringList = activeSubscriptions
          .map(sub => {
             const expiryDate = new Date(sub.expiryDate);
             const daysDiff = Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
             return { ...sub, daysDiff };
          })
          .filter(sub => sub.daysDiff <= (sub.reminderDays || 30)) // 只保留進入提醒期的
          .sort((a, b) => a.daysDiff - b.daysDiff)
          .slice(0, 5);

        // 2. 計算排除日期 (修正：過濾掉今天之前的日期)
        const activeFutureExclusions = exclusions.filter(e => 
            e.isActive !== false && e.date >= todayStr
        );
        
        const recentExclusions = activeFutureExclusions
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .slice(0, 5);

        // 3. 獲取排班
        const todaySchedule = await getTodaySchedule(env);
        const todayStaff = todaySchedule.staff ? todaySchedule.staff.name : '無';

        return new Response(JSON.stringify({
          // 修正：返回總活躍訂閱數
          totalSubscriptions: activeSubscriptions.length,
          expiringSubscriptions: expiringList.length,
          expiringList: expiringList,
          
          totalStaff: staff.filter(s => s.isActive !== false).length,
          todayStaff: todayStaff,
          
          // 修正：只返回有效的未來排除日期數量
          activeFutureExclusions: activeFutureExclusions.length,
          totalExclusions: activeFutureExclusions.length, 
          recentExclusions: recentExclusions,
          
          scheduleData: todaySchedule 
        }), { headers: { 'Content-Type': 'application/json' } });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // Config
    if (path === '/config') {
      if (method === 'GET') {
        const { JWT_SECRET, ADMIN_PASSWORD, ...safeConfig } = config;
        return new Response(JSON.stringify(safeConfig), { headers: { 'Content-Type': 'application/json' } });
      }
      if (method === 'POST') {
        try {
          const newConfig = await request.json();
          const updatedConfig = {
            ...config,
            ADMIN_USERNAME: newConfig.ADMIN_USERNAME || config.ADMIN_USERNAME,
            TG_BOT_TOKEN: newConfig.TG_BOT_TOKEN || '',
            TG_CHAT_ID: newConfig.TG_CHAT_ID || ''
          };
          if (newConfig.ADMIN_PASSWORD) updatedConfig.ADMIN_PASSWORD = newConfig.ADMIN_PASSWORD;
          await env.BIRC_SUBSCRIPTIONS_KV.put('config', JSON.stringify(updatedConfig));
          return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
        } catch (error) {
          return new Response(JSON.stringify({ success: false, message: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }
      }
    }

    // Subscriptions
    if (path === '/subscriptions') {
      if (method === 'GET') {
        const subscriptions = await getAllSubscriptions(env);
        const expiringOnly = url.searchParams.get('expiring') === 'true';
        let result = subscriptions;
        if (expiringOnly) {
          const now = new Date();
          result = subscriptions.filter(sub => {
            if (sub.isActive === false) return false;
            const expiryDate = new Date(sub.expiryDate);
            const daysDiff = Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            return daysDiff <= (sub.reminderDays || 7) && daysDiff >= 0;
          });
        }
        return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
      }
      if (method === 'POST') {
        const result = await createSubscription(await request.json(), env);
        return new Response(JSON.stringify(result), { status: result.success ? 201 : 400, headers: { 'Content-Type': 'application/json' } });
      }
    }
    if (path.startsWith('/subscriptions/')) {
      const parts = path.split('/');
      const id = parts[2];
      if (parts[3] === 'toggle-status' && method === 'POST') return new Response(JSON.stringify(await toggleSubscriptionStatus(id, (await request.json()).isActive, env)), { headers: { 'Content-Type': 'application/json' } });
      if (parts[3] === 'test-notify' && method === 'POST') return new Response(JSON.stringify(await testSingleSubscriptionNotification(id, env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'GET') return new Response(JSON.stringify(await getSubscription(id, env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'PUT') return new Response(JSON.stringify(await updateSubscription(id, await request.json(), env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'DELETE') return new Response(JSON.stringify(await deleteSubscription(id, env)), { headers: { 'Content-Type': 'application/json' } });
    }

    // Staff
    if (path === '/staff') {
      if (method === 'GET') return new Response(JSON.stringify(await getAllStaff(env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'POST') return new Response(JSON.stringify(await createStaff(await request.json(), env)), { status: 201, headers: { 'Content-Type': 'application/json' } });
    }
    if (path.startsWith('/staff/')) {
      const parts = path.split('/');
      const id = parts[2];
      if (parts[3] === 'toggle-status' && method === 'POST') return new Response(JSON.stringify(await toggleStaffStatus(id, (await request.json()).isActive, env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'GET') return new Response(JSON.stringify(await getStaff(id, env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'PUT') return new Response(JSON.stringify(await updateStaff(id, await request.json(), env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'DELETE') return new Response(JSON.stringify(await deleteStaff(id, env)), { headers: { 'Content-Type': 'application/json' } });
    }

    // Schedule Config & Preview
    if (path === '/schedule/config') {
      if (method === 'GET') return new Response(JSON.stringify(await getScheduleConfig(env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'POST') return new Response(JSON.stringify(await updateScheduleConfig(await request.json(), env)), { headers: { 'Content-Type': 'application/json' } });
    }
    if (path === '/schedule/preview' && method === 'GET') return new Response(JSON.stringify(await getSchedulePreview(env)), { headers: { 'Content-Type': 'application/json' } });
    if (path === '/schedule/today' && method === 'GET') return new Response(JSON.stringify(await getTodaySchedule(env)), { headers: { 'Content-Type': 'application/json' } });
    if (path === '/schedule/test-notify' && method === 'POST') return new Response(JSON.stringify(await testScheduleNotification(env)), { headers: { 'Content-Type': 'application/json' } });

    // Exclusions
    if (path === '/exclusions') {
      if (method === 'GET') {
        const exclusions = await getAllExclusions(env);
        if (url.searchParams.get('recent') === 'true') return new Response(JSON.stringify(exclusions.slice(0, 5)), { headers: { 'Content-Type': 'application/json' } });
        return new Response(JSON.stringify(exclusions), { headers: { 'Content-Type': 'application/json' } });
      }
      if (method === 'POST') return new Response(JSON.stringify(await createExclusion(await request.json(), env)), { status: 201, headers: { 'Content-Type': 'application/json' } });
    }
    if (path.startsWith('/exclusions/')) {
        const parts = path.split('/');
        const id = parts[2];
        if (parts[3] === 'toggle-status') return new Response(JSON.stringify(await toggleExclusionStatus(id, (await request.json()).isActive, env)), { headers: { 'Content-Type': 'application/json' } });
        if (method === 'GET') return new Response(JSON.stringify(await getExclusion(id, env)), { headers: { 'Content-Type': 'application/json' } });
        if (method === 'PUT') return new Response(JSON.stringify(await updateExclusion(id, await request.json(), env)), { headers: { 'Content-Type': 'application/json' } });
        if (method === 'DELETE') return new Response(JSON.stringify(await deleteExclusion(id, env)), { headers: { 'Content-Type': 'application/json' } });
    }

    // Checklists
    if (path === '/checklists/today' && method === 'GET') return new Response(JSON.stringify(await getTodayChecklist(env)), { headers: { 'Content-Type': 'application/json' } });
    if (path.startsWith('/checklists/')) {
      const parts = path.split('/');
      const checklistId = parts[2];
      if (parts[3] === 'items' && parts[4] && method === 'PUT') {
        const body = await request.json();
        return new Response(JSON.stringify(await updateChecklistItem(checklistId, parseInt(parts[4]), body.status, body.notes, env)), { headers: { 'Content-Type': 'application/json' } });
      }
      if (parts[3] === 'submit' && method === 'POST') return new Response(JSON.stringify(await submitChecklist(checklistId, env)), { headers: { 'Content-Type': 'application/json' } });
      if (parts[3] === 'reset' && method === 'POST') return new Response(JSON.stringify(await resetChecklist(checklistId, env)), { headers: { 'Content-Type': 'application/json' } });
      if (parts[3] === 'report' && method === 'POST') return new Response(JSON.stringify(await updateOverallChecklist(checklistId, (await request.json()).notes, env)), { headers: { 'Content-Type': 'application/json' } });
      if (method === 'GET') {
         const cl = await getChecklist(checklistId, env);
         return cl ? new Response(JSON.stringify({success:true, checklist:cl}), { headers: {'Content-Type': 'application/json'}}) : new Response(JSON.stringify({success:false}), {status:404});
      }
    }

    // 7.5 檢核模板管理 (新增)
    if (path === '/checklist/template') {
      if (method === 'GET') {
          return new Response(JSON.stringify(await DB.getChecklistTemplate(env)), { headers: { 'Content-Type': 'application/json' } });
      }
      if (method === 'POST') {
          // 保存模板
          const newTemplate = await request.json();
          if (!Array.isArray(newTemplate)) return new Response(JSON.stringify({success:false, message:"格式錯誤"}), {status:400});
          await DB.saveChecklistTemplate(env, newTemplate);
          return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
      }
    }

    // Test Notification (Telegram)
    if (path === '/test-notification' && method === 'POST') {
      try {
        const body = await request.json();
        let success = false;
        if (body.type === 'telegram') {
          const testConfig = { ...config, TG_BOT_TOKEN: body.TG_BOT_TOKEN, TG_CHAT_ID: body.TG_CHAT_ID };
          success = await sendTelegramNotification('*測試通知*\n系統配置測試成功', testConfig);
        }
        return new Response(JSON.stringify({ success }), { headers: { 'Content-Type': 'application/json' } });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
      }
    }

    return new Response(JSON.stringify({ success: false, message: 'API Not Found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  }
  
};

// ==========================================
// 2. 數據庫輔助對象 (DB) - 已增強檢核模板功能並更新為使用密碼雜湊
// ==========================================
const DB = {
  // 用戶管理 (改為使用密碼雜湊)
  async getUsers(env) {
    if (!env.BIRC_SUBSCRIPTIONS_KV) throw new Error("KV未綁定");
    const d = await env.BIRC_SUBSCRIPTIONS_KV.get('users');
    return d ? JSON.parse(d) : [];
  },
  
  async addUser(env, user) {
    const users = await this.getUsers(env);
    if(users.find(u => u.username === user.username)) throw new Error('用戶已存在');
    
    // 確保新用戶有密碼雜湊字段
    if (!user.passwordHash) {
      throw new Error('用戶必須有密碼雜湊');
    }
    
    users.push(user);
    await env.BIRC_SUBSCRIPTIONS_KV.put('users', JSON.stringify(users));
  },

  // 更新用戶函數 (用於密碼重置等)
  async updateUser(env, username, updates) {
    const users = await this.getUsers(env);
    const index = users.findIndex(u => u.username === username);
    
    if (index === -1) throw new Error('用戶不存在');
    
    // 如果更新密碼，需要雜湊
    if (updates.password) {
      updates.passwordHash = await hashPassword(updates.password);
      delete updates.password;
    }
    
    users[index] = { ...users[index], ...updates };
    await env.BIRC_SUBSCRIPTIONS_KV.put('users', JSON.stringify(users));
    
    return users[index];
  },

  // [新增] 歷史存檔功能：將完成的檢核單存入 history_logs
  async addHistory(env, checklistItem) {
      let list = await this.getHistory(env);
      const snapshot = {
          ...checklistItem,
          savedAt: new Date().toISOString() // 記錄存檔時間
      };
      list.unshift(snapshot);
      if(list.length > 100) list = list.slice(0, 100); // 限制數量
      await env.BIRC_SUBSCRIPTIONS_KV.put('history_logs', JSON.stringify(list));
  },

  // [修改] 讀取歷史改為讀取 history_logs，不受當日表單重置影響
  async getHistory(env) {
      const data = await env.BIRC_SUBSCRIPTIONS_KV.get('history_logs');
      return data ? JSON.parse(data) : [];
  },

  // 排班配置
  async getScheduleConfig(env) {
      const data = await env.BIRC_SUBSCRIPTIONS_KV.get('schedule_config');
      return data ? JSON.parse(data) : { workDays: [1,2,3,4,5], notificationTime: '08:00', currentPointer: 0 };
  },

  // 模板管理
  async getChecklistTemplate(env) {
      const data = await env.BIRC_SUBSCRIPTIONS_KV.get('checklist_template');
      return data ? JSON.parse(data) : [
          { id: 1, title: "檢查空調溫度 (22-24°C)", description: "確認機房空調運作正常" },
          { id: 2, title: "檢查 UPS 電池狀態", description: "確認面板無異常燈號" },
          { id: 3, title: "檢查伺服器狀態燈", description: "確認無橘燈/紅燈告警" },
          { id: 4, title: "檢查網路連線狀態", description: "確認核心交換機燈號" },
          { id: 5, title: "檢查機房濕度 (40-60%)", description: "查看環境監控數值" }
      ];
  },
  async saveChecklistTemplate(env, template) {
      await env.BIRC_SUBSCRIPTIONS_KV.put('checklist_template', JSON.stringify(template));
      // 熱更新今日清單邏輯
      try {
          const now = new Date();
          const taipeiTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
          const todayStr = taipeiTime.toISOString().split('T')[0];
          const checklistId = await env.BIRC_SUBSCRIPTIONS_KV.get(`checklist_by_date:${todayStr}`);
          if (checklistId) {
              const checklistData = await env.BIRC_SUBSCRIPTIONS_KV.get(`checklist:${checklistId}`);
              if (checklistData) {
                  const checklist = JSON.parse(checklistData);
                  const newItems = template.map(tplItem => {
                      const existingItem = checklist.items.find(i => i.id === tplItem.id);
                      if (existingItem) {
                          return { ...tplItem, status: existingItem.status, notes: existingItem.notes, checkedAt: existingItem.checkedAt };
                      } else {
                          return { ...tplItem, status: 'pending', notes: '', checkedAt: null };
                      }
                  });
                  checklist.items = newItems;
                  await env.BIRC_SUBSCRIPTIONS_KV.put(`checklist:${checklistId}`, JSON.stringify(checklist));
              }
          }
      } catch (e) { console.error(e); }
  }
};

// ==========================================
// 4. 主入口 (Export Default)
// ==========================================
export default {
  async fetch(request, env, ctx) {
    try {
        const url = new URL(request.url);
        const path = url.pathname;
        
        // 静態頁面
        if (path === '/' || path === '/login') return new Response(loginPage, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
        if (path === '/register') return new Response(registerPage, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });

        // 鑒權
        const token = getCookieValue(request.headers.get('Cookie'), 'token');
        const config = await getConfig(env);
        let user = token ? await verifyJWT(token, config.JWT_SECRET) : null;

        // KV 二次核查 (防止已删除用户繼續訪問)
        if (user) {
            const currentUsers = await DB.getUsers(env);
            const dbUser = currentUsers.find(u => u.username === user.username);
            const isConfigAdmin = (user.username === config.ADMIN_USERNAME);
            if (!dbUser && !isConfigAdmin) {
                user = null; // 用户已不存在
            } else if (dbUser) {
                user.role = dbUser.role; // 更新最新角色
            }
        }

        // 未登錄攔截
        if (!user && !path.startsWith('/api/login') && !path.startsWith('/api/register') && !path.startsWith('/telegram-webhook')) {
           if (path.startsWith('/api')) return new Response(JSON.stringify({success:false, message:'授權失效'}), {status:401, headers:{'Content-Type':'application/json'}});
           return new Response(null, { status: 302, headers: { 'Location': '/', 'Set-Cookie': 'token=; Max-Age=0' } });
        }

        // 頁面渲染
        if (!path.startsWith('/api')) {
            const role = user.role || 'user';
            
            if (path === '/dashboard') return new Response(dashboardPage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
            if (path === '/checklist/history') return new Response(historyPage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
            
            // 權限頁面保护
            if (role !== 'admin' && (path.startsWith('/subscriptions') || path.startsWith('/schedule') || path.startsWith('/exclusions') || path.startsWith('/config'))) {
                return new Response("需要管理員權限", { status: 403, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
            }

            // 新增的路由
            if (path === '/checklist/manage') return new Response(checklistTemplatePage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
            
            // ... (原有的) ...
            if (path === '/checklist') return new Response(checklistPage.replace('<nav', getNavHtml('checklist', role) + '<div hidden'), { headers: { 'Content-Type': 'text/html; charset=utf-8' } }); 
            if (path === '/config') return new Response(configPage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });


            if (path === '/checklist') return new Response(checklistPage.replace('<nav', getNavHtml('checklist', role) + '<div hidden'), { headers: { 'Content-Type': 'text/html; charset=utf-8' } }); 
            if (path === '/subscriptions') return new Response(subscriptionsPage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
            if (path === '/schedule') return new Response(schedulePage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
            if (path === '/exclusions') return new Response(exclusionsPage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
            if (path === '/config') return new Response(configPage(role), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
        }

        // 特殊 API 處理 (Login/Register/History/Logout)
        if (path === '/api/login' && request.method === 'POST') {
            const body = await request.json();
            return await handleLogin(body, env);
        }

        if (path === '/api/register' && request.method === 'POST') {
            const body = await request.json();
            return await handleRegister(body, env);
        }

        if (path === '/api/logout') {
            return new Response(null, { status: 302, headers: { 'Location': '/', 'Set-Cookie': 'token=; HttpOnly; Path=/; Max-Age=0' } });
        }

        if (path === '/api/checklists/history') {
            const list = await DB.getHistory(env);
            return new Response(JSON.stringify(list), { headers: { 'Content-Type': 'application/json' } });
        }

        // 业務 API 權限攔截
        const adminAPIs = ['/api/subscriptions', '/api/staff', '/api/schedule/config', '/api/exclusions', '/api/config'];
        if (user && user.role !== 'admin' && adminAPIs.some(p => path.startsWith(p)) && request.method !== 'GET') {
            return new Response(JSON.stringify({ success: false, message: '權限不足' }), { status: 403, headers: {'Content-Type': 'application/json'} });
        }

        // 轉交业務 API 處理
        return api.handleRequest(request, env, ctx);

    } catch (e) {
        // 捕獲所有崩潰，返回 JSON 錯誤而不是 500 頁面，防止前端顯示"網路錯誤"
        return new Response(JSON.stringify({ success: false, message: e.message, stack: e.stack }), { status: 500, headers: {'Content-Type': 'application/json'} });
    }
  },

  async scheduled(event, env, ctx) {
    console.log('[Workers] 定時任務:', new Date().toISOString());
    try {
      const scheduleConfig = await DB.getScheduleConfig(env);
      const now = new Date();
      const localTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      const currentTime = `${localTime.getHours().toString().padStart(2, '0')}:${localTime.getMinutes().toString().padStart(2, '0')}`;
      
      if (currentTime === scheduleConfig.notificationTime) {
        await sendScheduleNotification(env);
      }
      await checkExpiringSubscriptions(env);
    } catch (error) {
      console.error('[定時任務] 失敗:', error);
    }
  }
};