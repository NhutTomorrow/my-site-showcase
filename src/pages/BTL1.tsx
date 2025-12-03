import { Link } from "react-router-dom";
import chart1 from "@/assets/btl1/heatmap.png";
import chart2 from "@/assets/btl1/residual.png";
import chart3 from "@/assets/btl1/parity.png";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";


// ==================================================================================
// 1. INTRO
// ==================================================================================
const CarPriceIntro = () => {
  return (
    <div className="w-full animate-fade-in space-y-16 text-foreground">
      
      {/* ================================================================================== */}
      {/* 1. HERO SECTION: ẤN TƯỢNG ĐẦU TIÊN */}
      {/* ================================================================================== */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0f172a] text-white shadow-2xl border border-slate-800">
        {/* Background Image/Effect */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>

        <div className="relative z-10 p-10 md:p-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            🚙 Machine Learning Project
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Car Price <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Prediction</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Xây dựng hệ thống định giá xe ô tô tự động sử dụng Pipeline học máy truyền thống. Tối ưu hóa quy trình từ xử lý dữ liệu thô đến triển khai mô hình dự đoán chính xác.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="text-yellow-400">★</span> 
                <span className="font-bold">Dataset: Kaggle</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="text-green-400">⚙️</span> 
                <span className="font-bold">Model: RF, SVR, Linear</span>
             </div>
          </div>
        </div>
      </div>

      {/* ================================================================================== */}
      {/* 2. PROJECT OVERVIEW & OBJECTIVES (GRID LAYOUT) */}
      {/* ================================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Cột trái: Giới thiệu */}
        <div className="space-y-6">
           <h3 className="text-2xl font-bold border-l-4 border-blue-500 pl-4 text-foreground">
             Tổng quan đề tài
           </h3>
           <p className="text-muted-foreground leading-relaxed">
             Dự án tập trung giải quyết bài toán hồi quy (Regression) để dự đoán giá xe cũ. Điểm nhấn của đồ án không chỉ là model cuối cùng, mà là việc xây dựng một <strong>Pipeline linh hoạt (Configurable)</strong>.
           </p>
           <p className="text-muted-foreground leading-relaxed">
             Hệ thống cho phép tùy chỉnh các tham số đầu vào như chiến lược chuẩn hóa (Scaler), kỹ thuật giảm chiều (PCA) và thuật toán huấn luyện để tìm ra cấu hình tối ưu nhất.
           </p>
           
           <div className="bg-card p-6 rounded-xl border border-border shadow-sm mt-4">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                🎯 Mục tiêu cốt lõi:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  Xử lý dữ liệu thực tế (Missing values, Categorical features).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  Thực hành Feature Engineering & Selection.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  So sánh hiệu quả giữa các mô hình (Linear vs Non-linear).
                </li>
              </ul>
           </div>
        </div>

        {/* Cột phải: Best Result Teaser */}
        <div className="relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
           <div className="relative bg-white dark:bg-slate-900 border border-border p-8 rounded-2xl h-full flex flex-col justify-center">
              <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Current Best Performance</div>
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-1">
                5,775 <span className="text-lg text-muted-foreground font-medium">MAE</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Mean Absolute Error trên tập Test</p>
              
              <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-foreground">Best Model</span>
                    <span className="font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Random Forest</span>
                 </div>
                 <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[85%]"></div>
                 </div>
                 <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>Config: Log-target + PCA</span>
                    <span>R² Score: 0.502</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* ================================================================================== */}
      {/* 3. THE PIPELINE FLOW (QUY TRÌNH) */}
      {/* ================================================================================== */}
      <div className="space-y-8">
        <div className="text-center">
           <h3 className="text-2xl font-bold">Quy trình thực hiện (Pipeline)</h3>
           <p className="text-muted-foreground mt-2">Luồng xử lý dữ liệu khép kín từ đầu vào đến đánh giá</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {[
             { title: "1. EDA", desc: "Analysis & Visuals", icon: "📊", color: "bg-purple-100 text-purple-600" },
             { title: "2. Preprocessing", desc: "Clean, Impute, Encode", icon: "🧹", color: "bg-blue-100 text-blue-600" },
             { title: "3. Feature Eng.", desc: "Selection & PCA", icon: "🧬", color: "bg-cyan-100 text-cyan-600" },
             { title: "4. Training", desc: "RF, SVR, Linear", icon: "🤖", color: "bg-orange-100 text-orange-600" },
             { title: "5. Evaluation", desc: "MAE, RMSE, R²", icon: "📈", color: "bg-green-100 text-green-600" },
           ].map((step, idx) => (
             <div key={idx} className="bg-card border border-border p-4 rounded-xl text-center hover:shadow-md transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 ${step.color} dark:bg-opacity-20 rounded-full flex items-center justify-center text-xl mx-auto mb-3`}>
                  {step.icon}
                </div>
                <h4 className="font-bold text-sm text-foreground">{step.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>

    </div>
  );
};


// ==================================================================================
// 2. DATA PREPROCESSING
// ==================================================================================
const DataPreprocessing = () => {
  return (
    <section className="mb-16 w-full animate-fade-in">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        
        <h2 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Tiền xử lý dữ liệu <span className="text-muted-foreground text-lg font-normal">(Data Preprocessing)</span>

        </h2>
      </div>

      <div className="space-y-8">
        
        {/* KHỐI 1: FEATURE CLEANING GRID */}
        <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
                Làm sạch đặc trưng (Feature Cleaning)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1: Levy */}
                <div className="bg-card border border-border p-4 rounded-xl hover:border-blue-500/50 transition-colors shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase text-xs tracking-wider">
                        <span className="text-lg">💲</span> Levy
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Replace <code className="bg-muted px-1 rounded">'-'</code> ➝ <code className="bg-muted px-1 rounded">NaN</code></li>
                        <li>Convert type ➝ <code className="bg-muted px-1 rounded">float</code></li>
                    </ul>
                </div>

                {/* Card 2: Mileage */}
                <div className="bg-card border border-border p-4 rounded-xl hover:border-green-500/50 transition-colors shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-green-600 dark:text-green-400 font-bold uppercase text-xs tracking-wider">
                        <span className="text-lg">🛣️</span> Mileage
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Remove suffix <code className="bg-muted px-1 rounded">'km'</code></li>
                        <li>Convert type ➝ <code className="bg-muted px-1 rounded">int</code></li>
                    </ul>
                </div>

                {/* Card 3: Engine */}
                <div className="bg-card border border-border p-4 rounded-xl hover:border-red-500/50 transition-colors shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-red-600 dark:text-red-400 font-bold uppercase text-xs tracking-wider">
                        <span className="text-lg">⚙️</span> Engine Volume
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Extract <code className="bg-muted px-1 rounded">Turbo</code> (0/1)</li>
                        <li>Parse numeric ➝ <code className="bg-muted px-1 rounded">float</code></li>
                    </ul>
                </div>

                {/* Card 4: Doors */}
                <div className="bg-card border border-border p-4 rounded-xl hover:border-purple-500/50 transition-colors shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400 font-bold uppercase text-xs tracking-wider">
                        <span className="text-lg">🚪</span> Doors
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Fix lỗi format Excel:</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-xs bg-muted px-2 py-1 rounded border">'02-Mar' ➝ 2</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded border">'04-May' ➝ 4</span>
                    </div>
                </div>
            </div>
        </div>

        {/* KHỐI 2: PIPELINE WORKFLOW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1: Split */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-card border border-border p-6 rounded-xl h-full">
                    <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-lg flex items-center justify-center mb-4 text-xl">✂️</div>
                    <h4 className="font-bold text-foreground mb-2">1. Train/Test Split</h4>
                    <p className="text-sm text-muted-foreground">
                        Chia tỷ lệ <strong className="text-foreground">80/20</strong>.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        <code>random_state=42</code>
                        <br/>
                        <span className="italic">*Thực hiện TRƯỚC mọi bước xử lý khác.</span>
                    </p>
                </div>
            </div>

            {/* Step 2: Transform */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-card border border-border p-6 rounded-xl h-full">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-xl">📉</div>
                    <h4 className="font-bold text-foreground mb-2">2. Target Transform</h4>
                    <p className="text-sm text-muted-foreground">
                        Áp dụng <code className="text-blue-600 font-bold">np.log1p</code> cho biến mục tiêu (Price).
                    </p>
                    <div className="mt-3 text-xs bg-muted p-2 rounded border border-border/50">
                        Giúp giảm độ lệch (skewness) của phân phối giá, làm dữ liệu "gần chuẩn" hơn.
                    </div>
                </div>
            </div>

            {/* Step 3: Outliers */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-card border border-border p-6 rounded-xl h-full">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg flex items-center justify-center mb-4 text-xl">🧹</div>
                    <h4 className="font-bold text-foreground mb-2">3. Outlier Clipping</h4>
                    <p className="text-sm text-muted-foreground">
                        Sử dụng kỹ thuật <strong>IQR (Interquartile Range)</strong>.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        Áp dụng cho: <em>Mileage, Levy, Price</em>.
                        <br/>
                        <span className="text-amber-600 font-bold">Quan trọng:</span> Ngưỡng cắt chỉ được học từ tập Train.
                    </p>
                </div>
            </div>
        </div>

        {/* KHỐI 3: KEY HIGHLIGHT (BEST PRACTICE) */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 flex items-start gap-4">
            <div className="p-2 bg-green-500 text-white rounded-full mt-1 shrink-0 shadow-lg shadow-green-500/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
                <h4 className="font-bold text-green-700 dark:text-green-400 text-lg">Điểm sáng: Ngăn chặn rò rỉ dữ liệu (Data Leakage)</h4>
                <p className="text-green-800/80 dark:text-green-300/80 mt-1 text-sm leading-relaxed">
                    Quy trình tuân thủ nghiêm ngặt nguyên tắc ML: Tập kiểm tra (Test set) hoàn toàn "vô hình" trong quá trình học các tham số tiền xử lý (như mean, IQR thresholds). Tất cả các phép biến đổi đều được <code>fit</code> trên Train và chỉ <code>transform</code> trên Test.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};


// ==================================================================================
// 3. EDA (EXPLORATORY DATA ANALYSIS)
// ==================================================================================
const CarPriceEDA = () => {
  return (
    <section className="mb-16 w-full animate-fade-in">
      
      {/* 1. SECTION HEADER */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </div>
        <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          EDA (Exploratory Data Analysis)
        </h2>
        
      </div>

      <div className="space-y-8">

        {/* 2. DATA HEALTH CHECK (VITALS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {/* Records */}
           <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">📄</div>
              <div>
                 <div className="text-2xl font-bold">19,237</div>
                 <div className="text-xs text-muted-foreground uppercase font-bold">Total Records</div>
              </div>
           </div>
           {/* Duplicates */}
           <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl">♻️</div>
              <div>
                 <div className="text-2xl font-bold">313 <span className="text-sm font-normal text-muted-foreground">(1.63%)</span></div>
                 <div className="text-xs text-muted-foreground uppercase font-bold">Duplicates Removed</div>
              </div>
           </div>
           {/* Missing Values */}
           <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl">⚠️</div>
              <div>
                 <div className="text-2xl font-bold">Levy</div>
                 <div className="text-xs text-muted-foreground uppercase font-bold">Main Missing Feature</div>
              </div>
           </div>
        </div>

        {/* 3. FEATURE ANALYSIS (TABS/GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           
           {/* Numerical Analysis */}
           <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-full">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                 <span className="w-2 h-6 bg-green-500 rounded-full"></span>
                 Biến số (Numerical Features)
              </h3>
              <ul className="space-y-4">
                 <li className="bg-muted/30 p-3 rounded-lg border border-border/50">
                    <div className="flex justify-between items-center mb-1">
                       <span className="font-bold text-green-700 dark:text-green-400">Price (Target)</span>
                       <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Right-Skewed</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Phân phối lệch phải nặng. <span className="text-foreground font-medium">Giải pháp:</span> Áp dụng <code>np.log1p</code> để chuẩn hóa.</p>
                 </li>
                 <li className="bg-muted/30 p-3 rounded-lg border border-border/50">
                    <div className="flex justify-between items-center mb-1">
                       <span className="font-bold text-blue-700 dark:text-blue-400">Levy & Mileage</span>
                       <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Outliers</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Chứa nhiều giá trị ngoại lai. Cần xử lý bằng phương pháp <strong>IQR Clipping</strong>.</p>
                 </li>
              </ul>
           </div>

           {/* Categorical Analysis */}
           <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-full">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                 <span className="w-2 h-6 bg-pink-500 rounded-full"></span>
                 Biến phân loại (Categorical)
              </h3>
              <div className="space-y-4">
                 <div className="flex items-start gap-3">
                    <div className="mt-1 min-w-[24px] text-center">🏭</div>
                    <div>
                       <strong className="block text-sm text-foreground">Manufacturer & Model</strong>
                       <p className="text-sm text-muted-foreground">Phân phối "đuôi dài" (Long-tail). Một số hãng xe chiếm đa số, gây khó khăn cho One-Hot Encoding.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="mt-1 min-w-[24px] text-center">⛽</div>
                    <div>
                       <strong className="block text-sm text-foreground">Fuel, Gearbox, Category</strong>
                       <p className="text-sm text-muted-foreground">Phân phối cân bằng hơn. Đây là các đặc trưng tốt để đưa vào mô hình.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 4. CORRELATION HEATMAP */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
           <div className="p-4 border-b border-border bg-muted/20">
              <h3 className="font-bold text-foreground">Ma trận tương quan (Correlation Matrix)</h3>
           </div>
           <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Heatmap Image */}
              <div className="lg:col-span-2">
                 <img 
                    src={chart1} 
                    alt="Correlation Heatmap" 
                    className="w-full h-auto rounded-lg shadow-sm border border-border"
                 />
              </div>
              {/* Insights Side Panel */}
              <div className="space-y-4">
                 <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-800">
                    <div className="text-xs font-bold text-blue-600 uppercase mb-1">Strong Positive (+)</div>
                    <div className="font-semibold text-sm">Prod. Year & Levy</div>
                    <p className="text-xs text-muted-foreground mt-1">Xe càng mới và thuế càng cao thì giá càng đắt.</p>
                 </div>
                 <div className="p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800">
                    <div className="text-xs font-bold text-orange-600 uppercase mb-1">Strong Negative (-)</div>
                    <div className="font-semibold text-sm">Mileage</div>
                    <p className="text-xs text-muted-foreground mt-1">Số km càng lớn, giá xe càng giảm.</p>
                 </div>
                 <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-800">
                    <div className="text-xs font-bold text-red-600 uppercase mb-1">Multicollinearity ⚠️</div>
                    <div className="font-semibold text-sm">Engine Vol. & Cylinders</div>
                    <p className="text-xs text-muted-foreground mt-1">Tương quan 0.75. Cần loại bỏ bớt 1 biến để tránh đa cộng tuyến.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* 5. FEATURE SELECTION (FINAL VERDICT) */}
        <div className="bg-slate-900 text-white rounded-xl p-6 shadow-lg">
           <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">🎯 Kết quả Lựa chọn Đặc trưng (Feature Selection)</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Selected Features */}
              <div>
                 <div className="text-green-400 font-bold text-xs uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Selected Features
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {['Levy', 'Mileage', 'Doors', 'Car_Age', 'Engine_Turbo', 'Airbags', 'Manufacturer', 'Category', 'Fuel type', 'Gear box type'].map(f => (
                       <span key={f} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-mono border border-green-500/30">{f}</span>
                    ))}
                 </div>
              </div>

              {/* Dropped Features */}
              <div>
                 <div className="text-red-400 font-bold text-xs uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span> Dropped / Replaced
                 </div>
                 <ul className="text-sm text-slate-300 space-y-1">
                    <li><strong className="text-white">ID:</strong> Không mang ý nghĩa dự báo.</li>
                    <li><strong className="text-white">Prod. year:</strong> Thay thế bằng <code>Car_Age</code> (tuổi xe).</li>
                    <li><strong className="text-white">Engine volume:</strong> Đa cộng tuyến, thay bằng <code>Engine_Turbo</code>.</li>
                    <li><strong className="text-white">Color, Wheel:</strong> Tương quan thấp với Price.</li>
                 </ul>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};


// ==================================================================================
// 4. FEATURE ENGINEERING
// ==================================================================================
const FeatureEngineering = () => {
  return (
    <section className="mb-16 w-full animate-fade-in">
      
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
       
        <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Trích xuất & Chuyển đổi đặc trưng <span className="text-muted-foreground text-lg font-normal">(Feature Engineering)</span>

        </h2>
      </div>

      <div className="space-y-12">

        {/* 1. FEATURE CREATION (MATH FORMULA STYLE) */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 border border-orange-200 dark:border-orange-800 rounded-2xl p-8 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-4 -mr-4 text-9xl text-orange-500/10 opacity-50 font-serif font-bold">ƒ(x)</div>
           <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider mb-4">Feature Engineering</h3>
           <div className="inline-block bg-white dark:bg-black/50 px-8 py-4 rounded-xl border border-orange-300 dark:border-orange-700 shadow-sm">
              <span className="font-mono text-xl md:text-2xl font-bold text-foreground">
                Car_Age = <span className="text-blue-600">2025</span> - <span className="text-purple-600">Prod. Year</span>
              </span>
           </div>
           <p className="mt-4 text-muted-foreground text-sm">
             Biến đổi dữ liệu thời gian thành dạng số có ý nghĩa hơn đối với mô hình hồi quy.
           </p>
        </div>

        {/* 2. TRANSFORMATION PIPELINE (DIAGRAM) */}
        <div>
           <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
             <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
             Quy trình xử lý (ColumnTransformer Pipeline)
           </h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-muted-foreground font-bold z-10 bg-background p-2 rounded-full border">
                +
              </div>

              {/* Numerical Flow */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:border-blue-400 transition-colors">
                 <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg font-bold">#</div>
                    <span className="font-bold">Đặc trưng số (Numerical)</span>
                 </div>
                 <div className="space-y-3 relative pl-6 border-l-2 border-dashed border-blue-200 dark:border-blue-800 ml-3">
                    <div className="relative">
                       <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-black"></span>
                       <h4 className="font-bold text-sm">1. SimpleImputer</h4>
                       <p className="text-xs text-muted-foreground">Strategy: <strong>Mean</strong> (Điền trung bình)</p>
                    </div>
                    <div className="relative pt-4">
                       <span className="absolute -left-[31px] top-5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-black"></span>
                       <h4 className="font-bold text-sm">2. StandardScaler / MinMaxScaler</h4>
                       <p className="text-xs text-muted-foreground">Chuẩn hóa về cùng một phạm vi.</p>
                    </div>
                 </div>
              </div>

              {/* Categorical Flow */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:border-pink-400 transition-colors">
                 <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className="p-2 bg-pink-100 text-pink-600 rounded-lg font-bold">Aa</div>
                    <span className="font-bold">Đặc trưng phân loại (Categorical)</span>
                 </div>
                 <div className="space-y-3 relative pl-6 border-l-2 border-dashed border-pink-200 dark:border-pink-800 ml-3">
                    <div className="relative">
                       <span className="absolute -left-[31px] top-1 w-4 h-4 bg-pink-500 rounded-full border-4 border-white dark:border-black"></span>
                       <h4 className="font-bold text-sm">1. SimpleImputer</h4>
                       <p className="text-xs text-muted-foreground">Strategy: <strong>Most Frequent</strong> (Điền Mode)</p>
                    </div>
                    <div className="relative pt-4">
                       <span className="absolute -left-[31px] top-5 w-4 h-4 bg-pink-500 rounded-full border-4 border-white dark:border-black"></span>
                       <h4 className="font-bold text-sm">2. OneHotEncoder</h4>
                       <p className="text-xs text-muted-foreground"><code>handle_unknown='ignore'</code></p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 3. PCA SECTION (VISUALIZATION) */}
        <div className="relative bg-indigo-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 space-y-4">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/50 text-indigo-200 text-xs font-bold uppercase">
                    Dimensionality Reduction
                 </div>
                 <h3 className="text-3xl font-bold">PCA (Principal Component Analysis)</h3>
                 <p className="text-indigo-200/80 leading-relaxed">
                    Giảm số chiều dữ liệu nhưng vẫn giữ lại thông tin quan trọng nhất. Giúp loại bỏ đa cộng tuyến và tăng tốc độ huấn luyện.
                 </p>
                 <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                       <span className="text-sm font-medium">Faster Training</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                       <span className="text-sm font-medium">Less Noise</span>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-indigo-800/50 rounded-xl border border-indigo-600/50 backdrop-blur-sm">
                 <span className="text-5xl font-mono font-bold text-cyan-300">90%</span>
                 <span className="text-xs uppercase tracking-widest mt-2 font-bold text-indigo-300">Variance Retained</span>
                 <div className="w-full bg-indigo-950 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-[90%] h-full"></div>
                 </div>
              </div>
           </div>
           
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        </div>

        {/* 4. KEY HIGHLIGHT */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 flex items-start gap-4">
            <div className="p-2 bg-green-500 text-white rounded-full mt-1 shrink-0 shadow-lg shadow-green-500/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
                <h4 className="font-bold text-green-700 dark:text-green-400 text-lg">Hệ thống xử lý toàn diện</h4>
                <p className="text-green-800/80 dark:text-green-300/80 mt-1 text-sm leading-relaxed">
                    Sự kết hợp giữa <strong>Feature Engineering</strong> (tạo biến mới có ý nghĩa), <strong>Feature Transformation</strong> (xử lý chuẩn hóa) và <strong>PCA</strong> (tinh gọn dữ liệu) tạo ra một tập dữ liệu đầu vào tối ưu nhất cho các mô hình học máy.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};


// ==================================================================================
// 5 & 6. TRAINING AND EVALUATION (SỬA LỖI FINAL)
// ==================================================================================
const TrainingAndEvaluation = () => {
    return (
        <React.Fragment>
            {/* ================================================================================== */}
            {/* 5. Huấn luyện Mô hình và Tinh chỉnh Siêu tham số */}
            {/* ================================================================================== */}
            <section className="mb-16 w-full animate-fade-in">
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2v2m0 0l-3 3m3-3l3 3m-3-3l-3 3m3-3v2m0 0l-3 3m3-3l3 3m-3-3v2" /></svg>
                    </div>
                    <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                        Huấn luyện Mô hình <span className="text-muted-foreground text-lg font-normal">(Training & Tuning)</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* KHỐI 1: CẤU HÌNH KỸ THUẬT */}
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-pink-500 rounded-full"></span>
                            1. Cấu hình Kỹ thuật và Phương pháp Huấn luyện
                        </h3>
                        
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-muted">
                                        <th className="border border-border px-4 py-2 text-left">Tham số/Công cụ</th>
                                        <th className="border border-border px-4 py-2 text-left">Thiết lập</th>
                                        <th className="border border-border px-4 py-2 text-left">Mục đích</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-border px-4 py-2 font-semibold">Mô hình so sánh</td>
                                        <td className="border border-border px-4 py-2">Linear, SVR, Random Forest</td>
                                        <td className="border border-border px-4 py-2">So sánh hiệu quả giữa tuyến tính và phi tuyến tính.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-border px-4 py-2 font-semibold">Tối ưu hóa</td>
                                        <td className="border border-border px-4 py-2">GridSearchCV (3-Fold CV)</td>
                                        <td className="border border-border px-4 py-2">Tìm kiếm tự động bộ siêu tham số tốt nhất.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-border px-4 py-2 font-semibold">Tiêu chí Đánh giá</td>
                                        <td className="border border-border px-4 py-2"><code>neg_root_mean_squared_error</code></td>
                                        <td className="border border-border px-4 py-2">Ưu tiên mô hình giảm thiểu lỗi <strong>RMSE</strong> (đặc biệt nhạy cảm với các lỗi lớn).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* KHỐI 2: PARAMETER GRIDS */}
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
                            2. Cấu hình Siêu tham số (<code>param_grids</code>)
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            GridSearchCV sẽ thử nghiệm tất cả các tổ hợp tham số trong các lưới dưới đây để tìm ra mô hình tối ưu cho từng thuật toán.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {/* Linear */}
                            <div className="border rounded-lg p-3 bg-muted/50">
                                <strong className="text-foreground block mb-1">Linear Regression:</strong>
                                <p className="text-sm font-mono text-muted-foreground">{`{}`}</p>
                            </div>
                            {/* SVR */}
                            <div className="border rounded-lg p-3">
                                <strong className="text-foreground block mb-1">SVR:</strong>
                                <pre className="text-xs mt-1 whitespace-pre-wrap bg-muted p-2 rounded">
                                  {`{'model__kernel': ['rbf'],
                                  'model__C': [1.0, 10.0, 100.0],
                                  'model__epsilon': [0.1, 0.2, 0.5],
                                  'model__gamma': ['scale', 'auto']}`}
                                </pre>
                            </div>
                            {/* Random Forest */}
                            <div className="border rounded-lg p-3">
                                <strong className="text-foreground block mb-1">Random Forest Regressor:</strong>
                                <pre className="text-xs mt-1 whitespace-pre-wrap bg-muted p-2 rounded">
                                  {`{'model__n_estimators': [200, 400],
                                  'model__max_depth': [null, 10, 20],
                                  'model__min_samples_split': [2, 5],
                                  'model__min_samples_leaf': [1, 2],
                                  'model__max_features': ['sqrt', 'log2']}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================================== */}
            {/* 6. Đánh giá Mô hình trên Tập Kiểm tra */}
            {/* ================================================================================== */}
            <section className="mb-16 w-full animate-fade-in">
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2v2m0 0l-3 3m3-3l3 3m-3-3l-3 3m3-3v2m0 0l-3 3m3-3l3 3m-3-3v2" /></svg>
                    </div>
                    <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                        Đánh giá Mô hình <span className="text-muted-foreground text-lg font-normal">(Evaluation on Test Set)</span>
                    </h2>
                </div>
                
                <div className="space-y-8">

                    {/* KHỐI 1: BẢNG KẾT QUẢ */}
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
                            1. Kết quả Tổng hợp trên Tập Kiểm tra (Test Set)
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Các chỉ số <strong>MAE</strong> và <strong>RMSE</strong> được tính toán trên đơn vị giá gốc (sau khi áp dụng <code>np.expm1</code>).
                        </p>
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
                                    <tr className="bg-green-500/10 font-bold">
                                        <td className="border border-border px-4 py-2">Random Forest</td>
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

                    {/* KHỐI 2: PHÂN TÍCH HIỆU SUẤT & BIỂU ĐỒ CHẨN ĐOÁN (SỬA LỖI FINAL) */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          {/* Cột 1: Phân tích Hiệu suất (2. Phân tích Hiệu suất) */}
                          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                                  <span className="w-2 h-6 bg-orange-500 rounded-full shrink-0"></span>
                                  2. Phân tích Hiệu suất
                              </h3>
                              <ul className="space-y-4 text-muted-foreground">
                                  <li>
                                      <strong className="text-foreground">Random Forest (Mô hình tốt nhất)</strong>: Hiệu suất vượt trội với <strong>MAE</strong> thấp nhất (5,775) và R² (test_log) cao nhất (0.557).
                                  </li>
                                  <li className="text-red-600 dark:text-red-400 font-medium">
                                      <strong className="text-foreground">Overfitting nhẹ</strong>: R² train (0.932) cao hơn nhiều so với R² test (0.557), cho thấy mô hình học quá kỹ tập huấn luyện.
                                  </li>
                                  <li>
                                      <strong className="text-foreground">Linear Regression</strong>: Hiệu suất thấp nhất (R² rất thấp), khẳng định mối quan hệ trong dữ liệu là <strong>phi tuyến tính</strong>.
                                  </li>
                              </ul>
                          </div>
                          
                          {/* Cột 2: Biểu đồ Chẩn đoán (3. Biểu đồ Chẩn đoán) */}
                          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                                  <span className="w-2 h-6 bg-purple-500 rounded-full shrink-0"></span>
                                  3. Biểu đồ Chẩn đoán (Diagnostic Plots)
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="col-span-1">
                                      <img src={chart2} alt="Phân phối Phần dư (Residual Plot)" className="w-full rounded-lg border" />
                                      <p className="mt-2 text-xs text-center font-semibold text-muted-foreground">Residual Plot (Train)</p>
                                  </div>
                                  <div className="col-span-1">
                                      <img src={chart3} alt="Biểu đồ Parity Plot (y_test vs y_pred_test)" className="w-full rounded-lg border" />
                                      <p className="mt-2 text-xs text-center font-semibold text-muted-foreground">Parity Plot (Test)</p>
                                  </div>
                              </div>
                              <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                                  <li>
                                      <strong className="text-foreground">Residual Plot</strong>: Phân phối phần dư có 'đuôi phải dài' (skewed).
                                      <p className="pl-3 italic">→ Mô hình có xu hướng <strong>dự đoán thấp hơn (underpredict)</strong> cho các xe có giá cao.</p>
                                  </li>
                                  <li>
                                      <strong className="text-foreground">Parity Plot</strong>: Các điểm dữ liệu hội tụ dưới đường y = x ở phân khúc giá cao.
                                      <p className="pl-3 italic">→ Xác nhận hiện tượng underpricing đối với các xe đắt tiền.</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                    
                    {/* KHỐI 3: KẾT LUẬN CUỐI CÙNG */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 flex items-start gap-4">
                        <div className="p-2 bg-green-500 text-white rounded-full mt-1 shrink-0 shadow-lg shadow-green-500/30">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-700 dark:text-green-400 text-lg">Kết luận Đánh giá</h4>
                            <p className="text-green-800/80 dark:text-green-300/80 mt-1 text-sm leading-relaxed">
                                Random Forest là mô hình phù hợp nhất cho bộ dữ liệu này. Tuy nhiên thì có thể thấy là mô hình đang bị overfit nhẹ và có xu hướng dự đoán thấp hơn ở các giá trị cao. Điều này là do phân phối các biến như Price, Mileage, Levy có phân phối right-skewed và dữ liệu còn ít và các dữ liệu phi tuyến khá phức tạp. Điều đó dẫn đến mô hình cố gắng mô tả toàn bộ quan hệ này làm cho các cây trở nên quá chi tiết. Một số cách khắc phục và nhóm đề xuất: tăng model__min_samples_leaf và model__min_samples_split, giảm ngưỡng clipping trong IQR, thu thập thêm dữ liệu, hoặc thử các mô hình phức tạp hơn như Gradient Boosting hoặc XGBoost.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
};


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
                    <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                        Assignment 1: Dự đoán giá ô tô
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Xây dựng Pipeline Học máy Truyền thống cho Bài toán Hồi quy.
                    </p>
                </div>

                {/* Section 1: Giới thiệu */}
                <CarPriceIntro />

                {/* Section 2: EDA */}
                <CarPriceEDA />

                {/* Section 3: Tiền xử lý */}
                <DataPreprocessing />
                {/* Section 4: Trích xuất đặc trưng */}
                <FeatureEngineering />

                {/* Section 5 & 6: Huấn luyện và Đánh giá (Đã được hợp nhất thành Component mới) */}
                <TrainingAndEvaluation /> 

            </main>
        </div>
    );
};

export default BTL1;
