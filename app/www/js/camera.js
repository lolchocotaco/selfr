var server_url = "",
  pictureSource,
  destinationType;

var camera = {
  init : function () {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
  },

  onPhotoDataSuccess: function (imageData) {
    var smallImage = document.getElementById('smallImage');

    smallImage.style.display = 'block';

    smallImage.src = "data:image/jpeg;base64," + imageData;
    app.sendImage(imageData);
  },

  onPhotoURISuccess : function (imageURI) {
    var largeImage = document.getElementById('largeImage');

    largeImage.style.display = 'block';
    largeImage.src = imageURI;
  },

  capturePhoto : function() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: destinationType.DATA_URL });
  },
  sendImage: function(imageData) {
    $.ajax({
      url: global_siteurl+'/image',
      data: {
        img: imageData
      },
      dataType: 'json',
      type: 'post',
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: function (retval) {
        $('#sendStatus').text('Sent');
      }
    });
  }
};



function capturePhoto() {
  // Take picture using device camera and retrieve image as base64-encoded string
}

// A button will call this function
//
function capturePhotoEdit() {
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
                              destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                              destinationType: destinationType.FILE_URI,
                              sourceType: source });
}

// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}
