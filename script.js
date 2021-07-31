const player = document.getElementsByClassName('NFPlayer')[0];
document.getElementsByClassName('AkiraPlayer')[0].insertAdjacentHTML('afterbegin', `<div id="grid"><video class="video" autoplay playsinline muted loop src="${chrome.extension.getURL('/videos/video-1.mp4')}"></video><video class="video" autoplay playsinline muted loop src="${chrome.extension.getURL('/videos/video-2.mp4')}"></video><video class="video" autoplay playsinline muted loop src="${chrome.extension.getURL('/videos/video-3.mp4')}"></video></div>`);
player.style.width = "50%";
player.style.height = "50%";
player.style.position = "relative";
document.getElementById('grid').appendChild(player);