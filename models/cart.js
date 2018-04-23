module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

/////////NAMBAH ATAU NGEADD
this.add = function(item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
        storedItem = this.items[id] = {item: item, qty: 0, price: 0};
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
};

////////// NGURANGI JUMLAH
this.reduceByOne = function(id) {
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price;

    if (this.items[id].qty <= 0) {
        delete this.items[id];
    }
};

this.removeItem = function(id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
};
///////////GENERATE ARRAY
this.generateArray = function() {
    var arr = [];
    for (var id in this.items) {
        arr.push(this.items[id]);
    }
    return arr;
};
////// Lihat Pesanan
this.JenisPesanan = function() {
    var arr2 = [];
    for (var id in this.items) {
        arr2.push(this.items[id].item.title+" x"+this.items[id].qty+" ");
    }
    return arr2;
}
};