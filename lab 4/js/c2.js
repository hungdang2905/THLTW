// Lấy các giá trị a, b, c từ form
const a = document.querySelector("input[name='a']").value;
const b = document.querySelector("input[name='b']").value;
const c = document.querySelector("input[name='c']").value;

// Tính delta
const delta = b * b - 4 * a * c;

// Xử lý kết quả
if (delta > 0) {
    // Có hai nghiệm phân biệt
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Hiển thị kết quả
    document.querySelector("#result").innerHTML = `
    <h2>Phương trình có hai nghiệm phân biệt:</h2>
    <ul>
      <li>x1 = ${x1}</li>
      <li>x2 = ${x2}</li>
    </ul>
  `;
} else if (delta == 0) {
    // Có một nghiệm kép
    const x = -b / (2 * a);

    // Hiển thị kết quả
    document.querySelector("#result").innerHTML = `
    <h2>Phương trình có một nghiệm kép:</h2>
    <ul>
      <li>x = ${x}</li>
    </ul>
  `;
} else {
    // Không có nghiệm
    document.querySelector("#result").innerHTML = `
    <h2>Phương trình vô nghiệm</h2>
  `;
}
