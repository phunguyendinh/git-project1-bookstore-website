$(document).ready(function () {
  // SLIDE IMAGE
  const images = ["Image/image1.png", "Image/image2.png", "Image/image3.png"];
  let currentIndex = 0;
  const totalImages = images.length;
  const intervalTime = 2500; // Thời gian trong mili giây
  const fadeDuration = 1000; // Thời gian hiệu ứng fade trong mili giây

  function showImage(index) {
    $("#slideshow").fadeOut(fadeDuration, function () {
      $(this).attr("src", images[index]).fadeIn(fadeDuration);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  $("#next").click(function () {
    nextImage();
  });

  $("#prev").click(function () {
    prevImage();
  });

  setInterval(nextImage, intervalTime);

});
