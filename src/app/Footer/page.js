export default function Footer() {
    return (
        <footer className="footer h-[2.6rem] flex items-center justify-center  font-semibold" style={{ backgroundColor: 'rgb(230 164 98)'}}>
          <p>&copy; {new Date().getFullYear()} NextRecipe. All rights reserved.</p>
        </footer>
    );
}