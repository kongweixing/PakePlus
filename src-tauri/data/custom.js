// 注入应用信息
window.addEventListener('DOMContentLoaded', () => {
    const APP_NAME = '{{APP_NAME}}';
    const APP_VERSION = '{{APP_VERSION}}';
    
    const appInfo = {
        name: APP_NAME,
        version: APP_VERSION,
        isPakeApp: true
    };
    window.PAKEPLUS_APP = appInfo;
    
    创建通知元素
    const notificationDiv = document.createElement('div');
    notificationDiv.style.cssText = `
        position: fixed;
        top: 16px;
        left: 16px;
        background: linear-gradient(145deg, #42b883, #35495e);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 9999;
        opacity: 1;
        transition: opacity 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        user-select: none;
        pointer-events: auto;
    `;
    
    notificationDiv.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 4px;">
            ${appInfo.name}
        </div>
        <div style="font-size: 12px; opacity: 0.9;">
            版本 ${appInfo.version}
        </div>
    `;
    
    document.body.appendChild(notificationDiv);
    
    // 5秒后自动隐藏
    setTimeout(() => {
        notificationDiv.style.opacity = '0';
    }, 5000);
    
    // 点击显示/隐藏
    notificationDiv.addEventListener('click', () => {
        notificationDiv.style.opacity = notificationDiv.style.opacity === '0' ? '1' : '0';
    });
    
    // 分发就绪事件
    const event = new CustomEvent('pakeplusReady', { detail: appInfo });
    window.dispatchEvent(event);
    
    // 检查是否在 PakePlus 应用中运行
    window.isPakePlusApp = () => {
        return window.PAKEPLUS_APP && window.PAKEPLUS_APP.isPakeApp === true;
    };
    
    // 获取应用版本
    window.getPakePlusVersion = () => {
        return window.PAKEPLUS_APP ? window.PAKEPLUS_APP.version : null;
    };
    
    console.log('PakePlus App Info:', appInfo);
}); 