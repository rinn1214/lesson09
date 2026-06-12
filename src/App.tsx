import "./style.css";

// ============================================================
// ここを自分の情報に書き換えてください
// ============================================================

const oshi = {
  name: "Laufey",
  catchcopy: "クラシックとジャズを、現代の恋心で歌うアーティスト。",
  description:
    "Laufey（レイヴェイ）は、アイスランド出身のシンガーソングライター・マルチインストゥルメンタリスト。ジャズ、クラシック、ボサノヴァの要素を取り入れながら、現代的でロマンチックな歌詞を組み合わせた音楽で人気を集めている。「From The Start」や「Bewitched」などで知られ、どこか懐かしく映画のワンシーンのような世界観が魅力。",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Laufey_Lin.jpg",
  genre: "Jazz Pop / Classical",
  since: "1999",
};

type Point = {
  label: string;
  text: string;
};

const points: Point[] = [
  {
    label: "世界観",
    text: "恋愛のときめきや切なさを、レトロで上品な雰囲気に落とし込んでいて、ビジュアルやファッションも含めて完成度が高い。",
  },
  {
    label: "歌声",
    text: "落ち着いた低めの声と繊細な歌い方が魅力。聴いているだけで映画の中にいるような気分になる。",
  },
  {
    label: "音楽",
    text: "ジャズやクラシックをベースにしながら、今の世代にも届くやわらかく親しみやすい音楽を作っている。",
  },
];

type Item = {
  title: string;
  year: string;
  note: string;
};

const picks: Item[] = [
  {
    title: "From the Start",
    year: "2023",
    note: "軽やかなリズムと片思いの歌詞が可愛い代表曲。",
  },
  {
    title: "Bewitched",
    year: "2023",
    note: "Laufeyらしいロマンチックで幻想的な雰囲気が詰まったアルバム。",
  },
  {
    title: "Let You Break My Heart Again",
    year: "2021",
    note: "オーケストラの音色と切ない歌声が印象的な楽曲。",
  },
  {
    title: "Everything I Know About Love",
    year: "2022",
    note: "デビューアルバム。恋愛への憧れや不器用さが丁寧に表現されている。",
  },
];

// ============================================================
// コンポーネント（基本的に変更不要）
// ============================================================

function Hero() {
  return (
    <section className="hero">
      {oshi.imageUrl && (
        <div className="hero-image-wrap">
          <img className="hero-image" src={oshi.imageUrl} alt={oshi.name} />
          <div className="hero-image-overlay" />
        </div>
      )}
      <div className="hero-content">
        <p className="hero-genre">
          {oshi.genre} · since {oshi.since}
        </p>
        <h1 className="hero-name">{oshi.name}</h1>
        <p className="hero-catchcopy">{oshi.catchcopy}</p>
      </div>
    </section>
  );
}

function Description() {
  return (
    <section className="section">
      <h2 className="section-title">About</h2>
      <p className="description-text">{oshi.description}</p>
    </section>
  );
}

function Points() {
  return (
    <section className="section">
      <h2 className="section-title">推しポイント</h2>
      <div className="points-list">
        {points.map((p) => (
          <div key={p.label} className="point-item">
            <span className="point-label">{p.label}</span>
            <p className="point-text">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Picks() {
  return (
    <section className="section">
      <h2 className="section-title">My Picks</h2>
      <div className="picks-grid">
        {picks.map((item, i) => (
          <div key={i} className="pick-card">
            <span className="pick-number">0{i + 1}</span>
            <h3 className="pick-title">{item.title}</h3>
            <p className="pick-year">{item.year}</p>
            <p className="pick-note">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <Hero />
      <main className="container">
        <Description />
        <Points />
        <Picks />
      </main>
      <footer className="footer">
        <p>My Favorite · {oshi.name}</p>
      </footer>
    </div>
  );
}

export default App;
