import { Link } from "react-router-dom";

const HPMR = () => {
  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">&larr; Quay lại trang chủ</Link>
          <h1 className="text-4xl font-bold text-foreground mt-2">Học phần mở rộng (KSTN)</h1>
          <p className="text-muted-foreground mt-2">
            [cite_start]Triển khai các mô hình xác suất nâng cao cho các bài toán phức tạp[cite: 159].
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Topic 1 */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-2">1. Bayesian Network</h3>
            <p className="text-sm text-muted-foreground mb-4">
              [cite_start]Hiện thực mạng Bayesian và các thuật toán suy luận (Exact/Approximate Inference)[cite: 161, 162].
            </p>
            <div className="text-xs bg-muted p-2 rounded">
              [cite_start]Ứng dụng: Dự đoán dựa trên quan hệ nhân quả[cite: 163].
            </div>
          </div>

          {/* Topic 2 */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-2">2. Hidden Markov Model</h3>
            <p className="text-sm text-muted-foreground mb-4">
              [cite_start]Hiện thực thuật toán Forward, Viterbi và Baum-Welch[cite: 166, 167].
            </p>
            <div className="text-xs bg-muted p-2 rounded">
              [cite_start]Ứng dụng: Nhận dạng chuỗi ký tự, phân tích tín hiệu[cite: 168].
            </div>
          </div>

          {/* Topic 3 */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-primary mb-2">3. Conditional Random Field</h3>
            <p className="text-sm text-muted-foreground mb-4">
              [cite_start]Hiện thực CRF và thuật toán suy luận cơ bản[cite: 169, 170].
            </p>
            <div className="text-xs bg-muted p-2 rounded">
              [cite_start]Ứng dụng: Gán nhãn chuỗi (NER - Named Entity Recognition)[cite: 171].
            </div>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-4">Yêu cầu triển khai</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            [cite_start]<li>Tự xây dựng mô hình hoặc sử dụng thư viện thích hợp[cite: 173].</li>
            [cite_start]<li>Minh họa bằng một bài toán tiêu biểu (Case Study)[cite: 175].</li>
            [cite_start]<li>Đánh giá ưu/nhược điểm thông qua thí nghiệm thực tế[cite: 174].</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HPMR;