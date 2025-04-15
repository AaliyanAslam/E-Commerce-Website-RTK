import React from 'react'
import { useSelector   } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
const products = useSelector((state) => state.product);
const {id}= useParams()
console.log(id);

 const data =  products.data.products.find((p)=> p.id === parseInt(id));
 console.log(data);
// const data = products.data.products.find((p) => p.id === parseInt(id));
// console.log(data);
 
    return (
        <div className="max-w-screen-xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="flex justify-center">
                    <img
                        src={data.thumbnail}
                        alt={data.title}
                        className="w-72 h-96 object-contain border rounded-lg shadow-lg"
                    />
                </div>
                {/* Product Details */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        {data.title}
                    </h1>
                    {/* Price and Discount */}
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-green-500">${data.price}</span>
                        <span className="text-sm text-red-600 line-through">${(data.price / (100 - data.discountPercentage) * 100).toFixed(2)}</span> 
                        <span className="text-sm text-green-600">-{data.discountPercentage}% Off</span>
                    </div>
                    {/* Rating and Reviews */}
                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-gray-600">{data.rating} ({data.reviews.length} Reviews)</span>
                    </div>
                    {/* Description */}
                    <p className="text-gray-700 text-sm">
                        {data.description}
                    </p>
                    {/* Availability */}
                    <div className="text-sm text-gray-600">
                        <p>
                            <strong>Availability:</strong> {data.availabilityStatus} ({data.stock} left)
                        </p>
                        <p>
                            <strong>Minimum Order Quantity:</strong> 24
                        </p>
                    </div>
                    {/* Shipping Information */}
                    <p className="text-sm text-gray-600">
                        <strong>Shipping:</strong> Ships in 1 month
                    </p>
                    {/* Warranty */}
                    <p className="text-sm text-gray-600">
                        <strong>Warranty:</strong> {data.warrantyInformation}
                    </p>
                    {/* Return Policy */}
                    <p className="text-sm text-gray-600">
                        <strong>Return Policy:</strong> {data.returnPolicy}
                    </p>
                    {/* Barcode & QR Code */}
                    <div className="space-y-2">
                        <img
                            src="https://assets.dummyjson.com/public/qr-code.png"
                            alt="QR Code"
                            className="w-20 h-20 border rounded-md"
                        />
                        <p className="text-sm text-gray-600">
                            <strong>Barcode:</strong> {data.sku}
                        </p>
                    </div>
                    {/* Add to Cart Button */}
                    <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct