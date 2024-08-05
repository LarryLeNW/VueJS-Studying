<script setup>
import { onMounted, reactive } from "vue";
import { ref } from "vue";

let dataInit = ref([
    {
        maGiaoDich: "MGD-001",
        loaiDichVu: "Đất",
        ngayGiaoDich: new Date("2023-09-09"),
        price: 600000,
        dienTich: 100,
        tenKhachHang: "Nguyễn Văn Hoàng",
        soDienThoai: "1234567842",
        email: "vanhoang@example.com",
    },
    {
        maGiaoDich: "MGD-002",
        loaiDichVu: "Nhà và Đất",
        ngayGiaoDich: new Date("2023-09-09"),
        price: 800000,
        dienTich: 150,
        tenKhachHang: "Trần Thị Bảo",
        soDienThoai: "1234567842",
        email: "tranthibao@example.com",
    },
    {
        maGiaoDich: "MGD-003",
        loaiDichVu: "Đất",
        ngayGiaoDich: new Date("2023-09-09"),
        price: 550000,
        dienTich: 80,
        tenKhachHang: "Lê Văn Cường",
        soDienThoai: "1234567842",
        email: "levancuong@example.com",
    },
    {
        maGiaoDich: "MGD-004",
        loaiDichVu: "Đất",
        ngayGiaoDich: new Date("2023-09-09"),
        price: 750,
        dienTich: 120,
        tenKhachHang: "Phạm Thị Dung",
        soDienThoai: "1234567842",
        email: "phamthidung@example.com",
    },
    {
        maGiaoDich: "MGD-004",
        loaiDichVu: "Đất",
        ngayGiaoDich: new Date("2023-09-09"),
        price: 700,
        dienTich: 95,
        tenKhachHang: "Hoàng Văn Hải",
        soDienThoai: "1234567842",
        email: "phamthidung@example.com",
    },
]);

let dataCreate = reactive({
    maGiaoDich: "",
    loaiDichVu: "",
    ngayGiaoDich: new Date(),
    price: 0,
    dienTich: 0,
    tenKhachHang: "",
    soDienThoai: "",
    email: "",
});

const handleCreate = () => {
    if (
        !(
            dataCreate.maGiaoDich &&
            dataCreate.loaiDichVu &&
            dataCreate.ngayGiaoDich &&
            dataCreate.dienTich &&
            dataCreate.tenKhachHang &&
            dataCreate.soDienThoai &&
            dataCreate.email
        )
    ) {
        alert("vui lòng điền đẩy đủ thông tin trước khi tạo");
        return;
    }
    dataRender.value.push(dataCreate);
    changeIsShowCreate();
};

let dataRender = ref([]);

onMounted(() => {
    dataRender.value = dataInit.value;
});

const handDelete = (id) => {
    dataRender.value = dataRender.value.filter((el) => el.maGiaoDich != id);
};

const handleSearch = (keyword) => {
    dataRender.value = dataInit.value.filter((el) =>
        el.tenKhachHang.toLowerCase().includes(keyword.toLowerCase())
    );
};

const handleFilterCategory = (category) => {
    dataRender.value = dataInit.value.filter((el) =>
        el.loaiDichVu.includes(category)
    );
};

const reset = () => {
    dataRender.value = dataInit.value;
};

const isShowColCreate = ref(false);

const changeIsShowCreate = () => {
    isShowColCreate.value = !isShowColCreate.value;
};
</script>

<template>
    <header>
        <h1 style="text-align: center">Quản lí Giao dịch Nhà và Đất</h1>

        <div
            style="
                display: flex;
                justify-content: space-between;
                align-items: center;
            "
        >
            <div
                style="
                    padding: 0.5rem;
                    font-weight: bold;
                    font-size: large;
                    text-align: center;
                    border: 1px solid blue;
                    outline: 1px solid blue;
                    border-radius: 5px;
                    background-color: green;
                    color: white;
                    height: 30px;
                "
                @click="changeIsShowCreate()"
            >
                ➕ Thêm mới
            </div>
            <div style="display: flex; gap: 2; align-items: center">
                <div
                    style="
                        padding: 0.5rem;
                        font-weight: bold;
                        font-size: large;
                        text-align: center;
                        border: 1px solid blue;
                        outline: 1px solid blue;
                        border-radius: 5px;
                        background-color: yellow;
                        cursor: pointer;
                        color: black;
                        height: 30px;
                        margin: 0 20px;
                    "
                    @click="reset()"
                >
                    🔃 Reset
                </div>
                <input
                    type="text"
                    placeholder="Tìm Kiếm Theo Tên Khách Hàng"
                    :onchange="(e) => handleSearch(e.target.value)"
                    style="
                        padding: 0.5rem;
                        border: 1px solid blue;
                        border-radius: 5px;
                        outline: 1px solid blue;
                        font-size: 1rem;
                        height: 30px;
                    "
                />
                <div style="margin-left: 40px">
                    <select
                        name="category"
                        style="
                            width: 200px;
                            padding: 0.5rem;
                            font-weight: bold;
                            font-size: large;
                            text-align: center;
                            border: 1px solid blue;
                            border-radius: 5px;
                            outline: 1px solid blue;
                            height: 50px;
                        "
                        :onchange="(e) => handleFilterCategory(e.target.value)"
                    >
                        <option value="Nhà và Đất">Nhà và Đất</option>
                        <option value="Đất">Đất</option>
                        <option value="Nhà">Nhà</option>
                    </select>
                </div>
            </div>
        </div>
    </header>
    <div>
        <table
            style="
                width: 90%;
                margin-top: 2rem;
                margin-left: auto;
                margin-right: auto;
                border: 1px solid black;
                text-align: center;
            "
        >
            <thead>
                <tr>
                    <th>Mã giao dịch</th>
                    <th>Loại dịch vụ</th>
                    <th>Ngày giao dịch</th>
                    <th>Đơn giá (VND/m2)</th>
                    <th>Diện tích (m2)</th>
                    <th>Tên khách hàng</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Chi tiết</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dataRender">
                    <td>{{ item.maGiaoDich }}</td>
                    <td>{{ item.loaiDichVu }}</td>
                    <td>{{ item.ngayGiaoDich }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.dienTich }}</td>
                    <td>{{ item.tenKhachHang }}</td>
                    <td>{{ item.soDienThoai }}</td>
                    <td>{{ item.email }}</td>
                    <td>👁️</td>
                    <td
                        @click="handDelete(item.maGiaoDich)"
                        style="cursor: pointer"
                    >
                        ❌
                    </td>
                </tr>
                <tr v-if="isShowColCreate">
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.maGiaoDich"
                        />
                    </td>
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.loaiDichVu"
                        />
                    </td>
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.ngayGiaoDich"
                        />
                    </td>
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.price"
                        />
                    </td>
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.dienTich"
                        />
                    </td>
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.tenKhachHang"
                        />
                    </td>
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.soDienThoai"
                        />
                    </td>
                    <td>
                        <input
                            style="height: 100%"
                            type="text"
                            v-model="dataCreate.email"
                        />
                    </td>
                    <td
                        colspan="2"
                        style="background: green; color: white; cursor: pointer"
                        @click="handleCreate"
                    >
                        Tạo
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
th {
    border: 1px solid black;
}

tr {
    border: 1px solid black;
}

td {
    border: 1px solid black;
}
</style>
