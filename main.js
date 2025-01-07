$(document).ready(function () {
    console.log("loaded");

    $('#btn-load').click(function () {
        $.getJSON('../student.json', function (data) { // Đường dẫn đã được cập nhật
            let iteam = '';
            $.each(data, function (index, value) {
                iteam += '<tr>';
                iteam += '<td>' + value.name + '</td>';
                iteam += '<td>' + value.age + '</td>';
                iteam += '<td>' + value.city + '</td>';
                iteam += '<td>' + value.country + '</td>';
                iteam += '<td>' + value.hobbies.join(', ') + '</td>';
                iteam += '<td>' + value.friends.join(', ') + '</td>';
                iteam += '</tr>';
            });

            $('#student-data').empty(); // Xóa dữ liệu cũ
            $('#student-data').append(iteam); // Thêm dữ liệu mới
        }).fail(function() {
            console.error("Không thể tải dữ liệu JSON.");
        });
    });
});