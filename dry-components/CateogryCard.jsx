function CateogryCard({content, src}) {
    return (
    <div className="category-card d-flex flex-column p-4 rounded main-border align-items-center" xs={2}>
        <img src={src} width={56} height={56} alt="" />
        <span className="mt-4">{content}</span>
    </div>
    );
}

export default CateogryCard;