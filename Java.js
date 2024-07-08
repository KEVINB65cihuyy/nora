// Switch left,middle and right Hero BANNER
function switchBanner(name) {
    const banner = document.querySelector('#banner');
    if (!banner.classList.contains(name)) {
        banner.className = 'banner';
        banner.classList.add(name);
        // toggle reset button / tombol women,men,summer
        toggleResetBtn()
    }
    return;
    
}

// Reset Btn //
function resetBanner() {
    const banner = document.querySelector('#banner');
    banner.className = 'banner';
    toggleResetBtn()
}

// toggle reset button //
function toggleResetBtn(){
    const resetBtn = document.querySelector('.reset')
    resetBtn.classList.toggle('active');
}

// konten slider CUYY //
