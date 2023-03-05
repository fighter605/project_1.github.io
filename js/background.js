const quotes =[{
    quote  : "성공은 결과가 아니라 과정이다. 성공은 미리 설정한 가치있는 목표를 점진적으로 실현해 가는 과정이다.",
    author : "폴 마이어",
},
{
    quote  : "성공해서 행복한 것이 아니라 행복해서 성공하는 것이다. 눈을 들어 하늘을 바라보는 사람에게는 닿을 수 없을 정도로 높은 곳이란 없다.",
    author : "A.J 스탠리 부인",
},
{
    quote  : "낮은 곳부터 시작하라. 가장 높은 곳에 올라가려면 가장 낮은 곳부터 시작하라.",
    author : "푸블릴리우스 시루스",
},
{
    quote  : "돈과 시간을 잘 관리하라. 사람의 일생은 돈과 시간을 쓰는 방법에 의하여 결정된다. 이 두가지 사용법을 잘못하여서는 결토 성공할 수 없다.",
    author : "다케우치 히토시",
},
{
    quote  : "추구하는 과정을 좋아하라. 당신이 추구하는 것을 얻는 것은 성공이지만 추구하면서 좋아하는 것은 행복이다.",
    author : "베스 사위",
},
{
    quote  : "자신이 하는 일을 좋아하라. 행복의 비밀은 자신이 좋아하는 일을 하는 것이 아니라 자신이 하는 일을 좋아하는 것이다.",
    author : "앤드류 매티스",
},
{
    quote  : "일, 사랑, 희망을 가져라. 행복의 조건은 어떤 일을 할 것, 어떤 사람을 사랑할 것, 어떤 일에 희망을 가질 것.",
    author : "칸트",
},
{
    quote  : "닫혀진 문을 보지 말고 열려 있는 문을 보라. 행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 우리는 닫혀진 문을 오랫동안 보기 때문에 열려 있는 문을 보지 못한다.",
    author : "헬렌 켈러",
},
{
    quote  : "지금, 여기, 함께 행복하라. 행복을 즐겨야 할 시간은 지금이다. 행복을 즐겨야 할 장소는 여기다.",
    author : "로버트 인젤손",
},
{
    quote  : "행복은 주어지는 것이 아니라 만드는 것이다. 행복하고 싶다면 오늘 행복을 결심하라.",
    author : "양광모",
}
];
const bg_image = ["img/background_1.jpg","img/background_2.jpg","img/background_3.jpg"] 
const ranNum = Math.floor(Math.random()* bg_image.length);

document.body.style.backgroundImage = "url("+bg_image[ranNum]+")";

const quotesDiv = document.querySelector("div.quotes");
const quotChildDiv1 = document.createElement("div");
const quotChildDiv2 = document.createElement("div");

quotesDiv.appendChild(quotChildDiv1);
quotesDiv.appendChild(quotChildDiv2);

const quotesRanNum = Math.floor(Math.random()* quotes.length);
quotChildDiv1.innerText = "\""+quotes[quotesRanNum].quote+"\"";
quotChildDiv2.innerText = quotes[quotesRanNum].author;

