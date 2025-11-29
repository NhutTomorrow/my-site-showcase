import { Link } from "react-router-dom";

const BTL3 = () => {
  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">&larr; Quay lại trang chủ</Link>
          <h1 className="text-4xl font-bold text-foreground mt-2">BTL 3: Dữ liệu hình ảnh</h1>
          <p className="text-muted-foreground mt-2">
            Kết hợp Pre-trained Deep Learning Models để trích xuất đặc trưng cho Machine Learning.
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1: EDA */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Phân tích dữ liệu ảnh</h2>
            <p className="text-muted-foreground">
              [cite_start]Kiểm tra kích thước ảnh, số kênh màu, và độ cân bằng giữa các lớp (Class Distribution)[cite: 102].
            </p>
          </div>

          {/* Step 2: Feature Extraction Pipeline */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Trích xuất đặc trưng (Deep Features)</h2>
            <p className="text-muted-foreground mb-4">
              [cite_start]Sử dụng các mô hình đã huấn luyện trước (Pre-trained) để rút trích đặc trưng và lưu thành file <code>.npy</code>[cite: 103, 107].
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="border p-4 rounded-lg hover:border-primary transition-colors cursor-pointer">
                <h3 className="font-bold text-foreground">CNN Based</h3>
                [cite_start]<p className="text-sm text-muted-foreground">VGG16, ResNet, EfficientNet[cite: 105].</p>
              </div>
              <div className="border p-4 rounded-lg hover:border-primary transition-colors cursor-pointer">
                <h3 className="font-bold text-foreground">Transformer Based</h3>
                [cite_start]<p className="text-sm text-muted-foreground">Vision Transformer (ViT), Swin Transformer[cite: 106].</p>
              </div>
            </div>
          </div>

          {/* Step 3: Classification */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Phân loại & Đánh giá</h2>
            <p className="text-muted-foreground mb-2">
              [cite_start]Sử dụng đặc trưng Deep Learning làm đầu vào cho các thuật toán truyền thống[cite: 108]:
            </p>
            <ul className="list-disc list-inside text-muted-foreground ml-4">
              <li>Random Forest</li>
              <li>Support Vector Machine (SVM)</li>
              <li>Logistic Regression</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTL3;