import { Link } from "react-router-dom";

const BTL2 = () => {
  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">&larr; Quay lại trang chủ</Link>
          <h1 className="text-4xl font-bold text-foreground mt-2">BTL 2: Dữ liệu văn bản</h1>
          <p className="text-muted-foreground mt-2">
            So sánh phương pháp trích xuất đặc trưng: Truyền thống vs Deep Learning Embedding.
          </p>
        </div>

        <div className="space-y-8">
           {/* Step 1: EDA & Preprocessing */}
           <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. EDA & Tiền xử lý</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              [cite_start]<li>Thống kê số lượng từ, phân phối độ dài câu[cite: 95].</li>
              [cite_start]<li>Tokenization, loại bỏ Stopwords, Padding chuỗi[cite: 94].</li>
            </ul>
          </div>

          {/* Step 2: Feature Extraction Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-3">Phương pháp Truyền thống</h3>
              [cite_start]<p className="text-sm text-muted-foreground mb-4">Sử dụng các kỹ thuật thống kê tần suất từ[cite: 88].</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Bag-of-Words</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">TF-IDF</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">n-gram</span>
              </div>
            </div>

            {/* Modern */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm ring-1 ring-primary/20">
              <h3 className="text-xl font-bold text-primary mb-3">Deep Learning Embeddings</h3>
              [cite_start]<p className="text-sm text-muted-foreground mb-4">Sử dụng Pre-trained Models để vector hóa[cite: 89, 91].</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs">Word2Vec / GloVe</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs">BERT / DistilBERT</span>
              </div>
            </div>
          </div>

          {/* Step 3: Modeling */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Huấn luyện mô hình</h2>
            <p className="text-muted-foreground mb-4">
              [cite_start]Đầu vào là các vector đặc trưng (định dạng .npy/.h5) đưa vào các bộ phân loại[cite: 92].
            </p>
            <div className="p-4 bg-muted rounded border border-dashed">
              <h4 className="font-semibold text-foreground mb-2">Kết quả thử nghiệm:</h4>
              <p className="text-sm text-muted-foreground">Naive Bayes | Logistic Regression | Fine-tuning BERT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTL2;