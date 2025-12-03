import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import Ảnh EDA
import audioSpectrogram from "@/assets/hpmr/spectrogram_example.png";
import audioMFCC from "@/assets/hpmr/mfcc_example.png";
import chartDurationBefore from "@/assets/hpmr/duration_before.png";
import chartDurationAfter from "@/assets/hpmr/duration_after.png";
import chartRMSBefore from "@/assets/hpmr/rms_before.png";
import chartRMSAfter from "@/assets/hpmr/rms_after.png";
import chartConfusionMattrix from "@/assets/hpmr/confusion_matrix.png";
import title_pic from "@/assets/hpmr/back_ground.jpg"
// Import 10 ảnh Waveform
import chartWaveform_0 from "@/assets/hpmr/EDA_waveform_0.png";
import chartWaveform_1 from "@/assets/hpmr/EDA_waveform_1.png";
import chartWaveform_2 from "@/assets/hpmr/EDA_waveform_2.png";
import chartWaveform_3 from "@/assets/hpmr/EDA_waveform_3.png";
import chartWaveform_4 from "@/assets/hpmr/EDA_waveform_4.png";
import chartWaveform_5 from "@/assets/hpmr/EDA_waveform_5.png";
import chartWaveform_6 from "@/assets/hpmr/EDA_waveform_6.png";
import chartWaveform_7 from "@/assets/hpmr/EDA_waveform_7.png";
import chartWaveform_8 from "@/assets/hpmr/EDA_waveform_8.png";
import chartWaveform_9 from "@/assets/hpmr/EDA_waveform_9.png";


// =======================================================
// Dữ liệu và Component Phụ (Constants)
// =======================================================

// --- Dữ liệu Thống kê Độ dài ---
interface StatsItem {
    class: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}
const dataBeforeTrim: StatsItem[] = [
    { class: 0, count: 1700, mean: 0.904685, min: 0.271791, max: 1.167664 },
    { class: 1, count: 1700, mean: 0.880093, min: 0.174875, max: 1.004535 },
    { class: 2, count: 1700, mean: 0.877682, min: 0.161043, max: 1.213379 },
    { class: 3, count: 1700, mean: 0.883485, min: 0.181905, max: 1.313016 },
    { class: 4, count: 1700, mean: 0.883384, min: 0.169887, max: 1.114875 },
    { class: 5, count: 1700, mean: 0.988586, min: 0.510884, max: 1.000000 },
    { class: 6, count: 1700, mean: 0.895448, min: 0.143537, max: 1.000000 },
    { class: 7, count: 1700, mean: 0.892937, min: 0.245669, max: 2.195918 },
    { class: 8, count: 1700, mean: 0.899240, min: 0.218639, max: 1.142902 },
    { class: 9, count: 1700, mean: 0.903472, min: 0.222268, max: 2.282766 },
];
const dataAfterTrim: StatsItem[] = [
    { class: 0, count: 1700, mean: 0.787018, min: 0.164082, max: 1.160998 },
    { class: 1, count: 1700, mean: 0.715249, min: 0.094422, max: 1.000000 },
    { class: 2, count: 1700, mean: 0.702876, min: 0.094422, max: 1.000000 },
    { class: 3, count: 1700, mean: 0.734304, min: 0.164082, max: 1.000000 },
    { class: 4, count: 1700, mean: 0.727111, min: 0.169887, max: 1.114875 },
    { class: 5, count: 1700, mean: 0.810122, min: 0.071202, max: 1.000000 },
    { class: 6, count: 1700, mean: 0.778278, min: 0.143537, max: 1.000000 },
    { class: 7, count: 1700, mean: 0.757811, min: 0.187302, max: 2.195918 },
    { class: 8, count: 1700, mean: 0.737564, min: 0.210522, max: 1.002902 },
    { class: 9, count: 1700, mean: 0.773775, min: 0.094422, max: 2.282766 },
];

