import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const teamMembers = [
    {
      name: "Nguyễn Việt Hoàng",
      id: "2311066",
      email: "hoang.nguyenbku2xx5@hcmut.edu.vn",
    },
    {
      name: "Nguyễn Chí Thanh",
      id: "2313078",
      email: "thanh.nguyen512301@hcmut.edu.vn",
    },
    {
      name: "Lê Đức Tài",
      id: "2312995",
      email: "tai.le2312995@hcmut.edu.vn",
    },
    {
      name: "Mai Xuân Nhựt",
      id: "2312549",
      email: "nhut.mainccgdxvdkt@hcmut.edu.vn",
    },
  ];

  const objectives = [
    "Hiểu và áp dụng quy trình pipeline học máy truyền thống, bao gồm: tiền xử lý dữ liệu, trích xuất đặc trưng, huấn luyện và đánh giá mô hình.",
    "Rèn luyện kỹ năng triển khai mô hình học máy trên các loại dữ liệu khác nhau: bảng, văn bản, và ảnh.",
    "Phát triển khả năng phân tích, so sánh, và đánh giá hiệu quả của các mô hình học máy thông qua các chỉ số đo lường.",
    "Rèn luyện kỹ năng lập trình, thử nghiệm, và tổ chức báo cáo khoa học.",
    "Bắt buộc: triển khai pipeline học máy truyền thống trên ít nhất một loại dữ liệu.",
    "Khuyến khích: nếu có thể, thực hiện thêm pipeline học sâu (deep learning) để so sánh với pipeline truyền thống. Nhóm thực hiện phần mở rộng này sẽ được cộng điểm thưởng.",
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-background/95 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold text-gradient">
                CEML1 PROJECT
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#info" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Thông tin
              </a>
              <a href="#team" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Thành viên
              </a>
              <a href="#objectives" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Mục tiêu
              </a>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-scale-in">
            MACHINE LEARNING{" "}
            <span className="text-gradient glow-primary">PROJECT</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-display">
            PROJECT-251: CEML1
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              to="/btl1"
              className="group p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg hover:border-accent/50 transition-all hover:shadow-glow"
            >
              <div className="text-2xl font-bold text-gradient-primary mb-2">BTL 1</div>
              <div className="text-sm text-muted-foreground">Dữ liệu dạng bảng</div>
              <div className="mt-3 text-xs text-accent group-hover:translate-x-1 transition-transform">
                Xem chi tiết →
              </div>
            </Link>
            
            <Link
              to="/btl2"
              className="group p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg hover:border-accent/50 transition-all hover:shadow-glow"
            >
              <div className="text-2xl font-bold text-gradient-primary mb-2">BTL 2</div>
              <div className="text-sm text-muted-foreground">Dữ liệu dạng văn bản</div>
              <div className="mt-3 text-xs text-accent group-hover:translate-x-1 transition-transform">
                Xem chi tiết →
              </div>
            </Link>
            
            <Link
              to="/btl3"
              className="group p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg hover:border-accent/50 transition-all hover:shadow-glow"
            >
              <div className="text-2xl font-bold text-gradient-primary mb-2">BTL 3</div>
              <div className="text-sm text-muted-foreground">Dữ liệu dạng ảnh</div>
              <div className="mt-3 text-xs text-accent group-hover:translate-x-1 transition-transform">
                Xem chi tiết →
              </div>
            </Link>
            
            <Link
              to="/HPMR"
              className="group p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg hover:border-accent/50 transition-all hover:shadow-glow"
            >
              <div className="text-2xl font-bold text-gradient-primary mb-2">HPMR</div>
              <div className="text-sm text-muted-foreground">Học phần mở rộng</div>
              <div className="mt-3 text-xs text-accent group-hover:translate-x-1 transition-transform">
                Xem chi tiết →
              </div>
            </Link>
          </div>
        </div>
        {/* --- BỔ SUNG PHẦN GITHUB Ở ĐÂY --- */}
          <div className="mt-12 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://github.com/ChiThanh512/Machine-Learning-Project-251---CEML1.git"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full overflow-hidden border border-white/20 hover:border-primary/50 shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hiệu ứng nền gradient khi hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo GitHub (SVG) */}
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 relative z-10 transition-transform group-hover:rotate-12 group-hover:scale-110"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>

              {/* Chữ hiển thị */}
              <span className="font-semibold text-lg relative z-10">
                Github Repository
              </span>

              {/* Mũi tên chỉ dẫn */}
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
          {/* --- HẾT PHẦN BỔ SUNG --- */}
      </section>

      {/* Course Info Section */}
      <section id="info" className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="font-display text-4xl font-bold text-gradient">
              Thông tin Môn học
            </h2>
          </div>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-gradient-primary">
                    <th className="px-6 py-4 text-left font-display text-primary-foreground">Môn học</th>
                    <th className="px-6 py-4 text-left font-display text-primary-foreground">Mã môn</th>
                    <th className="px-6 py-4 text-left font-display text-primary-foreground">Giảng viên</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">Học máy (Machine Learning)</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="border-primary text-primary shadow-sm">CO3117</Badge>
                    </td>
                    <td className="px-6 py-4">TS. Lê Thành Sách</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">Học kỳ</td>
                    <td className="px-6 py-4">251</td>
                    <td className="px-6 py-4">Năm học 2025-2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section id="team" className="container mx-auto px-6 py-16">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-3 mb-8">
      {/* Icon & Title giữ nguyên */}
      <Users className="h-8 w-8 text-secondary" />
      <h2 className="font-display text-4xl font-bold">
        Thành viên <span className="text-gradient">Nhóm</span>
      </h2>
    </div>

    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left"> {/* Thêm text-sm nếu muốn chữ gọn hơn */}
          <thead>
            {/* Header: Giữ nền tím nhưng đảm bảo TẤT CẢ chữ đều là màu trắng */}
            <tr className="border-b border-border bg-gradient-primary">
              <th className="px-6 py-4 font-display text-white">#</th> {/* Đổi text-primary-foreground thành text-white cho chắc chắn */}
              <th className="px-6 py-4 font-display text-white">Họ và Tên</th>
              {/* 👇 ĐÃ SỬA: Đổi text-black thành text-white để nổi trên nền tím */}
              <th className="px-6 py-4 font-display text-white">MSSV</th> 
              <th className="px-6 py-4 font-display text-white">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white"> {/* Thêm bg-white để đảm bảo nền luôn trắng */}
            {teamMembers.map((member, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                {/* 👇 ĐÃ SỬA: Đổi text-muted-foreground thành text-gray-900 (đen đậm) */}
                <td className="px-6 py-4 font-semibold text-gray-900">{index + 1}</td>
                
                {/* Tên sinh viên: Đậm và màu đen */}
                <td className="px-6 py-4 font-bold text-gray-800 text-base">{member.name}</td>
                
                <td className="px-6 py-4">
                  {/* 👇 ĐÃ SỬA: Badge nền xám nhạt, chữ đậm để dễ nhìn số */}
                  <div className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 font-mono font-medium text-blue-700">
                    {member.id}
                  </div>
                </td>
                
                {/* Email: Màu xám đậm thay vì xám nhạt */}
                <td className="px-6 py-4 text-gray-600 font-medium">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

      {/* Objectives Section */}
      <section id="objectives" className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-8 w-8 text-accent" />
            <h2 className="font-display text-4xl font-bold">
              Mục tiêu <span className="text-gradient">Dự án</span>
            </h2>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-xl">
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Bài tập lớn được thiết kế với các mục tiêu cụ thể sau:
            </p>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li 
                  key={index} 
                  className="flex gap-4 items-start group hover:translate-x-2 transition-transform"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mt-1 shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed text-foreground flex-1">
                    {objective}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm font-medium">
              © 2025 CEML1 Project - Machine Learning CO3117
            </p>
            <p className="text-xs mt-2">
              Học kỳ 251 | Năm học 2025-2026 | TS. Lê Thành Sách
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
