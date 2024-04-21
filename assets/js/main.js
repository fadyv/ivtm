
$(document).ready(function(){
  loader()  

  
  $('.counter1').counterUp({
    delay: 10,
    // duration: 80000,
    time: 5000,

  });

  $('.counter2').counterUp({
    delay: 10,
    time: 3000,
  });
});



//slice function
function sliceTextToNumber(className) {
    var elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent.trim();
    var maxChars = parseInt(element.getAttribute('data-max'));

    if (text.length > maxChars) {
        var slicedText = text.slice(0, maxChars);
        element.textContent = slicedText + '...';
    }
    }
}

// Example: Slice text based on the data-max attribute
sliceTextToNumber('slice');

//end slice function

// loader
function loader() {
  $('.lds-ellipsis').fadeOut();
  $('.preloader').delay(333).fadeOut('slow');
  $('body').delay(333);
  $('body').css('overflow-y','auto');
}

//end loader



$('.owl-carousel.partnerSlider').owlCarousel({
  margin: 25,
    nav: true,
    autoplay: true,
    autoplayTimeout:1500,
    // rtl:true,
    loop:true,
    responsive: { 0: { items: 2 }, 768: { items: 3 }, 1170: { items:5 }
}});


$('.owl-carousel.certificatesSlider').owlCarousel({
  margin: 25,
    nav: true,
    autoplay: true,
    autoplayTimeout:1500,
    rtl:true,
    // loop:true,
    responsive: { 0: { items:1 }, 768: { items: 1 }, 1170: { items:1 }
}});






// $("img").attr("loading", "lazy");



function namef(item) {
  if ( item == 'pills-home') {
    $("#pills-home").css('display','block')
    $("#pills-profile").css('display','none')
    $("#pills-contact").css('display','none')
  }else if (item == 'pills-profile') {
    // alert('ss')
    
    $("#pills-home").css('display','none')
    $("#pills-profile").css('display','flex')
    $("#pills-contact").css('display','none')
  }
  
}


  
// $('.navbar-toggler').click(()=>{
//   this.showInput = false
// })

if ($(window).width() <= 1024) {  

    $(window).scroll(() => {
      if ($(window).scrollTop() >= 10) {
      
      
        $('.position').css('fixed')
        $('.navbar').css('top', '0px')
        $('.first-nav').css('display', 'none')
        $('.navbar').css('box-shadow', ' 0px 0px 10px 0px rgba(0, 0, 0, 0.25)')
        
      }else if ($(window).scrollTop() <= 10) {
        // $('.position').css('static')
        $('.navbar').css('top', '80px')
        $('.first-nav').css('display', 'block') 
        $('.navbar').css('box-shadow', 'none')

      }
    });

  
  
} else{
// header
$(window).scroll(() => {
  if ($(window).scrollTop() >= 10) {
   
   
    $('.position').css('fixed')
    $('.navbar').css('top', '0px')
    $('.navbar').css('box-shadow', ' 0px 0px 10px 0px rgba(0, 0, 0, 0.25)')

    // $('.first-nav').css('display', 'none')
    
  }else if ($(window).scrollTop() <= 10) {
    // $('.position').css('static')
    $('.navbar').css('top', '45px')
    $('.navbar').css('box-shadow', 'none')

    
    // $('.first-nav').css('display', 'block')

  }
});
}

//courseSlider
$('.owl-carousel.courseSlider').owlCarousel({
  margin: 25,
   nav: true,
   autoplay: false,
   // autoplayTimeout:1500,
   rtl:true,
   loop:false,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 }
}});
function slide() {
  $('.owl-carousel.courseSlider').owlCarousel({
    margin: 25,
     nav: true,
     autoplay: true,
     // autoplayTimeout:1500,
     rtl:true,
     loop:false,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 }
  }});
}
//end courseSlider

