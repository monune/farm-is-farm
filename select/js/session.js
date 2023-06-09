window.onload = function () {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("sessionExpiration=") === 0) {
      var sessionExpirationString = cookie.substring(
        "sessionExpiration=".length
      );
      var sessionExpirationTime = new Date(sessionExpirationString).getTime();
      var currentTime = new Date().getTime();

      // 세션이 유효한 경우
      if (currentTime < sessionExpirationTime) {
        // 세션 만료 시간까지 남은 시간 계산
        var time = sessionExpirationTime - currentTime;
        setTimeout(function () {
          alert("세션이 만료되었습니다. 로그인 화면으로 돌아갑니다.");
          window.location.href = "http://211.254.214.74:8081";
        }, time);
      }
      break;
    }
  }
};

function checkSession() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("sessionExpiration=") === 0) {
      var sessionExpirationString = cookie.substring(
        "sessionExpiration=".length
      );
      var sessionExpirationTime = new Date(sessionExpirationString).getTime();
      var currentTime = new Date().getTime();

      if (currentTime < sessionExpirationTime) {
        var time = sessionExpirationTime - currentTime;
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((time % (1000 * 60)) / 1000);

        var remainingTime = "";
        if (days > 0) {
          remainingTime += days + "일 ";
        }
        if (hours > 0) {
          remainingTime += hours + "시간 ";
        }
        if (min > 0) {
          remainingTime += min + "분 ";
        }
        remainingTime += sec + "초";
        alert("남은 시간: " + remainingTime);
      } else {
        alert("세션이 만료되었습니다.");
      }
      return;
    }
  }
  alert("세션이 없습니다.");
}

// 페이지 이동할 경우 세션이 존재하는가.
function compareSession(buttonID) {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("sessionExpiration=") === 0) {
      var sessionExpirationString = cookie.substring(
        "sessionExpiration=".length
      );
      var sessionExpirationTime = new Date(sessionExpirationString).getTime();
      var currentTime = new Date().getTime();

        // 세션이 존재할 경우
      if (currentTime < sessionExpirationTime) {
        if (buttonID === "f1") {
          window.location.href = "function_1.html"; // 식물 정보 탐색
        } else if (buttonID === "f2") {
          window.location.href = "function_2.html"; // 하드웨어 동작 현황
        } else if (buttonID === "f3") {
          window.location.href = "function_3.html"; // 수중 모터 작동 현황
        } else if (buttonID === "f4") {
          // window.location.href = "function_4.html";
        } else if (buttonID === "f5") {
          // window.location.href = "function_5.html";
        } else if (buttonID === "f6") {
          // window.location.href = "function_6.html"; 
          // 프로젝트 & 팀원 소개
        }
      } else {
        alert("세션이 만료되었습니다. \n로그인 화면으로 돌아갑니다.");
        window.location.href = "http://211.254.214.74:8081";
      }
      return;
    }
  }
  alert("세션이 존재하지 않습니다. \n로그인 화면으로 돌아갑니다.");
  window.location.href = "http://211.254.214.74:8081";
}

function logOut() {
  deleteCookie("userID");
  document.cookie =
    "sessionExpiration=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  alert("로그아웃 되었습니다. \n로그인 화면으로 돌아갑니다.");
  window.location.href = "http://211.254.214.74:8081";
}

function getBack() {
  alert("이전 화면으로 돌아갑니다.");
  window.location.href = "/src/select/select.html";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
