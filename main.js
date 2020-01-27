/**
 * the View and Controller are in the same file because I do not want to load
 * separate files or use a bundler.
 */

(function () {
  let cssPreviewBox = document.querySelector('#preview');

  let borderRadiusForm = document.querySelector('#form');
  let cssPreview = document.querySelector('#cssPreview');

  let borderRadiusValues = [];

  borderRadiusForm.addEventListener('keyup', function displayAndAlterCssProperties(ev) {
    if (ev.target.id === 'tl') {
      cssPreviewBox.style.borderTopLeftRadius = ev.target.value + 'px';
      borderRadiusValues[0] = 'border-top-left-radius: ' + ev.target.value + 'px';

    } else if (ev.target.id === 'tr') {
      cssPreviewBox.style.borderTopRightRadius = ev.target.value + 'px';
      borderRadiusValues[1] = 'border-top-right-radius: ' + ev.target.value + 'px';

    } else if (ev.target.id === 'bl') {
      cssPreviewBox.style.borderBottomLeftRadius = ev.target.value + 'px';
      borderRadiusValues[2] = 'border-bottom-right-radius: ' + ev.target.value + 'px';

    } else if (ev.target.id === 'br') {
      cssPreviewBox.style.borderBottomRightRadius = ev.target.value + 'px';
      borderRadiusValues[3] = 'border-bottom-left-radius: ' + ev.target.value + 'px';
    }

    cssPreview.innerHTML = '';

    borderRadiusValues.forEach(function (borderValue) {
      let regexExpToMatchNumber = RegExp(/[1-9]/);

      if (regexExpToMatchNumber.test(borderValue)) {
        let createP = document.createElement('p');
        createP.textContent = borderValue;

        cssPreview.appendChild(createP);
      }

    });

  });
})();