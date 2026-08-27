# ⚙️ 단위 변환기

React + Vite로 만든 다기능 단위 변환기 웹앱입니다.

🌐 **라이브 데모**: [https://bibibigbar-dev.github.io/unit-converter/](https://bibibigbar-dev.github.io/unit-converter/)

## 지원 카테고리

| 카테고리 | 단위 |
|---|---|
| 📏 길이 | km, m, cm, mm, μm, nm, mile, yard, feet, inch, 해리 |
| ⚖️ 무게/질량 | kg, g, mg, μg, 메트릭 톤, lb, oz, stone |
| 🌡️ 온도 | °C, °F, K, °R |
| 📐 넓이 | m², km², cm², mm², 헥타르, 에이커, ft², in², 평 |
| 🚗 속도 | km/h, mph, m/s, knot, ft/s |
| 💾 데이터 | bit, byte, KB, MB, GB, TB, PB |
| ⏱️ 시간 | 나노초 ~ 년 |
| 🔋 에너지 | J, kJ, cal, kcal, Wh, kWh, BTU |
| 💪 압력 | Pa, kPa, MPa, bar, psi, atm, mmHg |
| 📦 부피 | L, mL, m³, cm³, gallon, quart, pint, fl oz, cup, tbsp, tsp |
| 🔢 진수 변환 | 2진수, 8진수, 10진수, 16진수 |
| 💰 연료 효율 | km/L, L/100km, mpg(US), mpg(UK) |

## 개발 환경

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## GitHub Pages 배포

```bash
npm run deploy
```

`predeploy` 스크립트가 자동으로 빌드 후 `gh-pages` 브랜치에 배포합니다.

> **참고**: GitHub 저장소 Settings → Pages에서 Source를 `gh-pages` 브랜치로 설정해야 합니다.

## Google AdSense 추가 방법

`index.html`의 AdSense 주석을 실제 스크립트 태그로 교체하세요:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossorigin="anonymous"></script>
```

`src/App.jsx`의 AdSense Placeholder 주석 위치에 광고 단위를 삽입할 수 있습니다.

## 기술 스택

- **React 18** + **Vite**
- **CSS** (Custom Properties 기반 다크모드)
- **gh-pages** (GitHub Pages 배포)
