document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    renderServices();
    renderOtherServices();
});

// 1. Slider Functionality
function initSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Auto-advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 4000);

    showSlide(currentSlide);
}

// 2. Services Section
function renderServices() {
    const services = [
        { image: "./images/service-design.jpg",
          title: "Thiết Kế",
          text: "Đội ngũ thiết kế sân golf hơn 10 năm kinh nghiệm, thi công đạt tiêu chuẩn quốc tế."
        },
        { image: "./images/service-construction.jpg",
          title: "Xây Dựng",
          text: "Là đơn vị đứng đầu về Thiết kế Thi công sân golf chuyên nghiệp trên Toàn Quốc."
        },
        { image: "./images/service-operation.jpg",
          title: "Vận Hành",
          text: "Quản lý, điều hành, vận hành hoạt động kinh doanh hàng ngày của sân golf."
        },
        { image: "./images/service-maintenance.jpg",
          title: "Chăm Sóc Bảo Dưỡng",
          text: "Giúp quá trình sử dụng sân golf luôn đạt tiêu chuẩn kỹ thuật cao nhất."
        },
        { image: "./images/service-training.jpg",
          title: "Huấn Luyện",
          text: "Cung cấp bài học golf từ các chuyên gia quốc tế có trình độ cao, giàu kinh nghiệm."
        },
        { image: "./images/service-lawn-care.jpg",
          title: "Chăm Sóc Cỏ",
          text: "Tiến hành xử lý cỏ dại kết hợp áp dụng các kỹ thuật chăm sóc cỏ sân golf khoa học."
        }
    ];

    const container = document.querySelector("#service-items");
    if (!container) return;

    const html = services.map(service => `
        <div class="col-md-4">
            <div class="service-card">
                <img src="${service.image}" class="img-top">
                <div class="card-body">
                    <h3 class="card-title">${service.title}</h3>
                    <p>${service.text}</p>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 3. Other Services Section
function renderOtherServices() {
    const services = [
        { image: "./images/house.png", title: "Xây dựng nhà ở" },
        { image: "./images/scaffolding.png", title: "Xây dựng các công trình kỹ thuật dân dụng" },
        { image: "./images/drill.png", title: "Phá dỡ" },
        { image: "./images/blueprint.png", title: "Lắp đặt hệ thống điện, cấp thoát nước, sưởi và điều hoà không khí" },
        { image: "./images/conversation.png", title: "Hoạt động thiết kế chuyên dụng và tư vấn kỹ thuật liên quan" },
        { image: "./images/agreement.png", title: "Tư vấn môi giới, đấu giá bất động sản, đấu giá quyền sử dụng đất" },
        { image: "./images/location-pin.png", title: "Dịch vụ chăm sóc và duy trì cảnh quan" },
        { image: "./images/demolition.png", title: "Bán buôn máy móc, thiết bị, phụ tùng máy" }
    ];

    const container = document.querySelector("#other-service-items");
    if (!container) return;

    const html = services.map(service => `
        <div class="col-md-3">
            <article class="other-services-card">
                <img src="${service.image}" class="other-services-icons">
                <h3>${service.title}</h3>
            </article>
        </div>
    `).join('');

    container.innerHTML = html;
}