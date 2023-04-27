import './style.css';
let product = ()=>{
    return (
        <>
            <div class="container">
                <div class="imgContainer"></div>
                <div class="bodyConteiner">
                    <div class="textContainer">
                        <h1 class="textContainer__title">perfume</h1>
                        <h2 class="textContainer__subtitle">Gabrielle Essence Eau De Parfum</h2>
                        <p class="textContainer__paragraph">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                        <div class="textContainer__price">
                            <p class="textContainer__price--actual">$149.99</p>
                            <p class="textContainer__price--before">$169.99</p>
                        </div>
                        <button class="textContainer__chart"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default product;