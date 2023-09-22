
// Move beach ball with cursor
$(document).ready(function() {
    $(this).on("mousemove", function(e) {
      var x = e.pageX + -75;
      var y = e.pageY + -75;
      var el = $("#cursor");
      el.css('position', 'absolute');
      el.css("left", x);
      el.css("top", y);
    })
});

$('#sound-button').click(PlaySFX);

let isPaused = true;

function PlaySFX()
{
    let audioSource = $('#audio');
    const audio = new Audio("assets/Beach Noises.wav" );

    if (isPaused)
    {
        audio.play();
        $('#sound-button').text('PAUSE SFX');
    }

    else
    {
        audio.stop();
        $('#sound-button').text('PLAY SFX');
    }
}

$('#attractions-button').click(() => {
    $('#attractions').css({'left': '0'});
    setTimeout(ShowExit, 500);
});

$('#food-button').click(() => {
    $('#food').css({'bottom': '0'});
    setTimeout(ShowExit, 500);
});

$('#maps-button').click(() => {
    $('#maps').css({'right': '0'});
    setTimeout(ShowExit, 500);
});

$('#exit').click(() => {
    $('#attractions').css({'left': '-100%'});
    $('#food').css({'bottom': '-100%'});
    $('#maps').css({'right': '-100%'});
    RemoveExit();
});

function ShowExit()
{
    $('#exit').css({'display': 'flex'});
}

function RemoveExit()
{
    $('#exit').css({'display': 'none'});
}