import logo from '@/images/logo.jpg'

export default function Navbar(){
    return (
        <div className="flex justify-between items-center p-10  font-bold h-20 text-xl" style={{ backgroundColor: 'rgb(230 164 98)'}}>
            <div className='flex'>
            <img src={logo.src} alt="NextRecipe Logo" className="h-12 w-12 mr-4" />
            <h1 className="text-3xl mt-1">NextRecipe</h1>
            </div>
            <nav>
                <ul className="flex space-x-4 gap-4 text-xl">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/recipe-list">Recipes</a>
                    </li>
                    <li>
                        <a>Sign In</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}