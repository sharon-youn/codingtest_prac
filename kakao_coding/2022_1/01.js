//1. 신고 결과 받기
//https://school.programmers.co.kr/learn/courses/30/lessons/92334
// 풀이
//https://velog.io/@dnjsdud2257/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%A0%EA%B3%A0-%EA%B2%B0%EA%B3%BC-%EB%B0%9B%EA%B8%B0-JavaScript


// 입력값
// id_list: 이용자의 id가 담긴 문자열 배열
// repoort: 각 이용자가 신고한 이용자의 ID가 담김 문자열 배열
// k: 정지 기준 신고 횟수 (포함)
// 출력값
// 각 유저별 처리 결과 메일을 받은 횟수를 담은 배열
// 풀이과정
// 신고를 당한 유저의 신고 수, 신고한 유저의 id 알아야 한다.
// 신고 당한 유저의 id를 key로 하고 신고한 유저의 id를 배열로 저장하는 객체를 만들어서 문제를 해결했다.

// 문제 예시 1번 객체
// key: 신고 당한 유저의 id
// value: 신고를 한 유저의 id 배열

// const report_list = {
//   muzi: [apeach]

//   frodo: [muzi, apeach] - 정지

//   apeach: []

//   neo: [frodo, muzi] - 정지
// }
function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0)
    // answer 배열을 id_list 크기만큼 할당하고 fill 함수로 0으로 초기화
    const report_list = {}

    id_list.map((user) => {report_list[user] = []})
    //report_list 객체에 key는 user의 Id값을 value는 신고한 사람을 담기 위한 빈 배열 추가
    report.map((user)=> {
        // report의 값이 ["muzi frodo" ,...]와같이
        // 신고한id 신고당한 id 띄어쓰기로 구분된 문자열을 split으로 자르기
        const [user_id, report_id] =user.split(' ')
        // 배열에 포함되어있지않으면 신고자 이름 추가
        if(!report_list[report_id].includes(user_id)) {
            report_list[report_id].push(user_id)
        }
    })
// report_list의 배열길이가 k값 이상이면 정지된 유저
// answer에 해당 유저를 신고한 유저가 받은 메일의 수를 +1 
    for(const key in report_list) {
        if(report_list[key].length >= k) {
            report_list[key].map((user)=> {
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
}