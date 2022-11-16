const { odd, even } = require("./var");
//하나를 내보냈을 때는 이름 바꿔서 받을 수 있음
const checkNumber = require("./func");

console.log(checkNumber(5));

const path = require("path");
//현재 디렉토리 확인
console.log(__dirname);
//현재 디렉토리 내의 public 디렉토리의 경로
console.log(path.join(__dirname, "public"));

const url = require("url");
const addr = "https://www.naver.com/login?id=ggangpae1";
//url분해
const p = url.parse(addr);
//pathname에는 서버 url을 제외한 경로를 저장하고 있고 query는 query string을 저장하고 있음
console.log(p);

//addr에서 파라미터 부분만 가져오기
//searchParam 속성을 호출하면 파라미터 부분에 해당하는 객체를 리턴
const address = new URL("https://www.naver.com/login?id=ggangpae1");
console.log(addr.searchParams);
//id의 값만 추출하기
console.log(address.searchParams.get("id"));
