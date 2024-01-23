import './Item.css'

export default function Item({heading1, heading2, button, image}) {
    return (
        <section>
            <div className='item' style={{backgroundImage: `url(${image})`}}>
                <div className='container'>
                    <div className='item-text'>
                        <h2>{heading1}</h2>
                        <h1>{heading2}</h1>
                    </div>
                    <div className='item-buttons'>
                        <button>{button}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}