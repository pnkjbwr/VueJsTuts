Vue.component('product',{
    template: `
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <!-- <h1>{{product}}</h1> -->
                <h1>{{title}}</h1>

                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory > 0 && inventory <= 10">Almost Sold Out</p>
                <p v-else :class="{outOfStock: !inStock}">Out Stock</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <p style="font-weight: bold;">Mouse Over Event</p>
                <div v-for="variant in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    v-bind:style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProdImage(variant.variantImage)">
                    <!-- <p >{{variant.variantColor}}</p> -->
                </div>

                <!-- If Else -->
                <button v-if="inStock" class="btn btn-success" v-on:click="addToCart">+ to Cart</button>
                <button v-if="inStock" class="btn btn-info" v-on:click="reduceToCart">- to Cart</button>
                <button v-else class="btn btn-danger" disabled>Sold Out</button>

                <!-- Showing Cart Values -->
                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>


                <hr>
                <h4>Demo of If Conditional Rendering</h4>
                <h5>In Chrome Console  // Try Changing Values</h5>
                <p>shoppingList.$data.inventory=0 <br>
                shoppingList.$data.inStock= false</p>

                <hr>

                <p>Data Binding on Forms Inputs</p>
                <div class="form-group">
                    <label for="exampleInputEmail1">Iventory Value</label>
                    <input type="number" v-model="inventory" class="form-control" >
                    <!-- <input type="text" v-model="inventory" class="form-control" > -->
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">In Stock</label>
                    <select v-model="inStock" class="form-control" id="exampleFormControlSelect1">
                        <option value="">Select One</option>
                        <option :value=true>true</option>
                        <option  :value=false>false</option>
                    </select>
                </div>
            </div>
        </div>
    `,
    data(){
        return {
            brand: 'VueJS Mastery',
            product: 'Socks',
            image: './assets/imgs/vmSocks-green-onWhite.jpg',
            inStock: true,
            inventory: 100,
            details: ["80% Cotton", "20% Polyester", "Gender-Neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/imgs/vmSocks-green-onWhite.jpg',
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: './assets/imgs/vmSocks-blue-onWhite.jpg',
                },
            ],
            cart: 0,
        }
    } ,
    methods: {

        //1st style of Declaring Method
        //This Method will Update Cart Value
        addToCart: function () {
            this.cart += 1
        },
        reduceToCart: function () {
            const cartValue = this.cart;
            if (cartValue > 0) {
                this.cart -= 1
            }

            alert('Already 0');
        },
        //2nd style of Declaring Method
        //This Method will Update Image Value
        updateProdImage(variantImage) {
            this.image = variantImage
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    },
})

var shoppingList = new Vue({
    el: '#app',  
})