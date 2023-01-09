- - -
# 정성민의 Clone Codig - Colco
## 1. Clone 사이트 선택이유
---
```
    최근 많은 기업들이 App으로 주 플랫폼을 옮기고 있기 때문에 Wep site의 경우

    홍보 또는 사용 설명서 같은 용도로 많이 사용 되고 있습니다.

    이러한 형태에 익숙해질 필요성이 있다고 느끼게 되어

    Colco앱을 선정하여 Clone Coding하게 되었습니다.
```
---
## 1.1. Colco 사이트 선택이유
---
```
    사실 Colco사이트는 Clone Coding을 하기 전에는 알지 못한 사이트 였습니다.

    영어기반의 어플리케이션인 이유도 있겠지만 기업체를 겨냥하여 나온 어플리케이션으로
    출시 되었기 때문에 대중적으로 알려지지 않은 어플인 까닭으로 생각하고 있습니다.

     하지만 
     - React 기반으로 제작된 사이트
     - 단순하지만 이해하기 쉬운 사이트
    
    라는 이 두가지 장점을 보고 Clone Coding에 도전 하게 되었습니다.
    
    React를 이용한 Front End 개발자를 소망하는 입장에서 React를 이용한 사이트를 구현한다는
    의미도 있었고 또한 단순하게 설명 형식으로 되어있는 다른 사이트를 보면서
    Colco사이트 같이 눈에 확 들어올 수 있는 사이트 형식이 사용자들에게 이해도를 높이고
    적당한 수준의 색체 배치를 보면서 이 어플리케이션이 경쟁 업체들을 제치고 선택하는 이유가
    될 수 있다고 생각하여 선택하게 되었습니다.
```
---
## 2. 개발과정
---
> 1. CRA(Create React App)을 이용하여 React 환경구축
> -  간단한 Clone Coding 프로젝트 이기 때문에 CRA를 통해 개발환경을 구축하였습니다.
>> CRA는 사용하지 않는 기능들도 들어가기 때문에 최적화에는 용이하지 않은 방법이지만 간단한 Clone 프로젝트 이기 때문에 개발환경을 자동으로 설정해주는 CRA를 사용하였습니다.

> 2. react-router-dom을 이용하여 Routing진행
> - App.js에 BrowserRouter를 이용하여 라우터 설정을 하고 메인 페이지와 잘못된 접근 404페이지 구현
>>NodeJS와 Express를 이용하여 서버를 구축하여 Routing설정을 호스팅으로 사용사용 할 수도 있지만 이 프로젝트는 Clone Coding으로 정적인 사이트를 업로드 하는 방식 이었기 때문에 최소한으로 Routing기능을 사용하기 위해 react-router-dom을 사용하였습니다.

> 3. @emotion/styled를 사용하여 페이지 및 Component css 스타일 지정
> - .css 파일을 통한 스타일 지정이 아닌 emotion의 styled 패키지를 이용하여 css-in-js방식의 스타일 코드를 작성
>> - 일반 css파일 처럼 분리되어 가독성이 뛰어난 편은 아니지만 sass형식의 스타일 시트 작성이 가능하다.
>> - className 자동으로 부여되기 때문에 스타일이 겹치는 염려를 줄일수 있다.
>> - css code의 재사용이 편하다.

---
## 3. 개발이후 생각한 사이트 개선점
---
---
### ◤ 정성민의 다른 프로젝트 ◢
> 1. [포트폴리오](https://minicastle.github.io/portpolio/)
> 2. [Colco(Clone)](https://minicastle.github.io/Clone-Colco/) - [원본](https://colco.app/)
> 3. [Jolly-Flow(Clone)](https://minicastle.github.io/Clone-JollyFlow/) - [원본](https://jollyflow.webflow.io/)
> 4. [kakao(Clone)](https://minicastle.github.io/Clone-Kakao/) - [원본](https://www.kakaocorp.com/page/)

- [정성민의 GitHub](https://github.com/minicastle)

### 이메일 링크: <minicastle@kakao.com>
---
## ※개발에 사용된 언어 및 npm package※
---
|Package Name                 | version  |
| :--                         | :--:     |
| @emotion/react              | ^11.10.5 |
| @emotion/styled             | ^11.10.5 |
| @testing-library/jest-dom   | ^5.14.1  |
| @testing-library/react      | ^13.0.0  |
| @testing-library/user-event | ^13.2.1  |
| gh-pages                    | ^4.0.0   |
| react                       | ^18.2.0  |
| react-dom                   | ^18.2.0  |
| react-icons                 | ^4.7.1   |
| react-router-dom            | ^6.5.0   |
| react-scripts               | 5.0.1    |
| web-vitals                  | ^2.1.0"  |
---