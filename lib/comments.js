'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here
function hideErrors(){
  $('span').hide();
}

function hideForm(){
  $('form').hide();
}

function addCommentListener(){
  $('#show-comment-form').on('click', function() {
    $('form').show();
  });
}

function cancelListener(){
  $('#cancel').on('click', function() {
    $('form').hide();
  });
}

function submitCommentListener(){

  function nameValidator(fullname){
    if (fullname.length > 2) {
      $('#com-name-error').hide();
      return true;
    } else {
      $('#com-name-error').show();
      return false;
    }
  }

  function emailValidator(email){
    var re = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/
    if (re.test(email)) {
      $('#com-email-error').hide();
      return true;
    } else {
      $('#com-email-error').show();
      return false;
    }
  }

  function commentValidator(comment){
    if (comment.length > 0) {
      $('#comment-error').hide();
      return true;
    } else {
      $('#comment-error').show();
      return false;
    }
  }

  function addComment(name, email, comment){
    $('#posts').after('<div class="newcomment">Other stuff I could add with more effort.</div>');
  }

  $('form').submit(function(){
    var name = $('#comment-name').val(),
        email = $('#com-email').val(),
        comment = $('#comment').val();
    if(nameValidator(name) && emailValidator(email) && commentValidator(comment)) {
      addComment(name, email, comment);
    } else {
      event.preventDefault();
    }
  });

}



