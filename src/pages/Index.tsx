import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Github } from "lucide-react";

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
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold text-gradient">
                CEML1 PROJECT
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#info" className="text-muted-foreground hover:text-primary transition-colors">
                Thông tin
              </a>
              <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">
                Thành viên
              </a>
              <a href="#objectives" className="text-muted-foreground hover:text-primary transition-colors">
                Mục tiêu
              </a>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/30">
              <BookOpen className="mr-2 h-4 w-4" />
              Machine Learning CO3117
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-secondary/10 text-secondary border-secondary/30">
              🐍 Python 3.6+
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-accent/10 text-accent border-accent/30">
              📓 Jupyter Notebook
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-500/10 text-green-400 border-green-500/30">
              ✓ Status: Complete
            </Badge>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Xem Chi Tiết Dự Án
          </Button>
        </div>
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
          
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-4 text-left font-display text-primary">Môn học</th>
                    <th className="px-6 py-4 text-left font-display text-primary">Mã môn</th>
                    <th className="px-6 py-4 text-left font-display text-primary">Giảng viên</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium">Học máy (Machine Learning)</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="border-primary text-primary">CO3117</Badge>
                    </td>
                    <td className="px-6 py-4">TS. Lê Thành Sách</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
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
            <Users className="h-8 w-8 text-secondary" />
            <h2 className="font-display text-4xl font-bold">
              Thành viên <span className="text-gradient">Nhóm</span>
            </h2>
          </div>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-4 text-left font-display text-primary">#</th>
                    <th className="px-6 py-4 text-left font-display text-primary">Họ và Tên</th>
                    <th className="px-6 py-4 text-left font-display text-primary">MSSV</th>
                    <th className="px-6 py-4 text-left font-display text-primary">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-border/50 last:border-b-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-muted-foreground">{index + 1}</td>
                      <td className="px-6 py-4 font-medium">{member.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary" className="bg-muted">
                          {member.id}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{member.email}</td>
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
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Bài tập lớn được thiết kế với các mục tiêu cụ thể sau:
            </p>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li 
                  key={index} 
                  className="flex gap-4 items-start group hover:translate-x-2 transition-transform"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mt-1">
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
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
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
