export interface LostPost {
    num:number;
    title:string;
    writer:string;
    image:string;
    contents:string;
    wtime:string;
}

export const allLostData: { [key: string]: LostPost[] } = {
  lost: [
    {
      num: 1,
      title: '고양이군단',
      writer: '김민수',
      image: '/img/cat-bg.webp',
      contents: '어제 오후 학생회관 근처에서 제가 돌보던 고양이군단이 한꺼번에 사라졌습니다. 혹시 단체로 이동하는 고양이 무리를 보신 분이 계신가요? 보신 분은 꼭 연락 부탁드립니다.',
      wtime: '2025-12-05'
    },
    {
      num: 2,
      title: '박쥐',
      writer: '이민영',
      image: '/img/bat.webp',
      contents: '키우던 애완용 박쥐가 창문 사이로 날아갔습니다. 밤에 주로 활동하는 녀석이라 찾기가 쉽지 않네요. 어두운 곳에서 검은색 날갯짓을 보셨다면 제보 기다리겠습니다.',
      wtime: '2025-12-08'
    },
    {
      num: 3,
      title: '고양이',
      writer: '최지연',
      image: '/img/kitt.jpg',
      contents: '도서관 뒤뜰에서 산책하던 중 하얀색 고양이를 놓쳤습니다. 목에 파란색 방울 목걸이를 하고 있고 사람을 잘 따르는 편이에요. 발견하신 분은 보호 부탁드립니다.',
      wtime: '2025-12-12'
    },
    {
      num: 4,
      title: '강아지',
      writer: '박수영',
      image: '/img/pup.jpg',
      contents: '공대 운동장에서 뛰어놀던 리트리버 강아지가 갑자기 사라졌습니다. 이름은 "멍멍이"고 부르면 꼬리를 흔들며 다가옵니다. 날씨가 추운데 걱정이 크네요.',
      wtime: '2025-12-14'
    },
    {
      num: 5,
      title: '레드판다',
      writer: '홍진수',
      image: '/img/redpan.jpg',
      contents: '동아리 방에서 키우던(?) 레드판다가 간식 봉지 소리를 듣고 밖으로 나간 것 같습니다. 꼬리가 아주 통통하고 귀여운 녀석이에요. 캠퍼스 내 산책로 근처를 잘 봐주세요.',
      wtime: '2025-12-17'
    },
    {
      num: 6,
      title: '핸드폰',
      writer: '안형진',
      image: '',
      contents: '학식 먹고 나오는 길에 아이폰 15 블랙 모델을 분실했습니다. 투명 케이스를 끼우고 있고 뒷면에 스티커가 붙어있어요. 중요한 연락처가 많으니 꼭 좀 찾아주세요.',
      wtime: '2025-12-18'
    }
  ],
  find: [
    {
      num: 1,
      title: '핸드폰',
      writer: '임유솔',
      image: '/img/found/phone.webp',
      contents: '중앙광장 벤치에서 아이폰을 습득했습니다. 잠금 화면은 풍경 사진이고 지금은 전원이 켜진 상태로 제가 보관 중입니다. 주인 되시는 분은 연락 주세요.',
      wtime: '2025-12-02'
    },
    {
      num: 2,
      title: '기타',
      writer: '정찬희',
      image: '/img/found/tele.webp',
      contents: '음악관 지하 연습실 복도에 검은색 소프트 케이스에 담긴 기타가 놓여 있었습니다. 주인을 기다리는 것 같아 우선 과사무실에 맡겨두었으니 찾아가세요.',
      wtime: '2025-12-07'
    },
    {
      num: 3,
      title: '지갑',
      writer: '지동욱',
      image: '/img/found/wallet.jpg',
      contents: '버스 정류장 바닥에서 갈색 가죽 지갑을 주웠습니다. 안에는 학생증과 약간의 현금이 들어있네요. 학생증 이름 확인 후 본인이라면 메세지 부탁드립니다.',
      wtime: '2025-12-11'
    },
    {
      num: 4,
      title: '농구공',
      writer: '김유나',
      image: '/img/found/ball.jpg',
      contents: '체육관 야외 코트에서 스팔딩 농구공 잃어버리신 분 계신가요? 수업 끝나고 혼자 굴러다니길래 일단 챙겨왔습니다. 공 상태 설명해 주시면 돌려드릴게요.',
      wtime: '2025-12-15'
    }
  ]
};