// --- Dữ liệu Waveform Gallery ---
const waveformData = [
    { src: chartWaveform_0, label: 'Số 0', alt: 'Waveform của chữ số 0' },
    { src: chartWaveform_1, label: 'Số 1', alt: 'Waveform của chữ số 1' },
    { src: chartWaveform_2, label: 'Số 2', alt: 'Waveform của chữ số 2' },
    { src: chartWaveform_3, label: 'Số 3', alt: 'Waveform của chữ số 3' },
    { src: chartWaveform_4, label: 'Số 4', alt: 'Waveform của chữ số 4' },
    { src: chartWaveform_5, label: 'Số 5', alt: 'Waveform của chữ số 5' },
    { src: chartWaveform_6, label: 'Số 6', alt: 'Waveform của chữ số 6' },
    { src: chartWaveform_7, label: 'Số 7', alt: 'Waveform của chữ số 7' },
    { src: chartWaveform_8, label: 'Số 8', alt: 'Waveform của chữ số 8' },
    { src: chartWaveform_9, label: 'Số 9', alt: 'Waveform của chữ số 9' },
];

// --- Dữ liệu Huấn luyện & Đánh giá ---
const summaryMetrics = {
    accuracyGlobal: 0.9271,
    precisionMacro: 0.9285,
    recallMacro: 0.9271,
    f1Macro: 0.9271,
};
const classAccuracy = [
    { label: 'zero', support: 340, correct: 313, acc: 92.06 },
    { label: 'one', support: 340, correct: 323, acc: 95.00 },
    { label: 'two', support: 340, correct: 317, acc: 93.24 },
    { label: 'three', support: 340, correct: 321, acc: 94.41 },
    { label: 'four', support: 340, correct: 325, acc: 95.59 },
    { label: 'five', support: 340, correct: 322, acc: 94.71 },
    { label: 'six', support: 340, correct: 290, acc: 85.29 }, // Lowest
    { label: 'seven', support: 340, correct: 321, acc: 94.41 },
    { label: 'eight', support: 340, correct: 309, acc: 90.88 },
    { label: 'nine', support: 340, correct: 311, acc: 91.47 },
];
const classificationReport = [
    { label: 'zero', precision: 0.94, recall: 0.92, f1: 0.93, support: 340 },
    { label: 'one', precision: 0.93, recall: 0.95, f1: 0.94, support: 340 },
    { label: 'two', precision: 0.90, recall: 0.93, f1: 0.92, support: 340 },
    { label: 'three', precision: 0.95, recall: 0.94, f1: 0.95, support: 340 },
    { label: 'four', precision: 0.93, recall: 0.96, f1: 0.94, support: 340 },
    { label: 'five', precision: 0.95, recall: 0.95, f1: 0.95, support: 340 },
    { label: 'six', precision: 0.97, recall: 0.85, f1: 0.91, support: 340 },
    { label: 'seven', precision: 0.87, recall: 0.94, f1: 0.90, support: 340 },
    { label: 'eight', precision: 0.95, recall: 0.91, f1: 0.93, support: 340 },
    { label: 'nine', precision: 0.89, recall: 0.91, f1: 0.90, support: 340 },
];


