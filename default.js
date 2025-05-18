function initApp() {
    const app = document.getElementById('app');

    // 배경 설정
    document.body.style.background = 'linear-gradient(to bottom, #74ebd5, #acb6e5)';

    // 컨테이너 생성
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.background = 'rgba(255, 255, 255, 0.2)';
    container.style.padding = '20px';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    container.style.color = '#fff';

    // 제목 추가
    const title = document.createElement('h1');
    title.textContent = '동적 UI 엔진 (URL 로드)';
    container.appendChild(title);

    // 메시지 표시
    const message = document.createElement('p');
    message.id = 'message';
    message.textContent = '버튼을 눌러보세요!';
    container.appendChild(message);

    // 버튼 1: 메시지 변경
    const button1 = document.createElement('button');
    button1.textContent = '메시지 변경';
    button1.style.padding = '10px 20px';
    button1.style.margin = '10px';
    button1.style.fontSize = '16px';
    button1.style.cursor = 'pointer';
    button1.style.border = 'none';
    button1.style.borderRadius = '5px';
    button1.style.backgroundColor = '#6200ea';
    button1.style.color = 'white';
    button1.onmouseover = () => button1.style.backgroundColor = '#3700b3';
    button1.onmouseout = () => button1.style.backgroundColor = '#6200ea';
    button1.onclick = () => {
        message.textContent = 'URL에서 로드된 버튼!';
    };
    container.appendChild(button1);

    // 버튼 2: 배경색 변경
    const button2 = document.createElement('button');
    button2.textContent = '배경색 변경';
    button2.style.padding = '10px 20px';
    button2.style.margin = '10px';
    button2.style.fontSize = '16px';
    button2.style.cursor = 'pointer';
    button2.style.border = 'none';
    button2.style.borderRadius = '5px';
    button2.style.backgroundColor = '#6200ea';
    button2.style.color = 'white';
    button2.onmouseover = () => button2.style.backgroundColor = '#3700b3';
    button2.onmouseout = () => button2.style.backgroundColor = '#6200ea';
    button2.onclick = () => {
        document.body.style.background = `linear-gradient(to bottom, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`;
    };
    container.appendChild(button2);

    // 컨테이너를 앱에 추가
    app.appendChild(container);
}
