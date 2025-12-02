import { Link } from "react-router-dom";
import chart1 from "@/assets/btl1/heatmap.png";
import chart2 from "@/assets/btl1/residual.png";
import chart3 from "@/assets/btl1/parity.png";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BTL1 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
          ← Quay lại trang chủ
        </Link>

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            BTL 1: Dự đoán Giá Ô tô
          </h1>
          <p className="text-muted-foreground text-lg">
            Xây dựng Pipeline Học máy Truyền thống cho Bài toán Hồi quy.
          </p>
        </div>

        {/* Section 1: Giới thiệu */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            1. Giới thiệu về đề tài
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3">
                <li>
                  <strong className="text-foreground">Đề tài:</strong> Dự án tập trung vào bài toán <strong>dự đoán giá ô tô (Car Price Prediction)</strong> từ một tập dữ liệu dạng bảng. Mục tiêu chính là xây dựng một hệ thống có khả năng dự đoán chính xác giá xe, hỗ trợ người dùng đưa ra quyết định mua bán hoặc định giá xe một cách hiệu quả.
                </li>
                <li>
                  <strong className="text-foreground">Xây dựng Pipeline:</strong> Để đạt được mục tiêu này, chúng tôi xây dựng một <strong>pipeline học máy truyền thống</strong> được thiết kế linh hoạt, bao gồm các bước tuần tự và có thể cấu hình: <strong>EDA → Tiền xử lý dữ liệu → Trích xuất & Lựa chọn đặc trưng → Huấn luyện mô hình → Đánh giá mô hình</strong>.
                </li>
                <li>
                  <strong className="text-foreground">Khả năng cấu hình:</strong> Pipeline cho phép tùy chỉnh các kỹ thuật và tham số ở từng giai đoạn, ví dụ: lựa chọn các phương pháp Scaling (MinMaxScaler, StandardScaler), tỷ lệ PCA (90%, 95%, 99% phương sai giữ lại), và các thuật toán mô hình (Linear Regression, SVR, Random Forest).
                </li>
                <li>
                  <strong className="text-foreground">Đặc điểm dữ liệu & Yêu cầu:</strong> Dữ liệu sử dụng đáp ứng các yêu cầu của môn học, bao gồm missing values (để thực hành imputation), categorical features (để thực hành encoding), và kích thước đủ lớn để đảm bảo tính ý nghĩa của pipeline.
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Section 2: EDA */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            2. EDA (Khám phá dữ liệu)
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Tổng quan</h3>
                <p>Bộ dữ liệu ban đầu gồm 19,237 bản ghi và 18 cột. Đã xử lý các giá trị đặc biệt ('-', 'km') và loại bỏ 313 bản ghi trùng lặp (1.63%).</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phân tích biến số (Numerical Features)</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Price (Biến mục tiêu):</strong> Phân phối lệch phải, gợi ý cần np.log1p để chuẩn hóa.</li>
                  <li>• <strong>Levy, Mileage:</strong> Có nhiều ngoại lai đáng kể, cần xử lý bằng IQR clipping.</li>
                  <li>• <strong>Mối tương quan:</strong> Prod. year và Levy tương quan dương mạnh với Price. Mileage tương quan âm với Price. Engine volume và Cylinders có tương quan mạnh (0.75), dẫn đến đa cộng tuyến.</li>
                </ul>
              </div>

              {/* Chart 1 */}
              <div className="my-6">
                <img src={chart1} alt="Phân tích EDA" className="w-full rounded-lg border" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phân tích biến phân loại (Categorical Features)</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Manufacturer, Model: Số lượng danh mục lớn, phân phối 'đuôi dài', đặt ra thách thức cho One-Hot Encoding.</li>
                  <li>• Category, Fuel type, Gear box type: Phân phối tương đối cân bằng, dễ dàng mã hóa hơn.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Lựa chọn biến độc lập (Input Features)</h3>
                <p className="mb-3">Dựa trên phân tích EDA và ma trận tương quan, các biến sau được chọn:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Biến số</h4>
                    <p>Sử dụng các biến số chính.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Levy</Badge>
                      <Badge variant="secondary">Mileage</Badge>
                      <Badge variant="secondary">Doors</Badge>
                      <Badge variant="secondary">Car_Age</Badge>
                      <Badge variant="secondary">Engine_Turbo</Badge>
                      <Badge variant="secondary">Airbags</Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Biến phân loại</h4>
                    <p>Các biến phân loại được chọn.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Manufacturer</Badge>
                      <Badge variant="secondary">Category</Badge>
                      <Badge variant="secondary">Fuel type</Badge>
                      <Badge variant="secondary">Gear box type</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-sm">
                  <strong className="text-foreground">Loại bỏ/Thay thế:</strong> ID, Model, Prod. year (thay bằng Car_Age), Engine volume (vì đã có Engine_Turbo và tương quan cao với Cylinders), Color, Wheel, Drive wheels (do tương quan thấp hoặc ít thông tin đóng góp).
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Xác định các đặc điểm quan trọng của dữ liệu, mối quan hệ giữa các biến, và đưa ra quyết định có cơ sở về việc lựa chọn và xử lý đặc trưng đầu vào.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 3: Tiền xử lý */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            3. Tiền xử lý dữ liệu
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Làm sạch dữ liệu</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Levy:</strong> Chuyển '-' thành NaN, sau đó sang kiểu float.</li>
                  <li>• <strong>Mileage:</strong> Tách 'km', chuyển sang kiểu int.</li>
                  <li>• <strong>Engine volume:</strong> Trích xuất 'Turbo' thành Engine_Turbo (0/1), chuyển phần còn lại sang float.</li>
                  <li>• <strong>Doors:</strong> Ánh xạ các chuỗi ('02-Mar', '04-May', '&gt;=5') sang số nguyên (2, 4, 5).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Chia tập dữ liệu</h3>
                <p>Dữ liệu được chia train/test (80/20) với random_state=42 <strong className="text-foreground">trước mọi xử lý tiếp theo</strong> để tránh rò rỉ dữ liệu.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Biến đổi Target</h3>
                <p>Áp dụng np.log1p cho y_train và y_test để giảm độ lệch phân phối giá.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Xử lý ngoại lai (Outlier Clipping)</h3>
                <p>Áp dụng IQR clipping cho Mileage, Levy và Price (trên y_train). Các ngưỡng được học <strong className="text-foreground">chỉ từ tập huấn luyện</strong>.</p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Các bước tiền xử lý được thực hiện cẩn thận, tuân thủ nguyên tắc chống rò rỉ dữ liệu bằng cách chia tập train/test sớm và học các tham số tiền xử lý chỉ trên tập huấn luyện.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 4: Trích xuất đặc trưng */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            4. Trích xuất đặc trưng và giảm số chiều dữ liệu
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Trích xuất đặc trưng (Feature Engineering)</h3>
                <p>Tạo đặc trưng mới Car_Age = 2025 - Prod. year.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Lựa chọn đặc trưng (Feature Selection)</h3>
                <p>10 đặc trưng chính đã được lựa chọn để đưa vào mô hình (như đã nêu trong phần EDA).</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Chuyển đổi đặc trưng (Feature Transformation)</h3>
                <p className="mb-2">Sử dụng ColumnTransformer:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-foreground">Đặc trưng số:</strong> SimpleImputer (mean) → StandardScaler (hoặc MinMaxScaler tùy cấu hình).</li>
                  <li>• <strong className="text-foreground">Đặc trưng phân loại:</strong> SimpleImputer (most_frequent) → OneHotEncoder (handle_unknown='ignore').</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Giảm số chiều (Dimensionality Reduction - PCA)</h3>
                <p>Sau khi chuyển đổi, PCA được áp dụng để giảm số chiều, giữ lại 90% phương sai. Điều này giúp giảm thiểu đa cộng tuyến, tăng tốc độ huấn luyện và cải thiện hiệu suất.</p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Kết hợp feature engineering có ý nghĩa, feature selection có chọn lọc và feature transformation toàn diện (bao gồm imputation, scaling, encoding) cùng với PCA tạo ra một tập dữ liệu đầu vào tối ưu cho mô hình.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 5: Huấn luyện mô hình */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            5. Huấn luyện Mô hình
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mục tiêu</h3>
                <p>Huấn luyện các mô hình hồi quy trên tập dữ liệu đã xử lý (X_train_pca, y_train) để tìm ra mô hình phù hợp nhất.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Các mô hình được sử dụng</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Linear Regression (mô hình cơ sở).</li>
                  <li>• SVR (Support Vector Regressor).</li>
                  <li>• Random Forest Regressor.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quá trình huấn luyện</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Mỗi mô hình được đóng gói trong một Pipeline.</li>
                  <li>• Sử dụng GridSearchCV với KFold cross-validation (3 folds, random_state=42) để tinh chỉnh siêu tham số.</li>
                  <li>• Tiêu chí đánh giá: neg_root_mean_squared_error.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cấu hình siêu tham số (param_grids) cho GridSearchCV</h3>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <strong className="text-foreground">Linear Regression:</strong>
                    <p className="text-sm mt-1">{`{}`}</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <strong className="text-foreground">SVR:</strong>
                    <pre className="text-xs mt-1 whitespace-pre-wrap">
{`{'model__kernel': ['rbf'],
 'model__C': [1.0, 10.0, 100.0],
 'model__epsilon': [0.1, 0.2, 0.5],
 'model__gamma': ['scale', 'auto']}`}
                    </pre>
                  </div>
                  <div className="border rounded-lg p-3">
                    <strong className="text-foreground">Random Forest Regressor:</strong>
                    <pre className="text-xs mt-1 whitespace-pre-wrap">
{`{'model__n_estimators': [200, 400],
 'model__max_depth': [null, 10, 20],
 'model__min_samples_split': [2, 5],
 'model__min_samples_leaf': [1, 2],
 'model__max_features': ['sqrt', 'log2']}`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Áp dụng GridSearchCV và cross-validation để tìm siêu tham số tối ưu một cách có hệ thống, đồng thời so sánh hiệu suất giữa các mô hình đa dạng.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 6: Đánh giá mô hình */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            6. Đánh giá mô hình
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Chỉ số đánh giá</h3>
                <p>MAE, RMSE (trên giá gốc) và R² (trên log-transformed và giá gốc).</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Kết quả tổng hợp trên tập kiểm tra (Test set)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-2 text-left">Mô hình</th>
                        <th className="border border-border px-4 py-2 text-right">MAE (real)</th>
                        <th className="border border-border px-4 py-2 text-right">RMSE (real)</th>
                        <th className="border border-border px-4 py-2 text-right">R² (test_real)</th>
                        <th className="border border-border px-4 py-2 text-right">R² (test_log)</th>
                        <th className="border border-border px-4 py-2 text-right">R² (train_log)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2 font-semibold">Random Forest</td>
                        <td className="border border-border px-4 py-2 text-right">5,775</td>
                        <td className="border border-border px-4 py-2 text-right">12,889</td>
                        <td className="border border-border px-4 py-2 text-right">0.502</td>
                        <td className="border border-border px-4 py-2 text-right">0.557</td>
                        <td className="border border-border px-4 py-2 text-right">0.932</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-semibold">SVR</td>
                        <td className="border border-border px-4 py-2 text-right">6,942</td>
                        <td className="border border-border px-4 py-2 text-right">13,773</td>
                        <td className="border border-border px-4 py-2 text-right">0.452</td>
                        <td className="border border-border px-4 py-2 text-right">0.438</td>
                        <td className="border border-border px-4 py-2 text-right">0.602</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-semibold">Linear</td>
                        <td className="border border-border px-4 py-2 text-right">9,926</td>
                        <td className="border border-border px-4 py-2 text-right">17,621</td>
                        <td className="border border-border px-4 py-2 text-right">0.103</td>
                        <td className="border border-border px-4 py-2 text-right">0.191</td>
                        <td className="border border-border px-4 py-2 text-right">0.262</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Nhận xét mô hình trên tập kiểm tra</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-foreground">Random Forest</strong> cho thấy hiệu suất vượt trội với MAE thấp nhất và R² cao nhất. Tuy nhiên, R² train (0.932) cao hơn đáng kể so với R² test (0.557) cho thấy có hiện tượng overfitting nhẹ.</li>
                  <li>• <strong className="text-foreground">SVR</strong> hoạt động tốt hơn Linear Regression nhưng kém hơn Random Forest.</li>
                  <li>• <strong className="text-foreground">Linear Regression</strong> có hiệu suất thấp nhất, khẳng định mối quan hệ phi tuyến tính trong dữ liệu.</li>
                </ul>
              </div>

              {/* Chart 3 */}
              <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div>
                      <img src={chart2} alt="Quá trình huấn luyện" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">Quá trình huấn luyện</p>
                    </div>
                    <div>
                      <img src={chart3} alt="Biểu đồ chẩn đoán" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">Biểu đồ chẩn đoán</p>
                    </div>
                  </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phân tích Biểu đồ chẩn đoán (Diagnostic Plots)</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-foreground">Phân phối phần dư (Train):</strong> Có 'đuôi phải dài', chỉ ra mô hình có xu hướng dự đoán thấp hơn giá trị thực cho các xe có giá cao (underpredict).</li>
                  <li>• <strong className="text-foreground">Parity Plot (Test):</strong> Các điểm dữ liệu tụ dưới đường y=x ở phân khúc giá cao, xác nhận hiện tượng underpricing (dự đoán thấp) đối với các xe đắt tiền.</li>
                </ul>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Đánh giá toàn diện bằng nhiều chỉ số, so sánh hiệu suất giữa các mô hình và phân tích sâu sắc các biểu đồ chẩn đoán để hiểu rõ hơn về các điểm mạnh, điểm yếu và xu hướng sai sót của mô hình.
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default BTL1;
