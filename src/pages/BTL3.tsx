import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import chart1 from "@/assets//btl3/chart1.png";
import chart2 from "@/assets//btl3/chart2.png";
import chart3 from "@/assets//btl3/chart3.png";
import chart4 from "@/assets//btl3/chart4.png";
import chart5 from "@/assets//btl3/chart5.png";
import chart6 from "@/assets//btl3/chart6.png";
import chart7 from "@/assets//btl3/chart7.png";
import chart8 from "@/assets//btl3/chart8.png";
import chart9 from "@/assets//btl3/chart9.png";
import chart10 from "@/assets//btl3/chart10.png";
import chart11 from "@/assets//btl3/chart11.png";
import chart12 from "@/assets//btl3/chart12.png";



const BTL3 = () => {
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
            BTL 3: Phân loại 16 loài hoa
          </h1>
          <p className="text-muted-foreground text-lg">
            Machine Learning & Deep Learning cho bài toán phân loại với tập dữ liệu ảnh
          </p>
        </div>

        {/* Section 1: Giới thiệu */}
        <section id="gioi-thieu" className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            1. Giới thiệu đề tài
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Bài tập lớn số 3 tập trung vào bài toán <strong className="text-foreground">phân loại 16 loài hoa</strong> dựa trên bộ dữ liệu <strong className="text-foreground">Flowers</strong>, gồm <strong className="text-foreground">15.740 ảnh RGB</strong>, mỗi ảnh kích thước <strong className="text-foreground">256×256 pixel</strong>. Đây là một bài toán phân loại ảnh đa lớp với độ phức tạp vừa phải nhưng đa dạng đủ để đánh giá khả năng phân tách của cả mô hình truyền thống lẫn mô hình học sâu.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mục tiêu của đề tài</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Khảo sát dữ liệu (EDA) nhằm hiểu cấu trúc và phân bố.</li>
                  <li>• Tiền xử lý dữ liệu (preprocessing).</li>
                  <li>• Trích xuất đặc trưng bằng các mô hình pretrained như <strong className="text-foreground">ResNet50</strong> và <strong className="text-foreground">EfficientNet-B0</strong>.</li>
                  <li>• Huấn luyện và đánh giá các mô hình học máy truyền thống (Logistic Regression, SVM-RBF, Random Forest).</li>
                  <li>• Huấn luyện mô hình deep learning bằng fine-tuning ResNet18.</li>
                  <li>• So sánh các pipeline ML truyền thống và deep learning.</li>
                  <li>• Trực quan hóa kết quả cuối cùng và dự đoán mẫu.</li>
                </ul>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Toàn bộ quy trình này giúp đánh giá sự khác biệt giữa cách tiếp cận "feature extraction → ML", và cách tiếp cận "end-to-end fine-tuning" hiện đại.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 2: EDA */}
        <section id="eda" className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            2. Phân tích dữ liệu ban đầu (EDA)
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Tổng quan dữ liệu</h3>
                <p>Dataset <strong className="text-foreground">Flowers-16</strong> gồm <strong className="text-foreground">16 lớp hoa</strong> với tổng cộng <strong className="text-foreground">15.740 ảnh</strong>. Các lớp phân bố khá đồng đều, số lượng mỗi lớp nằm khoảng <strong className="text-foreground">700–1050 ảnh</strong>. Điều này đảm bảo dữ liệu không bị lệch lớp và phù hợp để huấn luyện các mô hình phân loại đa lớp.</p>
              </div>

              {/* Chart - Distribution */}
              <div className="my-6">
                <img src={chart1} alt="Phân bố số lượng ảnh theo từng lớp hoa" className="w-full rounded-lg border" />
                <p className="mt-2 text-sm text-center">Hình 2.1: Phân bố số lượng ảnh theo từng lớp hoa trong dataset</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2.2 Kích thước ảnh & kênh màu</h3>
                <p className="mb-3">Kiểm tra ngẫu nhiên <strong className="text-foreground">300 ảnh</strong> từ dataset:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <p className="text-sm">Ảnh 256×256 pixel</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">3 kênh</div>
                    <p className="text-sm">RGB đầy đủ</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">0</div>
                    <p className="text-sm">Ảnh lỗi/grayscale</p>
                  </div>
                </div>
                <p className="mt-3">Tất cả ảnh đều có 3 kênh màu RGB. Không có ảnh lỗi, ảnh grayscale hoặc RGBA.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2.3 Hiển thị mẫu ảnh</h3>
                <p className="mb-3">Ảnh trong dataset có nhiều đặc trưng màu sắc và hình thái đa dạng:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">Sunflower: vàng rực, tâm tối</Badge>
                  <Badge variant="secondary">Rose: đỏ, nhiều lớp cánh</Badge>
                  <Badge variant="secondary">Dandelion: trắng/xám dạng cụm</Badge>
                  <Badge variant="secondary">California Poppy: vàng/cam</Badge>
                  <Badge variant="secondary">Iris: tím đậm đặc trưng</Badge>
                </div>
                <p>Dataset rõ ràng, sắc nét, ít nhiễu — phù hợp đưa vào mạng deep learning.</p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                <strong className="text-foreground">Kết luận EDA:</strong> Dataset sạch, cân bằng giữa các lớp. Không cần xử lý ảnh lỗi hay làm sạch dữ liệu. Phù hợp để áp dụng tiền xử lý nâng cao và các mô hình hiện đại.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 3: Preprocessing */}
        <section id="preprocessing" className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            3. Tiền xử lý dữ liệu (Data Preprocessing)
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Chuẩn hóa ảnh</h3>
                <p className="mb-3">Các bước chuẩn hóa ảnh trước khi đưa vào mô hình:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-foreground">Resize:</strong> Chuẩn hóa kích thước về 256×256 pixel cho tất cả ảnh.</li>
                  <li>• <strong className="text-foreground">Normalize:</strong> Chuẩn hóa theo thống kê ImageNet (mean/std chuẩn).</li>
                  <li>• <strong className="text-foreground">ToTensor:</strong> Chuyển đổi sang tensor PyTorch để xử lý GPU.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Data Augmentation</h3>
                <p className="mb-3">Tăng đa dạng ảnh huấn luyện bằng các kỹ thuật augmentation:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">Random Horizontal Flip</Badge>
                  <Badge variant="secondary">Random Rotation ±15°</Badge>
                  <Badge variant="secondary">ColorJitter</Badge>
                  <Badge variant="secondary">Random Resized Crop</Badge>
                </div>
                <p>Augmentation giúp cải thiện khả năng tổng quát hóa và tránh overfitting trong quá trình huấn luyện.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3.3 Chia dữ liệu Train–Validation–Test</h3>
                <p className="mb-3">Tỷ lệ chia dữ liệu:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-3">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">80%</div>
                    <p className="text-sm">Train</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">10%</div>
                    <p className="text-sm">Validation</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">10%</div>
                    <p className="text-sm">Test</p>
                  </div>
                </div>
                <p className="mb-2">Sử dụng <strong className="text-foreground">stratified split</strong> để giữ nguyên phân phối nhãn trong mỗi tập.</p>
                <ul className="space-y-2 ml-4">
                  <li>• Không trùng ảnh giữa các tập (train/val/test).</li>
                  <li>• Dữ liệu sau chia vẫn giữ tính cân bằng nhãn.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3.4 DataLoader Configuration</h3>
                <p className="mb-3">Cấu hình DataLoader để tối ưu hiệu suất huấn luyện:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-2 text-left">Tham số</th>
                        <th className="border border-border px-4 py-2 text-left">Giá trị</th>
                        <th className="border border-border px-4 py-2 text-left">Mô tả</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-primary">batch_size</td>
                        <td className="border border-border px-4 py-2">64</td>
                        <td className="border border-border px-4 py-2">Số ảnh mỗi batch</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-primary">shuffle</td>
                        <td className="border border-border px-4 py-2">True</td>
                        <td className="border border-border px-4 py-2">Xáo trộn dữ liệu train</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-primary">num_workers</td>
                        <td className="border border-border px-4 py-2">Tối ưu</td>
                        <td className="border border-border px-4 py-2">Đa luồng load dữ liệu GPU</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-primary">pin_memory</td>
                        <td className="border border-border px-4 py-2">True</td>
                        <td className="border border-border px-4 py-2">Tăng tốc độ transfer GPU</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                <strong className="text-foreground">Kết luận Preprocessing:</strong> Dữ liệu đã được chuẩn hóa và augmentation đầy đủ. Chia dữ liệu đảm bảo stratified và không trùng lặp. Sẵn sàng cho bước trích xuất đặc trưng hoặc huấn luyện deep learning.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 4: Feature Extraction */}
        <section id="features" className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            4. Trích xuất và trực quan hóa đặc trưng
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Backbone dùng để trích đặc trưng</h3>
                <p className="mb-3">Sử dụng hai mô hình pretrained từ torchvision ở chế độ ImageNet và bỏ lớp FC cuối, chỉ giữ phần CNN để trích đặc trưng:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">ResNet50</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>23.5M</strong> tham số</li>
                      <li>• Vector đặc trưng <strong>2048 chiều</strong></li>
                      <li>• Đặc trưng đa dạng, tách lớp mạnh</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">EfficientNet-B0</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>5.3M</strong> tham số (nhẹ hơn)</li>
                      <li>• Vector đặc trưng <strong>1280 chiều</strong></li>
                      <li>• Tốc độ trích xuất nhanh</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Trực quan hóa đặc trưng</h3>
                
                {/* PCA & t-SNE - ResNet50 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Phân bố giá trị đặc trưng</h4>
                  <p className="text-sm mb-3">Các cụm tách biệt rõ ràng, cho thấy đặc trưng từ ResNet50 có khả năng phân loại cao.</p>
                  <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div>
                      <img src={chart2} alt="Phân bố giá trị đặc trưng của ResNet50" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">Phân bố đặc trưng - ResNet50</p>
                    </div>
                    <div>
                      <img src={chart3} alt="Phân bố giá trị đặc trưng của EfficientNet-B0" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">Phân bố đặc trưng - ResNet50</p>
                    </div>
                  </div>
                </div>

                {/* PCA */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">PCA</h4>
                  <p className="text-sm mb-3">Các cụm tách biệt rõ ràng, cho thấy đặc trưng từ ResNet50 có khả năng phân loại cao.</p>
                  <p className="text-sm mb-3">EfficientNet-B0 có cụm mềm hơn nhưng vẫn có cấu trúc tốt, phù hợp với các bộ phân loại tuyến tính.</p>
                  <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div>
                      <img src={chart4} alt="PCA visualization của ResNet50" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">PCA - ResNet50</p>
                    </div>
                    <div>
                      <img src={chart5} alt="PCA visualization của EfficientNet-B0" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">PCA - EfficientNet-B0</p>
                    </div>
                  </div>
                </div>

                {/* Feature Heatmap */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Feature Heatmap</h4>
                  <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div>
                      <img src={chart6} alt="Heatmap đặc trưng ResNet50" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">Heatmap - ResNet50: Biến thiên mạnh, đặc trưng phong phú</p>
                    </div>
                    <div>
                      <img src={chart7} alt="Heatmap đặc trưng EfficientNet-B0" className="w-full rounded-lg border" />
                      <p className="mt-2 text-sm text-center">Heatmap - EfficientNet-B0: Mượt và ổn định hơn</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 ResNet50 tạo đặc trưng phong phú hơn với biến thiên mạnh, trong khi EfficientNet-B0 nhẹ hơn và nhanh hơn nhưng đặc trưng mượt hơn.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 5: ML Training */}
        <section id="ml" className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            5. Huấn luyện mô hình học máy truyền thống
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="mb-3">Các mô hình thử nghiệm với pipeline: <code className="px-2 py-1 rounded bg-muted text-sm">StandardScaler → (PCA) → Classifier</code></p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Logistic Regression</Badge>
                  <Badge variant="secondary">SVM-RBF</Badge>
                  <Badge variant="secondary">Random Forest</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Kết quả trên đặc trưng ResNet50</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-2 text-left">Model</th>
                        <th className="border border-border px-4 py-2 text-right">Accuracy</th>
                        <th className="border border-border px-4 py-2 text-right">F1 Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-primary/5">
                        <td className="border border-border px-4 py-2 font-semibold">Logistic Regression</td>
                        <td className="border border-border px-4 py-2 text-right font-bold text-primary">0.919</td>
                        <td className="border border-border px-4 py-2 text-right font-bold text-primary">0.918</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">SVM-RBF</td>
                        <td className="border border-border px-4 py-2 text-right">0.900</td>
                        <td className="border border-border px-4 py-2 text-right">0.902</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">Random Forest</td>
                        <td className="border border-border px-4 py-2 text-right">0.829</td>
                        <td className="border border-border px-4 py-2 text-right">0.825</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Confusion Matrix */}
                <div className="my-6">
                  <img src={chart8} alt="Confusion Matrix - Logistic Regression với đặc trưng ResNet50" className="w-full rounded-lg border" />
                  <p className="mt-2 text-sm text-center">Hình 5.1: Confusion Matrix của Logistic Regression trên đặc trưng ResNet50</p>
                </div>

                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-foreground">Logistic Regression</strong> vượt trội nhất vì đặc trưng từ ResNet50 gần tuyến tính tách được.</li>
                  <li>• <strong className="text-foreground">SVM-RBF</strong> ổn định nhưng nặng tính toán hơn.</li>
                  <li>• <strong className="text-foreground">Random Forest</strong> không phù hợp với đặc trưng 2048 chiều cao.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Kết quả trên đặc trưng EfficientNet-B0</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-2 text-left">Model</th>
                        <th className="border border-border px-4 py-2 text-right">Accuracy</th>
                        <th className="border border-border px-4 py-2 text-right">F1 Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2 font-semibold">Logistic Regression</td>
                        <td className="border border-border px-4 py-2 text-right">0.905</td>
                        <td className="border border-border px-4 py-2 text-right">0.902</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">SVM-RBF</td>
                        <td className="border border-border px-4 py-2 text-right">0.887</td>
                        <td className="border border-border px-4 py-2 text-right">0.883</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">Random Forest</td>
                        <td className="border border-border px-4 py-2 text-right">0.812</td>
                        <td className="border border-border px-4 py-2 text-right">0.808</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong className="text-foreground">ResNet50</strong> vẫn mạnh hơn <strong className="text-foreground">1–2%</strong> so với EfficientNet-B0 trên tất cả các classifier.</p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 ML dựa hoàn toàn vào chất lượng đặc trưng. ResNet50 phù hợp nhất. Logistic Regression vượt trội SVM và RF về cả accuracy và tốc độ.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 6: ML Evaluation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            6. Đánh giá mô hình truyền thống
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-2 ml-4">
                <li>• ML dựa hoàn toàn vào <strong className="text-foreground">chất lượng đặc trưng</strong> được trích xuất từ backbone.</li>
                <li>• <strong className="text-foreground">ResNet50</strong> cho đặc trưng phù hợp nhất với các classifier truyền thống.</li>
                <li>• <strong className="text-foreground">Logistic Regression</strong> vượt trội SVM và Random Forest về cả accuracy và tốc độ.</li>
                <li>• ML pipeline nhẹ, nhanh nhưng <strong className="text-foreground">không match được deep learning</strong> về hiệu suất tổng thể.</li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                <strong className="text-foreground">Kết luận:</strong> Cách tiếp cận "feature extraction → ML" hiệu quả khi backbone tốt, nhưng vẫn có giới hạn so với end-to-end training.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 7: Deep Learning */}
        <section id="dl" className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            7. Huấn luyện Deep Learning – Fine-tuning ResNet18
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">7.1 Chiến lược huấn luyện</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Giai đoạn 1 — Freeze backbone</h4>
                    <p className="text-sm"><strong>Epoch 1–2:</strong></p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Chỉ train classification head</li>
                      <li>• Accuracy tăng từ <strong>50% → 77%</strong></li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Giai đoạn 2 — Unfreeze toàn mạng</h4>
                    <p className="text-sm"><strong>Epoch 3–35:</strong></p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Fine-tune toàn bộ model</li>
                      <li>• Loss giảm từ <strong>1.9 → 0.19</strong></li>
                    </ul>
                  </div>
                </div>

                <p className="mb-2"><strong className="text-foreground">Kỹ thuật tối ưu:</strong></p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AdamW optimizer</Badge>
                  <Badge variant="secondary">CosineAnnealingLR scheduler</Badge>
                  <Badge variant="secondary">EarlyStopping (patience 6)</Badge>
                  <Badge variant="secondary">Mixed Precision Training</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">7.2 Learning Curves</h3>
                
                {/* Loss Curve */}
                <div className="my-6">
                  <img src={chart9} alt="Training & Validation Loss Curve" className="w-full rounded-lg border" />
                  <p className="mt-2 text-sm text-center">Hình 7.1: Loss curve trong quá trình huấn luyện</p>
                </div>

                {/* Accuracy Curve */}
                <div className="my-6">
                  <img src={chart10} alt="Training & Validation Accuracy Curve" className="w-full rounded-lg border" />
                  <p className="mt-2 text-sm text-center">Hình 7.2: Accuracy curve trong quá trình huấn luyện</p>
                </div>

                {/* F1 Curve */}
                <div className="my-6">
                  <img src={chart11} alt="Training & Validation F1 Score Curve" className="w-full rounded-lg border" />
                  <p className="mt-2 text-sm text-center">Hình 7.3: F1 Score curve trong quá trình huấn luyện</p>
                </div>

                <ul className="space-y-2 ml-4">
                  <li>• Train/Val curve song song → <strong className="text-foreground">không overfitting</strong>.</li>
                  <li>• Hiệu suất ổn định và hội tụ tốt sau ~30 epochs.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">7.3 Kết quả cuối cùng</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-2 text-left">Metric</th>
                        <th className="border border-border px-4 py-2 text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-primary/5">
                        <td className="border border-border px-4 py-2 font-semibold">Accuracy</td>
                        <td className="border border-border px-4 py-2 text-right font-bold text-primary">96.6%</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="border border-border px-4 py-2 font-semibold">Macro-F1</td>
                        <td className="border border-border px-4 py-2 text-right font-bold text-primary">96.4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong className="text-foreground">Deep learning vượt ML truyền thống ~5%</strong> trên cùng bộ dữ liệu.</p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Fine-tuning ResNet18 đạt hiệu suất vượt trội nhờ khả năng học end-to-end các đặc trưng phù hợp với bài toán cụ thể.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 8: Sample Predictions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            8. Dự đoán mẫu (Sample Predictions)
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              {/* Sample Predictions */}
              <div className="my-6">
                <img src={chart12} alt="Sample Predictions - Dự đoán mẫu từ mô hình fine-tuned ResNet18" className="w-full rounded-lg border" />
                <p className="mt-2 text-sm text-center">Hình 8.1: Một số mẫu dự đoán từ mô hình fine-tuned ResNet18</p>
              </div>

              <ul className="space-y-2 ml-4">
                <li>• Phần lớn mẫu được dự đoán <strong className="text-foreground">chính xác</strong>.</li>
                <li>• Các lớp dễ nhầm như <em>bellflower</em> hay <em>calendula</em> cũng cải thiện mạnh so với ML truyền thống.</li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Mô hình deep learning có khả năng phân biệt tốt cả các lớp hoa có đặc trưng tương tự nhau.
              </div>
            </div>
          </Card>
        </section>

        {/* Section 9: Conclusion */}
        <section id="ket-luan" className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            9. Kết luận tổng thể
          </h2>
          
          <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-2 ml-4">
                <li>• Dataset <strong className="text-foreground">Flowers-16</strong> phù hợp cho cả ML và Deep Learning với dữ liệu sạch, cân bằng.</li>
                <li>• <strong className="text-foreground">ML truyền thống:</strong> Logistic Regression + ResNet50 đạt <strong className="text-foreground">92%</strong> accuracy.</li>
                <li>• <strong className="text-foreground">Deep Learning:</strong> Fine-tuned ResNet18 đạt <strong className="text-foreground">~96.6%</strong> accuracy.</li>
                <li>• <strong className="text-foreground">Deep Learning</strong> là phương pháp tối ưu cho bài toán phân loại hình ảnh.</li>
              </ul>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Hướng phát triển</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mixup/CutMix</Badge>
                  <Badge variant="secondary">Vision Transformer</Badge>
                  <Badge variant="secondary">Self-supervised Learning</Badge>
                  <Badge variant="secondary">TensorRT/ONNX Deploy</Badge>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                 Dự án đã xây dựng thành công pipeline hoàn chỉnh từ EDA → Preprocessing → Feature Extraction → ML/DL Training → Evaluation, cho phép so sánh toàn diện giữa hai cách tiếp cận.
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default BTL3;