//courseSlider
$('.owl-carousel.optionSlider').owlCarousel({
  margin: 25,
   nav: true,
   autoplay: true,
   // autoplayTimeout:1500,
   rtl:true,
   loop:false,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 1170: { items: 1 }
}});
//end 

//courseSlider
$('.owl-carousel.blogsSlider').owlCarousel({
  margin: 25,
   nav: true,
   autoplay: false,
   // autoplayTimeout:1500,
   rtl:true,
   loop:false,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 }
}});



// Function to allow only numbers
function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  
  // Function to prevent copying and pasting non-numeric characters in a number input
  function onPaste(event) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText && /\D/.test(pastedText)) {
      event.preventDefault(); // Cancel the paste action if it contains non-numeric characters
    }
  }
  
  // Function to allow only letters
  function handleKeydown(event) {
    const allowedKeys = /[a-zA-Zء-ي\s]/;
    const keyPressed = event.key;
  
    if (!allowedKeys.test(keyPressed)) {
      event.preventDefault();
    }
  }
  
  // Function to prevent copying and pasting numbers in a text input
  function handlePaste(event) {
    event.preventDefault();
  
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text/plain');
    const allowedPattern = /^[a-zA-Zء-ي\s]+$/;
  
    if (!allowedPattern.test(pastedText)) {
      // Optionally, you can display an error message or perform some action here.
      return;
    }
  
    // Manipulate the pasted text if needed
    const modifiedText = pastedText.toUpperCase();
  
    // Insert the modified text into the input field or perform any other desired action
    const inputElement = event.target;
    const currentPosition = inputElement.selectionStart || 0;
    const inputValue = inputElement.value;
    const newValue = inputValue.slice(0, currentPosition) + modifiedText + inputValue.slice(currentPosition);
    inputElement.value = newValue;
  }

  function fileInputs() {
     // Get the file input element
     const fileInput = document.getElementById('personal-image');
     const imageInput = document.getElementById('image-input');
     const download_image = document.getElementById('download_image');
     // Get the file input element
     const documentImage = document.getElementById('document-image');
     const documentInput = document.getElementById('document-input');
     const downloadDocument = document.getElementById('download_document');
 
     download_image.addEventListener('click', function() {
       $('#personal-image').click()
     });
 
  
      downloadDocument.addEventListener('click', function() {
          documentImage.click();
      });
  
      // Add event listener for change event
      documentImage.addEventListener('change', function() {
          // Get the file name
          const fileName = this.files[0].name;
  
          // Set the value of the text input field to the file name
          documentInput.value = fileName;
      });
 
     
     // Add event listener for change event
     fileInput.addEventListener('change', function() {
       // Get the file name
       const fileName = this.files[0].name;
 
       // Set the value of the text input field to the file name
       imageInput.value = fileName;
     });
  }

  


function downloadCertificates() {
  document.getElementById('download_certificate').addEventListener('click', function () {
    const images = document.querySelectorAll('.certificate_image');
    if (!images || images.length === 0) {
        console.error("No elements found with class 'certificate_image'.");
        return;
    }
  
    const pdf = new jsPDF();
  
    // Function to capture canvas for each image and add it to PDF
    function addImageToPDF(index) {
        if (index >= images.length) {
            // All images processed, save the PDF
            pdf.save("certificates.pdf");
            return;
        }
  
        const image = images[index];
        html2canvas(image).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            pdf.addImage(imgData, "PNG", 10, 10, 190, 0); // Adjust position and size as needed
            // Add new page for the next image if it's not the last one
            if (index < images.length - 1) {
                pdf.addPage();
            }
            addImageToPDF(index + 1); // Process next image
        });
    }
  
    // Start processing images from the first one
    addImageToPDF(0);
  });
}









// phones plugin

