function CryptoCard({ symbol, name, price, change }) {
return (
<div className="CryptoCard">
    <div className="symbol">{symbol}</div>
    <div className="name">{name}</div>
    <div className="price">${price}</div>
    <div className="change">{change}%</div>
</div>
);
}
//informacje o pojedynczej kryptowalucie