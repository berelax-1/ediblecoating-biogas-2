document.addEventListener('DOMContentLoaded', () => {

    // ===== SISTEM NAVIGASI HALAMAN UTAMA =====
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.feature-card');
    const backButtons = document.querySelectorAll('.btn-back');

    // Fungsi untuk menampilkan halaman berdasarkan ID
    function showPage(pageId) {
        // Sembunyikan semua halaman
        pages.forEach(page => {
            page.classList.remove('active');
        });
        // Tampilkan halaman yang diminta
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    // Tambahkan event listener untuk setiap tombol fitur di home
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Tambahkan event listener untuk semua tombol "Kembali"
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showPage('page-home');
        });
    });

    // ===== FUNGSI TAB UNTUK HALAMAN EDIBLE COATING =====
    const tabButtons = document.querySelectorAll('.sub-nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Atur status aktif/non-aktif tombol
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Atur status aktif/non-aktif konten
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // ===== FUNGSI SIMULASI CHATBOT SEDERHANA =====
    const chatWindow = document.querySelector('.chat-window');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');

    function sendChatMessage() {
        const messageText = chatInput.value;
        if (messageText.trim() === "") return;

        // 1. Buat bubble chat pengguna
        const userBubble = document.createElement('div');
        userBubble.classList.add('chat-bubble', 'user');
        userBubble.textContent = messageText;
        chatWindow.appendChild(userBubble);

        // 2. Kosongkan input
        chatInput.value = "";

        // 3. Gulir ke paling bawah
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // 4. Simulasi jawaban bot
        setTimeout(() => {
            const botBubble = document.createElement('div');
            botBubble.classList.add('chat-bubble', 'bot');
            botBubble.textContent = "Ini adalah jawaban otomatis. Saya sedang memproses permintaan Anda tentang '" + messageText + "'.";
            chatWindow.appendChild(botBubble);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }

    // Kirim pesan saat tombol send diklik
    sendChatBtn.addEventListener('click', sendChatMessage);
    
    // Kirim pesan saat menekan "Enter"
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

});