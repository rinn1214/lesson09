import './style.css';

// ============================================================
// ここを自分の情報に書き換えてください
// ============================================================

const oshi = {
  name: 'David Lynch',
  catchcopy: '夢と悪夢の境界線を歩く映像作家。',
  description:
    'デイヴィッド・リンチ（1946-2025）はアメリカの映画監督・芸術家。「ブルーベルベット」「マルホランド・ドライブ」「ツイン・ピークス」などで知られ、難解でシュールな映像表現でカルト的な支持を集めた。映画にとどまらず絵画・写真・音楽など多方面で活動し、TM瞑想の普及にも情熱を注いだ。',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/David_Lynch_%282011%29.jpg/800px-David_Lynch_%282011%29.jpg',
  genre: 'Film / Art',
  since: '1977',
};

type Point = {
  label: string;
  text: string;
};

const points: Point[] = [
  {
    label: '映像',
    text: '夢の論理で展開する独自のビジュアル言語。説明できないのに忘れられない場面を生み出す。',
  },
  {
    label: '音楽',
    text: 'アンジェロ・バダラメンティとの長年のコラボレーション。音楽と映像が一体となって不安と美しさを作り出す。',
  },
  {
    label: '多才',
    text: '映画監督にとどまらず画家・写真家・音楽家としても活動。あらゆる表現を通じて内なる世界を外に出し続けた。',
  },
];

type Item = {
  title: string;
  year: string;
  note: string;
};

const picks: Item[] = [
  { title: 'イレイザーヘッド', year: '1977', note: 'デビュー作にして既にリンチ・ワールドが全開。' },
  { title: 'ブルーベルベット', year: '1986', note: '郊外の美しさの裏に潜む暗闇を描く代表作。' },
  { title: 'マルホランド・ドライブ', year: '2001', note: '夢と現実が交錯するハリウッド・ノワール。カンヌ監督賞受賞。' },
  { title: 'ツイン・ピークス', year: '1990', note: 'TVドラマの概念を変えた伝説的シリーズ。' },
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
        <p className="hero-genre">{oshi.genre} · since {oshi.since}</p>
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