function iti() {

  
let input = document.querySelector("#phonee"),
errorMsg = document.querySelector("#error-msg1"),
validMsg = document.querySelector("#valid-msg1");

// initialize plugin
let iti = window.intlTelInput(input, {
preferredCountries: ["sa", "ae", "eg", "qa", "kw", "jo"],
separateDialCode: true,
utilsScript:
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
});

// here, the index maps to the error code returned from getValidationError - see readme
let errorMap = [
"رقم الهاتف غير صحيح",
"رقم الدولة غير صحيح",
"رقم الهاتف غير صحيح",
"رقم الهاتف غير صحيح",
"رقم الهاتف غير صحيح",
];

let reset = () => {
input.classList.remove("error");
errorMsg.innerHTML = "";
errorMsg.classList.add("hide");
errorMsg.classList.add("text-danger");
};

// on blur: validate
input.addEventListener("keyup", () => {
reset();
if (input.value.trim()) {
  if (iti.isValidNumber()) {
    validMsg.classList.remove("hide");
  } else {
    input.classList.add("error");
    let errorCode = iti.getValidationError();
    errorMsg.innerHTML = errorMap[errorCode];
    errorMsg.classList.remove("hide");
  }
}
});



  
  
}

function hover_degres(){
  $('.diploma').hover(()=>{
  
    $('.about-main-degree1').css('top','70px')
    $('.about-main-degree1').css('width','100%')
    $('.about-main-degree1').css('z-index','4')
  
    $('.about-main-degree2').css('top','35px')
    $('.about-main-degree2').css('width','90%')
    $('.about-main-degree2').css('z-index','3')
  
    $('.about-main-degree3').css('top','0px')
    $('.about-main-degree3').css('width','80%')
    $('.about-main-degree3').css('z-index','2')
  
  
  })
  
  $('.master').hover(()=>{
    $('.about-main-degree2').css('top','70px')
    $('.about-main-degree2').css('width','100%')
    $('.about-main-degree2').css('z-index','4')
  
    $('.about-main-degree1').css('top','35px')
    $('.about-main-degree1').css('width','90%')
    $('.about-main-degree1').css('z-index','3')
  
    $('.about-main-degree3').css('top','0px')
    $('.about-main-degree3').css('width','80%')
    $('.about-main-degree3').css('z-index','2')
  })
  
  $('.phd').hover(()=>{
    $('.about-main-degree3').css('top','70px')
    $('.about-main-degree3').css('width','100%')
    $('.about-main-degree3').css('z-index','4')
  
    $('.about-main-degree2').css('top','35px')
    $('.about-main-degree2').css('width','90%')
    $('.about-main-degree2').css('z-index','3')
  
    $('.about-main-degree1').css('top','0px')
    $('.about-main-degree1').css('width','80%')
    $('.about-main-degree1').css('z-index','2')
  
  
  })
    
}

$(document).ready(function(){
  if ($('.course-detail').length > 0 ) {
    var srolltofooterheight = ($(".upperfooter-section").offset().top) - ($(".upperfooter-section").height() ) - 545 
    if ($(window).width() >= 991) { 
      $(window).scroll(() => {
  
        if ($(window).scrollTop() >=  ($('.page-header').innerHeight())+40 && $(window).scrollTop() < srolltofooterheight)  {
          
            $('.course-detail').css('position','fixed')
            $('.course-detail').css('top','80px')
            $('.course-detail').css('bottom','auto')
        
        } else if ( $(window).scrollTop() > srolltofooterheight ) {
          console.log('ji')
            $('.course-detail').css('position','absolute')
            $('.course-detail').css('bottom','39px')
            $('.course-detail').css('top','auto')
        
        }else if ($(window).scrollTop() <=  ($('.page-header').innerHeight())+40) {
          $('.course-detail').css('position','static')
        }
      
      });
      
    }
  }

  if ($(".diploma").length > 0 ) {
    hover_degres()
  }

  
 if ($('#download_certificate').length > 0  ) {
    downloadCertificates();
 }

  if ( $('#download_image').length > 0   ){
      fileInputs()
  }



 
});

