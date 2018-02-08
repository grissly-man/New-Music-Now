'use strict';
/* global $ */

const generator = function() {
  return {
    handlePlayerWidget: function(trackId) {
      $('#song-view').html(`<p>Click the play button and check this out!</p><br>
      <iframe id="play-widget" src="https://open.spotify.com/embed?uri=spotify:track:${trackId}"
      frameborder="0" allowtransparency="true"></iframe>`);
    },
    postArtistInfo: function(relatedArtistData) {
      $('#artist-view').html(`<h2 class="w3-animate-left">We're glad you've enjoyed ${relatedArtistData.name}.</h2>
      <a href="${relatedArtistData.external_urls.spotify}" target="_blank">
      <img id='artist-photo' role="link" alt="image of artist" src='${relatedArtistData.images[1].url}'><br>
      <button type="button" class="button" id="spotify-link">Check them out on Spotify!</button>
      </a>
      <p>-or-</p>`);
    },
    noArtistFoundMessage: function() {
      $('#error-view').html(`<div class="w3-panel w3-pale-red">
      <h2>Oops!</h2>
      <p>We're unable to find that artist. Please click below to start over!</p>`);      
    },  
    initializePage: function() {  
      console.log('Initial View Loaded');
      if (!_token) {
        $('#selection-view').hide();
        $('#song-view').hide();
        $('#feedback').hide();
        $('#artist-view').hide();
        $('#restart-nav').hide();
      } else {
        $('#landing-view').hide();
        $('#feedback').hide();
        $('#artist-view').hide();
        $('#restart-nav').hide();
      }
    }

  };
}();

