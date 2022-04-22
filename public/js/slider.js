function initSlider(containerSelector, animationMs, intervalMs) {
    function progressSlider() {
        const images = $(`${containerSelector} > img`);

        images.last().removeClass('slider-img--visible');
        images.eq(-2).addClass('slider-img--visible');

        const image = $(`${containerSelector} > img`).last().clone();

        setTimeout(() => {
            image.prependTo('#image-container');
            $(`${containerSelector} > img`).last().remove();
        }, animationMs + animationMs / 10);
    }

    $(`${containerSelector} > img`).addClass(`duration-${animationMs}`);
    progressSlider();

    setInterval(() => {
        progressSlider();
    }, intervalMs);
}
