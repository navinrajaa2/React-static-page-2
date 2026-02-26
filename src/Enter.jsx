export default function Entry({ img = { src: "", alt: "" }, title = "", country = "", googleMapsLink = "#",text=""}) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={img.src} alt={img.alt} />
            </div>
            <div>
                <span>{country}</span>
                <a href={googleMapsLink}>View on Google Maps</a>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            
        </article>
    )
}