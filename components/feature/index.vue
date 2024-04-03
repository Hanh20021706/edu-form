<template>
  <div class="relative md:mb-section mb-section-mb">
    <div class="absolute w-[200px] h-[200px] left-0 bottom-[100px]">
      <img src="~images/feature/sub.png" alt="" />
    </div>
    <div class="container">
      <TitleSection>
        {{ $t("feature.title") }}
      </TitleSection>
      <div>
        <div class="flex flex-wrap justify-center gap-y-[24px]">
          <div
            class="md:w-[calc(100%/2)] lg:w-[calc(100%/4)] flex flex-col px-[26px] items-center text-center"
            v-for="item in data"
            key="item.id"
          >
            <div class="">
              <img :src="item.image" alt="" class="max-w-[86px] max-h-[86px]" />
            </div>
            <h3 class="py-[16px] text-[24px] font-bold text-black">
              {{ item.title }}
            </h3>
            <p class="text-[16px] text-gray">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    id: 1,
    title: "Tạo và tùy biến",
    description:
      " Hệ thống cung cấp 20+ loại câu hỏi và tính năng tùy biến logic hiển thị, rẽ nhánh câu hỏi. Thiết kế dễ dàng bằng thao tác kéo thả và xem trước  ",
    image: require("@/assets/images/feature/custom.png"),
  },
  {
    id: 2,
    title: "Cá nhân hóa",
    description:
      "Có thể đăng ảnh đại diện, lựa chọn chủ đề, và tùy chỉnh nội dung trang khởi đầu và kết thúc, cũng như cài đặt các tùy chọn hướng dẫn người dùng một cách thuận tiện.",
    image: require("@/assets/images/feature/feature-2.png"),
  },
  {
    id: 3,
    title: "Chia sẻ",
    description:
      "Chia sẻ khảo sát một cách thuận tiện trên mạng xã hội, website hoặc qua email, đồng thời đảm bảo an toàn thông tin với mã hóa dữ liệu. Hỗ trợ xác thực tài khoản hoặc khảo sát ẩn danh tăng cường tính bảo mật.",
    image: require("@/assets/images/feature/feature-3.png"),
  },
  {
    id: 4,
    title: "Thu thập phản hồi",
    description:
      "Hỗ trợ đa phễu thu thập trên một bảng khảo sát và thu thập phản hồi một cách thuận tiện. Có khả năng nhúng khảo sát vào website để tối ưu hóa trải nghiệm người dùng.",
    image: require("@/assets/images/feature/feature-4.png"),
  },
  {
    id: 5,
    title: "Báo cáo, thống kê",
    description:
      "Hiển thị dữ liệu dưới dạng biểu đồ trực quan và tương tác, cũng như hỗ trợ trích xuất và tương tác với các định dạng phổ biến như Excel, CSV.",
    image: require("@/assets/images/feature/feature-5.png"),
  },
  {
    id: 6,
    title: "Đa ngôn ngữ",
    description:
      "Hỗ trợ dịch tự động khảo sát sang nhiều ngôn ngữ với khả năng chỉnh sửa toàn bộ nội dung tĩnh, bao gồm cả nút bấm",
    image: require("@/assets/images/feature/feature-6.png"),
  },
  {
    id: 7,
    title: "Cộng tác",
    description:
      "Cung cấp quyền hạn linh hoạt, cho phép bạn chia sẻ khảo sát với các quyền như xem, sửa, xem báo cáo, và trích xuất dữ liệu theo nhu cầu.",
    image: require("@/assets/images/feature/feature-7.png"),
  },
];
</script>

<style lang="scss" scoped></style>
