import { Link } from "react-router-dom";

const BTL1 = () => {
  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">&larr; Quay lại trang chủ</Link>
          <h1 className="text-4xl font-bold text-foreground mt-2">BTL 1: Dữ liệu dạng bảng</h1>
          <p className="text-muted-foreground mt-2">
            Pipeline học máy truyền thống: Xử lý dữ liệu thiếu, Encoding và mô hình hóa.
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1: EDA */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Exploratory Data Analysis (EDA)</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Phân tích thống kê mô tả (Mean, Median, Std).</li>
              <li>Trực quan hóa phân phối dữ liệu (Histogram, Boxplot).</li>
              [cite_start]<li>Phát hiện <strong>Missing Values</strong> và giá trị ngoại lai (Outliers)[cite: 70].</li>
            </ul>
          </div>

          {/* Step 2: Preprocessing */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Tiền xử lý dữ liệu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium text-foreground">Imputation</h3>
                <p className="text-sm text-muted-foreground">Điền giá trị thiếu bằng Mean/Median/Mode.</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium text-foreground">Encoding</h3>
                [cite_start]<p className="text-sm text-muted-foreground">Xử lý Categorical Value (One-Hot / Label Encoding)[cite: 71].</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium text-foreground">Scaling</h3>
                [cite_start]<p className="text-sm text-muted-foreground">MinMaxScaler hoặc StandardScaler[cite: 77].</p>
              </div>
            </div>
          </div>

          {/* Step 3: Feature Engineering */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Trích xuất đặc trưng</h2>
            <p className="text-muted-foreground mb-4">
              [cite_start]Áp dụng <strong>PCA</strong> để giảm chiều dữ liệu, giữ lại 90-95% phương sai[cite: 78].
            </p>
          </div>

          {/* Step 4: Model Training */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Huấn luyện & Đánh giá</h2>
            <div className="space-y-4">
              [cite_start]<p className="text-muted-foreground">So sánh hiệu quả giữa các mô hình[cite: 79]:</p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Logistic Regression</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">SVM</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Random Forest</span>
              </div>
              <div className="mt-4 p-4 bg-muted rounded border border-dashed text-center text-sm text-muted-foreground">
                [Khu vực hiển thị biểu đồ so sánh Accuracy / F1-Score]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTL1;