document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const tob = document.getElementById("tob").value;
    const pob = document.getElementById("pob").value;
    const gender = document.getElementById("gender").value;

    // Kiểm tra dữ liệu đầu vào
    if (!name || !dob || !tob || !pob) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Xử lý phân tích vận mệnh (giả lập)
    const resultContent = `
        <p><strong>🔮 Họ tên:</strong> ${name}</p>
        <p><strong>📅 Ngày sinh:</strong> ${dob} - Giờ sinh: ${tob}</p>
        <p><strong>📍 Nơi sinh:</strong> ${pob}</p>
        <p><strong>⚤ Giới tính:</strong> ${gender}</p>
        <hr>
        <h3>✨ Luận Giải Số Mệnh ✨</h3>
        <p>🔹 Mệnh & Ngũ Hành: <strong>Hỏa</strong> - Tương sinh: <strong>Mộc</strong></p>
        <p>🔹 Tình duyên: <strong>Ổn định, dễ gặp quý nhân.</strong></p>
        <p>🔹 Sự nghiệp: <strong>Thăng tiến nhanh trong 3 năm tới.</strong></p>
        <p>🔹 Cảnh báo vận hạn: <strong>Cẩn thận các mối quan hệ năm 2027.</strong></p>
        <p>🔹 Cách hóa giải: <strong>Dùng vật phẩm phong thủy, cân bằng năng lượng.</strong></p>
    `;

    // Hiển thị kết quả
    document.getElementById("resultContent").innerHTML = resultContent;
    document.getElementById("resultSection").style.display = "block";
});
