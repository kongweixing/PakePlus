// 注入应用信息
window.addEventListener('DOMContentLoaded', () => {
    const APP_NAME = '{{APP_NAME}}';
    const APP_VERSION = '{{APP_VERSION}}';
    
    document.title = APP_NAME + APP_VERSION;
}); 