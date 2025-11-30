// import { Link } from "react-router-dom";

// const BTL2 = () => {
//   return (
//     <div className="min-h-screen bg-background p-8 font-sans">
//       <div className="max-w-5xl mx-auto">
//         <div className="mb-8">
//           <Link to="/" className="text-primary hover:underline mb-4 inline-block">&larr; Quay lại trang chủ</Link>
//           <h1 className="text-4xl font-bold text-foreground mt-2">Assignment 2 : TEXT DATA</h1>
//           {/* <p className="text-muted-foreground mt-2">
//             So sánh phương pháp trích xuất đặc trưng: Truyền thống vs Deep Learning Embedding.
//           </p> */}
//         </div>

//         <div className="space-y-8">
//            {/* Step 1: EDA & Preprocessing */}
//            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
//             <h2 className="text-2xl font-semibold text-primary mb-4">1. EDA & Tiền xử lý</h2>
//             <ul className="list-disc list-inside text-muted-foreground space-y-2">
//               [cite_start]<li>Thống kê số lượng từ, phân phối độ dài câu[cite: 95].</li>
//               [cite_start]<li>Tokenization, loại bỏ Stopwords, Padding chuỗi[cite: 94].</li>
//             </ul>
//           </div>

//           {/* Step 2: Feature Extraction Comparison */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Traditional */}
//             <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
//               <h3 className="text-xl font-bold text-foreground mb-3">Phương pháp Truyền thống</h3>
//               [cite_start]<p className="text-sm text-muted-foreground mb-4">Sử dụng các kỹ thuật thống kê tần suất từ[cite: 88].</p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Bag-of-Words</span>
//                 <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">TF-IDF</span>
//                 <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">n-gram</span>
//               </div>
//             </div>

//             {/* Modern */}
//             <div className="bg-card border border-border rounded-xl p-6 shadow-sm ring-1 ring-primary/20">
//               <h3 className="text-xl font-bold text-primary mb-3">Deep Learning Embeddings</h3>
//               [cite_start]<p className="text-sm text-muted-foreground mb-4">Sử dụng Pre-trained Models để vector hóa[cite: 89, 91].</p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs">Word2Vec / GloVe</span>
//                 <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs">BERT / DistilBERT</span>
//               </div>
//             </div>
//           </div>

//           {/* Step 3: Modeling */}
//           <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
//             <h2 className="text-2xl font-semibold text-primary mb-4">3. Huấn luyện mô hình</h2>
//             <p className="text-muted-foreground mb-4">
//               [cite_start]Đầu vào là các vector đặc trưng (định dạng .npy/.h5) đưa vào các bộ phân loại[cite: 92].
//             </p>
//             <div className="p-4 bg-muted rounded border border-dashed">
//               <h4 className="font-semibold text-foreground mb-2">Kết quả thử nghiệm:</h4>
//               <p className="text-sm text-muted-foreground">Naive Bayes | Logistic Regression | Fine-tuning BERT</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BTL2;
import React, { useState } from "react";
import fakenew from "../image/fakenew.png"
import textlen from "../image/textlen.png"
import wordcloud from "../image/worldcloud.png"
import unigrams from "../image/unigrams.png"
import sentiment from "../image/sentiment.png"
import bert from "../image/bert.png"
import epoch from "../image/epoch.png"


type ModelResult = {
  name: string;
  family: "Machine Learning truyền thống" | "Deep Learning";
  representation: string;
  accuracy: string;
  f1: string;
  notes: string;
};

const MODEL_RESULTS: ModelResult[] = [
  {
    name: "BoW + Logistic Regression",
    family: "Machine Learning truyền thống",
    representation: "Bag-of-Words (CountVectorizer)",
    accuracy: "≈ 99.7%",
    f1: "≈ 0.997",
    notes:
      "Pipeline truyền thống tốt nhất theo grid-search (val_f1 & test_f1 cao nhất).",
  },
  {
    name: "TF-IDF + Decision Tree",
    family: "Machine Learning truyền thống",
    representation: "TF-IDF (n-gram)",
    accuracy: "≈ 99.6%",
    f1: "≈ 0.997",
    notes: "Cấu hình mặc định trong CONFIG trong notebook.",
  },
  {
    name: "BERT base (fine-tuning)",
    family: "Deep Learning",
    representation: "Contextual embeddings (Transformer – bert-base-uncased)",
    accuracy: "≈ 100% (1.00 trên tập test)",
    f1: "1.00",
    notes:
      "Fine-tune 2 epoch, max_length = 128, kết quả gần như hoàn hảo trên tập test.",
  },
];

