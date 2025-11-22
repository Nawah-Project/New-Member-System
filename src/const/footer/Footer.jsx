import './footer.css'
export default function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div id='footer-gif'>
                    <img src="footer/footer.gif" alt="" />
                </div>
                <div className="footer-icons">
                    <a href="#" className="social-icon youtube"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#" className="social-icon instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="social-icon x"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" className="social-icon facebook"> <i className="fa-brands fa-facebook"></i></a>
                </div>

                <div className="footer-project">
                    <strong>Nawah Project</strong>
                </div>

                <div className="footer-copy">
                    © 2025 Nawah Project — جميع الحقوق والعلامات الخاصة بـ نواة محفوظة.
                </div>

                <div className="footer-links">
                    <a href="#">سياسة الخصوصية</a>
                    <a href="#">شروط الاستخدام</a>
                    <a href="#">تفضيلات ملفات تعريف الارتباط</a>
                </div>
            </footer>
        </>
    )
}