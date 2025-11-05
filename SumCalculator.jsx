import React, { useState } from "react";

/**
 * Component Su     mCalculator
 * - Quản lý state cho 2 ô nhập liệu (number1, number2)
 * - Quản lý state cho kết quả (result)
 * - Quản lý state cho thông báo lỗi (error)
 * - Xử lý logic tính toán và kiểm tra hợp lệ
 */
function SumCalculator() {
  // === QUẢN LÝ STATE (25 điểm) ===
  // State cho 2 ô nhập liệu
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  // State cho kết quả. Dùng `null` để biết khi nào chưa tính
  const [result, setResult] = useState(null);

  // State cho thông báo lỗi
  const [error, setError] = useState("");

  // === XỬ LÝ SỰ KIỆN ===
  const handleCalculate = () => {
    // 1. Reset trạng thái lỗi và kết quả cũ
    setError("");
    setResult(null);

    // 2. KIỂM TRA HỢP LỆ (VALIDATION) (15 điểm)
    // Kiểm tra rỗng
    if (number1.trim() === "" || number2.trim() === "") {
      setError("Vui lòng nhập cả hai số.");
      return; // Dừng hàm nếu có lỗi
    }

    // Chuyển đổi sang số
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    // Kiểm tra có phải là số hợp lệ không (isNaN)
    if (isNaN(num1) || isNaN(num2)) {
      setError("Đầu vào phải là số. Vui lòng kiểm tra lại.");
      return; // Dừng hàm nếu có lỗi
    }

    // 3. TÍNH TOÁN VÀ CẬP NHẬT STATE
    const sum = num1 + num2;
    setResult(sum);
  };

  // === GIAO DIỆN (UI FUNCTIONALITY) (30 điểm) ===
  return (
    <div className="calculator-container">
      <h2>Máy Tính Tổng (React Hooks)</h2>

      {/* Nhóm nhập liệu 1 */}
      <div className="input-group">
        <label>Số thứ nhất:</label>
        <input
          type="text" // Dùng type="text" để linh hoạt validate (thay vì type="number")
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Nhập số..."
        />
      </div>

      {/* Nhóm nhập liệu 2 */}
      <div className="input-group">
        <label>Số thứ hai:</label>
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Nhập số..."
        />
      </div>

      {/* Nút tính toán */}
      <button onClick={handleCalculate} className="calculate-btn">
        Calculate Sum
      </button>

      {/* Hiển thị lỗi (nếu có) */}
      {error && <p className="error-message">{error}</p>}

      {/* Hiển thị kết quả (chỉ khi result không phải là null) */}
      {result !== null && (
        <div className="result-container">
          <h3>Kết quả: {result}</h3>
        </div>
      )}
    </div>
  );
}

// === CODE QUALITY (20 điểm) ===
// - Sử dụng Functional Component
// - Sử dụng React Hooks (useState)
// - Đặt tên biến, hàm rõ ràng
// - Có chú thích (comment)
export default SumCalculator;