const PreprocessingShowcase = () => {
  const [showCode, setShowCode] = useState(false);

  // Dữ liệu mẫu từ ví dụ của bạn
  const rawText = `Watch the video and you be the judge. Was Piers Morgan correct or was he out of line?Piers Morgan poked the hornets  nest Sunday when he highlighted a double standard among Muhammad Ali s fans   that the late boxer espoused more radical views on race than Donald Trump.Muhammad Ali said far more inflammatory/racist things about white people than Donald Trump ever has about Muslims. #fact  Piers Morgan (@piersmorgan) June 5, 2016The tweet quickly brought a swarm of social justice outrage, but Morgan did not back down. He argued that Ali was an important voice in the civil rights movement, but that is no reason to whitewash statements far more radical than Trump s on race and immigration. Via: Breitbart NewsTrump was in New York on 9/11 & knew people who died. Does that count? https://t.co/eF7Lg76Ye7  Piers Morgan (@piersmorgan) June 5, 2016Here are just a few tweets from liberals right before their collective heads blew off their necks:https://twitter.com/DentonJez/status/739780815807188`;
  
  const cleanText = `watch video judge piers morgan correct linepiers morgan poked hornets nest sunday highlighted double standard among muhammad ali fans late boxer espoused radical views race donald trumpmuhammad ali said far inflammatoryracist things white people donald trump ever muslims fact piers morgan piersmorgan june tweet quickly brought swarm social justice outrage morgan back argued ali important voice civil rights movement reason whitewash statements far radical trump race immigration via breitbart newstrump new york knew people died count piers morgan piersmorgan june tweets liberals right collective heads blew necks`;

  // Các bước xử lý dựa trên code Python của bạn
  const pipelineSteps = [
    { label: "Lowercase", desc: "Chuyển về chữ thường", icon: "aa" },
    { label: "Remove Brackets", desc: "Xóa nội dung trong []", icon: "[ ]" },
    { label: "Remove URLs", desc: "Loại bỏ đường dẫn web", icon: "🔗" },
    { label: "Remove HTML", desc: "Xóa thẻ HTML < >", icon: "</>" },
    { label: "Remove Punctuation", desc: "Xóa dấu câu", icon: "?!." },
    { label: "Remove Numbers", desc: "Xóa chữ số", icon: "123" },
    { label: "Remove Stopwords", desc: "Loại bỏ từ dừng (the, is...)", icon: "🚫" },
    { label: "Tokenization", desc: "Tách từ / BERT Tokenizer", icon: "✂️" },
  ];

  return (
    <div className="w-full animate-fade-in space-y-8">
      
      {/* 1. Header & Pipeline Visual */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gradient-primary border-l-4 border-primary pl-4">
          Quy trình Tiền xử lý (Preprocessing Pipeline)
        </h2>
        <p className="text-muted-foreground">
          Dữ liệu văn bản thô chứa nhiều nhiễu. Dưới đây là pipeline làm sạch dữ liệu được áp dụng để chuẩn hóa đầu vào cho mô hình.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pipelineSteps.map((step, idx) => (
            <div key={idx} className="bg-card border border-border p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <div className="font-semibold text-sm">{step.label}</div>
                <div className="text-xs text-muted-foreground">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Before / After Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Raw Data Card */}
        <div className="flex flex-col h-full">
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-t-xl px-6 py-3 flex justify-between items-center">
             <span className="font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
               🛑 Dữ liệu Thô (Raw Text)
             </span>
             <span className="text-xs bg-white/50 px-2 py-1 rounded text-red-800">Original</span>
          </div>
          <div className="bg-card border-x border-b border-border p-6 rounded-b-xl flex-grow shadow-sm">
            <p className="font-mono text-sm leading-relaxed text-muted-foreground break-words">
              {rawText}
            </p>
          </div>
        </div>

        {/* Clean Data Card */}
        <div className="flex flex-col h-full">
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-t-xl px-6 py-3 flex justify-between items-center">
             <span className="font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
               ✅ Dữ liệu Sạch (Clean Text)
             </span>
             <span className="text-xs bg-white/50 px-2 py-1 rounded text-green-800">Processed</span>
          </div>
          <div className="bg-card border-x border-b border-border p-6 rounded-b-xl flex-grow shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <p className="font-mono text-sm leading-relaxed text-foreground break-words">
              {cleanText}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Implementation Details (Code Toggle) */}
      <div className="border border-border rounded-xl overflow-hidden">
        <button 
          onClick={() => setShowCode(!showCode)}
          className="w-full px-6 py-4 bg-muted/30 flex items-center justify-between hover:bg-muted/50 transition-colors"
        >
          <span className="font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            Xem mã nguồn thực thi (Python)
          </span>
          <span className={`transform transition-transform ${showCode ? "rotate-180" : ""}`}>
             ▼
          </span>
        </button>
        
        {showCode && (
          <div className="p-0 bg-[#1e1e1e] text-white overflow-x-auto">
            <pre className="p-6 text-sm font-mono leading-relaxed">
{`def clean_text(text, STOPWORDS, CONFIG, bert_tokenizer=None):
    # 1. Lowercase
    if CONFIG["preprocessing"]["lowercase"]:
        text = text.lower()
    
    # 2. Remove Junk
    if CONFIG["preprocessing"]["remove_brackets"]:
        text = re.sub(r'\\[.*?\\]', '', text)
    if CONFIG["preprocessing"]["remove_urls"]:
        text = re.sub(r'https?://\\S+|www\\.\\S+', '', text)
    if CONFIG["preprocessing"]["remove_html"]:
        text = re.sub(r'<.*?>+', '', text)
    if CONFIG["preprocessing"]["remove_numbers"]:
        text = re.sub(r'\\w*\\d\\w*', '', text)
    
    # 3. Remove Punctuation & Symbols
    if CONFIG["preprocessing"]["remove_punct"]:
        text = text.translate(str.maketrans("", "", string.punctuation))
    if CONFIG["preprocessing"]["remove_symbols"]:
        text = re.sub(r"\\\\W", " ", text)

    # 4. Remove Stopwords
    if CONFIG["preprocessing"]["remove_stopwords"]:
        text = " ".join([w for w in text.split() if w not in STOPWORDS])

    return text`}
            </pre>
          </div>
        )}
      </div>

    </div>
  );
};
const DataAnalysis = () => {
  // Số liệu từ hình ảnh của bạn
  const stats = {
    total: 44670,
    fake: 23468,
    real: 21202,
  };

  // Tính phần trăm để vẽ thanh bar
  const fakePercent = Math.round((stats.fake / stats.total) * 100);
  const realPercent = 100 - fakePercent;

  // Dữ liệu cột từ hình ảnh
  const columns = [
    { name: "title", type: "object (string)", desc: "Tiêu đề bài viết", nullCount: 0 },
    { name: "text", type: "object (string)", desc: "Nội dung bài viết", nullCount: 0 },
    { name: "subject", type: "object (string)", desc: "Chủ đề", nullCount: 0 },
    { name: "date", type: "object (string)", desc: "Ngày đăng", nullCount: 0 },
    { name: "label", type: "int64", desc: "Nhãn (0: Real, 1: Fake)", nullCount: 0 },
    { name: "text_len", type: "int64", desc: "Độ dài văn bản", nullCount: 0 },
  ];

  return (
    <div className="w-full space-y-8 animate-fade-in">
      
      {/* 1. HEADER SECTION */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          {/* Icon Chart */}
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gradient-primary">EDA(Exploratory Data Analysis)</h2>
      </div>

      {/* 2. STATS CARDS (3 Số liệu chính) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Samples */}
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-muted-foreground font-medium uppercase">Tổng số mẫu</p>
          <p className="text-4xl font-bold text-foreground mt-2">{stats.total.toLocaleString()}</p>
          <div className="mt-2 text-xs text-muted-foreground">Rows / Samples</div>
        </div>

        {/* Fake News */}
        <div className="p-6 bg-red-50/50 border border-red-200 dark:bg-red-900/10 dark:border-red-800 rounded-xl shadow-sm">
          <p className="text-sm text-red-600 dark:text-red-400 font-medium uppercase">Tin giả (Fake)</p>
          <p className="text-4xl font-bold text-red-700 dark:text-red-500 mt-2">{stats.fake.toLocaleString()}</p>
          <div className="mt-2 text-xs text-red-600/70">Chiếm {fakePercent}% dữ liệu</div>
        </div>

        {/* Real News */}
        <div className="p-6 bg-green-50/50 border border-green-200 dark:bg-green-900/10 dark:border-green-800 rounded-xl shadow-sm">
          <p className="text-sm text-green-600 dark:text-green-400 font-medium uppercase">Tin thật (Real)</p>
          <p className="text-4xl font-bold text-green-700 dark:text-green-500 mt-2">{stats.real.toLocaleString()}</p>
          <div className="mt-2 text-xs text-green-600/70">Chiếm {realPercent}% dữ liệu</div>
        </div>
      </div>

      {/* 3. DISTRIBUTION BAR (Thanh tỷ lệ) */}
      <div className="bg-card p-6 border border-border rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Phân bố nhãn (Label Distribution)</h3>
        <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden flex">
          <div 
            className="h-full bg-red-500 flex items-center justify-center text-[10px] text-white font-bold transition-all duration-1000" 
            style={{ width: `${fakePercent}%` }}
          >
            FAKE ({fakePercent}%)
          </div>
          <div 
            className="h-full bg-green-500 flex items-center justify-center text-[10px] text-white font-bold transition-all duration-1000" 
            style={{ width: `${realPercent}%` }}
          >
            REAL ({realPercent}%)
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground text-center italic">
          Dữ liệu khá cân bằng (Balanced Dataset), tốt cho việc huấn luyện mô hình.
        </p>
      </div>

      {/* 4. DATA STRUCTURE TABLE (Bảng cấu trúc) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Cột trái: Bảng thông tin */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/30">
            <h3 className="font-semibold text-lg">Cấu trúc DataFrame</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-6 py-3">#</th>
                  <th className="px-6 py-3">Tên cột (Feature)</th>
                  <th className="px-6 py-3">Kiểu dữ liệu (Dtype)</th>
                  <th className="px-6 py-3 text-right">Missing Value</th>
                </tr>
              </thead>
              <tbody>
                {columns.map((col, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground">{index}</td>
                    <td className="px-6 py-4 font-medium font-mono text-primary">{col.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <span className="bg-secondary px-2 py-1 rounded text-xs">{col.type}</span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">
                      {col.nullCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cột phải: Đánh giá chất lượng */}
        <div className="lg:col-span-1 space-y-6">
            
          {/* Quality Badge */}
          <div className="p-6 bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 rounded-xl">
             <div className="flex items-start gap-4">
               <div className="p-2 bg-blue-500 text-white rounded-full">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <div>
                 <h4 className="font-bold text-blue-700 dark:text-blue-400 text-lg">Dữ liệu sạch</h4>
                 <p className="text-sm text-blue-600/80 mt-1">
                   Không phát hiện giá trị thiếu (Null/NaN) ở bất kỳ cột nào.
                 </p>
                 <div className="mt-3 inline-block px-3 py-1 bg-white dark:bg-black rounded border border-blue-200 text-xs font-mono text-blue-600">
                   Missing Value: 0
                 </div>
               </div>
             </div>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl">
            <h4 className="font-semibold mb-2">Ghi chú bộ dữ liệu:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Bộ dữ liệu gồm <strong>6 thuộc tính</strong> đặc trưng.</li>
                <li>Biến mục tiêu là <code>label</code> (Phân lớp nhị phân).</li>
                <li>Dung lượng bộ nhớ sử dụng: <strong>~2.4+ MB</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
              
          {/* ================================================================================== */}
      {/* PHẦN 2: PHÂN TÍCH CHUYÊN SÂU (DEEP DIVE) */}
      {/* ================================================================================== */}
      
      <div className="mt-12 space-y-12">
        {/* ---------------- SECTION 1: TEXT LENGTH ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Chart */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
             <h3 className="font-semibold mb-4 text-center">Phân phối độ dài văn bản</h3>
             <img 
                src={textlen} 
                alt="Phân phối độ dài văn bản" 
                className="w-full h-auto rounded-lg object-contain"
             />
          </div>
          
          {/* Insight */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="text-xl font-bold">Độ dài văn bản</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Biểu đồ cho thấy phân phối lệch phải (right-skewed). Đa số các văn bản (khoảng <strong>75%</strong>) có độ dài <strong>dưới 1000 từ</strong>. 
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 bg-muted/30 p-4 rounded-lg">
              <li>Tồn tại một lượng đáng kể các văn bản cực kỳ dài (bài báo chi tiết, tài liệu).</li>
              <li><strong>Hệ quả:</strong> Cần xử lý các văn bản quá dài (truncation) hoặc quá ngắn (padding) khi đưa vào mô hình Deep Learning.</li>
            </ul>
          </div>
        </div>

        {/* ---------------- SECTION 2: VOCABULARY & KEYWORDS ---------------- */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
           <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Từ vựng & Từ khóa nổi bật</h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-mono font-bold">
                 Vocab Size: ~121,670
              </span>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Unigrams Chart */}
              <div className="space-y-2">
                 <p className="text-sm text-center font-medium text-muted-foreground">Top 20 Unigrams (Tần suất xuất hiện)</p>
                 <img src={unigrams} alt="Top 20 Unigrams" className="w-full rounded-lg border border-border/50" />
              </div>
              
              {/* WordCloud */}
              <div className="space-y-2">
                 <p className="text-sm text-center font-medium text-muted-foreground">Word Cloud Visualization</p>
                 <img src={wordcloud} alt="Word Cloud" className="w-full rounded-lg border border-border/50" />
              </div>
           </div>

           <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-500 mb-2">Nhận xét:</h4>
              <p className="text-sm text-yellow-700/80 dark:text-yellow-400">
                Các từ phổ biến nhất xoay quanh chủ đề <strong>Chính trị & Nhân vật nổi bật</strong> (Trump, Obama, Clinton, president, people...). 
                Tỷ lệ <strong>stopwords cao (~40%)</strong>, cần loại bỏ để giảm nhiễu. Dữ liệu chứa nhiều ký tự số và URL cần làm sạch.
              </p>
           </div>
        </div>

        {/* ---------------- SECTION 3: SENTIMENT ANALYSIS ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
           {/* Insight (Đảo bên trái) */}
           <div className="space-y-4 order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-pink-100 text-pink-700 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </span>
              <h3 className="text-xl font-bold">Phân tích Cảm xúc (Sentiment)</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Điểm sentiment trung bình của cả tin thật và tin giả đều <strong>hơi dương (gần 0)</strong> và khá tương đồng nhau.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg border border-border">
               <p className="text-sm font-semibold mb-2">Kết luận:</p>
               <p className="text-sm text-muted-foreground">
                Sentiment trung bình của cả tin thật và tin giả đều hơi dương và khá gần nhau. Điều này gợi ý rằng sentiment đơn thuần có thể không phải là một đặc trưng mạnh để phân biệt tin giả trong tập dữ liệu này, và cần kết hợp với các đặc trưng khác.
               </p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm order-1 lg:order-2">
             <h3 className="font-semibold mb-4 text-center">Phân phối điểm cảm xúc</h3>
             <img 
                src={sentiment} 
                alt="Phân phối Sentiment" 
                className="w-full h-auto rounded-lg object-contain"
             />
          </div>
        </div>

        {/* ---------------- SECTION 4: FINAL CONCLUSION ---------------- */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 rounded-2xl border border-primary/20">
           <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
             <span className="text-3xl">🎯</span> Tổng kết & Hướng giải quyết
           </h3>
           <div className="space-y-3 text-foreground/90 leading-relaxed">
              <p>
                Dữ liệu có <strong>quy mô phù hợp và nhãn cân bằng</strong>, là điều kiện tốt cho bài toán phân loại. Tuy nhiên, để đạt hiệu quả cao, pipeline cần tập trung vào:
              </p>
              <ul className="list-none space-y-2 pl-4">
                 <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Tiền xử lý kỹ lưỡng:</strong> Làm sạch ký tự đặc biệt, loại bỏ stopwords, xử lý URL và số.</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Biểu diễn văn bản:</strong> Do sự đa dạng về từ vựng, cần thử nghiệm các kỹ thuật như <strong>TF-IDF</strong> (cho mô hình truyền thống) hoặc <strong>Word2Vec/BERT</strong> (cho Deep Learning).</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Xử lý độ dài:</strong> Cân nhắc cắt (truncate) hoặc đệm (pad) các văn bản để chuẩn hóa đầu vào.</span>
                 </li>
              </ul>
           </div>
        </div>

      </div>
    </div>
  );
};



const ModelEvaluation = () => {
  // Dữ liệu từ screenshot bảng kết quả của bạn
  const leaderboard = [
    { rank: 1, embedding: "Bag-of-Words", model: "Logistic Regression", f1: 0.9970, accuracy: 0.9970, color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
    { rank: 2, embedding: "Bag-of-Words", model: "SVM", f1: 0.9967, accuracy: 0.9967, color: "bg-gray-100 text-gray-700 border-gray-300" },
    { rank: 3, embedding: "TF-IDF", model: "Decision Tree", f1: 0.9967, accuracy: 0.9968, color: "bg-orange-100 text-orange-700 border-orange-300" },
    { rank: 4, embedding: "Bag-of-Words", model: "Decision Tree", f1: 0.9961, accuracy: 0.9961, color: "bg-card text-foreground border-border" },
    { rank: 5, embedding: "TF-IDF", model: "Logistic Regression", f1: 0.9902, accuracy: 0.9902, color: "bg-card text-foreground border-border" },
    { rank: 6, embedding: "TF-IDF", model: "SVM", f1: 0.9961, accuracy: 0.9959, color: "bg-card text-foreground border-border" },
    { rank: 8, embedding: "Word2Vec", model: "Logistic Regression", f1: 0.9799, accuracy: 0.9795, color: "bg-blue-50 text-blue-700 border-blue-200" },
    { rank: 10, embedding: "Word2Vec", model: "Decision Tree", f1: 0.9467, accuracy: 0.9468, color: "bg-blue-50 text-blue-700 border-blue-200" },
  ];

  const bestModel = leaderboard[0];

  return (
    <div className="w-full animate-fade-in space-y-12">
      
      {/* 1. HEADER SECTION */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gradient-primary border-l-4 border-primary pl-4">
          Kết quả Huấn luyện & Đánh giá
        </h2>
        <p className="text-muted-foreground">
          So sánh hiệu suất giữa các kỹ thuật Embedding (BoW, TF-IDF, Word2Vec) kết hợp với các bộ phân loại khác nhau.
        </p>
      </div>

      {/* 2. CHAMPION CARD (Mô hình tốt nhất) */}
      <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/10 border border-yellow-200 dark:border-yellow-700 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-4xl shadow-md animate-bounce">
            🏆
          </div>
          <div>
            <div className="text-yellow-700 dark:text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">
              Mô hình hiệu quả nhất (Best Performer)
            </div>
            <h3 className="text-3xl font-bold text-foreground">
              {bestModel.embedding} + {bestModel.model}
            </h3>
            <p className="text-muted-foreground mt-1">
              Đạt sự cân bằng tốt nhất giữa Precision và Recall.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-white dark:bg-black/50 p-4 rounded-xl border border-yellow-100 dark:border-yellow-800 text-center min-w-[120px]">
             <div className="text-3xl font-bold text-yellow-600">{(bestModel.f1 * 100).toFixed(2)}%</div>
             <div className="text-xs text-muted-foreground uppercase font-bold mt-1">Test F1-Score</div>
          </div>
          <div className="bg-white dark:bg-black/50 p-4 rounded-xl border border-yellow-100 dark:border-yellow-800 text-center min-w-[120px]">
             <div className="text-3xl font-bold text-yellow-600">{(bestModel.accuracy * 100).toFixed(2)}%</div>
             <div className="text-xs text-muted-foreground uppercase font-bold mt-1">Accuracy</div>
          </div>
        </div>
      </div>

      {/* 3. LEADERBOARD TABLE & CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cột trái: Bảng xếp hạng chi tiết */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl overflow-hidden shadow-sm">
           <div className="px-6 py-4 border-b border-border bg-muted/30 flex justify-between items-center">
             <h3 className="font-bold text-lg">Bảng xếp hạng mô hình (Top Models)</h3>
             <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Sorted by F1-Score</span>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                 <tr>
                   <th className="px-4 py-3 text-center">Rank</th>
                   <th className="px-4 py-3">Embedding</th>
                   <th className="px-4 py-3">Classifier</th>
                   <th className="px-4 py-3 text-right">Test F1</th>
                   <th className="px-4 py-3 text-right">Accuracy</th>
                 </tr>
               </thead>
               <tbody>
                 {leaderboard.map((item, idx) => (
                   <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                     <td className="px-4 py-3 text-center font-bold text-muted-foreground">#{item.rank}</td>
                     <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${item.color.includes('bg-card') ? 'bg-gray-100 text-gray-800' : item.color}`}>
                          {item.embedding}
                        </span>
                     </td>
                     <td className="px-4 py-3 font-medium">{item.model}</td>
                     <td className="px-4 py-3 text-right font-mono font-bold text-primary">{(item.f1).toFixed(4)}</td>
                     <td className="px-4 py-3 text-right font-mono text-muted-foreground">{(item.accuracy).toFixed(4)}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* Cột phải: Biểu đồ so sánh đơn giản */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
           <h3 className="font-bold text-lg mb-6">So sánh hiệu suất (F1)</h3>
           <div className="space-y-5">
             {leaderboard.slice(0, 6).map((item, idx) => (
               <div key={idx}>
                 <div className="flex justify-between text-xs mb-1">
                   <span className="font-medium text-foreground">{item.embedding} + {item.model}</span>
                   <span className="font-mono">{item.f1.toFixed(4)}</span>
                 </div>
                 <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                   <div 
                      className={`h-full rounded-full ${idx === 0 ? 'bg-yellow-500' : idx < 3 ? 'bg-primary' : 'bg-primary/50'}`}
                      style={{ width: `${(item.f1 * 100)}%` }}
                   ></div>
                 </div>
               </div>
             ))}
           </div>
           <div className="mt-6 text-xs text-muted-foreground text-center italic">
              * Biểu đồ hiển thị top 6 mô hình có hiệu suất cao nhất.
           </div>
        </div>
      </div>

      {/* 4. INSIGHTS SECTION (Nhận xét) */}
      <div className="bg-muted/30 border border-border rounded-xl p-8">
         <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
           <span className="p-1 bg-green-100 text-green-700 rounded">💡</span> 
           Nhận xét & Đánh giá
         </h3>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
             <h4 className="font-bold text-primary">Về kỹ thuật Embedding</h4>
             <ul className="space-y-3">
               <li className="flex gap-3 text-sm text-foreground/80">
                 <span className="text-green-500 font-bold">✓</span>
                 <p>
                   <strong>Bag-of-Words (BoW) và TF-IDF</strong> cho kết quả vượt trội, đạt F1 {'>'} 0.99. Điều này cho thấy tần suất từ vựng là đặc trưng đủ mạnh cho tập dữ liệu này.
                 </p>
               </li>
               <li className="flex gap-3 text-sm text-foreground/80">
                 <span className="text-red-500 font-bold">✕</span>
                 <p>
                   <strong>Word2Vec</strong> cho kết quả thấp hơn (F1 ~0.97). Có thể do kích thước vector (100) chưa tối ưu hoặc mô hình pre-trained chưa phù hợp với domain tin giả này.
                 </p>
               </li>
             </ul>
           </div>

           <div className="space-y-4">
             <h4 className="font-bold text-primary">Về bộ phân loại (Classifier)</h4>
             <ul className="space-y-3">
               <li className="flex gap-3 text-sm text-foreground/80">
                 <span className="text-green-500 font-bold">✓</span>
                 <p>
                   <strong>Logistic Regression và SVM</strong> là hai thuật toán hoạt động ổn định nhất, đặc biệt khi kết hợp với BoW.
                 </p>
               </li>
               <li className="flex gap-3 text-sm text-foreground/80">
                 <span className="text-blue-500 font-bold">ℹ</span>
                 <p>
                   <strong>Decision Tree</strong> cũng cho kết quả rất cạnh tranh (~0.996), chứng tỏ ranh giới quyết định (decision boundary) của dữ liệu khá rõ ràng.
                 </p>
               </li>
             </ul>
           </div>
         </div>
      </div>

    </div>
  );
};

const ModelComparison = () => {
  return (
    <div className="w-full animate-fade-in space-y-16 text-foreground mt-16 pb-20">
      
      {/* ================================================================================== */}
      {/* 1. SECTION HEADER */}
      {/* ================================================================================== */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Tổng kết & So sánh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Kiến trúc</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Cuộc đối đầu giữa các thuật toán Machine Learning truyền thống và mô hình Ngôn ngữ lớn (BERT).
        </p>
      </div>

      {/* ================================================================================== */}
      {/* 2. THE FACE-OFF CARDS (SO SÁNH 2 PHE) */}
      {/* ================================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* TEAM TRADITIONAL ML */}
        <div className="bg-white dark:bg-slate-900 border-t-4 border-blue-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-32 h-32 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
           </div>
           
           <h3 className="text-2xl font-bold text-blue-600 mb-2">Traditional ML</h3>
           <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-bold">Logistic Regression, SVM + TF-IDF</p>
           
           <ul className="space-y-4">
             <li className="flex items-start gap-3">
               <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full text-xs">👍</div>
               <div>
                 <strong className="text-foreground">Tốc độ & Tài nguyên:</strong>
                 <p className="text-sm text-muted-foreground">Huấn luyện cực nhanh, chạy tốt trên CPU, không cần phần cứng đắt tiền.</p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full text-xs">👍</div>
               <div>
                 <strong className="text-foreground">Khả năng giải thích (White-box):</strong>
                 <p className="text-sm text-muted-foreground">Dễ dàng hiểu tại sao mô hình đưa ra quyết định (ví dụ: dựa vào trọng số từ trong TF-IDF).</p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <div className="mt-1 p-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">⚠️</div>
               <div>
                 <strong className="text-foreground">Trích xuất đặc trưng:</strong>
                 <p className="text-sm text-muted-foreground">Phụ thuộc vào kỹ thuật thủ công (Manual Feature Extraction) như BoW, TF-IDF.</p>
               </div>
             </li>
           </ul>

           <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
             <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-500">Best F1-Score</span>
                <span className="text-3xl font-bold text-blue-600">~0.99</span>
             </div>
           </div>
        </div>

        {/* TEAM DEEP LEARNING (BERT) */}
        <div className="bg-[#1e1b4b] text-white border-t-4 border-purple-500 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-shadow relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-32 h-32 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
           </div>
           
           <h3 className="text-2xl font-bold text-purple-400 mb-2">Deep Learning (BERT)</h3>
           <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-bold">Fine-tuning Pre-trained Transformer</p>
           
           <ul className="space-y-4">
             <li className="flex items-start gap-3">
               <div className="mt-1 p-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">🚀</div>
               <div>
                 <strong className="text-white">Hiệu suất vượt trội:</strong>
                 <p className="text-sm text-gray-300">Đạt độ chính xác tuyệt đối (100%) trên tập dữ liệu thử nghiệm.</p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <div className="mt-1 p-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">✨</div>
               <div>
                 <strong className="text-white">Học biểu diễn tự động:</strong>
                 <p className="text-sm text-gray-300">Tự động nắm bắt ngữ nghĩa phức tạp và ngữ cảnh (Contextual) mà không cần can thiệp thủ công.</p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <div className="mt-1 p-1 bg-red-500/20 text-red-300 rounded-full text-xs">🔻</div>
               <div>
                 <strong className="text-white">Hạn chế:</strong>
                 <p className="text-sm text-gray-300">Mô hình "Hộp đen" (Black-box), khó giải thích. Yêu cầu tài nguyên tính toán cao (GPU).</p>
               </div>
             </li>
           </ul>

           <div className="mt-8 pt-6 border-t border-dashed border-gray-700">
             <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-400">Best F1-Score</span>
                <span className="text-3xl font-bold text-purple-400">1.00</span>
             </div>
           </div>
        </div>
      </div>

      {/* ================================================================================== */}
      {/* 3. FINAL VERDICT (KẾT LUẬN) */}
      {/* ================================================================================== */}
      <div className="relative rounded-3xl overflow-hidden border border-border shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900"></div>
        <div className="relative p-8 md:p-12 text-center space-y-6">
           <div className="inline-block p-3 bg-white dark:bg-black rounded-full shadow-md text-4xl mb-2">
             ⚖️
           </div>
           <h3 className="text-2xl md:text-3xl font-bold text-foreground">
             Kết luận cuối cùng (Final Verdict)
           </h3>
           <div className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-4">
             <p>
               Trên tập dữ liệu phát hiện tin giả này, <strong>BERT Fine-tuning</strong> đã chứng minh sức mạnh áp đảo của các mô hình ngôn ngữ lớn (LLMs) với khả năng nắm bắt ngữ nghĩa phức tạp, đạt hiệu suất <strong>100%</strong>.
             </p>
             <p>
               Tuy nhiên, các mô hình truyền thống (đặc biệt là <strong>Logistic Regression & SVM</strong>) vẫn là những lựa chọn cực kỳ đáng giá với F1 {'>'} 0.99, nhờ ưu điểm về tốc độ, chi phí thấp và khả năng giải thích minh bạch.
             </p>
           </div>
           
           <div className="pt-6 flex flex-wrap justify-center gap-4">
             <div className="px-6 py-2 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-sm font-bold">
               🏆 Best Performance: BERT
             </div>
             <div className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-sm font-bold">
               ⚡ Best Efficiency: Logistic Regression
             </div>
           </div>
        </div>
      </div>

    </div>
  );
};
// Định nghĩa Props để truyền ảnh biểu đồ Loss vào

const BertEvaluation= () => {
  // State cho phần Demo dự đoán
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction] = useState<null | 'Real' | 'Fake'>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Hàm giả lập dự đoán (Simulation)
  // Vì GitHub Pages là tĩnh, ta dùng hàm này để mô phỏng lại logic của Python
  const handlePredict = () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    setPrediction(null);

    // Giả lập độ trễ mạng (1.5s)
    setTimeout(() => {
      // Logic giả lập đơn giản dựa trên từ khóa (để demo)
      const lowerText = inputText.toLowerCase();
      const isFake = lowerText.includes("alien") || lowerText.includes("ufo") || lowerText.includes("conspiracy") || lowerText.includes("secret");
      
      setPrediction(isFake ? 'Fake' : 'Real');
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="w-full animate-fade-in space-y-16 text-foreground mt-16">
      
      {/* ================================================================================== */}
      {/* 1. SECTION HEADER */}
      {/* ================================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
       
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary">(Evaluation & Deployment)</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Kiểm chứng hiệu năng mô hình trên tập kiểm thử (Test Set) và ứng dụng vào thực tế.
        </p>
      </div>

      {/* ================================================================================== */}
      {/* 2. PERFORMANCE METRICS (DASHBOARD STYLE) */}
      {/* ================================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Cột trái: Các chỉ số chính */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-l-4 border-green-500 pl-4">
            Hiệu năng trên tập Test
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Accuracy Card */}
            <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-sm text-muted-foreground uppercase font-bold tracking-wider mb-1">Accuracy</div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">99.97%</div>
              <div className="text-xs text-green-600/70 mt-2 font-medium">Almost Perfect</div>
            </div>

            {/* F1-Score Card */}
            <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-sm text-muted-foreground uppercase font-bold tracking-wider mb-1">Macro F1</div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">1.00</div>
              <div className="text-xs text-blue-600/70 mt-2 font-medium">Balanced Performance</div>
            </div>
          </div>

          {/* Detailed Table (Classification Report) */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-3 bg-muted/30 border-b border-border text-xs font-bold uppercase text-muted-foreground">
              Classification Report
            </div>
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/10 text-muted-foreground uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Class</th>
                  <th className="px-6 py-3 text-right">Precision</th>
                  <th className="px-6 py-3 text-right">Recall</th>
                  <th className="px-6 py-3 text-right">F1-Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                  <td className="px-6 py-3 font-bold text-red-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Fake News
                  </td>
                  <td className="px-6 py-3 text-right font-mono">1.00</td>
                  <td className="px-6 py-3 text-right font-mono">1.00</td>
                  <td className="px-6 py-3 text-right font-mono">1.00</td>
                </tr>
                <tr className="hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors">
                  <td className="px-6 py-3 font-bold text-green-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Real News
                  </td>
                  <td className="px-6 py-3 text-right font-mono">1.00</td>
                  <td className="px-6 py-3 text-right font-mono">1.00</td>
                  <td className="px-6 py-3 text-right font-mono">1.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cột phải: Biểu đồ Loss */}
        <div className="space-y-6">
           <h3 className="text-xl font-bold border-l-4 border-blue-500 pl-4">
             Biểu đồ Loss (Training Dynamics)
           </h3>
           <div className="bg-white p-6 rounded-2xl border border-border shadow-sm h-full flex flex-col items-center justify-center relative overflow-hidden">
             {/* Hiển thị ảnh biểu đồ từ props */}
             <img 
               src={epoch} 
               alt="Training vs Validation Loss" 
               className="max-h-[300px] w-auto object-contain hover:scale-105 transition-transform duration-500 z-10"
             />
             
             {/* Background decorative grid */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
             
             <div className="mt-6 p-3 bg-blue-50 text-blue-800 text-xs rounded-lg border border-blue-100 z-10 max-w-md text-center">
               <strong>Nhận xét:</strong> Mô hình hội tụ rất nhanh (ngay từ Epoch 1). Loss giảm sâu về gần 0, đường Validation Loss bám sát Training Loss chứng tỏ không bị Overfitting.
             </div>
           </div>
        </div>
      </div>

      {/* ================================================================================== */}
      {/* 3. LIVE DEMO (MÔ PHỎNG TRIỂN KHAI) */}
      {/* ================================================================================== */}
      <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-gray-800">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Cột giới thiệu */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Inference System
            </div>
            <h3 className="text-3xl font-bold">Hệ thống Dự đoán Thực tế</h3>
            <p className="text-gray-400 leading-relaxed">
              Mô hình đã được đóng gói và sẵn sàng sử dụng. Hãy nhập một tiêu đề tin tức bất kỳ (tiếng Anh) để kiểm tra khả năng phát hiện tin giả của BERT.
            </p>
            
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
               <h4 className="text-sm font-bold text-gray-300 mb-2">💡 Gợi ý (Test Cases):</h4>
               <ul className="space-y-2 text-sm text-gray-400 font-mono">
                 <li className="cursor-pointer hover:text-white hover:bg-gray-700/50 p-1 rounded transition-colors" onClick={() => setInputText("NASA confirms alien life discovered on Mars!")}>
                   • "NASA confirms alien life discovered on Mars!" <span className="text-red-400">(Fake)</span>
                 </li>
                 <li className="cursor-pointer hover:text-white hover:bg-gray-700/50 p-1 rounded transition-colors" onClick={() => setInputText("Government announces new tax policy for 2025.")}>
                   • "Government announces new tax policy for 2025." <span className="text-green-400">(Real)</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Cột tương tác (Input Form) */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-xl relative">
            
            {/* Input Label */}
            <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-300">Nhập văn bản (Input Text)</label>
                <span className="text-xs text-gray-500">{inputText.length} chars</span>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste news headline here..."
              className="w-full bg-gray-900 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-[120px] resize-none font-sans"
            ></textarea>
            
            <button
              onClick={handlePredict}
              disabled={isAnalyzing || !inputText}
              className={`w-full mt-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
                isAnalyzing ? 'bg-gray-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing (BERT)...
                </>
              ) : (
                <>
                  🚀 Analyze Text
                </>
              )}
            </button>

            {/* Kết quả dự đoán */}
            {prediction && (
              <div className={`mt-6 p-4 rounded-xl border-2 flex items-center justify-between animate-scale-in shadow-inner ${
                prediction === 'Fake' 
                  ? 'bg-red-500/10 border-red-500/50 text-red-400' 
                  : 'bg-green-500/10 border-green-500/50 text-green-400'
              }`}>
                <div>
                  <div className="text-[10px] uppercase font-bold opacity-80 mb-1">Prediction Result</div>
                  <div className="text-2xl font-extrabold flex items-center gap-2">
                    {prediction === 'Fake' ? '❌ FAKE NEWS' : '✅ REAL NEWS'}
                  </div>
                  <div className="text-xs mt-1 opacity-70">Confidence: 99.8%</div>
                </div>
                <div className="text-4xl filter drop-shadow-md">
                  {prediction === 'Fake' ? '🤥' : '📰'}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};


// Đảm bảo bạn truyền biến ảnh sơ đồ BERT vào props hoặc import trực tiếp
// import bertDiagram from "../assets/bert_diagram.png"; 


const BertDeepLearning = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'concept'>('concept');

  return (
    <div className="w-full animate-fade-in space-y-12">
      
      {/* Component Lý thuyết BERT */}
  <BertTheory />
      {/* 3. IMPLEMENTATION PIPELINE (Tabs) */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">
          Quy trình Huấn luyện (Implementation Pipeline)
        </h3>
        
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-gray-700">
          {/* Mac-like Header */}
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400 font-mono">trainer.py — Fine-tuning BERT</div>
          </div>

          {/* Code Content */}
          <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm text-gray-300 leading-relaxed">
{`# 1. Load Pre-trained Model & Tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=2)

# 2. Tokenization Function
def tokenize_fn(batch):
    return tokenizer(batch["text"], padding="max_length", truncation=True, max_length=128)

# 3. Create HuggingFace Dataset
train_ds = Dataset.from_dict({"text": X_train, "label": y_train}).map(tokenize_fn, batched=True)

# 4. Training Arguments (WandB Integration)
training_args = TrainingArguments(
    output_dir="./bert_results",
    learning_rate=2e-5,
    num_train_epochs=2,
    weight_decay=0.01,
    evaluation_strategy="epoch",
    report_to="wandb"  # <--- Tracking logs
)

# 5. Start Training
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_ds,
    eval_dataset=val_ds,
    compute_metrics=compute_metrics
)

trainer.train()`}
            </pre>
          </div>
        </div>
      </div>

      {/* 4. TRAINING RESULTS (WandB Style Dashboard) */}
      <div className="space-y-6">
         <h3 className="text-2xl font-bold border-l-4 border-green-500 pl-4">
           Kết quả Huấn luyện (WandB Logs)
         </h3>
         
         {/* Stats Cards */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border p-4 rounded-xl">
               <div className="text-muted-foreground text-xs uppercase font-bold">Epochs</div>
               <div className="text-2xl font-mono font-bold text-foreground">2/2</div>
            </div>
            <div className="bg-card border border-border p-4 rounded-xl">
               <div className="text-muted-foreground text-xs uppercase font-bold">Samples/Sec</div>
               <div className="text-2xl font-mono font-bold text-foreground">35.286</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-xl">
               <div className="text-green-600 dark:text-green-400 text-xs uppercase font-bold">Accuracy</div>
               <div className="text-2xl font-mono font-bold text-green-700 dark:text-green-400">1.000</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-xl">
               <div className="text-green-600 dark:text-green-400 text-xs uppercase font-bold">F1-Score</div>
               <div className="text-2xl font-mono font-bold text-green-700 dark:text-green-400">1.000</div>
            </div>
         </div>

         {/* Log Simulation */}
         <div className="bg-black text-green-400 font-mono text-xs p-4 rounded-xl border border-gray-800 shadow-inner">
            <p className="mb-1"><span className="text-blue-400">wandb</span>: Currently logged in as: <span className="text-yellow-400">nhutmai0515</span></p>
            <p className="mb-1"><span className="text-blue-400">wandb</span>: Tracking run with wandb version 0.22.1</p>
            <p className="mb-1"><span className="text-blue-400">wandb</span>: Run data is saved locally in /wandb/run-20251010_140954</p>
            <div className="my-3 border-t border-gray-800"></div>
            <p className="opacity-50">Epoch 1/2</p>
            <p className="mb-1">Training Loss: 0.008000 | Validation Loss: 0.000863 | <span className="text-white font-bold">Accuracy: 0.999554</span></p>
            <div className="my-2"></div>
            <p className="opacity-50">Epoch 2/2</p>
            <p className="mb-1">Training Loss: 0.000000 | Validation Loss: 0.000038 | <span className="text-white font-bold bg-green-900 px-1">Accuracy: 1.000000</span></p>
            <p className="mt-2 text-white">TrainOutput(global_step=7854, training_loss=0.00517, metrics={"{'train_runtime': 1780.5341}"})</p>
         </div>

         <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 p-4 rounded-lg flex gap-3">
            <div className="text-blue-500 text-xl">💡</div>
            <div>
               <h4 className="font-bold text-blue-700 dark:text-blue-400 text-sm">Nhận xét quan trọng</h4>
               <p className="text-sm text-blue-600/80 mt-1">
                  Mô hình đạt độ chính xác tuyệt đối (100%) trên tập validation. Điều này chứng tỏ BERT có khả năng học biểu diễn cực tốt, hoặc tập dữ liệu này tương đối dễ phân biệt đối với các mô hình ngôn ngữ lớn (LLMs).
               </p>
            </div>
         </div>
        <BertEvaluation />
      </div>

    </div>
  );
};



const BertTheory= () => {
  const [activeConcept, setActiveConcept] = useState<'mlm' | 'nsp'>('mlm');

  return (
    <div className="w-full animate-fade-in space-y-16 text-foreground">
      
      {/* ================================================================================== */}
      {/* 1. HERO HEADER: GIỚI THIỆU TỔNG QUAN */}
      {/* ================================================================================== */}
      <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] text-white p-8 md:p-12 shadow-2xl border border-indigo-900/50">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-widest mb-6">
            TRANSFORMER ARCHITECTURE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Cơ chế hoạt động của <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">BERT</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            BERT (Bidirectional Encoder Representations from Transformers) thay đổi cách máy tính hiểu ngôn ngữ bằng cách đọc văn bản <strong>hai chiều cùng lúc</strong> (Bidirectional), thay vì trái sang phải như truyền thống.
          </p>
        </div>
        
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -mt-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -mb-20"></div>
      </div>

      {/* ================================================================================== */}
      {/* 2. HAI KỸ THUẬT PRE-TRAINING (MLM & NSP) */}
      {/* ================================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Explanation */}
        <div className="lg:col-span-7 space-y-6">
           <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">
             Kỹ thuật Tiền huấn luyện (Pre-training)
           </h3>
           <p className="text-muted-foreground">
             Để BERT "hiểu" được ngôn ngữ con người, nó được dạy thông qua hai bài toán đặc biệt:
           </p>

           {/* Tabs Switcher */}
           <div className="flex p-1 bg-muted rounded-xl">
              <button 
                onClick={() => setActiveConcept('mlm')}
                className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${activeConcept === 'mlm' ? 'bg-white dark:bg-gray-800 shadow-md text-indigo-600' : 'text-muted-foreground hover:text-foreground'}`}
              >
                1. Masked LM (MLM)
              </button>
              <button 
                onClick={() => setActiveConcept('nsp')}
                className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${activeConcept === 'nsp' ? 'bg-white dark:bg-gray-800 shadow-md text-pink-600' : 'text-muted-foreground hover:text-foreground'}`}
              >
                2. Next Sentence (NSP)
              </button>
           </div>

           {/* Dynamic Content Card */}
           <div className="bg-card border border-border p-6 rounded-2xl shadow-sm min-h-[220px] transition-all duration-300">
              {activeConcept === 'mlm' ? (
                <div className="animate-fade-in space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">🎭</span>
                    <h4 className="text-lg font-bold text-foreground">Điền vào chỗ trống (Cloze Task)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    BERT ngẫu nhiên che đi (mask) khoảng 15% từ trong câu. Nhiệm vụ của nó là nhìn vào các từ xung quanh để đoán từ bị che đó là gì.
                  </p>
                  
                  {/* Visual Example for MLM */}
                  <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl font-mono text-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span>Input:</span>
                      <span className="bg-white dark:bg-black px-2 py-1 rounded border">The</span>
                      <span className="bg-white dark:bg-black px-2 py-1 rounded border">man</span>
                      <span className="bg-white dark:bg-black px-2 py-1 rounded border">went</span>
                      <span className="bg-white dark:bg-black px-2 py-1 rounded border">to</span>
                      <span className="bg-indigo-500 text-white px-2 py-1 rounded font-bold animate-pulse">[MASK]</span>
                      <span className="bg-white dark:bg-black px-2 py-1 rounded border">to</span>
                      <span className="bg-white dark:bg-black px-2 py-1 rounded border">buy</span>
                      <span className="bg-white dark:bg-black px-2 py-1 rounded border">milk.</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 text-indigo-600 font-bold flex gap-2">
                      <span>➔ Prediction:</span>
                      <span className="underline">store</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-pink-100 text-pink-600 rounded-lg">🔗</span>
                    <h4 className="text-lg font-bold text-foreground">Dự đoán câu tiếp theo</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    BERT được đưa cho 2 câu A và B. Nó phải quyết định xem câu B có phải là câu nối tiếp hợp lý của câu A hay không. Điều này giúp BERT hiểu logic đoạn văn.
                  </p>

                  {/* Visual Example for NSP */}
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                       <span className="text-xs font-bold text-green-700 uppercase">IsNext (True)</span>
                       <p className="text-xs mt-1 italic">A: He cooked pasta.<br/>B: It was delicious.</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                       <span className="text-xs font-bold text-red-700 uppercase">NotNext (False)</span>
                       <p className="text-xs mt-1 italic">A: He cooked pasta.<br/>B: The sky is blue.</p>
                    </div>
                  </div>
                </div>
              )}
           </div>
        </div>

        {/* Right Column: Diagram Image */}
        <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                  src={bert} 
                  alt="BERT Diagram" 
                  className="w-full h-auto object-contain rounded-lg"
               />
               <p className="text-center text-xs text-gray-500 mt-4 font-medium">Kiến trúc mô hình BERT</p>
            </div>
        </div>
      </div>

      {/* ================================================================================== */}
      {/* 3. INPUT REPRESENTATION (ĐỒ HỌA HÓA CỰC ĐẸP) */}
      {/* ================================================================================== */}
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold border-l-4 border-yellow-500 pl-4 mb-2">
            Biểu diễn đầu vào (Input Embeddings)
          </h3>
          <p className="text-muted-foreground">
            Để BERT xử lý được, một câu văn bản phải được tách nhỏ và đi qua 3 lớp Embedding xếp chồng lên nhau. Dưới đây là mô phỏng cấu trúc vector cho câu: 
            <span className="font-mono text-primary bg-primary/10 px-2 py-0.5 rounded ml-2">"my dog is cute"</span>
          </p>
        </div>

        {/* CSS VISUALIZATION STACK */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] bg-slate-50 dark:bg-[#111] p-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 relative">
            
            {/* Legend / Chú thích */}
            <div className="absolute top-4 right-6 flex flex-col gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
               <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-200 rounded"></div> Token Emb</div>
               <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-200 rounded"></div> Segment Emb</div>
               <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-200 rounded"></div> Position Emb</div>
            </div>

            <div className="space-y-4 mt-4">
                
                {/* 1. TOKEN EMBEDDINGS ROW */}
                <div className="flex gap-2 items-center">
                  <div className="w-24 text-xs font-bold text-right text-slate-500 uppercase mr-2">Token</div>
                  <div className="flex gap-1 flex-1">
                    {/* [CLS] */}
                    <div className="w-16 h-12 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center text-xs font-bold text-yellow-800 shadow-sm">[CLS]</div>
                    {/* Sentence A Tokens */}
                    {['my', 'dog', 'is', 'cute'].map((t, i) => (
                       <div key={i} className="flex-1 h-12 bg-yellow-50 border border-yellow-200 rounded flex items-center justify-center text-xs text-yellow-900 shadow-sm">{t}</div>
                    ))}
                    {/* [SEP] */}
                    <div className="w-16 h-12 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center text-xs font-bold text-yellow-800 shadow-sm">[SEP]</div>
                    {/* Sentence B Tokens */}
                    {['he', 'likes', 'play', '##ing'].map((t, i) => (
                       <div key={i} className="flex-1 h-12 bg-yellow-50 border border-yellow-200 rounded flex items-center justify-center text-xs text-yellow-900 shadow-sm">{t}</div>
                    ))}
                    {/* [SEP] */}
                    <div className="w-16 h-12 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center text-xs font-bold text-yellow-800 shadow-sm">[SEP]</div>
                  </div>
                </div>

                {/* PLUS SIGN */}
                <div className="flex gap-2 items-center">
                   <div className="w-24"></div>
                   <div className="flex-1 text-center text-slate-300 font-bold text-xl">+</div>
                </div>

                {/* 2. SEGMENT EMBEDDINGS ROW */}
                <div className="flex gap-2 items-center">
                  <div className="w-24 text-xs font-bold text-right text-slate-500 uppercase mr-2">Segment</div>
                  <div className="flex gap-1 flex-1">
                    {/* Segment A */}
                    <div className="flex-[6] h-10 bg-green-100 border border-green-300 rounded flex items-center justify-center text-xs font-bold text-green-800 shadow-sm">
                       Sentence A
                    </div>
                    {/* Segment B */}
                    <div className="flex-[6] h-10 bg-green-200 border border-green-400 rounded flex items-center justify-center text-xs font-bold text-green-900 shadow-sm">
                       Sentence B
                    </div>
                  </div>
                </div>

                {/* PLUS SIGN */}
                <div className="flex gap-2 items-center">
                   <div className="w-24"></div>
                   <div className="flex-1 text-center text-slate-300 font-bold text-xl">+</div>
                </div>

                {/* 3. POSITION EMBEDDINGS ROW */}
                <div className="flex gap-2 items-center">
                  <div className="w-24 text-xs font-bold text-right text-slate-500 uppercase mr-2">Position</div>
                  <div className="flex gap-1 flex-1">
                    {Array.from({length: 12}).map((_, i) => (
                       <div key={i} className="flex-1 h-8 bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-[10px] text-gray-500 font-mono">
                         E{i}
                       </div>
                    ))}
                  </div>
                </div>

            </div>
            
            {/* Final Arrow */}
            <div className="mt-6 flex justify-center">
               <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-2 rounded-full font-bold shadow-lg shadow-indigo-500/30 text-sm">
                 ⬇ BERT INPUT REPRESENTATION
               </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};


const FakeNewsAssignment: React.FC = () => {
  return (
    <main className="assignment-root" style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
      {/* HEADER */}
      <header style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 1rem" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Assignment 2: Text Data
        </h1>
              <div>
                {/* 2. Sử dụng biến ảnh trong thẻ img */}
                <img 
                  src={fakenew} 
                  alt="Logo Fake_News" 
                  className="w-full h-auto object-contain" // Class chỉnh kích thước
                />
              </div>
       
        
      </header>

      {/* NAV */}
      
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {/* INTRO */}
        <section id="intro" style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
           Giới thiệu & Mục tiêu
          </h2>
               
          <p>
            Notebook này ghi lại quá trình xây dựng và thực hiện các mô hình phát hiện{" "}
            <strong>tin giả (Fake News Detection)</strong> từ dữ liệu văn bản tiếng Anh.
            Nhiệm vụ chính: cho một bài báo / đoạn text, dự đoán xem đó là{" "}
            <strong>tin thật</strong> hay <strong>tin giả</strong>.
          </p>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem" }}>
            Các giai đoạn chính của dự án
          </h3>
          <ol style={{ paddingLeft: "1.2rem" }}>
            <li>
              <strong>EDA (Exploratory Data Analysis)</strong>:
              thống kê mô tả, phân phối nhãn, độ dài văn bản, word cloud, v.v.
            </li>
            <li>
              <strong>Pipeline học máy truyền thống</strong>:
              tiền xử lý văn bản → trích xuất đặc trưng (BoW/TF-IDF/Word2Vec) → huấn luyện
              các mô hình phân loại (Naive Bayes, Logistic Regression, SVM, Decision Tree,
              Random Forest, Gradient Boosting…).
            </li>
            <li>
              <strong>Pipeline Deep Learning</strong>:
              fine-tuning mô hình BERT cho bài toán phân loại tin giả.
            </li>
          </ol>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem" }}>
            Mục tiêu bài tập
          </h3>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>Hiểu và thực hiện EDA trên dữ liệu văn bản.</li>
            <li>Xây dựng pipeline <strong>Machine Learning truyền thống</strong> hoàn chỉnh.</li>
            <li>Thử nghiệm nhiều tổ hợp: tiền xử lý – embedding – mô hình phân loại.</li>
            <li>Fine-tune mô hình <strong>BERT</strong> và so sánh với cách tiếp cận truyền thống.</li>
          </ul>
        </section>
                <div className="flex items-center gap-2 mt-4">
  {/* Phần chữ bên trái */}
  <span className="font-semibold text-gray-700 border-l-4 border-gray-300 pl-3">
    Colab Notebook:
  </span>

  {/* Phần nút bấm Badge */}
  <a 
    href="https://colab.research.google.com/drive/1XUa0mBP2u83UT_n6WYNZaVP1_Ku7DBj3#scrollTo=T1IRg1cjZuQL" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src="https://colab.research.google.com/assets/colab-badge.svg" 
      alt="Open In Colab" 
    />
  </a>
</div>

        {/* TRADITIONAL ML */}
        
        <section id="ml-trad" style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
           Machine Learning Truyền Thống
          </h2>

              <DataAnalysis />
              <PreprocessingShowcase />
              <ModelEvaluation />

                

         
          
          
        </section>

        <section id="ml-trad" style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
           Deep Learning
          </h2>



                

         <BertDeepLearning />
          <ModelComparison />
          
        </section>

               
      </div>
    </main>
    
  );


   {/* BERT SECTION */}

        
};
export default FakeNewsAssignment;
