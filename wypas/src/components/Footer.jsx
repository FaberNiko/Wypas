export default function Footer() {


    const currentYear = new Date().getFullYear()
    return (
        <div className="footer">
            <p class="footer__bottom-text"> Wypas Burger &copy; {currentYear} | Icons by <a href="https://icons8.com">Icons8</a></p>
        </div>
    )
}