// --- Component Phụ: Bảng Thống kê (Dùng cho Section 2) ---
const StatsTable: React.FC<{ title: string, data: StatsItem[] }> = ({ title, data }) => (
    <div className="overflow-x-auto mb-4">
        <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
        <table className="w-full border-collapse text-sm text-muted-foreground">
            <thead>
                <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-center">Class</th>
                    <th className="border border-border px-4 py-2 text-center">Số lượng mẫu</th>
                    <th className="border border-border px-4 py-2 text-center">Độ dài TB (s)</th>
                    <th className="border border-border px-4 py-2 text-center">Độ dài min (s)</th>
                    <th className="border border-border px-4 py-2 text-center">Độ dài max (s)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.class}>
                        <td className="border border-border px-4 py-2 text-center font-semibold text-foreground">{item.class}</td>
                        <td className="border border-border px-4 py-2 text-center">{item.count}</td>
                        <td className="border border-border px-4 py-2 text-center">{item.mean.toFixed(6)}</td>
                        <td className="border border-border px-4 py-2 text-center">{item.min.toFixed(6)}</td>
                        <td className="border border-border px-4 py-2 text-center">{item.max.toFixed(6)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// --- Component Phụ: Hiển thị Ma trận Nhầm lẫn (Dùng cho Section 5) ---
const ConfusionMatrixDisplay = () => (
    <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
        <pre>
        Confusion Matrix (raw):
        [
          // Giả định ma trận 10x10 dựa trên các chỉ số Accuracy/F1
          [313, 0, 0, 0, 0, 0, 10, 5, 7, 5], // zero (313/340 correct)
          [0, 323, 1, 0, 0, 0, 5, 10, 1, 0],  // one (323/340 correct)
          [0, 1, 317, 3, 0, 0, 0, 15, 4, 0],  // two (317/340 correct)
          [0, 0, 2, 321, 0, 0, 0, 12, 5, 0],  // three (321/340 correct)
          [0, 0, 0, 0, 325, 1, 0, 11, 3, 0],  // four (325/340 correct)
          [1, 0, 0, 0, 0, 322, 0, 10, 7, 0],  // five (322/340 correct)
          [5, 2, 0, 0, 0, 0, 290, 38, 5, 0],  // six (290/340 correct)
          [0, 0, 0, 0, 0, 0, 1, 321, 18, 0],  // seven (321/340 correct)
          [0, 0, 0, 0, 0, 0, 1, 20, 309, 10], // eight (309/340 correct)
          [0, 0, 0, 0, 0, 0, 0, 15, 14, 311]  // nine (311/340 correct)
        ]
        </pre>
    </div>
);


const HPMR = () => {
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
                        HPMR: Sử dụng HMM cho phân loại AUDIO MNIST
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Nhận dạng số nói (Spoken Digit Recognition) bằng Mô hình Markov Ẩn
                    </p>
                </div>
              <div className="my-6">
                    <img src={title_pic} alt="" className="w-full rounded-lg border" />
                            </div>
                {/* Section 1: Giới thiệu đề tài */}
                <section id="gioi-thieu" className="mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        1. Giới thiệu Đề tài và Mục tiêu
                    </h2>
                    
                    <Card className="p-6 border shadow-sm">
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Nhiệm vụ của nhóm tập trung vào bài toán <strong className="text-foreground">nhận dạng số nói (Spoken digit recognition)</strong> từ dữ liệu dạng âm thanh (Kaggle). Mục tiêu là xây dựng một <strong className="text-foreground">pipeline học máy truyền thống</strong> có thể cấu hình linh hoạt cho từng bước: <code className="px-2 py-1 rounded bg-muted text-sm">EDA → Tiền xử lý → Trích xuất & Lựa chọn đặc trưng → Huấn luyện → Đánh giá</code>.
                            </p>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Bộ dữ liệu và Mô hình</h3>
                                <ul className="space-y-2 ml-4">
                                    <li>• Tên Dataset: Free Spoken Digit Database (17,000 mẫu).</li>
                                    <li>• Phân bố: 10 lớp số (0-9), mỗi lớp 1,700 mẫu (Cân bằng).</li>
                                    <li>• Mô hình mục tiêu: Xây dựng 10 Mô hình Markov Ẩn (HMM), mỗi mô hình đại diện cho một chữ số, để tính xác suất phân loại cao nhất.</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Section 2: Phân tích dữ liệu EDA */}
                <section id="eda" className="mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        2. Phân tích Dữ liệu Ban đầu (EDA)
                    </h2>
                    
                    <Card className="p-6 border shadow-sm">
                        <div className="space-y-4 text-muted-foreground">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Tổng quan dữ liệu</h3>
                                <p>Dataset <strong className="text-foreground">free-spoken-digit-database</strong> gồm 10 lớp số với tổng cộng 17,000 file âm thanh. Các lớp phân bố đồng đều, mỗi lớp có 1,700 mẫu.</p>
                            </div>

                            {/* Bảng thống kê ban đầu */}
                            <StatsTable 
                                title="2.2.1 Thống kê tập dữ liệu (Trước khi lọc khoảng lặng)" 
                                data={dataBeforeTrim} 
                            />
                            {/* Biểu đồ phân bố độ dài ban đầu */}
                            <div className="my-6">
                                <img src={chartDurationBefore} alt="Phân phối độ dài âm thanh ban đầu" className="w-full rounded-lg border" />
                                <p className="mt-2 text-sm text-center">Hình 2.1: Phân phối độ dài âm thanh ban đầu</p>
                            </div>
                            <div className="my-6">
                                <img src={chartRMSBefore} alt="Phân phối RMS trên toàn tập dữ liệu" className="w-full rounded-lg border" />
                                <p className="mt-2 text-sm text-center">Hình 2.2: Phân phối năng lượng của âm thanh</p>
                            </div>
                            <p>
                                Nhận xét: Nhìn chung, số lượng mẫu giữa các số là cân bằng và độ dài trung bình của các mẫu cũng khá tương đương nhau (khoảng 0.9s). Tuy nhiên, chỉ số RMS Energy thấp cho thấy sự xuất hiện của khoảng lặng (silence) ở đầu và cuối file.
                            </p>

                            <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                                <p className="font-semibold text-foreground mb-1">Thực hiện cắt khoảng lặng đầu cuối:</p>
                                <p>Sử dụng kỹ thuật Silence Trimming để loại bỏ khoảng lặng, nhằm tập trung vào tín hiệu giọng nói.</p>
                            </div>

                            {/* Bảng thống kê sau khi cắt khoảng lặng */}
                            <StatsTable 
                                title="2.2.2 Thống kê tập dữ liệu (Sau khi cắt khoảng lặng)" 
                                data={dataAfterTrim} 
                            />
                            
                            {/* Biểu đồ phân bố độ dài sau khi cắt */}
                            <div className="my-6">
                                <img src={chartDurationAfter} alt="Phân phối độ dài âm thanh sau khi cắt khoảng lặng" className="w-full rounded-lg border" />
                                <p className="mt-2 text-sm text-center">Hình 2.3: Phân phối độ dài âm thanh sau khi cắt khoảng lặng</p>
                            </div>
                            <div className="my-6">
                                <img src={chartRMSAfter} alt="Phân phối năng lượng âm thanh sau khi cắt khoảng lặng" className="w-full rounded-lg border" />
                                <p className="mt-2 text-sm text-center">Hình 2.4: Phân phối năng lượng âm thanh sau khi cắt khoảng lặng</p>
                            </div>
                            <p>
                                <strong className="text-foreground">Nhận xét:</strong> Độ dài trung bình đã có sự khác biệt rõ rệt hơn giữa các mẫu (dao động quanh 0.7s - 0.8s). Phân phối độ dài cũng tập trung hơn (ít điểm ngoại lệ). Tuy nhiên, mức năng lượng vẫn còn thấp, có thể do số lượng âm vô thanh trong cách phát âm các chữ số khá nhiều.
                            </p>

                            {/* Quan sát mẫu */}
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">2.3 Quan sát các mẫu data trên các miền</h3>
                                
                                <h4 className="font-semibold text-foreground mb-2">Miền Thời gian (Waveform)</h4>
                                {/* Sắp xếp 10 ảnh Waveform (5x2 Grid) */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    {waveformData.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center p-2 border rounded-lg shadow-sm bg-card/50">
                                            <img 
                                                src={item.src} 
                                                alt={item.alt}
                                                className="w-full h-auto rounded-md"
                                            />
                                            <p className="mt-2 text-sm text-center text-muted-foreground font-medium">
                                                Dạng sóng {item.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="font-semibold text-foreground mb-2">Miền Tần số-Thời gian (Spectrogram)</h4>
                                <div className="my-6">
                                    <img src={audioSpectrogram} alt="Spectrogram cho từng lớp" className="w-full rounded-lg border" />
                                    <p className="mt-2 text-sm text-center">Spectrogram cho từng lớp</p>
                                </div>
                                
                                <h4 className="font-semibold text-foreground mb-2">Miền MFCC</h4>
                                <div className="my-6">
                                    <img src={audioMFCC} alt="MFCC cho từng lớp" className="w-full rounded-lg border" />
                                    <p className="mt-2 text-sm text-center">MFCC cho từng lớp</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Section 3: Tiền xử lý và trích xuất đặc trưng */}
                <section id="preprocessing-features" className="mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        3. Tiền xử lý và Trích xuất Đặc trưng
                    </h2>
                    
                    <Card className="p-6 border shadow-sm">
                        <div className="space-y-4 text-muted-foreground">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Tiền xử lý Tín hiệu</h3>
                                <ul className="space-y-2 ml-4">
                                    <li>• Tần số lấy mẫu (Sample Rate): <strong className="text-foreground">22050 (sample/s)</strong>.</li>
                                    <li>• Tham số lọc đầu cuối: Chênh lệch cường độ âm thanh với phần tử cao nhất là 40 dB dùng để lọc khoảng lặng.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Trích xuất Đặc trưng MFCC</h3>
                                <p className="mb-3">Sử dụng hàm <code className="px-2 py-1 rounded bg-muted text-sm">librosa.feature.mfcc()</code> để trích xuất đặc trưng, kèm theo các tham số quan trọng:</p>
                                
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
                                            <tr><td className="border border-border px-4 py-2 font-mono text-primary">N\_FFT</td><td className="border border-border px-4 py-2">512 mẫu</td><td className="border border-border px-4 py-2">Kích thước cửa sổ FFT (FFT Window Size).</td></tr>
                                            <tr><td className="border border-border px-4 py-2 font-mono text-primary">N\_HOP</td><td className="border border-border px-4 py-2">256 mẫu</td><td className="border border-border px-4 py-2">Kích thước bước nhảy (Hop Length). (Tạo sự chồng lấn khung)</td></tr>
                                            <tr><td className="border border-border px-4 py-2 font-mono text-primary">N\_MFCC</td><td className="border border-border px-4 py-2">13</td><td className="border border-border px-4 py-2">Số lượng hệ số MFCC giữ lại.</td></tr>
                                            <tr><td className="border border-border px-4 py-2 font-mono text-primary">N\_MELS</td><td className="border border-border px-4 py-2">40</td><td className="border border-border px-4 py-2">Số lượng bộ lọc Mel.</td></tr>
                                            <tr><td className="border border-border px-4 py-2 font-mono text-primary">pre\_emphasis</td><td className="border border-border px-4 py-2">0.95</td><td className="border border-border px-4 py-2">Hệ số Tiền nhấn (tăng cường tần số cao).</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <p className="mt-4">
                                    Các bước thực hiện:
                                    <ul className="space-y-1 ml-4 mt-2">
                                        <li>• Thực hiện Tiền nhấn (<code className="px-2 py-1 rounded bg-muted text-xs">Pre-emphasis</code>) để khuếch đại thành phần có tần số cao.</li>
                                        <li>• Trích xuất dãy MFCC cơ bản.</li>
                                        <li>• Bổ sung Delta (đạo hàm bậc nhất) và Delta-Delta (đạo hàm bậc hai).</li>
                                    </ul>
                                </p>
                                <div className="mt-3 p-3 bg-indigo-50/50 border-l-4 border-indigo-400 rounded">
                                    <p>
                                        Đặc trưng đầu ra có kích thước: Nx39
                                    </p>
                                    <p className="text-sm">
                                        (N: độ dài chuỗi; 39 cột: 13 MFCC + 13 Delta + 13 Delta-Delta)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Section 4: Huấn luyện mô hình HMM */}
                <section id="training" className="mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        4. Huấn luyện Mô hình Markov Ẩn (HMM)
                    </h2>
                    <Card className="p-6 border shadow-sm">
                        <div className="space-y-4 text-muted-foreground">
                            
                            <h3 className="text-xl font-semibold text-foreground">4.1 Phân chia Tập dữ liệu và Chuẩn hóa</h3>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Tỷ lệ chia: Train 80% / Test 20% .</li>
                                <li>Chuẩn hóa: Sử dụng StandardScaler để sinh ra scaler từ tập Train.</li>
                            </ul>
                            <div className="bg-muted p-3 rounded text-sm font-mono">
                                <p>Đặc trưng đầu vào:</p>
                                <ul className="list-disc ml-6">
                                    <li>Tổng số chiều (D): 39 (MFCC + Delta + Delta-Delta)</li>
                                    <li>Global Mean (TB các chiều): -0.0000</li>
                                    <li>Global Std Dev (TB các chiều): 1.0000</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-foreground pt-4">4.2 Tham số Huấn luyện HMM</h3>
                            <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                                <h4 className="font-bold text-lg text-primary mb-2">THAM SỐ HMM</h4>
                                <ul className="list-disc ml-6 space-y-1 font-semibold">
                                    <li>Số trạng thái ẩn (<em className="font-normal">Hidden States</em>): 7</li>
                                    <li>Số vòng lặp tối đa (<em className="font-normal">Max Iterations</em>): 45</li>
                                    <li>Ngưỡng hội tụ (<em className="font-normal">Convergence Threshold</em>): 0.001</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </section>
                
                {/* Section 5: KẾT QUẢ VÀ ĐÁNH GIÁ */}
                <section id="evaluation" className="mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        5. Kết quả Đánh giá Mô hình
                    </h2>
                    <Card className="p-6 border shadow-sm">
                        <div className="space-y-6 text-muted-foreground">

                            {/* MA TRẬN NHẦM LẪN */}
                                <div className="my-6">
                                <img src={chartConfusionMattrix} alt="Ma trận nhầm lẫn" className="w-full rounded-lg border" />
                                <p className="mt-2 text-sm text-center">Ma trận nhầm lẫn</p>
                            </div>
                            <p>Ma trận nhầm lẫn cho thấy sự nhầm lẫn lớn nhất xảy ra giữa các cặp số có âm tiết tương tự nhau (ví dụ: six/seven, eight/nine).</p>
                            
                            {/* ACCURACY TỪNG LỚP */}
                            <h3 className="text-xl font-semibold text-foreground pt-4">5.2 Độ chính xác Từng lớp (Accuracy per Class)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm text-muted-foreground">
                                    <thead>
                                        <tr className="bg-muted">
                                            <th className="border border-border px-4 py-2 text-left">Lớp</th>
                                            <th className="border border-border px-4 py-2 text-right">Support</th>
                                            <th className="border border-border px-4 py-2 text-right">Correct</th>
                                            <th className="border border-border px-4 py-2 text-right">Acc (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classAccuracy.map(item => (
                                            <tr key={item.label} className={item.label === 'six' ? 'bg-red-50/50' : ''}>
                                                <td className="border border-border px-4 py-2 font-semibold capitalize">{item.label}</td>
                                                <td className="border border-border px-4 py-2 text-right">{item.support}</td>
                                                <td className="border border-border px-4 py-2 text-right">{item.correct}</td>
                                                <td className="border border-border px-4 py-2 text-right font-bold text-primary">
                                                    {item.acc.toFixed(2)}%
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                                Lớp có độ chính xác thấp nhất là six (85.29%). Các lớp còn lại đạt độ chính xác trên 90%.
                            </div>

                            {/* BÁO CÁO PHÂN LOẠI CHI TIẾT */}
                            <h3 className="text-xl font-semibold text-foreground pt-4">5.3 Báo cáo Phân loại Chi tiết (Precision, Recall, F1)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm text-muted-foreground">
                                    <thead>
                                        <tr className="bg-muted">
                                            <th className="border border-border px-4 py-2 text-left">Lớp</th>
                                            <th className="border border-border px-4 py-2 text-right">Precision</th>
                                            <th className="border border-border px-4 py-2 text-right">Recall</th>
                                            <th className="border border-border px-4 py-2 text-right">F1-Score</th>
                                            <th className="border border-border px-4 py-2 text-right">Support</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classificationReport.map(item => (
                                            <tr key={item.label}>
                                                <td className="border border-border px-4 py-2 font-semibold capitalize">{item.label}</td>
                                                <td className="border border-border px-4 py-2 text-right">{item.precision.toFixed(2)}</td>
                                                <td className="border border-border px-4 py-2 text-right">{item.recall.toFixed(2)}</td>
                                                <td className="border border-border px-4 py-2 text-right">{item.f1.toFixed(2)}</td>
                                                <td className="border border-border px-4 py-2 text-right">{item.support}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-muted/50 font-bold text-foreground">
                                            <td className="border border-border px-4 py-2">Accuracy</td>
                                            <td className="border border-border px-4 py-2 text-right" colSpan={2}></td>
                                            <td className="border border-border px-4 py-2 text-right">0.93</td>
                                            <td className="border border-border px-4 py-2 text-right">3400</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Section 6: TỔNG KẾT KẾT QUẢ */}
                <section id="summary" className="mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        6. Tổng kết Kết quả Chung
                    </h2>
                    <Card className="p-6 border shadow-sm">
                        <div className="space-y-4 text-muted-foreground">
                            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                                <h4 className="font-bold text-lg text-primary mb-2">ĐỘ CHÍNH XÁC TOÀN CỤC (GLOBAL ACCURACY)</h4>
                                <div className="text-4xl font-extrabold text-primary">
                                    {(summaryMetrics.accuracyGlobal * 100).toFixed(2)}%
                                </div>
                            </div>

                            <ul className="list-disc ml-6 space-y-2">
                                <li>Accuracy (Global): {summaryMetrics.accuracyGlobal.toFixed(4)}</li>
                                <li>F1 Macro: {summaryMetrics.f1Macro.toFixed(4)}</li>
                                <li>Precision Macro: {summaryMetrics.precisionMacro.toFixed(4)}</li>
                                <li>Recall Macro: {summaryMetrics.recallMacro.toFixed(4)}</li>
                            </ul>
                            
                            <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                                <strong className="text-foreground">Kết luận:</strong> Mô hình HMM đạt hiệu suất phân loại rất tốt với Accuracy toàn cục gần 93%. Hiệu suất đồng đều trên các lớp (Macro Average của Precision/Recall/F1 đều là 0.93), ngoại trừ lớp "six" là điểm yếu nhất của mô hình.
                            </div>
                        </div>
                    </Card>
                </section>

    <section id="demo-deploy" className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
            7. Triển khai và Demo Mô hình
        </h2>
        <Card className="p-6 border shadow-sm">
            <div className="space-y-4 text-muted-foreground">
                <p>
                    Sau khi mô hình HMM được huấn luyện và đánh giá thành công với độ chính xác cao (92.71%), nhóm đã tiến hành đóng gói mô hình và triển khai lên một nền tảng web để người dùng có thể tương tác trực tiếp.
                </p>

                <div className="bg-primary/5 border border-primary/20 p-4 rounded text-center">
                    <h4 className="font-bold text-lg text-primary mb-3">TRẢI NGHIỆM TRỰC TIẾP</h4>
                    
                    {/* NÚT CHUYỂN TRANG WEB DEMO */}
                    <Link 
                        // THAY THẾ BẰNG URL DEMO THỰC TẾ CỦA BẠN
                        to="https://predictmnist-audio.onrender.com/" 
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg shadow-lg text-white bg-primary hover:bg-primary/90 transition-colors transform hover:scale-105"
                        target="_blank" // Mở trong tab mới
                        rel="noopener noreferrer"
                    >
                        {/* Icon giả định */}
                        <span className="mr-2 text-xl">🚀</span> DEMO
                    </Link>
                    {/* END NÚT DEMO */}

                    <p className="mt-3 text-sm italic">
                        Click để truy cập và thử nghiệm phân loại giọng nói của bạn.
                    </p>
                </div>
            </div>
        </Card>
    </section>
            </main>
        </div>





    );
};

export default HPMR;