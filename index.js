// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "몽이와 함께 새해도 행복하게!" },
  { "number": 2, "message": "추운 12월, 사랑하는 이들에게 따뜻한 말을 전해보아요!" },
  { "number": 3, "message": "2023년이 가기 전, 소중한 사람에게 진심을 나눠요." },
  { "number": 4, "message": "그렇게 화려하지 않은 한 해 였다해도 괜찮아요." },
  { "number": 5, "message": "평범한 하루가 모여 새로운 미래를 만든답니다!" },
  { "number": 6, "message": "매일 행복할 순 없지만, 매일 행복한 일이 있을거에요." },
  { "number": 7, "message": "당신과 함께여서 행복해요." },
  { "number": 8, "message": "당신은 웃을 때 가장 아름다워요!" },
  { "number": 9, "message": "이곳에 당신이 찾아와줘서 기뻐요!" },
  { "number": 10, "message": "당신을 응원하고 있어요." },
  { "number": 11, "message": "당신을 기다리고 있었어요." },
  { "number": 12, "message": "행복은 가끔 모르는 사이에 찾아오기도 해요." },
  { "number": 13, "message": "우린 모두 행복할 자격이 있어요." },
  { "number": 14, "message": "우린 모두 정말 특별해요!" },
  { "number": 15, "message": "다른 사람의 행복을 함께 나눌 수 있는 내가 되길." },
  { "number": 16, "message": "괜찮아요, 내일은 더 잘할거에요." },
  { "number": 17, "message": "가끔은 쉬어가도 괜찮아요." },
  { "number": 18, "message": "세상에는 여러가지 형태의 행복이 있어요." },
  { "number": 19, "message": "행복은 가까운 곳에 있어요." },
  { "number": 20, "message": "오늘, 나 자신에게 칭찬해줬나요?" },
  { "number": 21, "message": "수고했어, 오늘도!" },
  { "number": 22, "message": "오늘도 행복할거야!라고 되뇌어보세요." },
  { "number": 23, "message": "행복해져라 몽둥이!" },
  { "number": 24, "message": "몽둥이 여러분 사랑해요!" }
];

