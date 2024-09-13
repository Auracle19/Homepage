    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            let menu = this.querySelector('.dropdown-menu');
            menu.style.display = 'block';
            setTimeout(function() {
                menu.style.opacity = '1';
                menu.style.transform = 'translateY(0)';
            }, 10); // slight delay to trigger transition
        });

        dropdown.addEventListener('mouseleave', function() {
            let menu = this.querySelector('.dropdown-menu');
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-10px)';
            setTimeout(function() {
                menu.style.display = 'none';
            }, 300); // match the transition duration
        });
    });
